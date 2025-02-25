function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Petroleum Distribution</h3>
            <p className="text-gray-600">Efficient distribution of petroleum products across Nepal</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Quality Testing</h3>
            <p className="text-gray-600">Regular quality checks of petroleum products</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Storage Facilities</h3>
            <p className="text-gray-600">State-of-the-art storage facilities across major cities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;