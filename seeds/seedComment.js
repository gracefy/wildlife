const Comment = require('../models/commentModel');
const User = require('../models/userModel');
const Blog = require('../models/blogModel');

//create a map for user
const userMapping = async () => {
  const users = await User.find({});
  const map = {};
  users.forEach(user => {
    map[user.username] = user._id;
  });
  return map;
}

//create a map for blog
const blogMapping = async () => {
  const blogs = await Blog.find({});
  const map = {};
  blogs.forEach(blog => {
    map[blog.title] = blog._id;
  });
  return map;
}

const commentData = async () => {
  const userMap = await userMapping();
  const blogMap = await blogMapping();

  return [
    {
      userid: userMap['Grace'],
      blogid: blogMap['Camping in Ontario: Top Spots and Tips'],
      content: 'This is a great blog post!',
      createAt: new Date('2024-03-01')
    },
    {
      userid: userMap['Harpreet'],
      blogid: blogMap['Best Locations and Seasons for Fishing in Ontario'],
      content: 'I like this blog post!',
      createAt: new Date('2024-05-02')
    },
    {
      userid: userMap['Jasleen'],
      blogid: blogMap['Camping in Ontario: Top Spots and Tips'],
      content: 'Nice blog post!',
      createAt: new Date('2024-04-01')
    },
    {
      userid: userMap['Vikas'],
      blogid: blogMap['Best Locations and Seasons for Fishing in Ontario'],
      content: 'Great blog post!',
      createAt: new Date('2024-06-02')
    }
  ];
}

// Insert comment data
const seedComment = async () => {
  try {
    await Comment.deleteMany();

    const comments = await commentData();

    await Comment.insertMany(comments);

    console.log('Comment data imported successfully');

  } catch (error) {
    console.error('Error importing comment data', error);
    process.exit(1);
  }
};

module.exports = seedComment;