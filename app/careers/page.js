export default function CareersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Careers at Grocery Hub</h1>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
        <h2 className="text-xl font-bold mb-4">Join Our Growing Team!</h2>
        <p className="text-gray-600 mb-8">We are always looking for passionate individuals to help us deliver the best grocery experience.</p>
        
        <div className="p-6 bg-brand-light rounded-xl inline-block">
          <p className="font-semibold text-brand-dark mb-2">Currently no open positions</p>
          <p className="text-sm text-gray-600">Check back later or send your resume to careers@groceryhub.example.com</p>
        </div>
      </div>
    </div>
  );
}
