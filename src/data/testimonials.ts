/**
 * Testimonial Data Management
 * 
 * This file centralizes all client testimonials/feedback for the Kathy Curr Energy Healing website.
 * 
 * HOW TO MANAGE TESTIMONIALS:
 * 1. ADD NEW: Copy an existing testimonial object, paste it at the bottom, and fill out the fields.
 * 2. EDIT: Update any of the text fields (`quote`, `authorDisplayName`, `initials`, or `serviceType`).
 * 3. APPROVE: Set `isApproved: true` once Kathy has verified and authorized the feedback.
 * 4. SHOW ON HOME: Set `displayOnHome: true` to display the card on the Homepage's "Kind Words" section.
 * 5. REORDER: Change the `sortOrder` number to control the order they appear (lower numbers show first).
 */

export interface Testimonial {
  id: string;
  quote: string;
  authorDisplayName: string;
  initials: string;
  serviceType: string;         // e.g., 'Reiki Treatment', 'Angel Guidance', 'Youth Reiki'
  isPlaceholder: boolean;      // Marks if this is a temporary demonstration placeholder
  isApproved: boolean;         // True if approved by Kathy for final launch
  displayOnHome: boolean;      // True if it should render in the homepage slider/grid
  sortOrder: number;           // Defines sorting hierarchy
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Kathy provides such a safe, non-judgmental space. I leave every Reiki session feeling lighter, more grounded, and truly at peace.",
    authorDisplayName: "Sarah T.",
    initials: "ST",
    serviceType: "Adult Reiki",
    isPlaceholder: true,       // Mark clearly as demonstration placeholder
    isApproved: true,          // Approved for prototype view; set to false if launch-ready needs empty state
    displayOnHome: true,
    sortOrder: 1
  },
  {
    id: "testimonial-2",
    quote: "The Angel Guidance session gave me the clarity I was searching for. Kathy has a truly gifted way of connecting and providing affirming support.",
    authorDisplayName: "Michael R.",
    initials: "MR",
    serviceType: "Adult Angel Guidance",
    isPlaceholder: true,       // Mark clearly as demonstration placeholder
    isApproved: true,          // Approved for prototype view; set to false if launch-ready needs empty state
    displayOnHome: true,
    sortOrder: 2
  },
  {
    id: "testimonial-3",
    quote: "My teenage daughter has been seeing Kathy for Reiki. It has helped her tremendously with her school-related stress and emotional regulation.",
    authorDisplayName: "Linda K.",
    initials: "LK",
    serviceType: "Youth Reiki",
    isPlaceholder: true,       // Mark clearly as demonstration placeholder
    isApproved: true,          // Approved for prototype view; set to false if launch-ready needs empty state
    displayOnHome: true,
    sortOrder: 3
  }
];

/**
 * Returns list of testimonials configured for homepage rendering.
 * Filters out unapproved items to maintain client confidentiality and compliance standards.
 */
export const getHomepageTestimonials = (): Testimonial[] => {
  return testimonials
    .filter(t => t.displayOnHome && t.isApproved)
    .sort((a, b) => a.sortOrder - b.sortOrder);
};
