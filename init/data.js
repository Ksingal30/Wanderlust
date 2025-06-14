const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1500,
      location: "Malibu",
      country: "United States"
    },
    {
      title: "Modern Loft in Downtown",
      description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "New York City",
      country: "United States"
    },
    {
      title: "Mountain Retreat",
      description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1000,
      location: "Aspen",
      country: "United States"
    },
    {
      title: "Historic Villa in Tuscany",
      description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 2500,
      location: "Florence",
      country: "Italy"
    },
    {
      title: "Secluded Treehouse Getaway",
      description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 800,
      location: "Portland",
      country: "United States"
    },
    {
      title: "Safari Lodge in the Serengeti",
      description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania"
    },
    {
      title: "Luxury Villa in the Maldives",
      description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 6000,
      location: "Maldives",
      country: "Maldives"
    },
    {
      title: "Desert Oasis in Dubai",
      description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates"
    },
    {
        title: "Cliffside Glass Villa",
        description: "Stay in a luxurious glass villa perched on a cliff with panoramic ocean views.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        price: 8500,
        location: "Santorini",
        country: "Greece"
      },
      {
        title: "Underground Cave Suite",
        description: "Experience a unique stay in a beautifully designed underground cave suite.",
        image: "https://images.unsplash.com/photo-1610913260040-5b4079ab3ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        price: 4200,
        location: "Cappadocia",
        country: "Turkey"
      },
      {
        title: "Floating Water Villa",
        description: "Relax in a floating villa surrounded by crystal-clear waters and coral reefs.",
        image: "https://images.unsplash.com/photo-1600585154780-8496cdfe10d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        price: 9500,
        location: "Maldives",
        country: "Maldives"
      },
      {
        title: "Snowy Mountain Cabin",
        description: "Cozy up in a rustic cabin with snowy mountain views and a private hot tub.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        price: 1600,
        location: "Whistler",
        country: "Canada"
      },
      {
        title: "Rainforest Treehouse",
        description: "Immerse yourself in nature with this secluded treehouse in a lush rainforest.",
        image: "https://images.unsplash.com/photo-1581320544288-792a29c9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        price: 2300,
        location: "Amazon Rainforest",
        country: "Brazil"
      },
      {
        title: "Desert Dome Retreat",
        description: "Stay in a modern geodesic dome under the starry desert sky.",
        image: "https://images.unsplash.com/photo-1598387847270-fae45ef0f8d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        price: 2700,
        location: "Sahara Desert",
        country: "Morocco"
      },
      {
        title: "Island Bamboo Bungalow",
        description: "Unplug in a handcrafted bamboo bungalow on a remote island.",
        image: "https://images.unsplash.com/photo-1542038784456-15cdb37b53d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        price: 3100,
        location: "Palawan",
        country: "Philippines"
      },
      {
        title: "Arctic Igloo Escape",
        description: "Watch the Northern Lights from a warm and cozy glass igloo.",
        image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        price: 5000,
        location: "Lapland",
        country: "Finland"
      },
  ];
  
module.exports = { data: sampleListings };