const Event = require("../models/eventModel");

const events = [
  {
    title: "Bird-Watching",
    city: "Milton",
    location: "Rattlesnake Point Conservation Area",
    order: 1,
    detail:
      "Join us for a day of fun and learning about local wildlife in Rattlesnake Point. The event includes guided tours, interactive exhibits, and activities for all ages.",
    image: "/images/events/event-bird.jpg",
    startTime: "2024-07-05 10:00",
    endTime: "2024-07-05 16:00",
    organizer: ["John Doe", "Alice Yang"],
    participants: 20,
  },
  {
    title: "Wildlife Safari",
    city: "Toronto",
    location: "Toronto Zoo",
    order: 2,
    detail:
      "Experience the adventure of a lifetime on our guided safari tour. Witness the majesty of various wildlife up close.",
    image: "/images/events/event-safari.jpg",
    startTime: "2024-08-15 06:00",
    endTime: "2024-08-15 18:00",
    organizer: ["Samuel Green", "Olivia Brown"],
    participants: 15,
  },
  {
    title: "Marine Life Exploration",
    city: "Toronto",
    location: "Ripley's Aquarium of Canada",
    order: 3,
    detail:
      "Dive into the wonders of marine life at Ripley's Aquarium of Canada. Perfect for families and marine enthusiasts.",
    image: "/images/events/event-marine.jpg",
    startTime: "2024-09-10 09:00",
    endTime: "2024-09-10 17:00",
    organizer: ["Emily Clark", "Liam Johnson", "Sophia Lee"],
    participants: 30,
  },
  {
    title: "Jungle Trek",
    city: "Ottawa",
    location: "Gatineau Park",
    order: 4,
    detail:
      "Join us on a thrilling trek through Gatineau Park. Discover the diverse wildlife and lush vegetation.",
    image: "/images/events/event-jungle.jpg",
    startTime: "2024-07-20 07:00",
    endTime: "2024-07-20 15:00",
    organizer: ["David Harris"],
    participants: 10,
  },
  {
    title: "Bird Photography Workshop",
    city: "Hamilton",
    location: "Royal Botanical Gardens",
    order: 5,
    detail:
      "Learn the art of bird photography in one of the most beautiful locations in Ontario. Ideal for photographers of all skill levels.",
    image: "/images/events/event-photography.jpg",
    startTime: "2024-10-05 08:00",
    endTime: "2024-10-05 14:00",
    organizer: ["Lucas White", "Chloe Walker"],
    participants: 25,
  },
  {
    title: "Whale Watching Tour",
    city: "Kingston",
    location: "St. Lawrence River",
    order: 6,
    detail:
      "Join our expert guides for a whale watching tour on the St. Lawrence River. Spot humpbacks, orcas, and more.",
    image: "/images/events/event-whale.jpg",
    startTime: "2024-08-22 10:00",
    endTime: "2024-08-22 16:00",
    organizer: ["Ethan King", "Mia Williams"],
    participants: 18,
  },
  {
    title: "Reptile Discovery",
    city: "Toronto",
    location: "Toronto Zoo",
    order: 7,
    detail:
      "Discover the fascinating world of reptiles at the Toronto Zoo. See alligators, snakes, and more in their natural habitat.",
    image: "/images/events/event-reptile.jpg",
    startTime: "2024-09-30 09:00",
    endTime: "2024-09-30 15:00",
    organizer: ["Daniel Brown", "Ava Martinez"],
    participants: 20,
  },
  {
    title: "Night Safari",
    city: "Toronto",
    location: "Toronto Zoo",
    order: 8,
    detail:
      "Explore the nocturnal world of wildlife on a guided night safari at Toronto Zoo. A unique and thrilling experience.",
    image: "/images/events/event-night.jpg",
    startTime: "2024-11-10 19:00",
    endTime: "2024-11-10 23:00",
    organizer: ["Benjamin Taylor", "Isabella Thompson", "Sophia Martinez"],
    participants: 35,
  },
  {
    title: "Mountain Wildlife Hike",
    city: "Collingwood",
    location: "Blue Mountain",
    order: 9,
    detail:
      "Hike through Blue Mountain and discover the diverse wildlife that calls this region home. Suitable for all ages.",
    image: "/images/events/event-mountain.jpg",
    startTime: "2024-07-25 08:00",
    endTime: "2024-07-25 14:00",
    organizer: ["Michael Clark"],
    participants: 12,
  },
  {
    title: "Wildlife Conservation Workshop",
    city: "Peterborough",
    location: "Riverview Park and Zoo",
    order: 10,
    detail:
      "Learn about wildlife conservation efforts and how you can help protect endangered species at Riverview Park and Zoo.",
    image: "/images/events/event-conservation.jpg",
    startTime: "2024-08-05 10:00",
    endTime: "2024-08-05 16:00",
    organizer: ["William Robinson", "Emma Johnson"],
    participants: 22,
  },
];

const seedEvent = async () => {
  try {
    //drop collection
    await Event.collection.drop();

    // Seed data
    await Event.insertMany(events);

    console.log("Seed Events suceffully!");
  } catch (err) {
    console.error("Seed Events error ", err);
    process.exit(1);
  }
};

module.exports = seedEvent;
