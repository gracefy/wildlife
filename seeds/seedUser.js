const User = require('../models/userModel');
const Address = require('../models/addressModel');

// Import bcrypt
const bcrypt = require('bcryptjs');

// create a map for address
const addressMapping = async () => {
  const addresses = await Address.find({});
  const map = {};
  addresses.forEach(address => {
    map[address.fname] = address._id;
  });
  return map;
}

const userData = async () => {
  const addressMap = await addressMapping();

  return [
    {
      username: 'Grace',
      email: 'grace@test.com',
      password: 'grace123',
      address: addressMap['Grace']

    },
    {
      username: 'Harpreet',
      email: 'harpreet@test.com',
      password: 'harpreet123',
      address: addressMap['Harpreet']
    },
    {
      username: 'Jasleen',
      email: 'jasleen@test.com',
      password: 'jasleen123',
    },
    {
      username: 'Vikas',
      email: 'vikas@test.com',
      password: 'vikas123',
    }
  ];

}

// Insert user data
const seedUser = async () => {
  try {
    await User.deleteMany();

    const users = await userData();

    for (let user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }

    await User.insertMany(users);

    console.log('User data imported successfully');

  } catch (error) {
    console.error('Error importing user data', error);
    process.exit(1);
  }
}

// Export the seed data
module.exports = seedUser;