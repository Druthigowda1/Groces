export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm prose prose-brand">
        <p className="text-lg text-gray-700 font-medium mb-6">Grocery Hub was founded with a simple mission: to make quality groceries accessible to everyone.</p>
        
        <p>We believe that you shouldn't have to choose between quality and affordability. By working directly with local farmers and trusted brands, we ensure that every product on our shelves meets our high standards.</p>
        
        <h3 className="text-lg font-bold mt-8 mb-4">Our Values</h3>
        <ul className="space-y-4">
          <li><strong>Quality First:</strong> We never compromise on the freshness of our produce.</li>
          <li><strong>Customer Centric:</strong> Your satisfaction is our primary goal.</li>
          <li><strong>Sustainability:</strong> We actively work to reduce our carbon footprint through eco-friendly packaging and optimized delivery routes.</li>
        </ul>
      </div>
    </div>
  );
}
