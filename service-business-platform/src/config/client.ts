export const client = {
  business: {
    name: "Joe's Lawn Care",
    tagline: "Reliable lawn care you can trust",
    phone: "(555) 555-5555",
    email: "joe@lawncare.com",
    services: ["Mowing", "Edging", "Seasonal cleanup"],
    serviceArea: ["Dallas", "Plano"]
  },

  theme: "lawn",

  features: {
    hero: true,
    services: true,
    gallery: true,
    testimonials: true,
    contact: true,
    payments: true
  },

  payments: {
    stripePaymentLink: "https://buy.stripe.com/xxxx"
  },

  navigation: [
    {label: "Home", href: "/"},
    {label: "Services", href: "/services"},
    {label: "Gallery", href: "/gallery"},
    {label: "Contact", href: "/contact"}
  ]
};