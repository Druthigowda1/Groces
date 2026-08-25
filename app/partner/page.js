export default function PartnerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Partner With Us</h1>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Are you a supplier or farmer?</h2>
        <p className="text-gray-600 mb-6">We are always looking to expand our network of local farmers and high-quality product suppliers.</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company / Farm Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary bg-white">
              <option>Fresh Produce</option>
              <option>Dairy Products</option>
              <option>Packaged Goods</option>
              <option>Other</option>
            </select>
          </div>
          <button type="button" className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-brand-dark transition-colors">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
