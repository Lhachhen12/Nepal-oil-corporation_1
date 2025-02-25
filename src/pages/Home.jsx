import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image from '../assets/OIP.jpeg';
import image2 from '../assets/img12.webp';

function Home() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const newsItems = [
    {
      title: "Fuel Price Update",
      description: "Latest adjustment in petroleum product prices across Nepal",
      content: "The Nepal Oil Corporation has announced new fuel prices effective immediately. Petrol prices have been adjusted by Rs. 2 per liter, while diesel and kerosene see a reduction of Rs. 1.5 per liter. This adjustment comes in response to international market fluctuations.",
      image: image,
    },
    {
      title: "New Distribution Center",
      description: "Opening of new distribution center in Pokhara",
      content: "A state-of-the-art distribution center has been inaugurated in Pokhara to better serve the western regions of Nepal. The facility features modern storage tanks with a capacity of 4.2 million liters and advanced safety systems. This expansion will reduce delivery times by up to 40% for surrounding areas.",
      image: "https://images.unsplash.com/photo-1579033385971-a7bc8c6f8c64?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Environmental Initiative",
      description: "NOC launches green energy program",
      content: "The Nepal Oil Corporation has launched its ambitious Green Energy Initiative aimed at reducing carbon footprint. The program includes solar installations at major depots, electric vehicle charging stations, and a commitment to achieve carbon neutrality by 2030.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Community Support Program",
      description: "NOC extends assistance to remote villages",
      content: "The Nepal Oil Corporation has expanded its Community Support Program to 15 new remote villages, ensuring consistent supply of cooking fuel and other petroleum products. The initiative includes subsidized transportation and special distribution centers in hard-to-reach areas.",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Technology Upgrade",
      description: "Digital transformation of fuel stations nationwide",
      content: "NOC has begun implementing a comprehensive digital transformation across all its stations. The new system includes real-time inventory tracking, digital payment solutions, and an app for customers to find the nearest stations with available fuel stocks.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const features = [
    {
      icon: "🚛",
      title: "Nationwide Distribution",
      description: "Our extensive network ensures efficient delivery across all seven provinces of Nepal, with strategically located depots to minimize transportation time and costs."
    },
    {
      icon: "⚡",
      title: "Quality Assurance",
      description: "We implement rigorous quality control measures at every stage of our supply chain, from import to end-user delivery, guaranteeing product integrity."
    },
    {
      icon: "🤝",
      title: "Community Partnership",
      description: "We work closely with local communities to understand their needs and develop tailored solutions for effective energy distribution."
    }
  ];

  const openNewsPopup = (news) => {
    setSelectedNews(news);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
              Fueling Nepal's Progress
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Ensuring reliable and efficient distribution of petroleum products across the nation with a commitment to excellence, sustainability, and national development.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setShowPopup(true)} 
                className="btn bg-white text-yellow-600 hover:bg-yellow-100 px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
              >
                Learn More
              </button>
              <Link to="/services">
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-6 py-3 rounded-lg font-bold transition-all">
                Our Services
             </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="relative z-10 bg-white p-2 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={image2} 
                alt="Fuel Distribution" 
                className="rounded w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-yellow-300 rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-300 rounded-full opacity-50 z-0"></div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-yellow-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-yellow-500 text-4xl font-bold mb-2">7</div>
              <div className="text-gray-700">Provinces Covered</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-yellow-500 text-4xl font-bold mb-2">45+</div>
              <div className="text-gray-700">Distribution Centers</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-yellow-500 text-4xl font-bold mb-2">1.2M</div>
              <div className="text-gray-700">Customers Served</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-yellow-500 text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-700">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Slider Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Latest Updates</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Stay informed about our recent initiatives, price adjustments, and community programs across Nepal</p>
          
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform hover:translate-y-[-5px] transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button 
                      onClick={() => openNewsPopup(item)}
                      className="text-yellow-600 font-medium hover:text-yellow-700 flex items-center"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Commitments</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Delivering excellence through our core values and operational strengths</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl text-yellow-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Popup */}
      {showPopup && selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <button 
                onClick={closePopup}
                className="absolute top-3 right-3 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{selectedNews.title}</h3>
              <p className="text-gray-600 italic mb-4">{selectedNews.description}</p>
              <div className="text-gray-700">
                {selectedNews.content}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button 
                  onClick={closePopup}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* General Popup for Learn More */}
      {showPopup && !selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">About Nepal Oil Corporation</h3>
                <button 
                  onClick={closePopup}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="text-gray-700">
                <p className="mb-4">
                  Nepal Oil Corporation (NOC) is the state-owned trading company of Nepal that imports, stores and distributes petroleum products in the country. Established in 1970, NOC plays a crucial role in ensuring energy security across Nepal.
                </p>
                <p className="mb-4">
                  Our mission is to ensure reliable, efficient, and environmentally responsible distribution of high-quality petroleum products across Nepal, contributing to the nation's economic development and improving quality of life for all citizens.
                </p>
                <p className="mb-4">
                  With a nationwide network of storage facilities, distribution centers, and retail outlets, we're committed to maintaining supply chain integrity even in challenging geographical terrains and weather conditions.
                </p>
                <p>
                  Our vision is to transform into a modern, efficient, and customer-centric organization that leads Nepal's transition towards sustainable energy solutions while ensuring energy security for generations to come.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button 
                  onClick={closePopup}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;