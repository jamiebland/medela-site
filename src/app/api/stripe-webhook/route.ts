import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY!;

// Aldeia — Workshop Alerts group ID (find in MailerLite → Subscribers → Groups → click group → copy ID from URL)
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_WORKSHOP_GROUP_ID!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name ?? "";

    if (!email) {
      console.warn("Stripe webhook: checkout.session.completed with no customer email");
      return NextResponse.json({ received: true });
    }

    const [firstName, ...rest] = name.split(" ");
    const lastName = rest.join(" ");

    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: {
          name: firstName,
          last_name: lastName,
        },
        groups: [MAILERLITE_GROUP_ID],
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("MailerLite subscriber add failed:", error);
      // Still return 200 to Stripe so it doesn't retry — log and investigate separately
    } else {
      console.log(`Added ${email} to MailerLite Workshop Alerts group`);
    }
  }

  return NextResponse.json({ received: true });
}
