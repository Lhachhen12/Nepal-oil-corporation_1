import { useState } from 'react';
import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';
import image from '../assets/img12.webp';
import image2 from '../assets/industries.jpeg';

function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsItems = [
    {
      id: 1,
      title: "Price Update Notice",
      description: "Latest adjustments in petroleum product prices across all regions of Nepal",
      fullContent: "The Nepal Oil Corporation has announced a new pricing structure for petroleum products effective from February 25, 2025. Petrol prices have been adjusted to NPR 165 per liter, while diesel remains at NPR 155 per liter. This adjustment comes after reviewing international market prices and transportation costs.\n\nThe price adjustment aims to maintain the financial stability of the corporation while ensuring fair prices for consumers. The government has also announced subsidies for public transportation to minimize the impact on daily commuters.\n\nConsumers can check updated prices at their local NOC distribution centers or on our official website.",
      date: "February 25, 2025",
      author: "NOC Administration",
      category: "Price Updates",
      image: image,
    },
    {
      id: 2,
      title: "New Distribution Center",
      description: "Opening of new state-of-the-art distribution center in Pokhara",
      fullContent: "On February 15, 2025, NOC proudly inaugurated its state-of-the-art distribution center in Pokhara, enhancing fuel accessibility in Western Nepal. The facility spans over 10 acres and includes modern storage tanks with a combined capacity of 4.2 million liters.\n\nThe center is equipped with advanced safety systems, automated dispensing mechanisms, and digital inventory management. This expansion is expected to reduce delivery times by up to 40% in the surrounding areas and create approximately 120 new jobs.\n\nThe inauguration ceremony was attended by government officials, local representatives, and NOC executives, highlighting the importance of this infrastructure development for the region's economic growth.",
      date: "February 15, 2025",
      author: "Regional Director",
      category: "Infrastructure",
      image: image2,
    },
    {
      id: 3,
      title: "Environmental Initiative Launch",
      description: "NOC launches ambitious green energy program across major facilities",
      fullContent: "Nepal Oil Corporation has officially launched its 'Green Energy Initiative' aimed at reducing the carbon footprint of its operations nationwide. The program includes installation of solar panels at major depots, electric vehicle charging stations at select outlets, and a commitment to achieve carbon neutrality by 2030.\n\nThe first phase of this initiative will see the installation of 2.5 MW solar capacity across five major facilities, reducing reliance on the grid and lowering operational costs. Additionally, NOC will introduce biodegradable packaging for lubricants and implement water recycling systems at all washing facilities.\n\nThis initiative aligns with Nepal's national commitment to sustainable development and demonstrates NOC's leadership in environmental stewardship within the petroleum sector.",
      date: "February 10, 2025",
      author: "Environmental Division",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Community Support Program Expansion",
      description: "NOC extends assistance to remote villages with limited access to petroleum products",
      fullContent: "Nepal Oil Corporation has expanded its Community Support Program to 15 new remote villages, ensuring consistent supply of cooking fuel and other petroleum products to communities with limited accessibility. The initiative includes subsidized transportation and the establishment of small distribution centers in hard-to-reach areas.\n\nThe program will benefit approximately 25,000 residents who previously had to travel significant distances to access essential fuels. NOC has partnered with local cooperatives to manage these distribution points, creating employment opportunities while ensuring reliable supply chains.\n\nThis expansion reflects NOC's commitment to its social responsibility and the government's policy of ensuring equitable access to essential services across all geographical regions of Nepal.",
      date: "February 5, 2025",
      author: "CSR Department",
      category: "Community Outreach",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // Featured news item
  const featuredNews = newsItems[0];
  // Rest of the news items
  const regularNews = newsItems.slice(1);

  return (
    <div className="bg-yellow-50 py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Latest News & Updates</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about our recent initiatives, price adjustments, and community programs across Nepal
          </p>
        </div>

        {/* Featured News */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 transform hover:shadow-xl transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title} 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center text-yellow-600 text-sm mb-3">
                <FaCalendarAlt className="mr-2" />
                <span>{featuredNews.date}</span>
                <span className="mx-2">|</span>
                <FaUser className="mr-2" />
                <span>{featuredNews.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{featuredNews.title}</h2>
              <p className="text-gray-600 mb-6">{featuredNews.description}</p>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularNews.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;