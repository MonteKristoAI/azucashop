export interface Review {
  name: string;
  initials: string;
  location: string;
  rating: number;
  timeAgo: string;
  text: string;
  service: string;
}

export const customerReviews: Review[] = [
  {
    name: "Sarah M.",
    initials: "SM",
    location: "Denver, CO",
    rating: 5,
    timeAgo: "2 weeks ago",
    text: "I felt the effects in about 10 minutes — completely different from any edible I've tried before. No couch-lock, just a light, euphoric experience. Absolutely love these!",
    service: "Tropical Bliss Gummies",
  },
  {
    name: "Marcus T.",
    initials: "MT",
    location: "Portland, OR",
    rating: 5,
    timeAgo: "3 weeks ago",
    text: "Finally an edible that actually tastes great. No bitter cannabis flavor at all. And the fast onset makes it perfect for social events with friends.",
    service: "Sparkling Lemon Seltzer",
  },
  {
    name: "Jenna K.",
    initials: "JK",
    location: "Austin, TX",
    rating: 5,
    timeAgo: "1 month ago",
    text: "As someone who was nervous about edibles, the predictable 5–15 minute onset gave me total confidence. I knew exactly when it would kick in.",
    service: "Citrus Sunrise Gummies",
  },
  {
    name: "David R.",
    initials: "DR",
    location: "San Francisco, CA",
    rating: 4,
    timeAgo: "1 month ago",
    text: "The dark chocolate bar is incredible — you'd never know it's infused. Premium taste with fast-acting effects. This is the future of edibles.",
    service: "Dark Chocolate Bar",
  },
  {
    name: "Lisa W.",
    initials: "LW",
    location: "Chicago, IL",
    rating: 5,
    timeAgo: "2 months ago",
    text: "I switched from smoking to these and get the same uplifting Delta-9 feeling without inhaling anything. A healthier alternative that actually works.",
    service: "Berry Burst Gummies",
  },
  {
    name: "Tom H.",
    initials: "TH",
    location: "Seattle, WA",
    rating: 5,
    timeAgo: "2 months ago",
    text: "Perfect for happy hour. The seltzer kicks in fast, tastes like a normal sparkling water, and the effects are social and controllable. Game changer.",
    service: "Berry Hibiscus Tonic",
  },
  {
    name: "Rachel P.",
    initials: "RP",
    location: "Miami, FL",
    rating: 5,
    timeAgo: "3 months ago",
    text: "These gummies replaced my evening wine habit. Predictable, pleasant, and no hangover the next day. The mango flavor is absolutely delicious.",
    service: "Mango Passion Gummies",
  },
  {
    name: "Alex C.",
    initials: "AC",
    location: "Nashville, TN",
    rating: 5,
    timeAgo: "3 months ago",
    text: "Bought these for a dinner party and every single guest was impressed. Fast onset, great taste, and perfectly dosed. Will be ordering again soon.",
    service: "Watermelon Gummies",
  },
];
