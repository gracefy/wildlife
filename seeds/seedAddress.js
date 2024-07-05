const Address = require('../models/addressModel');

const addressData = [
  {
    fname: 'Grace',
    lname: 'Ye',
    phone: '1122234455',
    street: '123 Main St',
    city: 'Toronto',
    province: 'ON',
    postal: 'M1M 1M1',
  },
  {
    fname: 'Harpreet',
    lname: 'Kaur',
    phone: '1122234455',
    street: '123 Main St',
    city: 'Toronto',
    province: 'ON',
    postal: 'M1M 1M1',
  }
];


// Insert address data
const seedAddress = async () => {
  try {
    await Address.deleteMany();

    await Address.insertMany(addressData);

    console.log('Address data imported successfully');

  } catch (error) {
    console.error('Error importing address data', error);
    process.exit(1);
  }
};

module.exports = seedAddress;