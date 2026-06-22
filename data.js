// ============================================================
//  SITE CONTENT — edit everything here, don't touch index.html
// ============================================================

const SITE = {

  // --- NAV + HERO -----------------------------------------
  name:     "Julian Dalla-Palma",
  role:     "Senior Technical Operations Manager",
  location: "Sydney, Australia",

  tagline: ["Big moments,", "good energy,", "always."],
  // Three lines — middle line renders in italic

  bio: `Delivering complex activations for the world's most iconic brands.`,

  stats: [
    { number: "800+", label: "Activations"   },
    { number: "50+",  label: "Global Brands" },
  ],

  // --- CONTACT --------------------------------------------
  email:    "julian.dallapalma@gmail.com",
  linkedin: "https://www.linkedin.com/in/julian-dalla-palma-628376157/",

  // --- HIGHLIGHT REEL -------------------------------------
  // Auto-scrolling strip between hero and work grid
  reel: [
    "images/Slideshow/bankwest.jpg",
    "images/Slideshow/vaseline2.jpg",
    "images/Slideshow/cadillac.jpg",
    "images/Slideshow/durex.jpg",
    "images/Slideshow/lego3.jpg",
    "images/Slideshow/microsoft.jpg",
    "images/Slideshow/netflix.jpg",
    "images/Slideshow/prada.jpg",
    "images/Slideshow/vaseline.jpg",
    "images/Slideshow/lego.JPG",
  ],

  // --- ABOUT ----------------------------------------------
  aboutHeading: ["The person clients", "ask for by name."],
  // Second line renders in italic

  aboutBody: `With five years in broadcast at SBS and two years delivering large-scale activations at Polite Playground, Julian brings a rare combination of technical depth and live event instinct to everything he touches.`,

  expertise: [
    { skill: "Touring & Multi-city Events",    tag: "Specialist" },
    { skill: "Live Event Operations",          tag: "Core"       },
    { skill: "AV Design & Integration",        tag: "Core"       },
    { skill: "Crew & Supplier Coordination",   tag: "Ops"        },
    { skill: "Venue & Stakeholder Management", tag: "Ops"        },
    { skill: "Budget & Resource Planning",     tag: "Ops"        },
    { skill: "Broadcast & Streaming",          tag: "Broadcast"  },
    { skill: "Master Control & Media Ingest",  tag: "Broadcast"  },
  ],

  // --- WORK TILES -----------------------------------------
  // featured: true        → wide tile (spans 2 columns)
  // images: ["a.jpg", …]  → crossfade slideshow (5s per image)
  // images: null          → dark placeholder colour
  // video: "path.mp4"     → plays as looping background video
  //                          (.mov works in Safari; convert to .mp4 for Chrome)
  // placeholderColor      → only used when images is null and no video

  work: [
    {
      featured: false,
      brand:   "Netflix",
      event:   "Next on Netflix 2026",
      role:    "Senior Technical Operations",
      detail:  "Multi-location experiential activation promoting Netflix's 2026 content slate through an immersive tarot-themed experience. Custom-built branded environment, interactive tarot reading quiz, and a bespoke automated card dispenser. 2,000+ attendees.",
      images:  ["images/netflix.png", "images/netflix2.jpg"],
    },
	{
      featured: false,
      brand:   "Pistachio Papi x Carroten",
      event:   "Bondi Pavilion",
      role:    "Senior Technical Operations",
      detail:  "Beachfront branded activation at Bondi Pavilion requiring additional engineering and environmental planning due to coastal conditions.",
      video:   "images/pistachiopapi.mp4",
      placeholderColor: "#0d1315",
    },
    {
      featured: false,
      brand:   "Prada",
      event:   "Pop-up Experience",
      role:    "Senior Technical Operations",
      detail:  "Premium branded pop-up experience across multiple Sydney locations featuring an integrated automated photo studio and customised customer experience.",
      images:  ["images/prada.jpg", "images/prada2.JPG", "images/prada3.JPG"],
    },
    {
      featured: false,
      brand:   "BankWest",
      event:   "Race to the Top",
      role:    "Senior Technical Operations",
      detail:  "Travelling national activation featuring an interactive \"Race to the Top\" quiz experience across Melbourne, Sydney, Queensland, and the Sunshine Coast.",
      images:  ["images/bankwest.jpg", "images/bankwest2.png"],
    },
    {
      featured: false,
      brand:   "Lego x Star Wars",
      event:   "Smart Play",
      role:    "Senior Technical Operations",
      detail:  "Multi-site activation celebrating the LEGO Smart Brick across Westfields in Sydney.",
      images:  ["images/lego.png", "images/lego2.png", "images/lego3.jpg"],
    },
    {
      featured: false,
      brand:   "Nongshim",
      event:   "Brand Activation — Melbourne",
      role:    "Technical Operations",
      detail:  "Weekend activation at Bourke Street Mall featuring interactive games, branded photo opportunities, poster creation, and live noodle sampling.",
      images:  ["images/nongshim.png", "images/nongshim2.png"],
    },
    //{
    //  featured: false,
    //  brand:   "Fitness First",
    //  event:   "Wall Hang Challenge",
    //  role:    "Technical Operations",
    //  detail:  "Two-week Pitt Street Mall activation featuring an interactive fitness challenge with three integrated display screens and a timed wall-hang competition.",
    //  images:  null,
    //  placeholderColor: "#131318",
    //},
	{
      featured: false,
      brand:   "NRL",
      event:   "Commentary Booth",
      role:    "Senior Technical Operations",
      detail:  "Two-person interactive commentary booth allowing attendees to record and dub commentary over iconic NRL highlights.",
      images:  ["images/nrl.jpg"],
      placeholderColor: "#0d1315",
    },
    {
      featured: false,
      brand:   "Vaseline",
      event:   "Live Billboard Experience",
      role:    "Technical Operations",
      detail:  "Pitt Street Mall activation featuring a custom photo booth experience with live billboard integration to promote the Vaseline Gluta-Hya product range.",
      images:  ["images/vaseline.jpg", "images/vaseline2.jpg"],
    },
    {
      featured: false,
      brand:   "Optus / Nothing Phone",
      event:   "Move, You Lose",
      role:    "Senior Technical Operations",
      detail:  "National experiential campaign promoting the launch of the Nothing Phone across five locations in NSW, VIC and QLD. The activation centred around an interactive sensor challenge.",
      images:  ["images/optus.png"],
      placeholderColor: "#0d1315",
    },
  ],

};
