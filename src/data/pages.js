const pages = [
  {
    id: "home",
    title: "Home",
    status: "Needs review",
    priority: "high",
    notes:
      "Two hero photo options supplied. Final selection needs approval.",
    requirements: {
      copy: [
        {
          id: "hero-heading",
          label: "Hero heading",
          received: true,
        },
        {
          id: "cafe-introduction",
          label: "Short café introduction",
          received: true,
        },
        {
          id: "featured-offering",
          label: "Featured offering/CTA",
          received: true,
        },
      ],
      assets: [
        {
          id: "hero-photo",
          label: "Hero photo",
          received: true,
        },
        {
          id: "food-drink-photos",
          label: "Food-and-drink photos",
          received: true,
        },
        {
          id: "logo-files",
          label: "Logo files",
          received: true,
        },
      ],
    },
  },
  {
    id: "our-story",
    title: "Our Story",
    status: "Waiting",
    priority: "medium",
    notes: "Waiting for the owner's bio and updated team photo.",
    requirements: {
      copy: [
        {
          id: "cafe-origin",
          label: "Café origin",
          received: true,
        },
        {
          id: "values-sourcing",
          label: "Values and sourcing",
          received: true,
        },
        {
          id: "team-introduction",
          label: "Team introduction",
          received: false,
        },
      ],
      assets: [
        {
          id: "owner-team-photos",
          label: "Owner/team photos",
          received: false,
        },
        {
          id: "cafe-interior-photos",
          label: "Café interior photos",
          received: true,
        },
        {
          id: "brand-graphics",
          label: "Brand graphics",
          received: true,
        },
      ],
    },
  },
  {
    id: "menu",
    title: "Menu",
    status: "Waiting",
    priority: "high",
    notes: "Client is finalising prices and dietary details.",
    requirements: {
      copy: [
        {
          id: "menu-items-descriptions",
          label: "Menu items and descriptions",
          received: true,
        },
        {
          id: "prices",
          label: "Prices",
          received: false,
        },
        {
          id: "dietary-labels",
          label: "Dietary labels",
          received: false,
        },
      ],
      assets: [
        {
          id: "dish-photos",
          label: "Dish photos",
          received: true,
        },
        {
          id: "drink-photos",
          label: "Drink photos",
          received: false,
        },
        {
          id: "final-menu-document",
          label: "Final menu document",
          received: false,
        },
      ],
    },
  },
  {
    id: "events",
    title: "Events",
    status: "Not yet requested",
    priority: "low",
    notes:
      "Request content once the upcoming events schedule is confirmed.",
    requirements: {
      copy: [
        {
          id: "events-introduction",
          label: "Events introduction",
          received: false,
        },
        {
          id: "upcoming-event-details",
          label: "Upcoming event details",
          received: false,
        },
        {
          id: "booking-information",
          label: "Booking information",
          received: false,
        },
      ],
      assets: [
        {
          id: "previous-event-photos",
          label: "Previous event photos",
          received: false,
        },
        {
          id: "promotional-graphics",
          label: "Promotional graphics",
          received: false,
        },
      ],
    },
  },
  {
    id: "gallery",
    title: "Gallery",
    status: "Ready",
    priority: "low",
    notes: "Final image selection and credits approved.",
    requirements: {
      copy: [
        {
          id: "gallery-introduction",
          label: "Short gallery introduction",
          received: true,
        },
        {
          id: "image-captions-credits",
          label: "Image captions and credits",
          received: true,
        },
      ],
      assets: [
        {
          id: "curated-photo-selection",
          label: "Curated photo selection",
          received: true,
        },
        {
          id: "high-resolution-originals",
          label: "High-resolution originals",
          received: true,
        },
      ],
    },
  },
  {
    id: "contact",
    title: "Contact",
    status: "Ready",
    priority: "medium",
    notes:
      "Opening hours, reservation details, and location information confirmed.",
    requirements: {
      copy: [
        {
          id: "address-opening-hours",
          label: "Address and opening hours",
          received: true,
        },
        {
          id: "contact-details",
          label: "Contact details",
          received: true,
        },
        {
          id: "reservation-information",
          label: "Reservation information",
          received: true,
        },
      ],
      assets: [
        {
          id: "exterior-entrance-photo",
          label: "Exterior/entrance photo",
          received: true,
        },
        {
          id: "reservation-platform-details",
          label: "Reservation-platform details",
          received: true,
        },
        {
          id: "location-map-information",
          label: "Location/map information",
          received: true,
        },
      ],
    },
  },
];

export default pages;