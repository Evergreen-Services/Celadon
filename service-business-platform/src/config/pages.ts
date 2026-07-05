import type { ClientPage } from "./types";

export const pages: ClientPage[] = [
  // Home page is exported separately as `home` below — keep it in pages[] for listings
  {
    slug: "services",
    title: "Services",
    subtitle:
      "Simple, reliable support for your home or business, built around the work you need most.",
    sections: [
      {
        type: "hero",
        heading: "Local service that feels personal",
        body: "We combine dependable workmanship with clear communication so every visit feels easy and stress-free.",
        cta: {
          label: "Book a visit",
          href: "/contact",
        },
      },
      {
        type: "cards",
        heading: "Popular offerings",
        body: "These are starter options you can customize for your brand and service area.",
        items: [
          {
            title: "Lawn mowing",
            description: "Regular weekly or biweekly mowing with crisp edging and cleanup.",
          },
          {
            title: "Seasonal cleanup",
            description: "Leaf removal, debris pickup, and property refreshes for every season.",
          },
          {
            title: "Fertilization",
            description: "Focused treatments to keep grass healthy, green, and resilient.",
          },
        ],
      },
      {
        type: "list",
        heading: "What's included",
        items: [
          { title: "Free estimates for new clients" },
          { title: "Flexible scheduling for busy households" },
          { title: "Friendly updates and clear communication" },
        ],
      },
    ],
  },
  {
    slug: "gallery",
    title: "Gallery",
    subtitle: "Showcase your work with polished before-and-after examples and recent project highlights.",
    sections: [
      {
        type: "cards",
        heading: "Recent highlights",
        body: "Swap these starter cards out with your own photos, project summaries, and customer wins.",
        items: [
          {
            title: "Spring curb appeal",
            description: "Fresh mulch, clean beds, and a crisp lawn edge for a neighborhood refresh.",
          },
          {
            title: "Backyard reset",
            description: "A full cleanup and tidy finish that made the space feel welcoming again.",
          },
          {
            title: "Commercial entrance",
            description: "A polished look for a storefront that helped the business stand out.",
          },
        ],
      },
      {
        type: "list",
        heading: "Simple content blocks",
        items: [
          { title: "Before and after photos" },
          { title: "Project brief and location" },
          { title: "Star ratings or customer notes" },
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    subtitle: "Reach out for a quote, a quick question, or to schedule your next visit.",
    sections: [
      {
        type: "contact",
        heading: "Let's talk",
        body: "These fields are ready to be customized with your preferred contact details, hours, and service area.",
      },
      {
        type: "cards",
        heading: "Helpful details",
        items: [
          {
            title: "Phone",
            description: "(555) 555-5555",
          },
          {
            title: "Email",
            description: "joe@lawncare.com",
          },
          {
            title: "Service area",
            description: "Dallas and Plano",
          },
        ],
      },
    ],
  },
  {
    slug: "payments",
    title: "Payments",
    subtitle: "Make a payment for your recent service or schedule a future visit.",
    sections: [
      {
        type: "hero",
        heading: "Pay online",
        body: "Use the button below to make a secure payment for your recent service or schedule a future visit.",
        cta: {
          label: "Make a payment",
          href: "https://buy.stripe.com/xxxx",
        },
      },
    ],
  },
];

export default pages;

export const home: ClientPage = {
  slug: "home",
  title: "Welcome",
  subtitle: "Local, reliable service for your home and business",
  sections: [
    {
      type: "hero",
      heading: "Local service that feels personal",
      body: "We combine dependable workmanship with clear communication so every visit feels easy and stress-free.",
      cta: {
        label: "Get a quote",
        href: "/contact",
      },
    },
    {
      type: "cards",
      heading: "Popular offerings",
      body: "Quick starter options you can customize for your brand.",
      items: [
        { title: "Lawn mowing", description: "Weekly and biweekly mowing with crisp edging." },
        { title: "Seasonal cleanup", description: "Leaf removal, debris pickup, and property refreshes." },
        { title: "Fertilization", description: "Treatments to keep grass healthy and resilient." },
      ],
    },
  ],
};
