function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6">
            Nepal Oil Corporation (NOC) is the state-owned trading enterprise of Nepal that imports, stores and distributes various petroleum products in the country.
          </p>
          <p className="text-gray-600 mb-6">
            Established in 1970, NOC has been serving the nation by ensuring smooth supply of petroleum products across the country.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To ensure reliable and efficient distribution of quality petroleum products across Nepal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading petroleum company in Nepal, known for excellence in service and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;