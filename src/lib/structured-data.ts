export function buildFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Medela Learning Support",
    url: "https://medelalearning.com",
    logo: "https://assets.ycodeapp.com/assets/app95680/Images/published/medela_block_logo_white_bg-removebg-preview-twjjmz7hcs.webp",
    description:
      "Specialist one-to-one educational therapy for children with dyslexia, dyscalculia, ADHD, and learning differences in Lisbon and across Portugal.",
    email: "rebecca@medelalearning.com",
    areaServed: ["Lisbon", "Cascais", "Sintra", "Portugal"],
    founder: [
      {
        "@type": "Person",
        name: "Rebecca Bland",
        jobTitle: "Educational Therapist & Founder",
      },
      {
        "@type": "Person",
        name: "Jamille",
        jobTitle: "Psychopedagogy Specialist & Co-founder",
      },
    ],
    sameAs: ["https://medelalearning.com"],
  };
}
