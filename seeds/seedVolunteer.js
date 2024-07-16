const Volunteer = require('../models/volunteerModel');
const User = require('../models/userModel');
const Event = require('../models/eventModel');

//create a map for user
const userMapping = async () => {
  const users = await User.find({});
  const map = {};
  users.forEach(user => {
    map[user.username] = user._id;
  });
  return map;
}

//create a map for event
const eventMapping = async () => {
  const events = await Event.find({});
  const map = {};
  events.forEach(event => {
    map[event.title] = event._id;
  });
  return map;
}

const volunteerData = async () => {
  const userMap = await userMapping();
  const eventMap = await eventMapping();

  return [
    {
      user: userMap['Jasleen'],
      event: eventMap['Bird-Watching'],
      intro: 'I am excited to join this event',
      createAt: new Date('2024-03-01')
    },
    {
      user: userMap['Harpreet'],
      event: eventMap['Bird-Watching'],
      intro: 'I am looking forward to this event',
      createAt: new Date('2024-05-02')
    },
    {
      user: userMap['Jasleen'],
      event: eventMap['Marine Life Exploration'],
      intro: 'I am excited to join this event',
      createAt: new Date('2024-04-01')
    },
    {
      user: userMap['Vikas'],
      event: eventMap['Jungle Trek'],
      intro: 'I am looking forward to this event',
      createAt: new Date('2024-06-02')
    }
  ];
}

// Insert volunteer data
const seedVolunteer = async () => {
  try {
    await Volunteer.deleteMany();
    const volunteer = await volunteerData();
    await Volunteer.insertMany(volunteer);
    console.log('Volunteer data seeded successfully!');
  } catch (error) {
    console.log('Error in seeding volunteer data', error.message);
  }
}

module.exports = seedVolunteer;