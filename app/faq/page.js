export default function FAQPage() {
  const faqs = [
    { q: "Do you deliver to my area?", a: "We deliver to most major cities. You can check availability on the product pages." },
    { q: "What are your delivery hours?", a: "We deliver from 8 AM to 10 PM, 7 days a week." },
    { q: "Are the products fresh?", a: "Yes, we source our fruits and vegetables directly from local farms daily." },
    { q: "How do I return an item?", a: "You can request a return from your account within 48 hours of delivery." }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
