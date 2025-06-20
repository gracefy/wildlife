const AnimalType = require("../models/animalTypeModel");

const animalTypes = [
  {
    name: "Mammal",
    image: "/images/types/type1.jpg",
    order: 1,
    desc: `<p>Mammals are a group of animals that are warm-blooded and have hair or fur. They are vertebrates, which means they have a backbone. Mammals are found all over the world and come in all shapes and sizes. Some mammals, like elephants and whales, are very large, while others, like mice and shrews, are very small.</p>
    <p>Mammals are also very diverse in their habitats, with some living in the ocean, some in the desert, and some in the forest. Mammals are an important part of the ecosystem and play a vital role in maintaining the balance of nature.</p>`,
  },
  {
    name: "Bird",
    image: "/images/types/type2.jpg",
    order: 2,
    desc: `<p>Birds are a group of animals that have feathers, wings, and lay eggs. They are warm-blooded and are found all over the world. Birds come in all shapes and sizes, from the tiny hummingbird to the large ostrich. Birds are an important part of the ecosystem and play a vital role in maintaining the balance of nature.</p>
    <p>There are over 10,000 species of birds in the world, and they can be found in almost every habitat, from the desert to the rainforest. Birds are also known for their beautiful songs and bright colors, which have made them a favorite of birdwatchers and nature lovers.</p>`,
  },
  {
    name: "Reptile",
    image: "/images/types/type3.jpg",
    order: 3,
    desc: `<p>Reptiles are a group of animals that are cold-blooded and have scales or scutes. They are vertebrates, which means they have a backbone. Reptiles are found all over the world and come in all shapes and sizes. Some reptiles, like snakes and lizards, are very large, while others, like turtles and tortoises, are very small.</p>
    <p>Reptiles are also very diverse in their habitats, with some living in the desert, some in the rainforest, and some in the ocean. Reptiles are an important part of the ecosystem and play a vital role in maintaining the balance of nature.</p>`,
  },
];

const seedAnimalType = async () => {
  try {
    //drop collection
    await AnimalType.collection.drop();

    // Seed data
    await AnimalType.insertMany(animalTypes);

    console.log("Seed AnimalTypes suceffully!");
  } catch (err) {
    console.error("Seed AnimalTypes error ", err);
    process.exit(1);
  }
};

module.exports = seedAnimalType;
