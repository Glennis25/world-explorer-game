// src/data/countries.js
// Complete country data for World Explorer Game
// Format: 10 countries with 3 places, 1 animal, and 4 quiz questions each

export const countriesData = [
  {
    id: 1,
    name: 'Australia',
    flag: '🇦🇺',
    color: '#FFD700',
    animal: {
      name: 'Kangaroo',
      emoji: '🦘',
      description: 'A large marsupial that can hop very fast and high. Kangaroos have powerful back legs and a long tail that helps them balance.',
      fact: 'Kangaroos can jump up to 30 feet in a single hop!'
    },
    places: [
      {
        id: 1,
        name: 'Sydney Opera House',
        emoji: '🏢',
        description: 'A beautiful white building by the sea. It\'s one of the most famous buildings in the world and looks like giant shells or sails.',
        fact: 'It took 14 years to build and cost millions of dollars!'
      },
      {
        id: 2,
        name: 'Great Barrier Reef',
        emoji: '🪸',
        description: 'The largest coral reef system in the world. It\'s home to thousands of colorful fish and other sea creatures.',
        fact: 'You can see it from space! It\'s so big and beautiful!'
      },
      {
        id: 3,
        name: 'Uluru (Ayers Rock)',
        emoji: '🏜️',
        description: 'A giant red rock in the desert. It\'s sacred to the Aboriginal people and is one of Australia\'s most amazing natural wonders.',
        fact: 'It changes color at sunrise and sunset - red, orange, and purple!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Which animal lives in Australia?',
        correctAnswer: 'Kangaroo',
        options: ['Kangaroo', 'Penguin', 'Moose', 'Lion']
      },
      {
        id: 2,
        question: 'What is this building?',
        correctAnswer: 'Sydney Opera House',
        options: ['Sydney Opera House', 'Big Ben', 'Eiffel Tower', 'Statue of Liberty']
      },
      {
        id: 3,
        question: 'Which reef is the largest in the world?',
        correctAnswer: 'Great Barrier Reef',
        options: ['Great Barrier Reef', 'Red Barrier Reef', 'Blue Barrier Reef', 'Rainbow Reef']
      },
      {
        id: 4,
        question: 'What color is Uluru?',
        correctAnswer: 'Red',
        options: ['Red', 'Blue', 'Yellow', 'Green']
      }
    ]
  },
  {
    id: 2,
    name: 'Brazil',
    flag: '🇧🇷',
    color: '#009C3B',
    animal: {
      name: 'Toucan',
      emoji: '🦜',
      description: 'A colorful bird with a very large beak. Toucans live in the rainforest and eat fruit from tall trees.',
      fact: 'A toucan\'s beak is almost as long as its whole body!'
    },
    places: [
      {
        id: 1,
        name: 'Christ the Redeemer',
        emoji: '🗿',
        description: 'A giant statue of Jesus with arms open wide. It sits on top of a mountain and watches over the city of Rio de Janeiro.',
        fact: 'This statue is one of the New 7 Wonders of the World!'
      },
      {
        id: 2,
        name: 'Amazon Rainforest',
        emoji: '🌳',
        description: 'The biggest rainforest in the world! It\'s home to millions of animals and plants, and it\'s very wet and green.',
        fact: 'The Amazon rainforest is sometimes called the "lungs of the Earth"!'
      },
      {
        id: 3,
        name: 'Iguazu Falls',
        emoji: '💦',
        description: 'Massive waterfalls that flow over cliffs. The water is so powerful and creates a beautiful mist and rainbow.',
        fact: 'Iguazu Falls has more than 275 individual waterfalls!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'What is this statue?',
        correctAnswer: 'Christ the Redeemer',
        options: ['Christ the Redeemer', 'Jesus Statue', 'Holy Monument', 'Angel Statue']
      },
      {
        id: 2,
        question: 'Which bird lives in Brazil?',
        correctAnswer: 'Toucan',
        options: ['Toucan', 'Penguin', 'Eagle', 'Parrot']
      },
      {
        id: 3,
        question: 'What is the biggest rainforest?',
        correctAnswer: 'Amazon Rainforest',
        options: ['Amazon Rainforest', 'Congo Rainforest', 'Daintree Rainforest', 'Southeast Rainforest']
      },
      {
        id: 4,
        question: 'Which waterfalls are in Brazil?',
        correctAnswer: 'Iguazu Falls',
        options: ['Iguazu Falls', 'Niagara Falls', 'Victoria Falls', 'Angel Falls']
      }
    ]
  },
  {
    id: 3,
    name: 'Canada',
    flag: '🇨🇦',
    color: '#FF0000',
    animal: {
      name: 'Moose',
      emoji: '🫎',
      description: 'A very large deer with huge antlers. Moose live in cold forests and are the biggest deer in the world.',
      fact: 'A moose can grow as tall as a basketball hoop!'
    },
    places: [
      {
        id: 1,
        name: 'Niagara Falls',
        emoji: '💧',
        description: 'One of the biggest waterfalls in North America. Millions of gallons of water flow over the edge every second, creating thunder and mist.',
        fact: 'Niagara Falls is so powerful it could power a whole city!'
      },
      {
        id: 2,
        name: 'Rocky Mountains',
        emoji: '⛰️',
        description: 'Tall, snowy mountains that stretch across western Canada. They\'re perfect for skiing and hiking in winter and summer.',
        fact: 'The Rocky Mountains are over 80 million years old!'
      },
      {
        id: 3,
        name: 'CN Tower',
        emoji: '🏗️',
        description: 'A super tall tower in Toronto. From the top, you can see the whole city and even across to the United States!',
        fact: 'The CN Tower was the tallest free-standing building in the world for 34 years!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Which animal lives in Canada?',
        correctAnswer: 'Moose',
        options: ['Moose', 'Kangaroo', 'Penguin', 'Llama']
      },
      {
        id: 2,
        question: 'What is this?',
        correctAnswer: 'Niagara Falls',
        options: ['Niagara Falls', 'Iguazu Falls', 'Victoria Falls', 'Angel Falls']
      },
      {
        id: 3,
        question: 'Which mountains are in Canada?',
        correctAnswer: 'Rocky Mountains',
        options: ['Rocky Mountains', 'Andes Mountains', 'Alps', 'Himalayas']
      },
      {
        id: 4,
        question: 'In which city is the CN Tower?',
        correctAnswer: 'Toronto',
        options: ['Toronto', 'Vancouver', 'Montreal', 'Calgary']
      }
    ]
  },
  {
    id: 4,
    name: 'France',
    flag: '🇫🇷',
    color: '#002395',
    animal: {
      name: 'French Bulldog',
      emoji: '🐾',
      description: 'A small, cute dog with big ears and a wrinkly face. French Bulldogs are friendly, playful, and love to cuddle.',
      fact: 'French Bulldogs can\'t swim very well because of their short legs!'
    },
    places: [
      {
        id: 1,
        name: 'Eiffel Tower',
        emoji: '🗼',
        description: 'A tall metal tower made of iron in Paris. It was built for a big celebration and is now the most famous symbol of France.',
        fact: 'The Eiffel Tower is 1,083 feet tall - that\'s taller than 100 grown-ups standing on each other!'
      },
      {
        id: 2,
        name: 'Louvre Museum',
        emoji: '🖼️',
        description: 'A huge museum in Paris with the most famous paintings and art in the world, including the Mona Lisa.',
        fact: 'The Louvre has over 35,000 paintings and artworks!'
      },
      {
        id: 3,
        name: 'Notre-Dame Cathedral',
        emoji: '⛪',
        description: 'A beautiful church in Paris with amazing stone carvings and tall towers. It\'s almost 1,000 years old!',
        fact: 'Notre-Dame took 182 years to build!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'What is this famous tower?',
        correctAnswer: 'Eiffel Tower',
        options: ['Eiffel Tower', 'Big Ben', 'CN Tower', 'Burj Khalifa']
      },
      {
        id: 2,
        question: 'Which animal is from France?',
        correctAnswer: 'French Bulldog',
        options: ['French Bulldog', 'Poodle', 'Moose', 'Kangaroo']
      },
      {
        id: 3,
        question: 'Which museum is in Paris?',
        correctAnswer: 'Louvre',
        options: ['Louvre', 'British Museum', 'Smithsonian', 'Vatican Museum']
      },
      {
        id: 4,
        question: 'What is this building?',
        correctAnswer: 'Notre-Dame Cathedral',
        options: ['Notre-Dame Cathedral', 'Sagrada Familia', 'St. Peter\'s Basilica', 'Cologne Cathedral']
      }
    ]
  },
  {
    id: 5,
    name: 'India',
    flag: '🇮🇳',
    color: '#FF9933',
    animal: {
      name: 'Bengal Tiger',
      emoji: '🐯',
      description: 'A big, orange cat with black stripes. Tigers are powerful hunters and are very important to Indian culture and history.',
      fact: 'Each tiger has unique stripes, just like humans have unique fingerprints!'
    },
    places: [
      {
        id: 1,
        name: 'Taj Mahal',
        emoji: '🕌',
        description: 'A beautiful white palace made of marble. It was built as a tomb for a princess and is one of the most perfect buildings in the world.',
        fact: 'The Taj Mahal is one of the New 7 Wonders of the World!'
      },
      {
        id: 2,
        name: 'India Gate',
        emoji: '🏛️',
        description: 'A big stone arch in Delhi that looks like a giant gate. It\'s a monument that honors soldiers who fought in wars.',
        fact: 'The India Gate is 138 feet tall!'
      },
      {
        id: 3,
        name: 'Himalayan Mountains',
        emoji: '🏔️',
        description: 'The biggest mountains in the world! They cover many countries including India and have snow on the top all year long.',
        fact: 'Mount Everest, the tallest mountain in the world, is part of the Himalayas!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'What is this building?',
        correctAnswer: 'Taj Mahal',
        options: ['Taj Mahal', 'India Gate', 'Red Fort', 'Lotus Temple']
      },
      {
        id: 2,
        question: 'Which animal lives in India?',
        correctAnswer: 'Bengal Tiger',
        options: ['Bengal Tiger', 'Lion', 'Leopard', 'Cheetah']
      },
      {
        id: 3,
        question: 'What is this?',
        correctAnswer: 'India Gate',
        options: ['India Gate', 'Tower Bridge', 'Golden Gate Bridge', 'Brooklyn Bridge']
      },
      {
        id: 4,
        question: 'Which mountains are in India?',
        correctAnswer: 'Himalayas',
        options: ['Himalayas', 'Andes', 'Alps', 'Rockies']
      }
    ]
  },
  {
    id: 6,
    name: 'South Africa',
    flag: '🇿🇦',
    color: '#000000',
    animal: {
      name: 'Lion',
      emoji: '🦁',
      description: 'The king of the animals! Lions are big, strong cats with golden fur. Male lions have big manes around their heads.',
      fact: 'A lion\'s roar can be heard from 5 miles away!'
    },
    places: [
      {
        id: 1,
        name: 'Table Mountain',
        emoji: '⛰️',
        description: 'A flat-topped mountain that overlooks Cape Town. You can take a cable car to the top and see the whole city below.',
        fact: 'Table Mountain is one of the New 7 Wonders of Nature!'
      },
      {
        id: 2,
        name: 'Kruger National Park',
        emoji: '🦁',
        description: 'A huge nature reserve where you can see lions, elephants, giraffes, and many other wild animals living freely.',
        fact: 'Kruger National Park is larger than some countries!'
      },
      {
        id: 3,
        name: 'Cape Town Waterfront',
        emoji: '⛵',
        description: 'A beautiful harbor area in Cape Town with shops, restaurants, and boats. It\'s a fun place to walk and play.',
        fact: 'The Cape Town Waterfront is one of the most visited places in Africa!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Which animal is the king of the animals?',
        correctAnswer: 'Lion',
        options: ['Lion', 'Tiger', 'Elephant', 'Bear']
      },
      {
        id: 2,
        question: 'What is this mountain?',
        correctAnswer: 'Table Mountain',
        options: ['Table Mountain', 'Mount Kilimanjaro', 'Table Linen Mountain', 'Chair Mountain']
      },
      {
        id: 3,
        question: 'Where can you see wild animals in South Africa?',
        correctAnswer: 'Kruger National Park',
        options: ['Kruger National Park', 'Central Park', 'Serengeti', 'Yellowstone']
      },
      {
        id: 4,
        question: 'What is a popular place in Cape Town?',
        correctAnswer: 'Cape Town Waterfront',
        options: ['Cape Town Waterfront', 'Table Tower', 'Lion Beach', 'Safari Street']
      }
    ]
  },
  {
    id: 7,
    name: 'United Kingdom',
    flag: '🇬🇧',
    color: '#012169',
    animal: {
      name: 'Red Fox',
      emoji: '🦊',
      description: 'A smart and beautiful animal with red-orange fur and a bushy tail. Foxes are clever hunters that live in the forests and cities.',
      fact: 'A fox\'s tail helps it balance when it runs and turns quickly!'
    },
    places: [
      {
        id: 1,
        name: 'Big Ben',
        emoji: '🕐',
        description: 'A huge clock tower in London. The clock is so big and accurate that it helps people know the exact time all over the world.',
        fact: 'Big Ben is 316 feet tall and the bell inside weighs 13 tons!'
      },
      {
        id: 2,
        name: 'Buckingham Palace',
        emoji: '🏰',
        description: 'The home of the King or Queen of England. It\'s an enormous palace with 775 rooms and beautiful gardens.',
        fact: 'Buckingham Palace has 40 bedrooms and 78 bathrooms!'
      },
      {
        id: 3,
        name: 'Tower Bridge',
        emoji: '🌉',
        description: 'A famous bridge over the River Thames in London. It has two towers and the middle lifts up to let ships pass under.',
        fact: 'Tower Bridge was built in 1894 and is still working perfectly today!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'What is this famous clock?',
        correctAnswer: 'Big Ben',
        options: ['Big Ben', 'Small Ben', 'Big Bill', 'Grand Clock']
      },
      {
        id: 2,
        question: 'Which animal is from the United Kingdom?',
        correctAnswer: 'Red Fox',
        options: ['Red Fox', 'Kangaroo', 'Moose', 'Bengal Tiger']
      },
      {
        id: 3,
        question: 'Whose home is Buckingham Palace?',
        correctAnswer: 'King or Queen',
        options: ['King or Queen', 'Prime Minister', 'Mayor', 'President']
      },
      {
        id: 4,
        question: 'What is this bridge?',
        correctAnswer: 'Tower Bridge',
        options: ['Tower Bridge', 'Brooklyn Bridge', 'Golden Gate Bridge', 'London Bridge']
      }
    ]
  },
  {
    id: 8,
    name: 'United States',
    flag: '🇺🇸',
    color: '#002868',
    animal: {
      name: 'Bald Eagle',
      emoji: '🦅',
      description: 'A big bird with a white head, dark body, and strong wings. The Bald Eagle is the national bird of the United States.',
      fact: 'A Bald Eagle can see a fish from two miles away!'
    },
    places: [
      {
        id: 1,
        name: 'Statue of Liberty',
        emoji: '🗽',
        description: 'A huge copper statue of a lady holding a torch. She stands on an island in New York and welcomes people to America.',
        fact: 'The Statue of Liberty is 305 feet tall from the ground to the top of her torch!'
      },
      {
        id: 2,
        name: 'Grand Canyon',
        emoji: '🏜️',
        description: 'A massive canyon with colorful layers of rock carved by a river over millions of years. It\'s one of nature\'s greatest wonders.',
        fact: 'The Grand Canyon is so big, you can see rocks that are 2 billion years old!'
      },
      {
        id: 3,
        name: 'Mount Rushmore',
        emoji: '🗻',
        description: 'A mountain with four giant faces of American presidents carved into it. It took 14 years and many workers to carve.',
        fact: 'Each face on Mount Rushmore is as tall as a 6-story building!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'What is this statue?',
        correctAnswer: 'Statue of Liberty',
        options: ['Statue of Liberty', 'Statue of Justice', 'Statue of Freedom', 'Statue of America']
      },
      {
        id: 2,
        question: 'Which bird is the national bird of the USA?',
        correctAnswer: 'Bald Eagle',
        options: ['Bald Eagle', 'Golden Eagle', 'Hawk', 'Falcon']
      },
      {
        id: 3,
        question: 'What is this famous canyon?',
        correctAnswer: 'Grand Canyon',
        options: ['Grand Canyon', 'Black Canyon', 'Canyon Valley', 'Stone Canyon']
      },
      {
        id: 4,
        question: 'Where are four presidential faces carved?',
        correctAnswer: 'Mount Rushmore',
        options: ['Mount Rushmore', 'Mount Jackson', 'Mount Lincoln', 'Mount Washington']
      }
    ]
  },
  {
    id: 9,
    name: 'Switzerland',
    flag: '🇨🇭',
    color: '#FF0000',
    animal: {
      name: 'Alpine Ibex',
      emoji: '🐐',
      description: 'A wild goat with long curved horns that lives high in the mountains. They jump and climb better than any other animal!',
      fact: 'Alpine Ibex can jump 20 feet up and down steep cliffs without falling!'
    },
    places: [
      {
        id: 1,
        name: 'Matterhorn',
        emoji: '⛰️',
        description: 'One of the most beautiful and famous mountains in the world. It looks like a giant pyramid of rock and snow.',
        fact: 'The Matterhorn is 14,692 feet tall and is a favorite mountain for climbers!'
      },
      {
        id: 2,
        name: 'Lake Geneva',
        emoji: '🏞️',
        description: 'A large, beautiful lake surrounded by mountains. It\'s one of the biggest lakes in Europe and very clean and clear.',
        fact: 'Lake Geneva is so big that people call it the "Inland Sea"!'
      },
      {
        id: 3,
        name: 'Swiss Alps',
        emoji: '🏔️',
        description: 'Mountains covered with snow and ice that are perfect for skiing. Thousands of people come to Switzerland to ski here.',
        fact: 'The Swiss Alps have over 50 ski resorts and slopes for all skill levels!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Which animal lives in the Swiss Alps?',
        correctAnswer: 'Alpine Ibex',
        options: ['Alpine Ibex', 'Moose', 'Mountain Lion', 'Alpine Hare']
      },
      {
        id: 2,
        question: 'What is this famous mountain?',
        correctAnswer: 'Matterhorn',
        options: ['Matterhorn', 'Mount Blanc', 'Mont Rosa', 'Gran Paradiso']
      },
      {
        id: 3,
        question: 'What is this lake?',
        correctAnswer: 'Lake Geneva',
        options: ['Lake Geneva', 'Lake Zurich', 'Lake Lucerne', 'Lake Thun']
      },
      {
        id: 4,
        question: 'Where do people ski in Switzerland?',
        correctAnswer: 'Swiss Alps',
        options: ['Swiss Alps', 'Jura Mountains', 'Mittelland', 'Alpine Plateau']
      }
    ]
  },
  {
    id: 10,
    name: 'Japan',
    flag: '🇯🇵',
    color: '#BC002D',
    animal: {
      name: 'Red Panda',
      emoji: '🐼',
      description: 'A small, cute animal with red fur and a big fluffy tail. Red Pandas are gentle and love to eat bamboo like bigger pandas.',
      fact: 'Red Pandas have special paws with sharp claws that help them climb trees perfectly!'
    },
    places: [
      {
        id: 1,
        name: 'Tokyo Tower',
        emoji: '🗼',
        description: 'A tall red tower in Tokyo that looks like the Eiffel Tower. From the top, you can see the whole city and sometimes Mount Fuji!',
        fact: 'Tokyo Tower is 1,092 feet tall and lights up in different colors at night!'
      },
      {
        id: 2,
        name: 'Mount Fuji',
        emoji: '🗻',
        description: 'Japan\'s most famous mountain with a beautiful snow-covered peak. It\'s a sacred mountain that appears on many Japanese paintings.',
        fact: 'Mount Fuji is so perfect and beautiful that poets have written thousands of poems about it!'
      },
      {
        id: 3,
        name: 'Great Buddha',
        emoji: '🧘',
        description: 'A giant bronze statue of Buddha sitting peacefully. It\'s over 750 years old and is one of Japan\'s most important treasures.',
        fact: 'The Great Buddha is 43 feet tall and weighs 121 tons!'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'Which animal is from Japan?',
        correctAnswer: 'Red Panda',
        options: ['Red Panda', 'Giant Panda', 'Moose', 'Toucan']
      },
      {
        id: 2,
        question: 'What is this tower in Tokyo?',
        correctAnswer: 'Tokyo Tower',
        options: ['Tokyo Tower', 'Tokyo Pagoda', 'Tokyo Spire', 'Tokyo Beacon']
      },
      {
        id: 3,
        question: 'What is Japan\'s most famous mountain?',
        correctAnswer: 'Mount Fuji',
        options: ['Mount Fuji', 'Mount Takao', 'Mount Aso', 'Mount Shinran']
      },
      {
        id: 4,
        question: 'What is this statue?',
        correctAnswer: 'Great Buddha',
        options: ['Great Buddha', 'Golden Buddha', 'Temple Buddha', 'Holy Buddha']
      }
    ]
  }
]
