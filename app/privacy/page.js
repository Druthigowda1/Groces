export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm prose prose-brand">
        <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your information.</p>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Information We Collect</h3>
        <p>We only collect information necessary to provide our services, such as your name, delivery address, and contact details.</p>
        
        <h3 className="text-lg font-bold mt-6 mb-2">How We Use It</h3>
        <p>Your information is used strictly for order fulfillment, customer support, and improving your browsing experience. We do not sell your personal data to third parties.</p>

        <h3 className="text-lg font-bold mt-6 mb-2">Data Security</h3>
        <p>We implement robust security measures to ensure your data is protected against unauthorized access.</p>
      </div>
    </div>
  );
}
