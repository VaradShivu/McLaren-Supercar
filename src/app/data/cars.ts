export interface Car {
  id: string;
  name: string;
  model: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
    weight: string;
  };
  features: string[];
}

export const cars: Car[] = [
  {
    id: "720s",
    name: "McLaren 720S",
    model: "720S",
    tagline: "Velocity Redefined",
    description: "The 720S represents the pinnacle of McLaren's Super Series, combining extreme performance with everyday usability. Its revolutionary design and engineering make it one of the most advanced supercars ever created.",
    price: "$299,000",
    image: "https://images.unsplash.com/photo-1666497954055-0b500e5bf54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2xhcmVuJTIwNzIwcyUyMG9yYW5nZSUyMHN1cGVyY2FyfGVufDF8fHx8MTc3NDM3MjQ3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    specs: {
      power: "710 HP",
      acceleration: "0-60 in 2.8s",
      topSpeed: "212 MPH",
      weight: "1,283 kg"
    },
    features: [
      "4.0L Twin-Turbo V8 Engine",
      "Carbon Fiber Monocoque II",
      "Proactive Chassis Control II",
      "Retractable Active Rear Wing",
      "Dihedral Doors"
    ]
  },
  {
    id: "p1",
    name: "McLaren P1",
    model: "P1",
    tagline: "The Ultimate McLaren",
    description: "The P1 is a limited-production plug-in hybrid sports car that represents the culmination of 50 years of race-winning technology and expertise. Only 375 units were ever produced.",
    price: "$1,150,000",
    image: "https://images.unsplash.com/photo-1650980770068-69ab862026f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2xhcmVuJTIwcDElMjBoeXBlcmNhcnxlbnwxfHx8fDE3NzQzNzI0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specs: {
      power: "903 HP",
      acceleration: "0-60 in 2.7s",
      topSpeed: "217 MPH",
      weight: "1,450 kg"
    },
    features: [
      "3.8L Twin-Turbo V8 + Electric Motor",
      "Hybrid Power System",
      "Active Aerodynamics",
      "Race Mode",
      "Limited Production"
    ]
  },
  {
    id: "765lt",
    name: "McLaren 765LT",
    model: "765LT",
    tagline: "Long Tail. Limited Edition.",
    description: "The 765LT continues McLaren's Longtail heritage with extreme performance, reduced weight, and track-focused engineering. LT stands for Longtail, representing the ultimate expression of McLaren's supercar DNA.",
    price: "$382,500",
    image: "https://images.unsplash.com/photo-1685918397594-f38d572a4f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2xhcmVuJTIwNzY1bHQlMjBzdXBlcmNhcnxlbnwxfHx8fDE3NzQzNzI0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specs: {
      power: "755 HP",
      acceleration: "0-60 in 2.7s",
      topSpeed: "205 MPH",
      weight: "1,229 kg"
    },
    features: [
      "4.0L Twin-Turbo V8 Engine",
      "80kg Weight Reduction",
      "Titanium Exhaust System",
      "Carbon Fiber Body Panels",
      "Track Telemetry System"
    ]
  },
  {
    id: "artura",
    name: "McLaren Artura",
    model: "Artura",
    tagline: "A New Era",
    description: "The Artura marks the beginning of McLaren's electrified future. It's the first series-production High-Performance Hybrid supercar from McLaren, featuring an all-new V6 engine and electric motor.",
    price: "$237,500",
    image: "https://images.unsplash.com/photo-1614098934590-e03c98a793bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2xhcmVuJTIwYXJ0dXJhJTIwaHlicmlkfGVufDF8fHx8MTc3NDM3MjQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    specs: {
      power: "671 HP",
      acceleration: "0-60 in 3.0s",
      topSpeed: "205 MPH",
      weight: "1,395 kg"
    },
    features: [
      "3.0L Twin-Turbo V6 Hybrid",
      "Electric-Only Range: 11 miles",
      "8-Speed Dual-Clutch Transmission",
      "Carbon Fiber Monocoque",
      "Advanced Driver Assistance"
    ]
  },
  {
    id: "gt",
    name: "McLaren GT",
    model: "GT",
    tagline: "Grand Touring Redefined",
    description: "The GT is McLaren's first true Grand Tourer, combining supercar performance with long-distance comfort and practicality. It offers the perfect balance of exhilaration and refinement.",
    price: "$210,000",
    image: "https://images.unsplash.com/photo-1731096433177-29b96a3a79c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2xhcmVuJTIwZ3QlMjBjb3VwZXxlbnwxfHx8fDE3NzQzNzI0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specs: {
      power: "612 HP",
      acceleration: "0-60 in 3.1s",
      topSpeed: "203 MPH",
      weight: "1,530 kg"
    },
    features: [
      "4.0L Twin-Turbo V8 Engine",
      "570L Luggage Capacity",
      "Adaptive Damping System",
      "Electrochromic Roof Panel",
      "Premium Interior Materials"
    ]
  },
  {
    id: "senna",
    name: "McLaren Senna",
    model: "Senna",
    tagline: "The Ultimate Track Experience",
    description: "Named after the legendary Ayrton Senna, this extreme track-focused hypercar is engineered for the ultimate circuit experience. Every element is designed to maximize performance and driver engagement.",
    price: "$1,000,000",
    image: "https://images.unsplash.com/photo-1552962730-61f41ae62092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtY2xhcmVuJTIwc2VubmElMjB0cmFja3xlbnwxfHx8fDE3NzQzNzI0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specs: {
      power: "789 HP",
      acceleration: "0-60 in 2.7s",
      topSpeed: "211 MPH",
      weight: "1,198 kg"
    },
    features: [
      "4.0L Twin-Turbo V8 Engine",
      "Extreme Active Aerodynamics",
      "RaceActive Chassis Control II",
      "Carbon Fiber Construction",
      "Limited to 500 Units"
    ]
  }
];
