const Blog = require("../models/blogModel");

const blogs = [
  {
    title: "Exploring the Wildlife of Ontario",
    author: "Jane Smith",
    image: "/images/blogs/elephant.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Ontario is home to a diverse range of wildlife. In this blog, we explore some of the most fascinating creatures found in this beautiful province.</p>
      <h3>Birds</h3>
      <p>Ontario is a haven for birdwatchers. Some of the most common birds you can spot include:</p>
      <ul>
        <li>Blue Jay</li>
        <li>Cardinal</li>
        <li>Bald Eagle</li>
      </ul>
      <h3>Mammals</h3>
      <p>From moose to black bears, Ontario is rich in mammal species. Here are a few you might encounter:</p>
      <ul>
        <li>Moose</li>
        <li>Black Bear</li>
        <li>Beaver</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Exploring the wildlife in Ontario can be a thrilling experience. Whether you're a seasoned naturalist or a curious beginner, there's always something new to discover.</p>
    `,
    excerpt:
      "Discover the diverse wildlife of Ontario and learn about the unique creatures that inhabit this province.",
    tags: ["wildlife", "Ontario", "nature"],
    createAt: new Date("2023-05-15T08:00:00Z"),
    updateAt: new Date("2023-05-15T08:00:00Z"),
  },
  {
    title: "A Guide to Bird Watching in Ontario",
    author: "John Doe",
    image: "/images/blogs/eagle.jpg",
    content: `
      <h2>Getting Started with Bird Watching</h2>
      <p>Bird watching is a popular activity in Ontario. This guide will help you get started, from choosing the right equipment to finding the best spots.</p>
      <h3>Essential Equipment</h3>
      <p>To start bird watching, you'll need:</p>
      <ul>
        <li>A good pair of binoculars</li>
        <li>A field guide to birds</li>
        <li>Comfortable clothing and footwear</li>
      </ul>
      <h3>Top Bird Watching Locations</h3>
      <p>Some of the best places to watch birds in Ontario include:</p>
      <ul>
        <li>Point Pelee National Park</li>
        <li>Algonquin Provincial Park</li>
        <li>Presqu'ile Provincial Park</li>
      </ul>
      <h3>Tips for Success</h3>
      <p>Here are some tips to help you get the most out of your bird watching experience:</p>
      <ul>
        <li>Be patient and quiet</li>
        <li>Go bird watching early in the morning</li>
        <li>Keep a record of the birds you see</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Bird watching in Ontario is a rewarding and enjoyable activity. With the right equipment and knowledge, you can have a successful bird watching experience.</p>
    `,
    excerpt:
      "Learn how to start bird watching in Ontario with this comprehensive guide.",
    tags: ["bird watching", "Ontario", "guide"],
    createAt: new Date("2023-06-20T08:00:00Z"),
    updateAt: new Date("2023-06-20T08:00:00Z"),
  },
  {
    title: "The Best Hiking Trails in Ontario",
    author: "Alice Johnson",
    image: "/images/blogs/hiking.jpg",
    content: `
      <h2>Top Hiking Trails</h2>
      <p>Ontario offers some of the best hiking trails in Canada. From scenic routes to challenging climbs, this blog covers the top trails you should explore.</p>
      <h3>Scenic Trails</h3>
      <p>For breathtaking views, consider these scenic trails:</p>
      <ul>
        <li>Bruce Trail</li>
        <li>La Cloche Silhouette Trail</li>
        <li>Bon Echo Provincial Park Trails</li>
      </ul>
      <h3>Challenging Trails</h3>
      <p>If you're looking for a challenge, try these trails:</p>
      <ul>
        <li>Maple Mountain</li>
        <li>Frontenac Challenge</li>
        <li>Lake Superior Coastal Trail</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Whether you're a beginner or an experienced hiker, Ontario has a trail for you. Get out and explore the natural beauty of this incredible province.</p>
    `,
    excerpt:
      "Explore the best hiking trails in Ontario, perfect for all skill levels.",
    tags: ["hiking", "Ontario", "trails"],
    createAt: new Date("2023-07-10T08:00:00Z"),
    updateAt: new Date("2023-07-10T08:00:00Z"),
  },
  {
    title: "Camping in Ontario: Top Spots and Tips",
    author: "Robert Brown",
    image: "/images/blogs/camping.jpg",
    content: `
      <h2>Camping in Ontario</h2>
      <p>Camping is a great way to experience the natural beauty of Ontario. This blog provides tips on the best camping spots and how to prepare for your trip.</p>
      <h3>Top Camping Spots</h3>
      <p>Here are some of the best places to camp in Ontario:</p>
      <ul>
        <li>Algonquin Provincial Park</li>
        <li>Bruce Peninsula National Park</li>
        <li>Killarney Provincial Park</li>
      </ul>
      <h3>Camping Tips</h3>
      <p>For a successful camping trip, keep these tips in mind:</p>
      <ul>
        <li>Plan ahead and book your campsite early</li>
        <li>Pack essential gear and supplies</li>
        <li>Follow Leave No Trace principles</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Camping in Ontario offers a unique opportunity to connect with nature. With these tips and top spots, you're ready for an unforgettable adventure.</p>
    `,
    excerpt:
      "Find the best camping spots in Ontario and get tips for a successful trip.",
    tags: ["camping", "Ontario", "tips"],
    createAt: new Date("2023-08-05T08:00:00Z"),
    updateAt: new Date("2023-08-05T08:00:00Z"),
  },
  {
    title: "Fishing in Ontario: Best Locations and Seasons",
    author: "Emily Davis",
    image: "/images/blogs/fishing.jpg",
    content: `
      <h2>Fishing in Ontario</h2>
      <p>Ontario is a paradise for anglers. This blog covers the best fishing locations and the ideal seasons for various types of fish.</p>
      <h3>Best Fishing Locations</h3>
      <p>Some of the top fishing spots in Ontario include:</p>
      <ul>
        <li>Lake Ontario</li>
        <li>Lake Simcoe</li>
        <li>Lake Nipissing</li>
      </ul>
      <h3>Optimal Seasons</h3>
      <p>For the best fishing experience, consider these seasons:</p>
      <ul>
        <li>Spring: Great for trout and salmon</li>
        <li>Summer: Ideal for bass and pike</li>
        <li>Fall: Excellent for walleye and muskie</li>
      </ul>
      <h3>Conclusion</h3>
      <p>With its abundant lakes and rivers, Ontario offers fantastic fishing opportunities year-round. Plan your trip and enjoy a day on the water.</p>
    `,
    excerpt:
      "Discover the best fishing spots in Ontario and the optimal seasons for fishing.",
    tags: ["fishing", "Ontario", "seasons"],
    createAt: new Date("2023-09-01T08:00:00Z"),
    updateAt: new Date("2023-09-01T08:00:00Z"),
  },
  {
    title: "The Best Hiking Trails in Ontario",
    author: "Alice Johnson",
    image: "/images/blogs/hiking.jpg",
    content: `
      <h2>Top Hiking Trails</h2>
      <p>Ontario offers some of the best hiking trails in Canada. From scenic routes to challenging climbs, this blog covers the top trails you should explore.</p>
      <h3>Scenic Trails</h3>
      <p>For breathtaking views, consider these scenic trails:</p>
      <ul>
        <li>Bruce Trail</li>
        <li>La Cloche Silhouette Trail</li>
        <li>Bon Echo Provincial Park Trails</li>
      </ul>
      <h3>Challenging Trails</h3>
      <p>If you're looking for a challenge, try these trails:</p>
      <ul>
        <li>Maple Mountain</li>
        <li>Frontenac Challenge</li>
        <li>Lake Superior Coastal Trail</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Whether you're a beginner or an experienced hiker, Ontario has a trail for you. Get out and explore the natural beauty of this incredible province.</p>
    `,
    excerpt:
      "Explore the best hiking trails in Ontario, perfect for all skill levels.",
    tags: ["hiking", "Ontario", "trails"],
    createAt: new Date("2023-07-10T08:00:00Z"),
    updateAt: new Date("2023-07-10T08:00:00Z"),
  },
  {
    title: "Best Locations and Seasons for Fishing in Ontario",
    author: "Emily Davis",
    image: "/images/blogs/fishing.jpg",
    content: `
      <h2>Fishing in Ontario</h2>
      <p>Ontario is a paradise for anglers. This blog covers the best fishing locations and the ideal seasons for various types of fish.</p>
      <h3>Best Fishing Locations</h3>
      <p>Some of the top fishing spots in Ontario include:</p>
      <ul>
        <li>Lake Ontario</li>
        <li>Lake Simcoe</li>
        <li>Lake Nipissing</li>
      </ul>
      <h3>Optimal Seasons</h3>
      <p>For the best fishing experience, consider these seasons:</p>
      <ul>
        <li>Spring: Great for trout and salmon</li>
        <li>Summer: Ideal for bass and pike</li>
        <li>Fall: Excellent for walleye and muskie</li>
      </ul>
      <h3>Conclusion</h3>
      <p>With its abundant lakes and rivers, Ontario offers fantastic fishing opportunities year-round. Plan your trip and enjoy a day on the water.</p>
    `,
    excerpt:
      "Discover the best fishing spots in Ontario and the optimal seasons for fishing.",
    tags: ["fishing", "Ontario", "seasons"],
    createAt: new Date("2023-09-01T08:00:00Z"),
    updateAt: new Date("2023-09-01T08:00:00Z"),
  },
  {
    title: "Camping in Ontario: Top Spots and Tips",
    author: "Robert Brown",
    image: "/images/blogs/camping.jpg",
    content: `
      <h2>Camping in Ontario</h2>
      <p>Camping is a great way to experience the natural beauty of Ontario. This blog provides tips on the best camping spots and how to prepare for your trip.</p>
      <h3>Top Camping Spots</h3>
      <p>Here are some of the best places to camp in Ontario:</p>
      <ul>
        <li>Algonquin Provincial Park</li>
        <li>Bruce Peninsula National Park</li>
        <li>Killarney Provincial Park</li>
      </ul>
      <h3>Camping Tips</h3>
      <p>For a successful camping trip, keep these tips in mind:</p>
      <ul>
        <li>Plan ahead and book your campsite early</li>
        <li>Pack essential gear and supplies</li>
        <li>Follow Leave No Trace principles</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Camping in Ontario offers a unique opportunity to connect with nature. With these tips and top spots, you're ready for an unforgettable adventure.</p>
    `,
    excerpt:
      "Find the best camping spots in Ontario and get tips for a successful trip.",
    tags: ["camping", "Ontario", "tips"],
    createAt: new Date("2023-10-05T08:00:00Z"),
    updateAt: new Date("2023-10-05T08:00:00Z"),
  },
];

const seedBlog = async () => {
  try {
    //drop collection
    await Blog.collection.drop();

    // Seed data
    await Blog.insertMany(blogs);

    console.log("Seed Blogs suceffully!");
  } catch (err) {
    console.error("Seed Blogs error ", err);
    process.exit(1);
  }
};

module.exports = seedBlog;
