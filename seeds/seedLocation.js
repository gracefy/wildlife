const Location = require('../models/locationModel');

const locations = [

  {
    name: 'Rattlesnake Point Conservation Area',
    city: 'Milton',
    province: 'ON',
    address: '7200 Appleby Line',
    postalCode: 'L9T 2Y1',
    lat: 43.4716,
    lng: -79.9127,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Rattlesnake Point Conservation Area is a protected area in Milton, Ontario, Canada. It is located on the Niagara Escarpment and is part of the Halton Parks system.',
  },
  {
    name: 'Toronto Zoo',
    city: 'Toronto',
    province: 'ON',
    address: '2000 Meadowvale Rd',
    postalCode: 'M1B 5K7',
    lat: 43.6221,
    lng: -79.7567,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'The Toronto Zoo is a zoo located in Toronto, Ontario, Canada. Encompassing 287 hectares, the Toronto Zoo is the largest zoo in Canada.',
  },
  {
    name: 'Ripley\'s Aquarium of Canada',
    city: 'Toronto',
    province: 'ON',
    address: '288 Bremner Blvd',
    postalCode: 'M5V 3L9',
    lat: 43.6424,
    lng: -79.3860,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Ripley\'s Aquarium of Canada is a public aquarium in Toronto, Ontario, Canada. The aquarium is one of three aquariums owned and operated by Ripley Entertainment.',
  },
  {
    name: 'Gatineau Park',
    city: 'Ottawa',
    province: 'ON',
    address: '33 Scott Rd',
    postalCode: 'J9B 1R5',
    lat: 45.5284,
    lng: -75.8866,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Gatineau Park is a federal park located in the Outaouais region of Quebec, Canada. The park lies north of Ottawa, and straddles the border between Quebec and Ontario.',
  },
  {
    name: 'Royal Botanical Gardens',
    city: 'Hamilton',
    province: 'ON',
    address: '680 Plains Rd W',
    postalCode: 'L7T 4H4',
    lat: 43.2770,
    lng: -79.8745,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Royal Botanical Gardens (RBG) is headquartered in Burlington and also owns extensive natural areas and gardens lands in Hamilton, Ontario, Canada.',
  },
  {
    name: 'Bruce Peninsula National Park',
    city: 'Tobermory',
    province: 'ON',
    address: '121 Hwy 6',
    postalCode: 'N0H 2R0',
    lat: 45.2484,
    lng: -81.3665,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Bruce Peninsula National Park is a national park on the Bruce Peninsula in Ontario, Canada. Located on a part of the Niagara Escarpment, the park comprises 156 square kilometers and is one of the largest protected areas in southern Ontario.',
  },
  {
    name: 'Point Pelee National Park',
    city: 'Leamington',
    province: 'ON',
    address: '1118 Point Pelee Dr',
    postalCode: 'N8H 3V4',
    lat: 41.9586,
    lng: -82.5174,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Point Pelee National Park is a national park in Essex County in southwestern Ontario, Canada where it extends into Lake Erie. The word pelee, is French for bald.',
  },
  {
    name: 'Algonquin Provincial Park',
    city: 'Whitney',
    province: 'ON',
    address: 'Highway 60',
    postalCode: 'K0J 2M0',
    lat: 45.8372,
    lng: -78.3792,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Algonquin Provincial Park is a provincial park located between Georgian Bay and the Ottawa River in Ontario, Canada, mostly within the Unorganized South Part of Nipissing District.',
  },
  {
    name: 'Pukaskwa National Park',
    city: 'Heron Bay',
    province: 'ON',
    address: 'Hwy 627',
    postalCode: 'P0T 1R0',
    lat: 48.6664,
    lng: -86.2071,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Pukaskwa National Park is a national park located south of the town of Marathon, Ontario in the Thunder Bay District of northern Ontario, Canada.',
  },
  {
    name: 'St. Lawrence River',
    city: 'Kingston',
    province: 'ON',
    address: '1000 Islands Pkwy',
    postalCode: 'K7G 2V4',
    lat: 44.3341,
    lng: -76.2711,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'The St. Lawrence River is a large river in the middle lats of North America. The river serves as part of the international boundary between the United States and Canada.',
  },
  {
    name: 'Lake Superior Provincial Park',
    city: 'Wawa',
    province: 'ON',
    address: 'Hwy 17',
    postalCode: 'P0S 1K0',
    lat: 47.7500,
    lng: -84.8333,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Lake Superior Provincial Park is one of the largest provincial parks in Ontario, covering about 1,550 square kilometers along the northeastern shores of Lake Superior between Sault Ste. Marie in Algoma District, and Wawa in Northeastern Ontario, Canada.',
  },
  {
    name: 'Killarney Provincial Park',
    city: 'Killarney',
    province: 'ON',
    address: '960 Hwy 637',
    postalCode: 'P0M 2A0',
    lat: 45.9833,
    lng: -81.5167,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Killarney Provincial Park is a provincial park in central Ontario, Canada. It is on the northern shore of Georgian Bay on Lake Huron.',
  },
  {
    name: 'Bon Echo Provincial Park',
    city: 'Cloyne',
    province: 'ON',
    address: '16151 Hwy 41',
    postalCode: 'K0H 1K0',
    lat: 44.8973,
    lng: -77.2071,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Bon Echo Provincial Park is a provincial park in southeastern Ontario north of Kaladar, approximately 6 kilometers north of Cloyne. The park occupies an area of 67.74 square kilometers on Mazinaw Lake, abutting the eastern shores of the lake.',
  },
  {
    name: 'Sandbanks Provincial Park',
    city: 'Picton',
    province: 'ON',
    address: '3004 County Rd 12',
    postalCode: 'K0K 2T0',
    lat: 43.9478,
    lng: -77.3583,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Sandbanks Provincial Park is a provincial park located on Lake Ontario in Prince Edward County near Picton, Ontario, Canada. It is noted for its picturesque sand dunes and beaches.',
  },
  {
    name: 'Pinery Provincial Park',
    city: 'Grand Bend',
    province: 'ON',
    address: '9526 Lakeshore Rd',
    postalCode: 'N0M 1T0',
    lat: 43.2481,
    lng: -81.8998,
    image: 'aflive.qiniu.huangmeimi.com/uPic/ecologo.png',
    desc: 'Pinery Provincial Park is a provincial park located on Lake Huron near Grand Bend, Ontario. It occupies an area of 25.32 square kilometers.',
  }

]

const seedLocation = async () => {

  try {

    // Drop collection
    await Location.collection.drop();

    // Seed data
    await Location.insertMany(locations);

    console.log('Seed Locations suceffully!');

  } catch (err) {
    console.error('Seed locations error: ', err);
    process.exit(1);
  }
}

module.exports = seedLocation;