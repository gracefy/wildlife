const { create } = require('../models/addressModel');
const Donate = require('../models/donateModel');
const User = require('../models/userModel');

//create a map for user
const userMapping = async () => {
  const users = await User.find({});
  const map = {};
  users.forEach(user => {
    map[user.username] = user._id;
  });
  return map;
}


// donate data
const donateData = async () => {

  const userMap = await userMapping();

  return [
    {
      userid: userMap['Grace'],
      amount: 20,
      createAt: new Date('2024-03-01'),
      status: 'completed'
    },
    {
      userid: userMap['Harpreet'],
      amount: 5,
      createAt: new Date('2024-05-02'),
      status: 'completed'
    },
    {
      userid: userMap['Jasleen'],
      amount: 15,
      createAt: new Date('2024-04-01'),
      staus: 'completed'
    },
    {
      userid: userMap['Vikas'],
      amount: 30,
      createAt: new Date('2024-06-02'),
      status: 'completed'
    },
    {
      userid: userMap['Vikas'],
      amount: 100,
      createAt: new Date('2024-06-02'),
      status: 'completed'
    },
    {
      userid: userMap['Grace'],
      amount: 600,
      createAt: new Date('2024-03-01'),
      status: 'completed'
    },
    {
      userid: userMap['Harpreet'],
      amount: 700,
      createAt: new Date('2024-05-02'),
      status: 'completed'

    },
    {
      userid: userMap['Jasleen'],
      amount: 800,
      createAt: new Date('2024-04-01'),
      status: 'completed'
    },
    {
      userid: userMap['Harpreet'],
      amount: 300,
      createAt: new Date('2024-05-02'),
      status: 'completed'
    },
    {
      userid: userMap['Grace'],
      amount: 200,
      createAt: new Date('2024-03-01'),
      status: 'completed'
    }
  ];
};

const seedDonation = async () => {
  try {
    await Donate.deleteMany();
    const donations = await donateData();
    await Donate.insertMany(donations);

    console.log('Donation data imported successfully!');
  } catch (error) {
    console.error('Error importing Donation data', error);
    process.exit(1);
  }
}

// Export seedDonation
module.exports = seedDonation;