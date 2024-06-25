
const Animal = require('../models/animalModel');
const AnimalType = require('../models/animalTypeModel');
const Location = require('../models/locationModel');

//create a map of animal types
const animalTypeMap = async () => {
  const animalTypes = await AnimalType.find();
  const map = {};
  animalTypes.forEach(type => {
    map[type.name] = type._id;
  });
  return map;
};

//create a map of locations
const locationMap = async () => {
  const locations = await Location.find();
  const map = {};
  locations.forEach(location => {
    map[location.name] = location._id;
  });
  return map;
};


const animalData = async () => {
  const typeMap = await animalTypeMap();
  const locMap = await locationMap();

  return [
    {
      type: typeMap['Mammal'],
      name: 'Raccoon',
      order: 50,
      habitat: 'forests, marshes, prairies, and urban areas',
      diet: 'aquatic plants, insects, and fish',
      reproduction: 'Usually between 3-5 eyes closed kits are born in April, each weighing about 2 ounces.',
      image: 'aflive.qiniu.huangmeimi.com/uPic/raccoon.jpg',
      endangered: false,
      desc: `<p>Raccoons are not only very skilled climbers but they are also very intelligent animals. 
    Raccoons have adapted very well to city living, in fact studies have shown that raccoon’s in the city will have a greater population density than raccoons in a more natural area.</p>
    <p>Raccoons have a wide range of vocalizations including trills and screams, which they use to settle disputes rather than physical aggression. Raccoons’ intelligence prompts them to avoid confrontations with pets or other animals so they don’t risk injury.</p>`,
      special: '',
      species: [],
      locations: [locMap['Rattlesnake Point Conservation Area'], locMap['Toronto Zoo'], locMap['Ripley\'s Aquarium of Canada']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Squirrel',
      order: 49,
      habitat: 'forests, parks, urban areas',
      diet: 'Nuts, buds, berries, flowers, leaves and seeds',
      reproduction: 'Usually 3-5 naked, eyes closed young are born in the spring and again to a lesser extent in late summer. Young remain with the mother for about 3.5 months.',
      image: 'aflive.qiniu.huangmeimi.com/uPic/squirrel.jpg',
      endangered: false,
      desc: `<p>The grey squirrel is the most common species of squirrel found. The name is misleading in that members of this species can be grey, dark brown or black.</p>`,
      special: `<p>These clever creatures have adapted extremely well and thrive in cities throughout North America. They provide a spectacular show in acrobatics 
    jumping from tree to tree and balancing on power lines. Although they can seek out attics and sheds, especially during the short birthing seasons, 
    for the most part they create magnificent leaf nests in hardwood trees. Mothers will seek out alternate shelter during the spring since young, 
    who are born helpless, furless and with their eyes closed are very vulnerable to predation from crows, blue jays and other animals. 
    Attics provide a short-term safe haven until babies are mobile and active, at about 8 weeks.</p>`,
      species: [],
      locations: [locMap['Rattlesnake Point Conservation Area'], locMap['Gatineau Park'], locMap['Royal Botanical Gardens']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Deer',
      order: 48,
      habitat: 'In the summer, diet includes green leaves, grass and acorns. The winter diet includes more woody vegetation such as twigs.',
      diet: 'grasses, leaves, shoots, berries',
      reproduction: 'Usually 2 fawns are born in the spring. Although young can stand and are mobile they cannot travel long distances with mom while she forages for food. Instead mom stashes the young (if twins are born they are stashed separately) in tall grasses where they will be safe, until she returns. If you find a fawn, leave it alone, mom is nearby.',
      image: 'aflive.qiniu.huangmeimi.com/uPic/deer.jpg',
      endangered: false,
      desc: '<p>The deer that are found in and around a city seem to have a greater tolerance for human activity, dogs and traffic. They are often seen foraging in a field near the roadside, or bedding down in a wooded area near houses, and even visiting bird feeders in residential areas.</p><p>Deer are tremendous athletes, they are good swimmers, can run at speeds of 35mph and can jump as high as 8 ft.</p>',
      special: '',
      species: [],
      locations: [locMap['Bruce Peninsula National Park'], locMap['Pukaskwa National Park'], locMap['Point Pelee National Park'], locMap['Royal Botanical Gardens']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Skunk',
      order: 47,
      habitat: 'forests, grasslands, suburban areas',
      diet: 'Skunks are omnivore, with the ability to survive on variety wild vegetation, fruits and small animals, reptiles and insects, and water. It is not unusual for them to be out in the day looking for food.',
      reproduction: "Striped Skunks in Ontario are born in May and early June, and average about 6-7 to a litter, can be 16! Their stripes can be full body length or a horseshoe shape. They also have a nose stripe which varies from ‘toothpicks’ to a ‘U’. Their home is a dark den underground or in under a shed, or porch.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/skunk.jpg',
      endangered: false,
      desc: "<p>Skunks do not see well past three feet. Sudden movements and noises will scare them. Move slowly in ultra-slow motions if the tail is and speak calmly. If they are going to spray, they go ‘into the position’ which is an awkward U shape. They look at you to aim and their butt faces you at the same time to fire. A skunk can’t climb, has no depth perception, and will fall into window wells, holes, even inground pools and will require help to get out.</p>",
      special: "<h5>Skunk Spray on the dog or you</h5><ul><li>¼ C Baking Soda</li><li>1 teaspoon dishwashing detergent</li><li>1quart Hydrogen Peroxide</li><li>The detergent breaks down the oil in the spray and the peroxide brings it to the surface and the baking soda neutralizes the Thiols [odor].</li></ul>",
      species: [],
      locations: [locMap['Toronto Zoo'], locMap['Algonquin Provincial Park'], locMap['Pukaskwa National Park']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Groundhog',
      order: 46,
      habitat: 'fields, meadows, woodlands',
      diet: 'clover, dandelions, grasses, fruit and vegetables.',
      reproduction: "Usually 4-5 naked, eyes closed young are born in May. The young develop quickly and will be on their own within 3 months.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/groundhog.jpg',
      endangered: false,
      desc: '<p>They are often found burrowing in grassy areas, or in berms or banks along other roads. Also know as a woodchuck, the groundhog’s coat can be a range of brownish colours and there are even populations of entirely black-furred groundhogs which often surprises people. Perhaps this is why they have been mistaken for a muskrat, beaver, porcupine and even an otter!</p><p>The woodchuck is a rodent. This means it front teeth, both the top and bottom, never stop growing. This great digger excavates a den in the ground to call home. The home is very effective at keeping the animal safe and when it senses danger it will run to the safety of its den.</p>',
      special: '',
      species: [],
      locations: [locMap['Lake Superior Provincial Park'], locMap['Pukaskwa National Park'], locMap['Toronto Zoo'], locMap['Rattlesnake Point Conservation Area']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Rabbit',
      order: 45,
      habitat: 'N/A',
      diet: 'Green leaves, shrubs, twigs and bark',
      reproduction: "Rabbits usually have 3-4 litters a year. Although litter size can vary, the average is size is about 4-7. Young are born helpless, naked and with their eyes closed.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/rabbit.jpg',
      endangered: false,
      desc: '<p>Eastern Cottontail Rabbits are a species that have adapted very well to city living and cultivated landscapes. In fact rabbits can make do with a small patch of grass and shrubs surrounded by a parking lot.</p><p>Many people find this out first hand when they discover a nest in their yard, next to their step, under a shrub or even in the middle of their lawn. The nest consists of grasses and twigs and mother’s fur and often seems to be very exposed.</p><p>People who stumble upon the nest understandably think the nest has been abandoned as there is rarely a sign of a rabbit nearby. She normally visits only 1-2 times over a 24 hour period, generally overnight and at dawn, to feed and tend to the young. If you find a nest of baby rabbits, the best thing to do is leave them alone, if you have pets you can keep them from the area for a few weeks, to give the fast growing rabbits a chance to grow and disperse.</p>',
      special: '',
      species: [],
      locations: [locMap['Rattlesnake Point Conservation Area'], locMap['Toronto Zoo'], locMap['Ripley\'s Aquarium of Canada']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Black Bear',
      order: 44,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "Birth Month: January. Litter Size: Typically 3 in Ontario. First litters often 1 or 2. Birth Weight: 1/2 pound. Weight at 1 Year: 15 pounds to more than 100 pounds, depending on food supply. Parental Care: 17 months (rarely 29 months), ending in June when mothers become ready to mate again.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/blackbear.jpg',
      endangered: false,
      desc: '<p>North American Black Bear: Colour: Body fur black, brown, blonde, or rarely white. Brown muzzle. White chest patch on some not all, always unique. Eyes brown (blue at birth).</p><p>Adult Weight & Length: Males: up to 500 pounds common, depending upon age, season, and food. Females: 90 to 300 pounds common. 50 to 80 inches, nose to tail, depending on sex.</p>',
      special: '<ul><li><b>Vision:</b> Color vision. Good near vision. Vision appears to equal humans.</li><li><b>Hearing:</b> Smelling ability is extremely good.</li><li><b>Sounds:</b> Grunts, loud blowing, and a resonant "voice". Does not threaten by growling.</li><li><b>Intelligence:</b> One of the most intelligent North American mammals. Long-term memory excellent. Heaviest brain, relative to body length, of any land carnivore.</li><li><b>Swimming:</b>  excellent long distance swimmer.</li><li><b>Running:</b></li> Lean bears may exceed 30 mph. Fat bears in winter readiness tire and overheat quickly.<li><b>Daily Activity:</b> Typically 1/2 hour before sunrise to 1 to 2 hours after sunset. Prefer to be active during daylight hours, however may become nocturnal to avoid people.</li><li><b>Potential Longevity:</b> 21-33 years and more.</li><li><b>Home Range Diameter:</b><ul><li>Yearlings: 1-2 miles.</li>><li>Adult females: 2-6 miles. Adult males: 8-15 miles.</li>><li>referred Foods: Fruit, nuts, acorns, insects, succulent greens, and meat.</li>><li>Hibernation: 0 to 7 months depending upon food supply.</li></ul></li></ul>',
      species: [],
      locations: [locMap['Point Pelee National Park'], locMap['Lake Superior Provincial Park'], locMap['Pukaskwa National Park']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Coyote',
      order: 43,
      habitat: 'N/A',
      diet: 'Rodents, rabbits and carrion comprise the majority of the diet but this opportunistic feeder also eats birds, insects and even garden vegetables.',
      reproduction: "Usually a litter of about 6 pups are born in the early spring and both parents provide care for the young.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/coyote.jpg',
      endangered: false,
      desc: '<p>These resourceful animals have adapted to virtually all habitat types throughout North America. One of the reasons is the coyote’s resourceful and opportunistic feeding habits. Basically it survives on whatever food is available, squirrels, mice, frogs, berries, garbage, vegetable gardens and even pets. They are very clever.</p><p>As coyotes will continue to be a part of our landscape, we must respond appropriately. Keeping small pets indoors, particularly during the evening hours and early morning, and also removing attractions such as pet food and garbage are some ways to coexist with coyotes.</p>',
      special: '',
      species: [],
      locations: [locMap['Lake Superior Provincial Park'], locMap['Pukaskwa National Park'], locMap['Rattlesnake Point Conservation Area']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Fox',
      order: 42,
      habitat: 'N/A',
      diet: 'Grasshoppers, mice, squirrels, rabbits, birds, fruit, berries, snakes and frogs',
      reproduction: "Pups are born in the spring in an underground den and are fully furred with their eyes closed. Litter size is usually between 4-7.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/fox.jpg',
      endangered: false,
      desc: '<p>The red fox is a member of the canine family, which is not surprising given their doglike appearance and behaviour. Foxes can be found throughout urban areas, usually adjacent to a natural area.</p><p>Red foxes normally weigh in the range of 8 to 15 lbs, about the size of a house cat but their lush fur often leads people to overestimate their size. To go with this small size is an equally small stomach, which is reflected in their primary menu choices of grasshoppers and mice.</p><p>When born the fur of the pups will be darkish brown. By the time the pups are about three months old their fur will become more reddish orange, their ears will be well developed, their nose elongated and their tail full and bushy with the red fox trademark of a white tip on the end.</p>',
      special: '',
      species: [],
      locations: [locMap['Toronto Zoo'], locMap['Pukaskwa National Park'], locMap['Rattlesnake Point Conservation Area']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Bobcat',
      order: 41,
      habitat: 'Primarily in the southern areas of Northwestern Ontario. Prefers hardwood forests, brushy scrubland, rocky mountainous areas and sometimes the wooded outskirts of inhabited areas.',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/bobcat.jpg',
      endangered: false,
      desc: '<p>Overall colouration, tawny brown above, dotted with numerous blackish spots along the midline of the back. Underside, whitish with dark spots. Short tail, blackish above and white below. Legs, tawny with blackish horizontal streaks. Prominent streaked ruff on cheeks extending below the jaw. Ears, short with dark ear tufts. Can be mistaken for a lynx but the bob cat has shorther legs and smaller feet.</p>',
      special: '',
      species: [],
      locations: [locMap['Pinery Provincial Park'], locMap['Killarney Provincial Park'], locMap['Pukaskwa National Park'], locMap['Rattlesnake Point Conservation Area']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Lynx',
      order: 40,
      habitat: 'Throughout Northwestern Ontario, primarily in dense mixwood forests with thick undergrowth. Also found in rocky forest areas.',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/lynx.jpg',
      endangered: false,
      desc: '<p>Overall colouration, varied, from bluish-gray to yellowish-brown; underparts, buff colour. Blackish stripes on forehead and on prominent ruff around neck; Tail, short with black tip. Ears, pointed with long black tufts. Feet, large coated with dense coars hairs.</p>',
      special: '',
      species: [],
      locations: [locMap['Rattlesnake Point Conservation Area'], locMap['Pukaskwa National Park'], locMap['Rattlesnake Point Conservation Area']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Eastern Cougar',
      order: 39,
      habitat: 'Much less common in Northwestern Ontario than in the past, although numerous sightings are still made every year. Although the mountain lion is a highly adaptive species, its range has been depleted in the wake of forestry, mining and urbanization. It can be sighted in a variety of habitats but prefers wooded areas with an abundant supply of food.',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/EasternCougar.jpg',
      endangered: false,
      desc: '<p>Overall colouration, varies from yellowy-brown to chocolate brown, sometimes tawny gray, darker along mid-back. Belly, pale buff; chest, inside of ears and throat, whitish. Back of ears, tip of tail and stripes around muzzle, blackish. Tail, long.</p>',
      special: '',
      species: [],
      locations: [locMap['Killarney Provincial Park'], locMap['Pukaskwa National Park'], locMap['Rattlesnake Point Conservation Area']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Timber Wolf',
      order: 38,
      habitat: 'N/A',
      diet: 'Wolves are carnivores and, depending on food availability, they will hunt their own prey, steal from others or scavenge. They hunt larger prey such as moose, caribou, elk, musk ox and bison in packs, and smaller prey, such as rabbits, beavers and other small animals by themselves.  Adults can eat 20 pounds of meat in a single meal.',
      reproduction: "The average Ontario litter contains five pups. The helpless new-borns are blind and have a woolly coat of greyish-brown or sooty grey. Their eyes open within the first 10 to 12 days, and the adult pelt pattern begins to emerge by the end of the first month. Gray wolves usually live in packs of up to two dozen individuals; packs numbering 6 to 10 are most common.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/TimberWolf.jpg',
      endangered: false,
      desc: '<p>The wolf has several common names, including “eastern timber wolf”, “grey wolf and “black wolf”. The wolf is about the size of a large German shepherd, but its legs are lankier and its chest is narrower. Males weigh from 27 to 36 kg (60 to 79 lbs), and northern wolves may be even heavier. Females are lighter by 5 to 7 kg (11 to 15 lbs) and have smaller frames. The southern boundary of the range corresponds to a line between the middle of Lake Simcoe and the northern part of Lanark County. </p><p>Wolves are found of Ontario where there are large forests. They can appear in a variety of colours, from white to brown to black, but is most often grey. Gray wolves are the largest living wild canine species.</p>',
      special: '',
      species: [],
      locations: [locMap['Bon Echo Provincial Park'], locMap['Pukaskwa National Park'], locMap['Rattlesnake Point Conservation Area']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Eastern Wolf',
      order: 37,
      habitat: 'N/A',
      diet: 'The Eastern Wolf mainly preys on ungulates like moose, caribou, elk, and deer, but their primary source is white-tailed deer. They will also prey on smaller mammals like beavers. Their diet is very dependent on what is available either seasonally or regionally.',
      reproduction: "Happens in February and pups are born in late April/ early May. The main breeding pair in the pack will give birth to 4-6 pups. Pups are nursed in the den for 6-8 weeks, and the whole pack will help feed and raise the pups.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/EasternWolf.jpg',
      endangered: false,
      desc: '<p>Eastern Wolves are larger than a Coyote and smaller than a Grey Wolf.  Usually found in deciduous and mixed forests (northern range) and coniferous and mixed forests (southern range). They have their dens closer to wetlands, water, conifers, on steep slopes, and away from roads. Concentration of Eastern Wolf is found in Algonquin Provincial Park.</p><p>Eastern Wolf is protection under Ontario’s Endangered Species Act. Females are generally 24 kg, and males are 29 kg. They have thick fur with variations of colour, from reddish-brown to black, white, or grey.</p>',
      special: '',
      species: [],
      locations: [locMap['Pinery Provincial Park'], locMap['Pukaskwa National Park'], locMap['Rattlesnake Point Conservation Area']]
    },
    {
      type: typeMap['Mammal'],
      name: 'Beaver',
      order: 36,
      habitat: 'N/A',
      diet: 'Leaves, buds, bark, aquatic vegetation',
      reproduction: "Usually 2-4 kits are born in the spring or early summer. When the kits are born they are well furred with their eyes open. Young can take to the water soon after birth and are skilled swimmers within a week or two. The kits remain with their parents for the first two years of their lives.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/beaver.jpg',
      endangered: false,
      desc: '<p>Although beavers will spend time on land, they are most at home in the water. Their body is well adapted to water living with webbed feet, a strong, flat tail which acts as a rudder, nostrils that can close, valves to close off its ears, a clear membrane to protect its eyes and even skin flaps to seal its mouth while leaving the front teeth exposed for chewing. Beavers can stay submerged for up to 15 minutes.</p><p>The wetlands that are created as a result of the dams beavers build are vital for countless species, including many at risk species. These wetlands also help us by preventing erosion and filtering toxins and excess nutrients from the water.</p>',
      special: '<h5>Muskrat or Beaver- what’s the difference?</h5><p>Another aquatic rodent found in Ottawa is the muskrat. These small mammals weigh approximately 2-3 lbs and have a long, furless tail, and can be found near most marshes and water sources around the city.</p><p>While there is a substantial size difference between the muskrat and the beaver, the latter, which can weigh in the range of 30- 50 lbs, sometimes people can get the two confused. A reason why may be that when swimming their sizes can be deceiving. A large portion of the muskrat’s small body is visible while usually only the head of the beaver’s large body is seen when swimming. So while on land you would never confuse the two, at a distance, when swimming, it can be a little trickier.</p>',
      species: [],
      locations: [locMap['Toronto Zoo'], locMap['Royal Botanical Gardens'], locMap['Ripley\'s Aquarium of Canada']]
    },
    {
      type: typeMap['Bird'],
      name: 'Bald Eagle',
      order: 35,
      habitat: 'N/A',
      diet: 'Feed on live or dead fish, aquatic birds, along with smaller mammals, amphibians and reptiles. Deer carcasses are a major source of food in Ontario’s winter. Keen vision allows them to see prey on the ground or in the water while in flight. Strong beaks and sharp talons grasp and carry away their food. They will steal prey of other birds especially Ospreys.',
      reproduction: "Sexual maturity is reached at 4-6 years of age. Nests are huge, constructed with sticks usually near the top of a tree and close to water.1-3 eggs are laid and approximately half will survive the first year.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/BaldEagle.jpg',
      endangered: false,
      desc: '<p>Wingspan of up to 2 m. These eagles don’t get their characteristic white head and dark brown body until they reach maturity at FIVE YEARS OLD. Until then, these birds have all sorts of different plumages and streaky browns and whites on their bodies. Even their beak changes colour. Females look similar to males, except they’re about 25% larger.</p><p>Juveniles have dark brown heads and bodies with variable white mottling or streaking until they reach their fifth year. Bald eagles make their homes in forested areas near large bodies of water.</p>',
      special: "<h5>Eagles of Ontario</h5><p>Two types of Eagles in Ontario. They are the Bald Eagle and Golden Eagle. Eagles are iconic ‘king of the skies’ due to their size and power. Once on Ontario's endangered species list have made a comeback in recent years. Eagles live to 25-40 years. Eagles also mate for life.</p>",
      species: [],
      locations: [locMap['Point Pelee National Park'], locMap['Lake Superior Provincial Park'], locMap['Pukaskwa National Park']]
    },
    {
      type: typeMap['Bird'],
      name: 'Golden Eagle',
      order: 35,
      habitat: 'N/A',
      diet: 'Hunts animals such as rabbits, marmots, squirrels or even smaller birds.',
      reproduction: "The female lays two black eggs between January and September (depending on the locality). They start incubation immediately after the first egg is laid, and after 45 days on average the young hatch. They are entirely white and are fed for fifty days before they are able to make their first flight attempts and eat on their own.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/GoldenEagle.jpg',
      endangered: false,
      desc: "<p>Golden Eagles are not commonly seen in Ontario and migrate through the province. The Golden Eagle is a large bird, with a wingspan of up to 8 feet (2.4 meters). As one of the largest birds in North America, Golden Eagles are extremely powerful and agile. They can reach up to speeds of over 240km/h when they dive for their prey. Golden Eagles use their speed and sharp talons to hunt.</p>",
      special: "<h5>Eagles of Ontario</h5><p>Two types of Eagles in Ontario. They are the Bald Eagle and Golden Eagle. Eagles are iconic ‘king of the skies’ due to their size and power. Once on Ontario's endangered species list have made a comeback in recent years. Eagles live to 25-40 years. Eagles also mate for life.</p>",
      species: [],
      locations: [locMap['St. Lawrence River'], locMap['Lake Superior Provincial Park'], locMap['Pukaskwa National Park']]
    },
    {
      type: typeMap['Bird'],
      name: 'Hawk',
      order: 34,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/Hawk.jpg',
      endangered: false,
      desc: "<p>Hawks have relatively broad (width) and long (length) wings than other raptors. Most known for their soaring abilities. Hawks are at the top of the food chain with few natural enemies. All are predators relying on their hunting skills. Most have keen eyesight, excellent flying abilities and fast flying speeds. They are equipped with razor sharp talons. In Ontario there are 8 species of hawks, each distinct in its own way.</p>",
      special: "<h5>What is the difference between Hawks and Falcons?</h5><p>Falcons are slender and generally smaller than Hawks. A falcon's head is short and rounded whereas a hawk's is pointier. Hawks are more wide-spead and there are twice as many species of Hawks in Ontario than Falcons. Falcons have a notch or 'tooth' at the tip of their beaks to kill prey where- as Hawks use their talons. Hawks hunt larger animals were Falcons primarily prey on other birds. Falcons are faster and can reach speeds of up to 320 km/h. Hawks also live almost twice as long as Falcons.</p>",
      species: [
        {
          name: 'Cooper’s Hawk',
          desc: '<p>Cooper’s Hawks can appear to be just a larger version of the Sharp-shinned Hawk. They are found in the breeding months in southern Ontario. They stalk feeders and feed almost exclusively on other birds. Their habitat is forests and wooded areas also nest in suburban wooded areas and backyards too.</p><p>They primarily feed on small to medium-sized birds and small mammals. Females tend to be larger and more dominant over the males of this species.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/CoopersHawk.jpg',
          endangered: false
        },
        {
          name: 'Broad-winged Hawk',
          desc: '<p>Broad-winged Hawk breed range is in Southern Ontario. Along the shores of The Great Lakes and forests in both the Spring and Fall each year. Broad-winged Hawks migrate in large flocks are called “kettles”.</p><p>Broad-winged Hawks have one brood each year with 1-5 eggs. They will build their nests with at least a half-mile of separation from other birds of prey. Their diet mainly consists of small mammals, reptiles, and amphibians.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/Broad-wingedHawk.jpg',
          endangered: false
        },
        {
          name: 'Northern Goshawk',
          desc: '<p>Northern Goshawks are large birds of prey. Is found year-round throughout most of the province of Ontario. They live in large forests and may be difficult to find. They are also known for fiercely protecting their nests and young and will attacking people who come too close.</p><p>Northern Goshawks live and nest in forests high up in the trees. They are mostly opportunistic eaters with a wide range of prey including other birds, mammals, carrion, and insects.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/NorthernGoshawk.jpg',
          endangered: false
        },
        {
          name: 'Northern Harrier',
          desc: '<p>The Northern Harrier is easily identifiable by its owlish facial appearance. Harrier is found in most of Ontario during the breeding season and in far southern Ontario year-round. Live in marshes, fields, and other wide-open areas. </p><p>Northern Harriers hunt low over fields and marshes, gliding low to the ground. Harriers rely on their sense of hearing for hunting. Their diet consists of small mammals, birds, and occasionally insects.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/NorthernHarrier.jpg',
          endangered: false
        },
        {
          name: 'Red-tailed Hawks',
          desc: '<p>Red-tailed Hawks are the most common hawks in Ontario. A large hawks live in Southern Ontario all year long. The rest of Ontario have a breeding population of Red-tailed Hawks and these birds my fly further south in the winter.</p><p>Red-tailed Hawks are most active during the day or early morning and are seen soaring or perched along the roadside on telephone poles. Their diet is of small mammals such as rodents and rabbits, sometimes snakes and birds.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/Red-tailedHawk.jpg',
          endangered: false
        }
      ],
      locations: [locMap['Bruce Peninsula National Park'], locMap['Algonquin Provincial Park'], locMap['Pukaskwa National Park']]
    },
    {
      type: typeMap['Bird'],
      name: 'Owl',
      order: 33,
      habitat: 'N/A',
      diet: 'Frogs, lizards, snakes, fish, mice, rabbits, birds, squirrels, and other creatures.',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/owl.jpg',
      endangered: false,
      desc: "<p>Owls are one of the most majestic birds in Ontario. Symbol of the wise. They are actually natures pest control system. Most owls in Ontario live off rodents. A Barn Owl can eat over a thousand rats or mice a year. Some species of Owls migrate. Because of habitat loss and human conflict some owl species at risk. The most common injury to Owls is collisions with cars. Poising has become a concern with all birds of prey. An Ontario research study found over 62% of birds tested had some level of rat poison.</p>",
      special: "",
      species: [
        {
          name: 'Barred Owl',
          desc: '<p>Barred Owl one of the most common owls in Ontario is a medium-sized owl that prefers older growth forests. It frequently produces two to four young in a given season. A Barred Owl\'s eggs are white and rather spherical.</p><p>Young hatch two to three days apart. Young Barred Owls are very inquisitive birds and thrive when they can explore their environments. Barred Owl have a very distinctive call.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/BarredOwl.jpg',
          endangered: false
        },
        {
          name: 'Barn Owl',
          desc: '<p>Barn Owls have heart-shaped facial discs and dark, almost black eyes. Unlike most owls in North America, they have almost bare feet. The Barn Owl inhabits open country; feeding on field rodents, utilizing warmth generated in barns by farm animals. The Barn Owl is currently on the endangered species list, Barn Owls do not hoot.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/BarnOwl.jpg',
          endangered: false
        },
        {
          name: 'Eastern Screech Owl',
          desc: '<p>Screech Owl is one of the most common species throughout the southern regions of eastern Canada and has a tendency to frequent urban areas. Nest trees are regularly felled in spring by storms or people, leaving orphaned owlets hungry and cold. Adults are often hit by cars while hunting near roads. Probably gets its name from the screeching call it gives when scared.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/EasternSceechOwl.jpg',
          endangered: false
        },
        {
          name: 'Great Gray Owl',
          desc: '<p>The Great Grey Owl is considered the largest species of owl in Canada. Greys prey on rodents; mice, voles and lemmings being their main sources of food. Great Greys are known for their huge parabolic facial discs which they use to help locate and capture prey. Great Grey Owls are generally rather quiet birds.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/GreatGrayOwl.jpg',
          endangered: false
        },
        {
          name: 'Great Horned Owl',
          desc: '<p>The Great Horned Owl is one of the most common owls in Ontario and is the second largest owl in North America. The Great Horned Owl is named for the long ear-tufts found on top of the head. These tufts are not ears as many people believe. Great Horned Owls are best known for their territorial hoot commonly used on television as a universal owl call.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/GreatHornedOwl.jpg',
          endangered: false
        },
        {
          name: 'Long-eared Owl',
          desc: '<p>Long-eared are mid-sized owls of wooded areas. They get their name from the long, antennae-like feather tufts on their heads, which are enhanced by the species\' typical camouflaging posture - a ramrod straight, elongated pose. Long-eared Owls generally inhabit dense woodlands with a predominance of conifers. Cooper\'s Hawk and crow nests are utilized, as Long-eared do not build nests of their own. Long-eared Owls produce many different sounds.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/Long-earedOwl.jpg',
          endangered: false
        },
      ],
      locations: [locMap['Point Pelee National Park'], locMap['Bruce Peninsula National Park'], locMap['Pukaskwa National Park']]
    },
    {
      type: typeMap['Bird'],
      name: 'Wild Turkeys',
      order: 32,
      habitat: 'N/A',
      diet: ' Eat a variety of items such as nuts, fruits, seeds from grasses and sedges, insects, snails, frogs, salamanders and crayfish. During breeding season, prefer open pastures, agriculture fields, areas near streams and rivers, open forest areas and meadows. These areas provide the insects and seeds that form the majority of their diet, especially for growing chicks. During non-breeding season, wild turkeys can be found in open, mature forests of mixed hardwood and softwood where they often like to roost.',
      reproduction: "Female Eastern wild turkeys lay on average 10 to 12 eggs per brood. Wild turkey hatchlings are born fully developed and grow very rapidly. Within the first week, chicks can perform species specific behaviours , and by 14 weeks they’ve developed their distinctive male and female plumage.",
      image: 'aflive.qiniu.huangmeimi.com/uPic/Turkey.jpg',
      endangered: false,
      desc: "<p>Range of wild turkeys is limited to southern Ontario. At nighttime, they fly up into trees to roost .Wild turkeys can run at speeds of up to 19 km, per hour. At the start of spring, male wild turkeys get together in clearings to perform courtship displays. They puff up their feathers, lower their wings, fan out their tails and slowly strut, while making their famous gobble sounds. Males weigh between 8.1-13.6 kg, and females between 3.6-6.3 kg. Males are called “toms” or “gobblers”. </p><p>Ontario is in the northernmost edge of the eastern wild turkey's range. Efforts to restore wild turkeys began in 1984 and were successful. Ontario experienced a rapid expansion of the number and range of the birds in the province.</p>",
      special: "",
      species: [],
      locations: [locMap['Royal Botanical Gardens'], locMap['Lake Superior Provincial Park'], locMap['Pukaskwa National Park']]
    },
    {
      type: typeMap['Bird'],
      name: 'Woodpeckers',
      order: 31,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/woodpecker.jpg',
      endangered: false,
      desc: "<p>As insectivores, woodpeckers play an important role by stopping the spread of pests. Their nest holes are used by other species. Most woodpeckers stay during the winter. Woodpeckers drum to attract mates, claim territory, and for communication. They have a thick skull to spread out the shock of the force. Feathers in their nostrils prevent sawdust from getting in. The tongue is sticky, with a barbed end. They have four clawed toes with two pointing forward, and two pointed backwards. There are 9 species of woodpeckers in Ontario.</p>",
      special: "",
      species: [
        {
          name: 'American Three-toed Woodpecker',
          desc: '<p>Are found in disturbed areas, such as coniferous forests, that have been damaged by fires, wind storms, or floods. These places have lots of dead trees and limbs, which attract beetle larvae that these woodpeckers feast on. It breeds farther north than ANY other woodpecker in North America and can be found across the province.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/Three-toedWoodpecker.jpg',
          endangered: false
        },
        {
          name: 'Black-backed Woodpecker',
          desc: '<p>Locate recently burned areas just weeks after the fire blazes through. These birds feast on the wood-boring beetles that start infesting the dead trees. Black-backed Woodpeckers will stay in these areas from five to eight years after the initial burn. Habitat all Ontario except the far north.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/Black-backedwoodpecker.jpg',
          endangered: false
        },
        {
          name: 'Downy Woodpeckers',
          desc: '<p>Are one of the most common woodpeckers in Ontario. Relatively small and has a small bill compared to other woodpeckers. Inhabit suburban backyards, parks, orchards, and cemeteries. Found in large, mature forests with many dead and fallen trees. They rely on rotting wood consisting of ants, wood-boring beetles, and termites. They will supplement their diet with fruits and nuts. Habitat all Ontario except the far north and stay all year.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/DownyWoodpecker.jpg',
          endangered: false
        },
        {
          name: 'Hairy Woodpecker',
          desc: '<p>Are common in Ontario in mature forests, suburban backyards, urban parks, swamps, orchards, and even cemeteries. Appearance-wise, Hairy Woodpeckers have been compared to soldiers, as they have cleanly striped heads and an erect, straight-backed posture while on trees. Habitat all Ontario except the far north.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/HairyWoodpecker.jpg',
          endangered: false
        },
        {
          name: 'Northern Flicker',
          desc: '<p>Are wonderfully handsome woodpeckers and are relatively common in Ontario. They are about the size of an American Robin and feature a black bib and spotted belly. They don’t act like typical woodpeckers. They spend a lot of time searching for ants and beetles on the forest floor by digging through the dirt.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/NorthernFlicker.jpg',
          endangered: false
        },
        {
          name: 'Pileated Woodpecker',
          desc: '<p>These birds are HUGE; adults can be up to 19 inches (48 cm) long and have a wingspan of 30 inches (76 cm). About the size of a crow. Are found in large, mature forests with many dead and fallen trees. They rely on rotting wood consisting of ants, wood-boring beetles, and termites to find food, although they will supplement their diet with fruits and nuts.</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/PileattedWoodpecker.jpg',
          endangered: false
        },
      ],
      locations: [locMap['Royal Botanical Gardens'], locMap['Lake Superior Provincial Park']]
    },
    {
      type: typeMap['Bird'],
      name: 'Songbird',
      order: 30,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/SongBirds.jpg',
      endangered: false,
      desc: "<p>There are more species of song birds in Ontario than any other type of bird. There hundreds of different song birds in the province. We have taken the TOP 35 most common and were possible grouped them (Crows, Finches, Nuthatch, Sparrows, Swallows and Wrens). All are in alphabetical order. Song birds eat different thing depending on the species but primarily either eat seeds or insects. They are not predatory like Raptors or even waterbirds.</p><p>They live in nests off the ground and have adapted to an urban environment to an extent. Some species migrate each year. The major injuries to song birds are hitting windows, cars and cats. Loose cats have become a major problem that is shrinking the song bird population.</p>",
      special: "",
      species: [
        {
          name: 'American Robin',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/AmericanRobin.jpg',
          endangered: false
        },
        {
          name: 'Blue Jay',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/BlueJay.jpg',
          endangered: false
        },
        {
          name: 'Finch-American Goldfinch',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/AmericanGoldfinch.jpg',
          endangered: false
        },
        {
          name: 'Crows-Common Grackel',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/CommonGrackel.jpg',
          endangered: false
        },
        {
          name: 'Cardinals',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/Cardinals.jpg',
          endangered: false
        },
        {
          name: 'Wren-Carolina Wren',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/CarolinaWren.jpg',
          endangered: false
        },
        {
          name: 'Swallow-Tree Swallow',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/TreeSwallow.jpg',
          endangered: false
        },
        {
          name: 'Starling (European)',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/StalingEuropean.jpg',
          endangered: false
        },
        {
          name: 'Yellow Warbler',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/YellowWarbler.jpg',
          endangered: false
        },
        {
          name: 'White-brested Nuthatch',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/White-brestedNuthatch.jpg',
          endangered: false
        },
      ],
      locations: [locMap['Gatineau Park'], locMap['Lake Superior Provincial Park'], locMap['Pukaskwa National Park']]
    },
    {
      type: typeMap['Bird'],
      name: 'Waterbird',
      order: 29,
      habitat: 'Living in wetlands, rivers, marshes, lakes and ponds.',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/WaterBirds.jpg',
      endangered: false,
      desc: "<p>Water Birds are found almost everywhere in Ontario, living in wetlands, rivers, marshes, lakes and ponds. there are many species of Water Birds and Shore birds. Searching for food in the shallows or stalking prey along the shore. Some of these birds stay here year-round, and others are migratory and spend their winters in warmer climes, returning in spring to breed. </p>",
      special: "",
      species: [
        {
          name: 'Ducks-Common Goldeneye',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/CommonGoldeneye.jpg',
          endangered: false
        },
        {
          name: 'Ducks-Wood Duck',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/WoodDuck.jpg',
          endangered: false
        },
        {
          name: 'Ducks-Long Tail Duck',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/LongTailDuck.jpg',
          endangered: false
        },
        {
          name: 'Ducks-Mallard',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/MallardDuck.jpg',
          endangered: false
        },
        {
          name: 'Geese-Canada Goose',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/CanadaGoose.jpg',
          endangered: false
        },
        {
          name: 'Swans-Mute Swan',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/MuteSwan.jpg',
          endangered: false
        },
        {
          name: 'Gulls-Herring Gull',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/HerringGull.jpg',
          endangered: false
        },
        {
          name: 'Loons-Common Loon',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/CommonLoon.jpg',
          endangered: false
        },
        {
          name: 'Crains & Herons-American Bittern',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/AmericanBittern.jpg',
          endangered: false
        },
        {
          name: 'Crains & Herons-Green Heron',
          desc: '<p>N/A</p>',
          image: 'aflive.qiniu.huangmeimi.com/uPic/GreenHeron.jpg',
          endangered: false
        }
      ],
      locations: [locMap['Point Pelee National Park'], locMap['Lake Superior Provincial Park'], locMap['Pukaskwa National Park']]
    },
    {
      type: typeMap['Reptile'],
      name: 'Blanding’s Turtle',
      order: 28,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/turtle01.jpg',
      endangered: false,
      desc: "<p>Ontario is home to eight different species of turtles, with the highest number of turtle species in Canada.  Seven of these species are currently at risk due to habitat loss, hunting, and poaching. Turtles can be found in a variety of habitats such as lakes, ponds, rivers, marshes, and bogs. Some species are very particular about where they live. Map turtles, prefer larger rivers or lakes and may be spotted along the Trent-Severn Waterway. Painted turtles, can be found in a wider variety of habitats.</p><p>During nesting season, which runs from late May to early July, you’ll also spot them crossing roads and in sandy or gravel areas. For more information on turtles in Ontario contact: www.ontarioturtle.ca</p>",
      special: "",
      species: [],
      locations: [locMap['Ripley\'s Aquarium of Canada'], locMap['Royal Botanical Gardens'], locMap['Lake Superior Provincial Park']]
    },
    {
      type: typeMap['Reptile'],
      name: 'Eastern Musk Turtle',
      order: 27,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/turtle02.jpg',
      endangered: false,
      desc: "<p>Ontario is home to eight different species of turtles, with the highest number of turtle species in Canada.  Seven of these species are currently at risk due to habitat loss, hunting, and poaching. Turtles can be found in a variety of habitats such as lakes, ponds, rivers, marshes, and bogs. Some species are very particular about where they live. Map turtles, prefer larger rivers or lakes and may be spotted along the Trent-Severn Waterway. Painted turtles, can be found in a wider variety of habitats.</p><p>During nesting season, which runs from late May to early July, you’ll also spot them crossing roads and in sandy or gravel areas. For more information on turtles in Ontario contact: www.ontarioturtle.ca</p>",
      special: "",
      species: [],
      locations: [locMap['Gatineau Park'], locMap['Ripley\'s Aquarium of Canada']]
    },
    {
      type: typeMap['Reptile'],
      name: 'Northern Map Turtle',
      order: 26,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/turtle03.jpg',
      endangered: false,
      desc: `<p>Ontario is home to eight different species of turtles, with the highest number of turtle species in Canada.  
    Seven of these species are currently at risk due to habitat loss, hunting, and poaching. 
    Turtles can be found in a variety of habitats such as lakes, ponds, rivers, marshes, and bogs. 
    Some species are very particular about where they live. Map turtles, prefer larger rivers or lakes and may be spotted along the Trent-Severn Waterway. 
    Painted turtles, can be found in a wider variety of habitats.</p>
    <p>During nesting season, which runs from late May to early July, you’ll also spot them crossing roads and in sandy or gravel areas. 
    For more information on turtles in Ontario contact: www.ontarioturtle.ca</p>`,
      special: "",
      species: [],
      locations: [locMap['Toronto Zoo'], locMap['Royal Botanical Gardens'], locMap['Ripley\'s Aquarium of Canada']]
    },
    {
      type: typeMap['Reptile'],
      name: 'Painted Turtle',
      order: 25,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/turtle04.jpg',
      endangered: false,
      desc: "<p>Ontario is home to eight different species of turtles, with the highest number of turtle species in Canada.  Seven of these species are currently at risk due to habitat loss, hunting, and poaching. Turtles can be found in a variety of habitats such as lakes, ponds, rivers, marshes, and bogs. Some species are very particular about where they live. Map turtles, prefer larger rivers or lakes and may be spotted along the Trent-Severn Waterway. Painted turtles, can be found in a wider variety of habitats.</p><p>During nesting season, which runs from late May to early July, you’ll also spot them crossing roads and in sandy or gravel areas. For more information on turtles in Ontario contact: www.ontarioturtle.ca</p>",
      special: "",
      species: [],
      locations: [locMap['Pinery Provincial Park'], locMap['Toronto Zoo'], locMap['Royal Botanical Gardens'], locMap['Ripley\'s Aquarium of Canada']]
    },
    {
      type: typeMap['Reptile'],
      name: 'Snapping Turtle',
      order: 24,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/turtle05.jpg',
      endangered: false,
      desc: "<p>Ontario is home to eight different species of turtles, with the highest number of turtle species in Canada.  Seven of these species are currently at risk due to habitat loss, hunting, and poaching. Turtles can be found in a variety of habitats such as lakes, ponds, rivers, marshes, and bogs. Some species are very particular about where they live. Map turtles, prefer larger rivers or lakes and may be spotted along the Trent-Severn Waterway. Painted turtles, can be found in a wider variety of habitats.</p><p>During nesting season, which runs from late May to early July, you’ll also spot them crossing roads and in sandy or gravel areas. For more information on turtles in Ontario contact: www.ontarioturtle.ca</p>",
      special: "",
      species: [],
      locations: [locMap['Pinery Provincial Park'], locMap['Royal Botanical Gardens'], locMap['Ripley\'s Aquarium of Canada']]
    },
    {
      type: typeMap['Reptile'],
      name: 'Spiny Softshell Turtle',
      order: 23,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/turtle06.jpg',
      endangered: true,
      desc: "<p>Ontario is home to eight different species of turtles, with the highest number of turtle species in Canada.  Seven of these species are currently at risk due to habitat loss, hunting, and poaching. Turtles can be found in a variety of habitats such as lakes, ponds, rivers, marshes, and bogs. Some species are very particular about where they live. Map turtles, prefer larger rivers or lakes and may be spotted along the Trent-Severn Waterway. Painted turtles, can be found in a wider variety of habitats.</p><p>During nesting season, which runs from late May to early July, you’ll also spot them crossing roads and in sandy or gravel areas. For more information on turtles in Ontario contact: www.ontarioturtle.ca</p>",
      special: "",
      species: [],
      locations: [locMap['St. Lawrence River'], locMap['Toronto Zoo']]
    },
    {
      type: typeMap['Reptile'],
      name: 'Spotted Turtle',
      order: 23,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/turtle07.jpg',
      endangered: true,
      desc: "<p>Ontario is home to eight different species of turtles, with the highest number of turtle species in Canada.  Seven of these species are currently at risk due to habitat loss, hunting, and poaching. Turtles can be found in a variety of habitats such as lakes, ponds, rivers, marshes, and bogs. Some species are very particular about where they live. Map turtles, prefer larger rivers or lakes and may be spotted along the Trent-Severn Waterway. Painted turtles, can be found in a wider variety of habitats.</p><p>During nesting season, which runs from late May to early July, you’ll also spot them crossing roads and in sandy or gravel areas. For more information on turtles in Ontario contact: www.ontarioturtle.ca</p>",
      special: "",
      species: [],
      locations: [locMap['Bon Echo Provincial Park'], locMap['Ripley\'s Aquarium of Canada']]
    },
    {
      type: typeMap['Reptile'],
      name: 'Wood Turtle',
      order: 23,
      habitat: 'N/A',
      diet: 'N/A',
      reproduction: "N/A",
      image: 'aflive.qiniu.huangmeimi.com/uPic/turtle08.jpg',
      endangered: true,
      desc: "<p>Ontario is home to eight different species of turtles, with the highest number of turtle species in Canada.  Seven of these species are currently at risk due to habitat loss, hunting, and poaching. Turtles can be found in a variety of habitats such as lakes, ponds, rivers, marshes, and bogs. Some species are very particular about where they live. Map turtles, prefer larger rivers or lakes and may be spotted along the Trent-Severn Waterway. Painted turtles, can be found in a wider variety of habitats.</p><p>During nesting season, which runs from late May to early July, you’ll also spot them crossing roads and in sandy or gravel areas. For more information on turtles in Ontario contact: www.ontarioturtle.ca</p>",
      special: "",
      species: [],
      locations: [locMap['Bon Echo Provincial Park'], locMap['Royal Botanical Gardens'], locMap['Ripley\'s Aquarium of Canada']]
    },

  ]
}


const seedAnimals = async () => {

  try {

    //drop collection
    await Animal.collection.drop();

    // Seed data
    const animals = await animalData();
    await Animal.insertMany(animals);

    console.log('Seed Animals suceffully!');

  } catch (err) {
    console.error('Seed Animals error ', err);
    process.exit(1);
  }
}

module.exports = seedAnimals;