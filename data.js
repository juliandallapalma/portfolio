// ============================================================
//  SITE CONTENT — edit everything here, don't touch index.html
// ============================================================

const SITE = {

  // --- NAV + HERO -----------------------------------------
  name:  "Julian Dalla-Palma",
  role:  "Senior Technical Operations Manager",
  location: "Sydney, Australia",

  tagline: ["Big moments,", "good energy", "always."],
  // Middle line renders in italic — adjust the three lines above as needed

  bio: `Delivering complex activations for the world's most iconic brands.`,

  stats: [
    { number: "100+", label: "Activations" },
    { number: "30+", label: "Global Brands" },
  ],

  // --- CONTACT --------------------------------------------
  email:    "julian.dallapalma@gmail.com",
  linkedin: "https://www.linkedin.com/in/julian-dalla-palma-628376157/",
  phone:    "+61 449 590 510",

  // --- ABOUT ----------------------------------------------
  aboutHeading: ["The person clients", "ask for by name."],
  // Second line renders in italic

  aboutBody: `With five years in broadcast at SBS and two years delivering large-scale activations at Polite Playground, Julian brings a rare combination of technical depth and live event instinct to everything he touches.`,

  expertise: [
    { skill: "AV Design & Integration",          tag: "Core"       },
    { skill: "Power Distribution & Infrastructure", tag: "Core"    },
    { skill: "Broadcast & Streaming",            tag: "Core"       },
    { skill: "Venue & Stakeholder Management",   tag: "Ops"        },
    { skill: "Budget & Resource Planning",        tag: "Ops"       },
    { skill: "Crew & Supplier Coordination",      tag: "Ops"       },
    { skill: "Touring & Multi-city Events",       tag: "Specialist" },
  ],

  // --- WORK TILES -----------------------------------------
  // featured: true  →  wide tile (spans 2 columns)
  // image: "images/filename.jpg"  →  use a photo
  // image: null  →  shows a dark placeholder instead
  // placeholderColor: only used when image is null

  work: [
    {
	  featured: true,
	  brand:    "Netflix",
	  event:    "Tudum Fan Experience — Sydney",
	  role:     "Senior Technical Operations",
	  detail:   "Large-scale fan activation across multiple zones. Full AV and staging infrastructure, live programming coordination, 2,000+ attendees.",
	  image:    "images/netflix.png",
	  placeholderColor: "#0d1310",
	},
	{
      featured: false,
      brand:    "Prada",
      event:    "Resort Collection Launch — Milan & Sydney",
      role:     "Technical Director",
      detail:   "Dual-city simultaneous activation. Full AV coordination, venue technical integration, 300+ guests. Six-week build, zero-fault delivery.",
      image:    "images/prada.png",
    },
    {
      featured: false,
      brand:    "YSL Beauty",
      event:    "Global Campaign Launch",
      role:     "Lead Technical Ops",
      detail:   "Multi-room immersive brand experience. Custom LED installation, live product integration, influencer-facing technical production.",
      image:    null,
      placeholderColor: "#0e1318",
    },
    {
      featured: false,
      brand:    "Lego",
      event:    "Fan Experience — ANZ Tour",
      role:     "Senior Technical Ops",
      detail:   "Four-city touring installation. Modular set design, interactive tech integration, local crew management across all states.",
      image:    "images/lego.png",
    },
    {
      featured: false,
      brand:    "Nongshim",
      event:    "Brand Activation — Sydney",
      role:     "Technical Operations",
      detail:   "Pop-up retail and sampling activation. Full event infrastructure, power distribution, AV and wayfinding systems.",
      image:    "images/nongshim.png",
    },
    {
      featured: false,
      brand:    "Spotify",
      event:    "APAC Artist Series",
      role:     "Technical Director",
      detail:   "Intimate live music and content capture event. Studio-grade audio, streaming infrastructure, artist rider compliance.",
      image:    null,
      placeholderColor: "#131318",
    },
    {
      featured: false,
      brand:    "Valentino",
      event:    "Pop-up Boutique Experience",
      role:     "Technical Operations",
      detail:   "Temporary luxury retail environment. Architectural lighting design, climate control, security systems integration.",
      image:    null,
      placeholderColor: "#100f0e",
    },
    {
      featured: false,
      brand:    "Samsung",
      event:    "Product Launch — Sydney Opera House",
      role:     "Senior Technical Ops",
      detail:   "High-profile product reveal at an iconic heritage venue. Complex AV integration within strict venue constraints.",
      image:    null,
      placeholderColor: "#0d1315",
    },
  ],

};