import {
  TourPackage,
  Vehicle,
  Hotel,
  Testimonial,
  GalleryImage,
} from "../types";

export const packages: TourPackage[] = [
  {
    id: 1,
    name: "Shirdi Darshan",
    slug: "shirdi-darshan",
    category: "spiritual",
    shortDesc: "Complete Sai Baba pilgrimage experience from Shirdi.",
    description:
      "Embark on a divine journey to Shirdi, the holy abode of Sai Baba. Visit the sacred Samadhi Mandir, Dwarkamai, Chavadi and more. Our experienced guides ensure a spiritually enriching experience.",
    totalKm: 200,
    duration: "2 Days / 1 Night",
    nights: 1,
    basePrice: 2500,
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    ],
    rating: 4.9,
    reviewCount: 387,
    highlights: [
      "Sai Baba Samadhi Mandir",
      "Dwarkamai Masjid",
      "Chavadi",
      "Gurusthan",
      "Lendi Garden",
    ],
    highlightPlaces: [
      {
        name: "Sai Baba Samadhi Mandir",
        lat: 19.7662,
        lng: 74.4776,
        image:
          "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&q=80",
        description: "The sacred shrine housing Sai Baba's marble idol",
      },
      {
        name: "Dwarkamai Masjid",
        lat: 19.7658,
        lng: 74.4779,
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80",
        description: "The mosque where Sai Baba spent most of his life",
      },
      {
        name: "Chavadi",
        lat: 19.766,
        lng: 74.4773,
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80",
        description: "Where Sai Baba slept on alternate nights",
      },
      {
        name: "Gurusthan",
        lat: 19.7663,
        lng: 74.4775,
        image:
          "https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=400&q=80",
        description: "The spot where Sai Baba was first seen as a young lad",
      },
      {
        name: "Lendi Garden",
        lat: 19.7669,
        lng: 74.4792,
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
        description: "Sacred garden maintained by Sai Baba himself",
      },
    ],
    inclusions: ["Pickup & Drop", "Guided Tour", "Aarti Darshan Pass"],
    exclusions: ["Personal expenses", "Special Darshan tickets"],
    isReligious: true,
    artiTimings: [
      {
        session: "Morning",
        time: "4:30 AM",
        description: "Kakad Aarti – First aarti of the day",
      },
      {
        session: "Afternoon",
        time: "12:00 PM",
        description: "Madhyanha Aarti – Mid-day aarti",
      },
      {
        session: "Evening",
        time: "6:00 PM",
        description: "Dhoop Aarti – Evening aarti",
      },
      {
        session: "Night",
        time: "10:30 PM",
        description: "Shej Aarti – Night aarti before bed",
      },
    ],
    isTrending: true,
    isMostVisited: true,
    isSpecial: false,
    location: "Shirdi, Maharashtra",
    country: "India",
    badge: "Most Popular",
  },
  {
    id: 2,
    name: "Trimbakeshwar Jyotirlinga",
    slug: "trimbakeshwar-jyotirlinga",
    category: "spiritual",
    shortDesc: "Visit one of the 12 sacred Jyotirlingas of Lord Shiva.",
    description:
      "Trimbakeshwar is one of the 12 Jyotirlingas of Lord Shiva, located near Nashik. The temple is uniquely built with three lingams representing Brahma, Vishnu and Shiva.",
    totalKm: 280,
    duration: "2 Days / 1 Night",
    nights: 1,
    basePrice: 3000,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
    ],
    rating: 4.8,
    reviewCount: 221,
    highlights: [
      "Trimbakeshwar Temple",
      "Brahmagiri Mountain",
      "Godavari River Origin",
      "Kushavart Kund",
    ],
    highlightPlaces: [
      {
        name: "Trimbakeshwar Temple",
        lat: 19.9331,
        lng: 73.5281,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
        description: "One of 12 sacred Jyotirlingas of Lord Shiva",
      },
      {
        name: "Brahmagiri Mountain",
        lat: 19.9405,
        lng: 73.5353,
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
        description: "Mountain trekking spot with divine significance",
      },
      {
        name: "Godavari River Origin",
        lat: 19.945,
        lng: 73.538,
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
        description: "Source of the holy Godavari river",
      },
      {
        name: "Kushavart Kund",
        lat: 19.9335,
        lng: 73.5285,
        image:
          "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80",
        description: "Sacred bathing kund for spiritual purification",
      },
    ],
    inclusions: ["Pickup & Drop", "Guided Temple Tour", "Prasad"],
    exclusions: ["Puja material", "Special Abhishek"],
    isReligious: true,
    artiTimings: [
      {
        session: "Morning",
        time: "5:30 AM",
        description: "Pratah Aarti – Morning prayer",
      },
      { session: "Afternoon", time: "12:00 PM", description: "Madhyanha Puja" },
      {
        session: "Evening",
        time: "7:00 PM",
        description: "Sandhya Aarti – Evening prayer",
      },
      {
        session: "Night",
        time: "9:00 PM",
        description: "Shej Aarti – Night prayer",
      },
    ],
    isTrending: true,
    isMostVisited: false,
    isSpecial: true,
    location: "Trimbakeshwar, Nashik",
    country: "India",
    badge: "Jyotirlinga",
  },
  {
    id: 3,
    name: "Nashik Darshan",
    slug: "nashik-darshan",
    category: "spiritual",
    shortDesc: "Explore the holy city of Nashik and its ancient temples.",
    description:
      "Nashik, the city of grapes and temples, is a major pilgrimage destination. Visit Kalaram Temple, Saptashrungi, Ramkund and other sacred sites on the banks of the holy Godavari river.",
    totalKm: 120,
    duration: "1 Day",
    nights: 0,
    basePrice: 1500,
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
    ],
    rating: 4.7,
    reviewCount: 198,
    highlights: [
      "Kalaram Temple",
      "Ramkund Ghat",
      "Saptashrungi Devi",
      "Panchavati",
      "Sita Gufa",
    ],
    highlightPlaces: [
      {
        name: "Kalaram Temple",
        lat: 19.9975,
        lng: 73.7898,
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80",
        description: "Famous black-idol Ram temple from the 18th century",
      },
      {
        name: "Ramkund Ghat",
        lat: 20.0011,
        lng: 73.7831,
        image:
          "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80",
        description: "Sacred bathing ghat on the Godavari river",
      },
      {
        name: "Saptashrungi Devi",
        lat: 20.5825,
        lng: 73.967,
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80",
        description: "Powerful Goddess temple on seven-peaked mountain",
      },
      {
        name: "Panchavati",
        lat: 20.001,
        lng: 73.784,
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
        description: "Ancient forest where Lord Ram spent his exile",
      },
      {
        name: "Sita Gufa",
        lat: 20.0004,
        lng: 73.7836,
        image:
          "https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=400&q=80",
        description: "Cave where Goddess Sita rested during the exile",
      },
    ],
    inclusions: ["AC Vehicle", "Guide", "Entrance Fees"],
    exclusions: ["Meals", "Personal expenses"],
    isReligious: true,
    artiTimings: [
      {
        session: "Morning",
        time: "5:00 AM",
        description: "Mangal Aarti at Kalaram Temple",
      },
      {
        session: "Afternoon",
        time: "12:30 PM",
        description: "Madhyanha Aarti",
      },
      {
        session: "Evening",
        time: "6:30 PM",
        description: "Sandhya Aarti at Ramkund",
      },
    ],
    isTrending: false,
    isMostVisited: true,
    isSpecial: false,
    location: "Nashik, Maharashtra",
    country: "India",
    badge: null,
  },
  {
    id: 4,
    name: "Jyotirlinga Darshan Circuit",
    slug: "jyotirlinga-circuit",
    category: "spiritual",
    shortDesc: "Grand pilgrimage covering 6 Jyotirlingas in Maharashtra.",
    description:
      "Experience the ultimate spiritual journey covering Trimbakeshwar, Bhimashankar, Aundha Nagnath, Parli Vaijyanath, Grishneshwar, and more Jyotirlingas in a single comprehensive tour.",
    totalKm: 1800,
    duration: "7 Days / 6 Nights",
    nights: 6,
    basePrice: 12000,
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    ],
    rating: 4.9,
    reviewCount: 154,
    highlights: [
      "Trimbakeshwar",
      "Bhimashankar",
      "Aundha Nagnath",
      "Parli Vaijyanath",
      "Grishneshwar",
    ],
    highlightPlaces: [
      {
        name: "Trimbakeshwar",
        lat: 19.9331,
        lng: 73.5281,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
        description: "3rd Jyotirlinga – Trimbakeshwar, Nashik",
      },
      {
        name: "Bhimashankar",
        lat: 19.0723,
        lng: 73.5356,
        image:
          "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&q=80",
        description: "6th Jyotirlinga set in dense forest of Western Ghats",
      },
      {
        name: "Aundha Nagnath",
        lat: 18.8571,
        lng: 76.5644,
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80",
        description: "Ancient 8th Jyotirlinga in Hingoli district",
      },
      {
        name: "Parli Vaijyanath",
        lat: 18.8543,
        lng: 76.5344,
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80",
        description: "9th Jyotirlinga in Beed district",
      },
      {
        name: "Grishneshwar",
        lat: 20.024,
        lng: 75.1792,
        image:
          "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&q=80",
        description: "12th and last Jyotirlinga near Ellora Caves",
      },
    ],
    inclusions: [
      "Hotel Stay (6 Nights)",
      "Breakfast & Dinner",
      "AC Vehicle",
      "Guide",
    ],
    exclusions: ["Puja expenses", "Airfare"],
    isReligious: true,
    artiTimings: [
      {
        session: "Morning",
        time: "5:00–6:00 AM",
        description: "Morning Aarti at each temple",
      },
      {
        session: "Evening",
        time: "6:00–7:30 PM",
        description: "Evening Aarti at each temple",
      },
    ],
    isTrending: false,
    isMostVisited: false,
    isSpecial: true,
    location: "Maharashtra Circuit",
    country: "India",
    badge: "Special Tour",
  },
  {
    id: 5,
    name: "Mumbai Darshan",
    slug: "mumbai-darshan",
    category: "holiday",
    shortDesc: "Explore the city of dreams – Mumbai's iconic landmarks.",
    description:
      "Discover the vibrant city of Mumbai – from the iconic Gateway of India to the Siddhivinayak Temple, Marine Drive, and Haji Ali Dargah. A perfect blend of spiritual and city tourism.",
    totalKm: 350,
    duration: "2 Days / 1 Night",
    nights: 1,
    basePrice: 3500,
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80",
    ],
    rating: 4.6,
    reviewCount: 312,
    highlights: [
      "Gateway of India",
      "Siddhivinayak Temple",
      "Marine Drive",
      "Haji Ali Dargah",
      "Elephanta Caves",
    ],
    highlightPlaces: [
      {
        name: "Gateway of India",
        lat: 18.922,
        lng: 72.8347,
        image:
          "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80",
        description: "Iconic 26m arch monument on Mumbai harbour",
      },
      {
        name: "Siddhivinayak Temple",
        lat: 19.017,
        lng: 72.8302,
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80",
        description: "Most visited Ganesh temple in India",
      },
      {
        name: "Marine Drive",
        lat: 18.9439,
        lng: 72.8231,
        image:
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80",
        description: "The Queen's Necklace – 3.6km promenade along the sea",
      },
      {
        name: "Haji Ali Dargah",
        lat: 18.9825,
        lng: 72.809,
        image:
          "https://images.unsplash.com/photo-1567190872327-9b26a2bf3ad1?w=400&q=80",
        description: "Indo-Islamic dargah built on a tiny islet in the sea",
      },
      {
        name: "Elephanta Caves",
        lat: 18.9637,
        lng: 72.9315,
        image:
          "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&q=80",
        description: "UNESCO World Heritage rock-cut caves, 9km from Mumbai",
      },
    ],
    inclusions: ["Pickup & Drop", "Hotel (1 Night)", "City Guide"],
    exclusions: ["Meals", "Boat tickets to Elephanta"],
    isReligious: false,
    artiTimings: [],
    isTrending: true,
    isMostVisited: true,
    isSpecial: false,
    location: "Mumbai, Maharashtra",
    country: "India",
    badge: "City Tour",
  },
  {
    id: 6,
    name: "Hill Station Escape",
    slug: "hill-station-escape",
    category: "hillstation",
    shortDesc: "Refresh your soul with scenic hill stations near Shirdi.",
    description:
      "Escape to the lush green hills of Igatpuri, Kasara Ghats and Bhandardara. Perfect for nature lovers seeking cool mountain air and stunning views.",
    totalKm: 400,
    duration: "3 Days / 2 Nights",
    nights: 2,
    basePrice: 5500,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    rating: 4.7,
    reviewCount: 176,
    highlights: [
      "Bhandardara Lake",
      "Wilson Dam",
      "Randha Falls",
      "Igatpuri",
      "Kasara Ghats",
    ],
    highlightPlaces: [
      {
        name: "Bhandardara Lake",
        lat: 19.5342,
        lng: 73.7623,
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
        description: "Stunning lake surrounded by the Sahyadri hills",
      },
      {
        name: "Wilson Dam",
        lat: 19.541,
        lng: 73.7545,
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
        description: "Historic 1910 dam with mesmerizing overflow views",
      },
      {
        name: "Randha Falls",
        lat: 19.588,
        lng: 73.77,
        image:
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80",
        description: "Spectacular 170ft waterfall on the Pravara river",
      },
      {
        name: "Igatpuri",
        lat: 19.7006,
        lng: 73.5587,
        image:
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80",
        description: "Cool hill station in the Western Ghats",
      },
      {
        name: "Kasara Ghats",
        lat: 19.74,
        lng: 73.47,
        image:
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
        description: "Breathtaking mountain pass on the Mumbai–Nashik highway",
      },
    ],
    inclusions: [
      "Hotel Stay (2 Nights)",
      "Breakfast",
      "AC Vehicle",
      "Nature Guide",
    ],
    exclusions: ["Lunch & Dinner", "Boating"],
    isReligious: false,
    artiTimings: [],
    isTrending: true,
    isMostVisited: false,
    isSpecial: false,
    location: "Western Ghats, Maharashtra",
    country: "India",
    badge: null,
  },
  {
    id: 7,
    name: "Chhatrapati Sambhaji Nagar",
    slug: "csn-darshan",
    category: "spiritual",
    shortDesc: "Ajanta, Ellora & Grishneshwar – Heritage & Spirituality.",
    description:
      "Discover the UNESCO World Heritage Ajanta & Ellora caves, Bibi Ka Maqbara, Daulatabad Fort, and the ancient Grishneshwar Jyotirlinga in Chhatrapati Sambhaji Nagar.",
    totalKm: 520,
    duration: "3 Days / 2 Nights",
    nights: 2,
    basePrice: 7000,
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    ],
    rating: 4.8,
    reviewCount: 142,
    highlights: [
      "Ajanta Caves",
      "Ellora Caves",
      "Bibi Ka Maqbara",
      "Daulatabad Fort",
      "Grishneshwar Jyotirlinga",
    ],
    highlightPlaces: [
      {
        name: "Ajanta Caves",
        lat: 20.5519,
        lng: 75.7033,
        image:
          "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&q=80",
        description: "UNESCO Heritage – 2nd century BC Buddhist rock-cut caves",
      },
      {
        name: "Ellora Caves",
        lat: 20.024,
        lng: 75.1792,
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80",
        description: "UNESCO Heritage – Hindu, Buddhist & Jain cave temples",
      },
      {
        name: "Bibi Ka Maqbara",
        lat: 19.9032,
        lng: 75.3235,
        image:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80",
        description: "The Taj of Deccan – Mughal mausoleum built in 1678",
      },
      {
        name: "Daulatabad Fort",
        lat: 19.9387,
        lng: 75.2155,
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
        description: "Impregnable 12th century hilltop fortress",
      },
      {
        name: "Grishneshwar Jyotirlinga",
        lat: 20.0236,
        lng: 75.1797,
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80",
        description: "The 12th and last Jyotirlinga of Lord Shiva",
      },
    ],
    inclusions: [
      "Hotel (2 Nights)",
      "Breakfast",
      "AC Vehicle",
      "Guide",
      "Entry Tickets",
    ],
    exclusions: ["Meals", "Camera fees"],
    isReligious: true,
    artiTimings: [
      {
        session: "Morning",
        time: "5:30 AM",
        description: "Grishneshwar Pratah Aarti",
      },
      {
        session: "Evening",
        time: "7:00 PM",
        description: "Grishneshwar Sandhya Aarti",
      },
    ],
    isTrending: false,
    isMostVisited: true,
    isSpecial: true,
    location: "Chhatrapati Sambhaji Nagar",
    country: "India",
    badge: "Heritage",
  },
  {
    id: 8,
    name: "Goa Beach Holiday",
    slug: "goa-beach-holiday",
    category: "holiday",
    shortDesc: "Sun, sand and sea – the perfect Goa getaway.",
    description:
      "Relax on the pristine beaches of Goa, enjoy water sports, explore Portuguese heritage churches and savor fresh seafood. A perfect holiday for families and couples.",
    totalKm: 700,
    duration: "4 Days / 3 Nights",
    nights: 3,
    basePrice: 9500,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    ],
    rating: 4.7,
    reviewCount: 267,
    highlights: [
      "Baga Beach",
      "Calangute Beach",
      "Old Goa Churches",
      "Dudhsagar Falls",
      "Anjuna Market",
    ],
    highlightPlaces: [
      {
        name: "Baga Beach",
        lat: 15.5523,
        lng: 73.7514,
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80",
        description: "Famous beach with water sports and shacks",
      },
      {
        name: "Calangute Beach",
        lat: 15.5439,
        lng: 73.7553,
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
        description: "Queen of Beaches – Goa's most popular beach",
      },
      {
        name: "Old Goa Churches",
        lat: 15.5009,
        lng: 73.9116,
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80",
        description: "UNESCO Heritage – Basilica of Bom Jesus & Se Cathedral",
      },
      {
        name: "Dudhsagar Falls",
        lat: 15.3143,
        lng: 74.3145,
        image:
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80",
        description: "Magnificent 310m four-tiered waterfall",
      },
      {
        name: "Anjuna Market",
        lat: 15.5742,
        lng: 73.7374,
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
        description: "Famous flea market with clothes, spices & souvenirs",
      },
    ],
    inclusions: [
      "Hotel Stay (3 Nights)",
      "Breakfast",
      "AC Vehicle",
      "Sightseeing",
    ],
    exclusions: ["Meals", "Water sports", "Airfare"],
    isReligious: false,
    artiTimings: [],
    isTrending: true,
    isMostVisited: true,
    isSpecial: false,
    location: "Goa",
    country: "India",
    badge: null,
  },
];

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Sedan (Swift Dzire / Amaze)",
    type: "Sedan",
    capacity: 4,
    pricePerKm: 12,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    features: ["AC", "Music System", "Comfortable Seats"],
    ac: true,
  },
  {
    id: 2,
    name: "SUV (Ertiga / XUV)",
    type: "SUV",
    capacity: 7,
    pricePerKm: 16,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
    features: ["AC", "Spacious Luggage", "Music System", "USB Charging"],
    ac: true,
  },
  {
    id: 3,
    name: "Innova Crysta",
    type: "Premium SUV",
    capacity: 7,
    pricePerKm: 22,
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
    features: [
      "AC",
      "Premium Seating",
      "Entertainment System",
      "USB Charging",
      "Extra Leg Room",
    ],
    ac: true,
  },
  {
    id: 4,
    name: "Tempo Traveller (12 Seater)",
    type: "Mini Van",
    capacity: 12,
    pricePerKm: 28,
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80",
    features: ["AC", "Push-Back Seats", "Music System", "Large Luggage Area"],
    ac: true,
  },
  {
    id: 5,
    name: "Tempo Traveller (17 Seater)",
    type: "Mini Van",
    capacity: 17,
    pricePerKm: 35,
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80",
    features: ["AC", "Push-Back Seats", "Music System", "Extra Storage"],
    ac: true,
  },
  {
    id: 6,
    name: "Mini Bus (32 Seater)",
    type: "Bus",
    capacity: 32,
    pricePerKm: 50,
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    features: ["AC", "Reclining Seats", "PA System", "Air Suspension"],
    ac: true,
  },
  {
    id: 7,
    name: "Luxury Coach (45 Seater)",
    type: "Coach",
    capacity: 45,
    pricePerKm: 70,
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    features: ["AC", "Luxury Seats", "LED TV", "WiFi", "Toilet", "Fridge"],
    ac: true,
  },
];

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Hotel Sai Sadan",
    location: "Shirdi",
    rating: 4.2,
    reviewCount: 512,
    pricePerRoom: 800,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    ],
    amenities: ["Free WiFi", "Parking", "24/7 Reception", "Room Service"],
    category: "budget",
    description:
      "Clean and comfortable budget hotel steps away from Sai Baba temple.",
  },
  {
    id: 2,
    name: "Hotel Sun-n-Sand Shirdi",
    location: "Shirdi",
    rating: 4.5,
    reviewCount: 389,
    pricePerRoom: 1400,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
    amenities: [
      "Free WiFi",
      "Restaurant",
      "Parking",
      "AC Rooms",
      "Room Service",
      "Laundry",
    ],
    category: "standard",
    description:
      "Well-appointed standard hotel on Saibaba Mandir Road. Perfect for pilgrims.",
  },
  {
    id: 3,
    name: "Radisson Blu Shirdi",
    location: "Shirdi",
    rating: 4.7,
    reviewCount: 201,
    pricePerRoom: 3500,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Bar",
      "Gym",
      "Concierge",
    ],
    category: "luxury",
    description:
      "5-star luxury experience with world-class amenities near Shirdi temple.",
  },
  {
    id: 4,
    name: "Hotel Panchavati",
    location: "Nashik",
    rating: 4.3,
    reviewCount: 278,
    pricePerRoom: 900,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    ],
    amenities: ["Free WiFi", "Parking", "Restaurant", "AC Rooms"],
    category: "budget",
    description:
      "Cozy budget hotel near Panchavati with easy access to all temples.",
  },
  {
    id: 5,
    name: "Express Inn Nashik",
    location: "Nashik",
    rating: 4.6,
    reviewCount: 167,
    pricePerRoom: 2200,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
    amenities: ["Free WiFi", "Restaurant", "Parking", "Spa", "Gym"],
    category: "standard",
    description: "Premium business hotel with excellent amenities in Nashik.",
  },
  {
    id: 6,
    name: "The Fern Residency Aurangabad",
    location: "Chhatrapati Sambhaji Nagar",
    rating: 4.5,
    reviewCount: 134,
    pricePerRoom: 2800,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Gym",
      "Parking",
      "Business Center",
    ],
    category: "luxury",
    description:
      "Eco-friendly luxury hotel with stunning views, close to Ellora & Ajanta.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vidya Vallabhaneni",
    city: "Hyderabad",
    state: "Telangana",
    rating: 5,
    review:
      "We booked a private Shirdi pilgrimage tour and it was perfect from start to finish. The itinerary was well-organized and the team ensured a comfortable and spiritual journey. Highly recommended!",
    date: "Nov 15, 2024",
    packageBooked: "Shirdi Darshan",
  },
  {
    id: 2,
    name: "Rajesh Sharma",
    city: "Pune",
    state: "Maharashtra",
    rating: 5,
    review:
      "Excellent service! The vehicle was clean, driver was polite and the hotel was comfortable. Will definitely book again for our next pilgrimage.",
    date: "Jan 8, 2025",
    packageBooked: "Jyotirlinga Circuit",
  },
  {
    id: 3,
    name: "Priya Mehta",
    city: "Surat",
    state: "Gujarat",
    rating: 4,
    review:
      "Good experience overall. The aarti timings guidance was very helpful. We didn't miss a single aarti at Shirdi. Very professional team.",
    date: "Dec 22, 2024",
    packageBooked: "Shirdi Darshan",
  },
  {
    id: 4,
    name: "Suresh Patel",
    city: "Ahmedabad",
    state: "Gujarat",
    rating: 5,
    review:
      "GK International made our Jyotirlinga circuit trip truly memorable. All arrangements were perfect. A trustworthy company with 30+ years of experience.",
    date: "Feb 3, 2025",
    packageBooked: "Jyotirlinga Darshan Circuit",
  },
];

export const gallery: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&q=80",
    caption: "Shirdi Sai Baba Temple",
    location: "Shirdi",
    category: "spiritual",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
    caption: "Sacred Temple Rituals",
    location: "Maharashtra",
    category: "spiritual",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    caption: "Western Ghats Beauty",
    location: "Maharashtra Hills",
    category: "holiday",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    caption: "Goa Beach Sunset",
    location: "Goa",
    category: "holiday",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    caption: "Bali Rice Terraces",
    location: "Bali, Indonesia",
    category: "international",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
    caption: "Maldives Overwater Villa",
    location: "Maldives",
    category: "international",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
    caption: "Luxury Hotel Stay",
    location: "Shirdi",
    category: "hotel",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    caption: "Comfortable Accommodation",
    location: "Nashik",
    category: "hotel",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",
    caption: "Ajanta Caves Marvel",
    location: "Aurangabad",
    category: "heritage",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&q=80",
    caption: "Mumbai Gateway of India",
    location: "Mumbai",
    category: "holiday",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    caption: "Trimbakeshwar Temple",
    location: "Nashik",
    category: "spiritual",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80",
    caption: "Holy River Godavari",
    location: "Nashik",
    category: "spiritual",
  },
];
