import type { Metadata } from "next";
import AdminHeader from "./AdminHeader";

export const metadata: Metadata = {
  title: "Blog Admin — Medela Learning",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <AdminHeader />
      <main className="max-w-4xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
