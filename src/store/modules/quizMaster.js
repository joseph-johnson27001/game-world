// store/modules/quizMaster.js

const state = {
  selectedCategory: null,
  numQuestions: 20,
  score: 0,
  questions: {
    Science: [
      {
        question: "What is the chemical symbol for water?",
        correctAnswer: "H2O",
        wrongAnswers: ["CO2", "O2", "N2"],
      },
      {
        question: "What planet is known as the Red Planet?",
        correctAnswer: "Mars",
        wrongAnswers: ["Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        correctAnswer: "Carbon Dioxide",
        wrongAnswers: ["Oxygen", "Nitrogen", "Hydrogen"],
      },
      {
        question: "What is the boiling point of water?",
        correctAnswer: "100°C",
        wrongAnswers: ["90°C", "110°C", "80°C"],
      },
      {
        question: "What is the center of an atom called?",
        correctAnswer: "Nucleus",
        wrongAnswers: ["Electron", "Proton", "Neutron"],
      },
      {
        question: "What is the most abundant gas in the Earth’s atmosphere?",
        correctAnswer: "Nitrogen",
        wrongAnswers: ["Oxygen", "Carbon Dioxide", "Helium"],
      },
      {
        question:
          "What organ is responsible for pumping blood through the human body?",
        correctAnswer: "Heart",
        wrongAnswers: ["Lungs", "Kidney", "Liver"],
      },
      {
        question: "What element is represented by the symbol 'O'?",
        correctAnswer: "Oxygen",
        wrongAnswers: ["Osmium", "Oganesson", "Oxide"],
      },
      {
        question: "How many bones are in the human body?",
        correctAnswer: "206",
        wrongAnswers: ["201", "210", "208"],
      },
      {
        question: "What is the chemical formula for salt?",
        correctAnswer: "NaCl",
        wrongAnswers: ["KCl", "HCl", "NaCO3"],
      },
      {
        question: "Which planet is the largest in our solar system?",
        correctAnswer: "Jupiter",
        wrongAnswers: ["Saturn", "Earth", "Neptune"],
      },
      {
        question: "What is the hardest natural substance on Earth?",
        correctAnswer: "Diamond",
        wrongAnswers: ["Graphite", "Iron", "Quartz"],
      },
      {
        question:
          "How long does it take for light from the sun to reach Earth?",
        correctAnswer: "8 minutes",
        wrongAnswers: ["10 minutes", "5 minutes", "12 minutes"],
      },
      {
        question: "What is the powerhouse of the cell?",
        correctAnswer: "Mitochondria",
        wrongAnswers: ["Nucleus", "Ribosome", "Golgi apparatus"],
      },
      {
        question: "What is the freezing point of water in Celsius?",
        correctAnswer: "0°C",
        wrongAnswers: ["32°C", "100°C", "-10°C"],
      },
      {
        question: "What force keeps planets in orbit around the sun?",
        correctAnswer: "Gravity",
        wrongAnswers: ["Magnetism", "Inertia", "Electromagnetic Force"],
      },
      {
        question: "What is the closest planet to the Sun?",
        correctAnswer: "Mercury",
        wrongAnswers: ["Venus", "Earth", "Mars"],
      },
      {
        question: "What is the name of the closest star to Earth?",
        correctAnswer: "Proxima Centauri",
        wrongAnswers: ["Sirius", "Alpha Centauri", "Betelgeuse"],
      },
      {
        question: "What element is known for having the atomic number 1?",
        correctAnswer: "Hydrogen",
        wrongAnswers: ["Helium", "Oxygen", "Lithium"],
      },
      {
        question: "What type of celestial body is the Sun classified as?",
        correctAnswer: "Star",
        wrongAnswers: ["Planet", "Moon", "Comet"],
      },
      {
        question:
          "Which part of the plant absorbs water and nutrients from the soil?",
        correctAnswer: "Roots",
        wrongAnswers: ["Stem", "Leaves", "Flowers"],
      },
      {
        question:
          "What process do animals use to break down food and release energy?",
        correctAnswer: "Digestion",
        wrongAnswers: ["Photosynthesis", "Respiration", "Fermentation"],
      },
      {
        question: "What is the most common mineral in the Earth's crust?",
        correctAnswer: "Feldspar",
        wrongAnswers: ["Quartz", "Mica", "Calcite"],
      },
      {
        question:
          "Which type of electromagnetic radiation has the longest wavelength?",
        correctAnswer: "Radio waves",
        wrongAnswers: ["Gamma rays", "X-rays", "Ultraviolet"],
      },
      {
        question: "What organelle is responsible for protein synthesis?",
        correctAnswer: "Ribosome",
        wrongAnswers: ["Mitochondria", "Nucleus", "Lysosome"],
      },
      {
        question:
          "What is the process by which water vapor turns into liquid water?",
        correctAnswer: "Condensation",
        wrongAnswers: ["Evaporation", "Transpiration", "Precipitation"],
      },
      {
        question: "Which blood type is known as the universal donor?",
        correctAnswer: "O-",
        wrongAnswers: ["A+", "B+", "AB-"],
      },
      {
        question:
          "What is the force called that opposes the motion of an object?",
        correctAnswer: "Friction",
        wrongAnswers: ["Gravity", "Inertia", "Momentum"],
      },
      {
        question: "What phenomenon causes rainbows to form?",
        correctAnswer: "Refraction",
        wrongAnswers: ["Reflection", "Diffraction", "Absorption"],
      },
      {
        question: "What is the main function of chlorophyll in plants?",
        correctAnswer: "Absorb light",
        wrongAnswers: ["Absorb water", "Transport nutrients", "Produce oxygen"],
      },
      {
        question: "What do we call the solid inner layer of the Earth?",
        correctAnswer: "Inner core",
        wrongAnswers: ["Mantle", "Crust", "Outer core"],
      },
      {
        question: "What is the primary source of energy for all living things?",
        correctAnswer: "The sun",
        wrongAnswers: ["Fossil fuels", "Nuclear energy", "Wind"],
      },
      {
        question:
          "What is the name for the change of state from liquid to gas?",
        correctAnswer: "Evaporation",
        wrongAnswers: ["Condensation", "Melting", "Sublimation"],
      },
      {
        question: "Which organ is responsible for filtering blood in the body?",
        correctAnswer: "Kidneys",
        wrongAnswers: ["Heart", "Liver", "Lungs"],
      },
      {
        question:
          "What type of cells in the human body are responsible for carrying signals?",
        correctAnswer: "Nerve cells",
        wrongAnswers: ["Epithelial cells", "Muscle cells", "Blood cells"],
      },
      {
        question: "What is the primary function of the large intestine?",
        correctAnswer: "Reabsorb water",
        wrongAnswers: ["Absorb nutrients", "Digest food", "Produce bile"],
      },
      {
        question: "What type of rock is formed from cooled magma or lava?",
        correctAnswer: "Igneous",
        wrongAnswers: ["Sedimentary", "Metamorphic", "Basalt"],
      },
      {
        question: "Which process do bees use to produce honey?",
        correctAnswer: "Nectar conversion",
        wrongAnswers: ["Photosynthesis", "Fermentation", "Respiration"],
      },
      {
        question: "What type of energy is produced by moving water?",
        correctAnswer: "Hydroelectric energy",
        wrongAnswers: ["Solar energy", "Nuclear energy", "Geothermal energy"],
      },
      {
        question: "Which particle in an atom has a negative charge?",
        correctAnswer: "Electron",
        wrongAnswers: ["Proton", "Neutron", "Photon"],
      },
      {
        question:
          "What is the study of weather and atmospheric conditions called?",
        correctAnswer: "Meteorology",
        wrongAnswers: ["Geology", "Astronomy", "Climatology"],
      },
      {
        question:
          "What type of organism can make its own food through photosynthesis?",
        correctAnswer: "Autotroph",
        wrongAnswers: ["Heterotroph", "Carnivore", "Decomposer"],
      },
      {
        question: "What is the chemical formula for table salt?",
        correctAnswer: "NaCl",
        wrongAnswers: ["KCl", "MgCl2", "CaCl2"],
      },
      {
        question: "What is the largest bone in the human body?",
        correctAnswer: "Femur",
        wrongAnswers: ["Tibia", "Humerus", "Pelvis"],
      },
      {
        question:
          "What is the scientific term for a species that no longer has any known living individuals?",
        correctAnswer: "Extinct",
        wrongAnswers: ["Endangered", "Vulnerable", "Threatened"],
      },
      {
        question: "What is the primary component of the sun?",
        correctAnswer: "Hydrogen",
        wrongAnswers: ["Helium", "Oxygen", "Carbon"],
      },
      {
        question:
          "What is the main purpose of a hypothesis in scientific research?",
        correctAnswer: "To make a prediction",
        wrongAnswers: [
          "To provide a conclusion",
          "To summarize findings",
          "To analyze data",
        ],
      },
      {
        question: "Which organ produces insulin in the human body?",
        correctAnswer: "Pancreas",
        wrongAnswers: ["Liver", "Kidney", "Gallbladder"],
      },
      {
        question:
          "What is the name for a substance that speeds up a chemical reaction?",
        correctAnswer: "Catalyst",
        wrongAnswers: ["Inhibitor", "Reagent", "Solvent"],
      },
      {
        question: "What is the primary function of red blood cells?",
        correctAnswer: "Transport oxygen",
        wrongAnswers: ["Fight infections", "Clot blood", "Digest food"],
      },
      {
        question: "Which gas is produced during photosynthesis?",
        correctAnswer: "Oxygen",
        wrongAnswers: ["Carbon Dioxide", "Nitrogen", "Hydrogen"],
      },
      {
        question: "What is the basic unit of life?",
        correctAnswer: "Cell",
        wrongAnswers: ["Tissue", "Organ", "Organism"],
      },
      {
        question: "What is the most widely spoken language in the world?",
        correctAnswer: "Mandarin Chinese",
        wrongAnswers: ["Spanish", "English", "Hindi"],
      },
    ],
    History: [
      {
        question: "Who was the first president of the United States?",
        correctAnswer: "George Washington",
        wrongAnswers: ["Abraham Lincoln", "Thomas Jefferson", "John Adams"],
      },
      {
        question: "In which year did World War I begin?",
        correctAnswer: "1914",
        wrongAnswers: ["1912", "1916", "1918"],
      },
      {
        question: "Who was the first man to set foot on the moon?",
        correctAnswer: "Neil Armstrong",
        wrongAnswers: ["Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        correctAnswer: "Roman Empire",
        wrongAnswers: ["Greek Empire", "Ottoman Empire", "Persian Empire"],
      },
      {
        question:
          "Which country was the main opponent of the USA in the Cold War?",
        correctAnswer: "Soviet Union",
        wrongAnswers: ["Germany", "China", "Japan"],
      },
      {
        question: "Who was the British Prime Minister during World War II?",
        correctAnswer: "Winston Churchill",
        wrongAnswers: ["Tony Blair", "Margaret Thatcher", "Clement Attlee"],
      },
      {
        question: "In which year did the Berlin Wall fall?",
        correctAnswer: "1989",
        wrongAnswers: ["1987", "1991", "1993"],
      },
      {
        question: "Who was the last Tsar of Russia?",
        correctAnswer: "Nicholas II",
        wrongAnswers: ["Peter the Great", "Alexander II", "Ivan the Terrible"],
      },
      {
        question: "Which country gifted the Statue of Liberty to the USA?",
        correctAnswer: "France",
        wrongAnswers: ["United Kingdom", "Germany", "Canada"],
      },
      {
        question:
          "What was the name of the ship on which the Pilgrims traveled to America in 1620?",
        correctAnswer: "Mayflower",
        wrongAnswers: ["Santa Maria", "Pinta", "Beagle"],
      },
      {
        question: "Who discovered America in 1492?",
        correctAnswer: "Christopher Columbus",
        wrongAnswers: ["Ferdinand Magellan", "Leif Erikson", "Vasco da Gama"],
      },
      {
        question:
          "Who was the first female Prime Minister of the United Kingdom?",
        correctAnswer: "Margaret Thatcher",
        wrongAnswers: ["Theresa May", "Angela Merkel", "Indira Gandhi"],
      },
      {
        question: "In which year did the Titanic sink?",
        correctAnswer: "1912",
        wrongAnswers: ["1905", "1910", "1915"],
      },
      {
        question:
          "Who was assassinated in Sarajevo in 1914, sparking World War I?",
        correctAnswer: "Archduke Franz Ferdinand",
        wrongAnswers: [
          "Gavrilo Princip",
          "Kaiser Wilhelm II",
          "Tsar Nicholas II",
        ],
      },
      {
        question: "Who was the first Emperor of China?",
        correctAnswer: "Qin Shi Huang",
        wrongAnswers: ["Sun Yat-sen", "Mao Zedong", "Kublai Khan"],
      },
      {
        question: "In which year did India gain independence from Britain?",
        correctAnswer: "1947",
        wrongAnswers: ["1945", "1950", "1939"],
      },
      {
        question:
          "Who was the first president of South Africa after the end of apartheid?",
        correctAnswer: "Nelson Mandela",
        wrongAnswers: ["F.W. de Klerk", "Thabo Mbeki", "Jacob Zuma"],
      },
      {
        question: "Who wrote the Declaration of Independence?",
        correctAnswer: "Thomas Jefferson",
        wrongAnswers: ["Benjamin Franklin", "John Adams", "James Madison"],
      },
      {
        question:
          "Which battle marked the turning point of the American Civil War?",
        correctAnswer: "Battle of Gettysburg",
        wrongAnswers: [
          "Battle of Antietam",
          "Battle of Fort Sumter",
          "Battle of Bull Run",
        ],
      },
      {
        question: "Which civilization built Machu Picchu?",
        correctAnswer: "Inca",
        wrongAnswers: ["Maya", "Aztec", "Olmec"],
      },
      {
        question: "What year did the American Civil War begin?",
        correctAnswer: "1861",
        wrongAnswers: ["1860", "1865", "1870"],
      },
      {
        question:
          "Who was the first female aviator to fly solo across the Atlantic Ocean?",
        correctAnswer: "Amelia Earhart",
        wrongAnswers: [
          "Bessie Coleman",
          "Harriet Quimby",
          "Jacqueline Cochran",
        ],
      },
      {
        question: "What was the main cause of the Great Depression?",
        correctAnswer: "Stock Market Crash",
        wrongAnswers: ["World War I", "Dust Bowl", "Bank Failures"],
      },
      {
        question:
          "Which war was fought between the North and South regions in the United States?",
        correctAnswer: "American Civil War",
        wrongAnswers: ["World War I", "World War II", "Spanish-American War"],
      },
      {
        question:
          "Who was the first African American to win the Nobel Peace Prize?",
        correctAnswer: "Ralph Bunche",
        wrongAnswers: [
          "Martin Luther King Jr.",
          "Barack Obama",
          "W.E.B. Du Bois",
        ],
      },
      {
        question:
          "What was the name of the ship that brought the first English settlers to Jamestown?",
        correctAnswer: "Susan Constant",
        wrongAnswers: ["Mayflower", "Discovery", "Pinta"],
      },
      {
        question: "Who wrote the famous book 'The Communist Manifesto'?",
        correctAnswer: "Karl Marx",
        wrongAnswers: ["Friedrich Engels", "Vladimir Lenin", "Leon Trotsky"],
      },
      {
        question: "In which year did the French Revolution begin?",
        correctAnswer: "1789",
        wrongAnswers: ["1776", "1792", "1804"],
      },
      {
        question:
          "Which empire was known for its horse archers and nomadic culture?",
        correctAnswer: "Mongol Empire",
        wrongAnswers: ["Ottoman Empire", "Persian Empire", "Roman Empire"],
      },
      {
        question: "Who was the first woman to win a Nobel Prize?",
        correctAnswer: "Marie Curie",
        wrongAnswers: ["Rosalind Franklin", "Ada Lovelace", "Lise Meitner"],
      },
      {
        question: "What was the name of the treaty that ended World War I?",
        correctAnswer: "Treaty of Versailles",
        wrongAnswers: [
          "Treaty of Paris",
          "Treaty of Trianon",
          "Treaty of Brest-Litovsk",
        ],
      },
      {
        question:
          "Which country was the first to grant women the right to vote?",
        correctAnswer: "New Zealand",
        wrongAnswers: ["United States", "Finland", "Australia"],
      },
      {
        question: "What year did the United States enter World War I?",
        correctAnswer: "1917",
        wrongAnswers: ["1915", "1916", "1918"],
      },
      {
        question: "Who was known as the 'Iron Lady'?",
        correctAnswer: "Margaret Thatcher",
        wrongAnswers: ["Angela Merkel", "Indira Gandhi", "Golda Meir"],
      },
      {
        question:
          "What was the primary cause of the American Revolutionary War?",
        correctAnswer: "Taxation without representation",
        wrongAnswers: ["Slavery", "Territorial expansion", "Religious freedom"],
      },
      {
        question:
          "What was the name of the last monarch of France before the revolution?",
        correctAnswer: "Louis XVI",
        wrongAnswers: ["Louis XIV", "Marie Antoinette", "Charles X"],
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        correctAnswer: "Michelangelo",
        wrongAnswers: ["Leonardo da Vinci", "Raphael", "Donatello"],
      },
      {
        question: "What ancient civilization is known for its pyramids?",
        correctAnswer: "Egyptian Civilization",
        wrongAnswers: [
          "Mesoamerican Civilization",
          "Indus Valley Civilization",
          "Greek Civilization",
        ],
      },
      {
        question: "What year did the September 11 attacks occur?",
        correctAnswer: "2001",
        wrongAnswers: ["2000", "2002", "2003"],
      },
      {
        question: "Who was the first female Chancellor of Germany?",
        correctAnswer: "Angela Merkel",
        wrongAnswers: ["Margaret Thatcher", "Theresa May", "Golda Meir"],
      },
      {
        question: "What was the first successful English colony in America?",
        correctAnswer: "Jamestown",
        wrongAnswers: ["Plymouth", "Roanoke", "Savannah"],
      },
    ],
    Geography: [
      {
        question: "Which is the largest ocean on Earth?",
        correctAnswer: "Pacific Ocean",
        wrongAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      },
      {
        question: "Which country has the largest population?",
        correctAnswer: "China",
        wrongAnswers: ["India", "United States", "Russia"],
      },
      {
        question: "What is the capital of Australia?",
        correctAnswer: "Canberra",
        wrongAnswers: ["Sydney", "Melbourne", "Brisbane"],
      },
      {
        question: "Which desert is the largest in the world?",
        correctAnswer: "Sahara Desert",
        wrongAnswers: ["Gobi Desert", "Kalahari Desert", "Arctic Desert"],
      },
      {
        question: "Which is the longest river in the world?",
        correctAnswer: "Nile",
        wrongAnswers: ["Amazon", "Yangtze", "Mississippi"],
      },
      {
        question: "What is the smallest country in the world by area?",
        correctAnswer: "Vatican City",
        wrongAnswers: ["Monaco", "Malta", "San Marino"],
      },
      {
        question: "What is the tallest mountain in the world?",
        correctAnswer: "Mount Everest",
        wrongAnswers: ["K2", "Mount Kilimanjaro", "Mount McKinley"],
      },
      {
        question: "Which U.S. state is the largest by area?",
        correctAnswer: "Alaska",
        wrongAnswers: ["Texas", "California", "Montana"],
      },
      {
        question: "Which country is home to the Great Barrier Reef?",
        correctAnswer: "Australia",
        wrongAnswers: ["Brazil", "Indonesia", "Mexico"],
      },
      {
        question: "What is the longest mountain range in the world?",
        correctAnswer: "Andes",
        wrongAnswers: ["Himalayas", "Rockies", "Alps"],
      },
      {
        question: "Which European country is divided into cantons?",
        correctAnswer: "Switzerland",
        wrongAnswers: ["Austria", "Germany", "France"],
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        correctAnswer: "Japan",
        wrongAnswers: ["China", "Thailand", "South Korea"],
      },
      {
        question: "Which river runs through the city of London?",
        correctAnswer: "Thames",
        wrongAnswers: ["Seine", "Danube", "Clyde"],
      },
      {
        question: "What is the largest continent by land area?",
        correctAnswer: "Asia",
        wrongAnswers: ["Africa", "North America", "Europe"],
      },
      {
        question: "Which country has the longest coastline?",
        correctAnswer: "Canada",
        wrongAnswers: ["Australia", "Russia", "United States"],
      },
      {
        question: "Which country is both a continent and a country?",
        correctAnswer: "Australia",
        wrongAnswers: ["Greenland", "Antarctica", "New Zealand"],
      },
      {
        question: "Which African country was formerly known as Abyssinia?",
        correctAnswer: "Ethiopia",
        wrongAnswers: ["Somalia", "Sudan", "Eritrea"],
      },
      {
        question: "What is the capital of Brazil?",
        correctAnswer: "Brasília",
        wrongAnswers: ["Rio de Janeiro", "São Paulo", "Salvador"],
      },
      {
        question: "Which country has the most time zones?",
        correctAnswer: "France",
        wrongAnswers: ["United States", "Russia", "China"],
      },
      {
        question: "Which ocean surrounds the Maldives?",
        correctAnswer: "Indian Ocean",
        wrongAnswers: ["Atlantic Ocean", "Pacific Ocean", "Southern Ocean"],
      },
      {
        question: "What is the capital of Canada?",
        correctAnswer: "Ottawa",
        wrongAnswers: ["Toronto", "Vancouver", "Montreal"],
      },
      {
        question: "Which river flows through Egypt?",
        correctAnswer: "Nile",
        wrongAnswers: ["Amazon", "Mississippi", "Yangtze"],
      },
      {
        question: "What is the largest island in the world?",
        correctAnswer: "Greenland",
        wrongAnswers: ["New Guinea", "Borneo", "Madagascar"],
      },
      {
        question: "What mountain range separates Europe from Asia?",
        correctAnswer: "Ural Mountains",
        wrongAnswers: ["Himalayas", "Andes", "Rockies"],
      },
      {
        question: "Which city is known as the Big Apple?",
        correctAnswer: "New York City",
        wrongAnswers: ["Los Angeles", "Chicago", "Miami"],
      },
      {
        question: "Which country is the largest by area?",
        correctAnswer: "Russia",
        wrongAnswers: ["Canada", "China", "United States"],
      },
      {
        question: "Which river is the longest in South America?",
        correctAnswer: "Amazon",
        wrongAnswers: ["Paraná", "Orinoco", "São Francisco"],
      },
      {
        question: "What is the capital of Japan?",
        correctAnswer: "Tokyo",
        wrongAnswers: ["Kyoto", "Osaka", "Hiroshima"],
      },
      {
        question: "Which continent is known as the Dark Continent?",
        correctAnswer: "Africa",
        wrongAnswers: ["Asia", "South America", "Australia"],
      },
      {
        question: "What is the largest lake in the world?",
        correctAnswer: "Caspian Sea",
        wrongAnswers: ["Lake Superior", "Lake Victoria", "Lake Huron"],
      },
      {
        question: "Which country has the most pyramids?",
        correctAnswer: "Sudan",
        wrongAnswers: ["Egypt", "Mexico", "Iraq"],
      },
      {
        question: "Which continent has the fewest countries?",
        correctAnswer: "Antarctica",
        wrongAnswers: ["Oceania", "South America", "Europe"],
      },
      {
        question: "Which sea is the lowest point on Earth's surface?",
        correctAnswer: "Dead Sea",
        wrongAnswers: ["Red Sea", "Mediterranean Sea", "Caspian Sea"],
      },
      {
        question: "What is the capital of Italy?",
        correctAnswer: "Rome",
        wrongAnswers: ["Venice", "Milan", "Florence"],
      },
      {
        question: "Which country is known for its fjords?",
        correctAnswer: "Norway",
        wrongAnswers: ["Sweden", "Finland", "Iceland"],
      },
    ],
    Maths: [
      {
        question: "What is the value of Pi (π) to two decimal places?",
        correctAnswer: "3.14",
        wrongAnswers: ["2.72", "1.41", "3.33"],
      },
      {
        question: "What is the square root of 144?",
        correctAnswer: "12",
        wrongAnswers: ["14", "10", "16"],
      },
      {
        question: "What is 7 x 8?",
        correctAnswer: "56",
        wrongAnswers: ["54", "64", "48"],
      },
      {
        question: "What is the next prime number after 7?",
        correctAnswer: "11",
        wrongAnswers: ["9", "10", "13"],
      },
      {
        question: "What is the perimeter of a square with side length 5?",
        correctAnswer: "20",
        wrongAnswers: ["25", "10", "15"],
      },
      {
        question: "What is the formula for the area of a circle?",
        correctAnswer: "πr²",
        wrongAnswers: ["2πr", "πd", "r²"],
      },
      {
        question: "What is 9 cubed?",
        correctAnswer: "729",
        wrongAnswers: ["81", "6561", "512"],
      },
      {
        question: "What is 25% of 80?",
        correctAnswer: "20",
        wrongAnswers: ["15", "18", "25"],
      },
      {
        question: "What is 15 + 26?",
        correctAnswer: "41",
        wrongAnswers: ["40", "42", "39"],
      },
      {
        question: "What is the mode in the following data set: 2, 3, 3, 5, 7?",
        correctAnswer: "3",
        wrongAnswers: ["2", "5", "7"],
      },
      {
        question: "What is the smallest prime number?",
        correctAnswer: "2",
        wrongAnswers: ["1", "3", "5"],
      },
      {
        question: "What is 8 ÷ 2(2+2)?",
        correctAnswer: "16",
        wrongAnswers: ["1", "8", "4"],
      },
      {
        question: "What is the value of 7! (7 factorial)?",
        correctAnswer: "5040",
        wrongAnswers: ["720", "40320", "840"],
      },
      {
        question: "What is the sum of the interior angles of a triangle?",
        correctAnswer: "180°",
        wrongAnswers: ["360°", "90°", "270°"],
      },
      {
        question: "What is the slope of a horizontal line?",
        correctAnswer: "0",
        wrongAnswers: ["Undefined", "1", "-1"],
      },
      {
        question:
          "If a car travels 60 miles in 2 hours, what is the speed in miles per hour?",
        correctAnswer: "30 mph",
        wrongAnswers: ["120 mph", "20 mph", "40 mph"],
      },
      {
        question: "What is 3/5 as a percentage?",
        correctAnswer: "60%",
        wrongAnswers: ["50%", "70%", "80%"],
      },
      {
        question: "How many degrees are there in a full circle?",
        correctAnswer: "360°",
        wrongAnswers: ["180°", "90°", "270°"],
      },
      {
        question: "What is the derivative of x²?",
        correctAnswer: "2x",
        wrongAnswers: ["x", "x³", "1/x"],
      },
      {
        question: "What is the sum of the first 5 prime numbers?",
        correctAnswer: "28",
        wrongAnswers: ["26", "24", "30"],
      },
      {
        question: "What is 15% of 200?",
        correctAnswer: "30",
        wrongAnswers: ["25", "35", "40"],
      },
      {
        question: "What is the value of 2⁵?",
        correctAnswer: "32",
        wrongAnswers: ["16", "64", "20"],
      },
      {
        question:
          "What is the equation of a straight line in slope-intercept form?",
        correctAnswer: "y = mx + b",
        wrongAnswers: ["y = mx^2 + b", "y = bx + m", "y = mx + c"],
      },
      {
        question: "What is the least common multiple (LCM) of 4 and 6?",
        correctAnswer: "12",
        wrongAnswers: ["24", "6", "18"],
      },
      {
        question: "What is the area of a rectangle with length 10 and width 5?",
        correctAnswer: "50",
        wrongAnswers: ["55", "45", "60"],
      },
      {
        question: "What is the value of the expression: 5 + 2 × 3?",
        correctAnswer: "11",
        wrongAnswers: ["21", "15", "17"],
      },
      {
        question: "What is 6²?",
        correctAnswer: "36",
        wrongAnswers: ["30", "42", "24"],
      },
      {
        question: "What is the radius of a circle with a diameter of 10?",
        correctAnswer: "5",
        wrongAnswers: ["10", "3", "7"],
      },
      {
        question: "What is the sum of 100 and 250?",
        correctAnswer: "350",
        wrongAnswers: ["400", "300", "450"],
      },
      {
        question: "What is the formula for the perimeter of a rectangle?",
        correctAnswer: "2(l + w)",
        wrongAnswers: ["lw", "l + w", "2lw"],
      },
      {
        question: "What is the GCF (greatest common factor) of 12 and 16?",
        correctAnswer: "4",
        wrongAnswers: ["2", "8", "6"],
      },
      {
        question: "What is 9 + 10?",
        correctAnswer: "19",
        wrongAnswers: ["18", "20", "21"],
      },
      {
        question: "What is the value of x in the equation 2x + 4 = 12?",
        correctAnswer: "4",
        wrongAnswers: ["2", "6", "8"],
      },
      {
        question: "What is the next number in the sequence: 2, 4, 6, 8?",
        correctAnswer: "10",
        wrongAnswers: ["12", "14", "16"],
      },
      {
        question: "What is the volume of a cube with a side length of 3?",
        correctAnswer: "27",
        wrongAnswers: ["9", "18", "36"],
      },
      {
        question: "What is the decimal equivalent of the fraction 1/4?",
        correctAnswer: "0.25",
        wrongAnswers: ["0.5", "0.75", "0.1"],
      },
      {
        question:
          "What is the next number in the Fibonacci sequence: 0, 1, 1, 2, 3?",
        correctAnswer: "5",
        wrongAnswers: ["4", "6", "7"],
      },
    ],
    Literature: [
      {
        question: "Who wrote the novel '1984'?",
        correctAnswer: "George Orwell",
        wrongAnswers: ["Aldous Huxley", "J.K. Rowling", "F. Scott Fitzgerald"],
      },
      {
        question: "Which novel begins with the line 'Call me Ishmael'?",
        correctAnswer: "Moby Dick",
        wrongAnswers: [
          "The Old Man and the Sea",
          "Treasure Island",
          "Heart of Darkness",
        ],
      },
      {
        question: "Who is the author of 'Pride and Prejudice'?",
        correctAnswer: "Jane Austen",
        wrongAnswers: ["Charlotte Brontë", "Mary Shelley", "Emily Brontë"],
      },
      {
        question: "Who wrote the play 'Hamlet'?",
        correctAnswer: "William Shakespeare",
        wrongAnswers: ["Christopher Marlowe", "Ben Jonson", "John Milton"],
      },
      {
        question: "What is the name of the first Harry Potter book?",
        correctAnswer: "Harry Potter and the Philosopher's Stone",
        wrongAnswers: [
          "Harry Potter and the Chamber of Secrets",
          "Harry Potter and the Prisoner of Azkaban",
          "Harry Potter and the Goblet of Fire",
        ],
      },
      {
        question: "Who wrote the dystopian novel 'Brave New World'?",
        correctAnswer: "Aldous Huxley",
        wrongAnswers: ["George Orwell", "Ray Bradbury", "Philip K. Dick"],
      },
      {
        question:
          "Which novel is set in the fictional town of Maycomb, Alabama?",
        correctAnswer: "To Kill a Mockingbird",
        wrongAnswers: [
          "The Grapes of Wrath",
          "Of Mice and Men",
          "The Catcher in the Rye",
        ],
      },
      {
        question: "Who is the author of 'The Great Gatsby'?",
        correctAnswer: "F. Scott Fitzgerald",
        wrongAnswers: [
          "Ernest Hemingway",
          "William Faulkner",
          "John Steinbeck",
        ],
      },
      {
        question:
          "Which Charles Dickens novel features the character Ebenezer Scrooge?",
        correctAnswer: "A Christmas Carol",
        wrongAnswers: [
          "Oliver Twist",
          "David Copperfield",
          "Great Expectations",
        ],
      },
      {
        question: "Who wrote 'The Picture of Dorian Gray'?",
        correctAnswer: "Oscar Wilde",
        wrongAnswers: ["Bram Stoker", "Mary Shelley", "H.G. Wells"],
      },
      {
        question:
          "What is the title of J.R.R. Tolkien's novel that introduces Middle-earth?",
        correctAnswer: "The Hobbit",
        wrongAnswers: [
          "The Fellowship of the Ring",
          "The Silmarillion",
          "The Two Towers",
        ],
      },
      {
        question: "Who wrote 'The Catcher in the Rye'?",
        correctAnswer: "J.D. Salinger",
        wrongAnswers: [
          "John Steinbeck",
          "F. Scott Fitzgerald",
          "Ernest Hemingway",
        ],
      },
      {
        question: "Which Russian author wrote 'Crime and Punishment'?",
        correctAnswer: "Fyodor Dostoevsky",
        wrongAnswers: ["Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"],
      },
      {
        question: "Who wrote 'The Chronicles of Narnia' series?",
        correctAnswer: "C.S. Lewis",
        wrongAnswers: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin"],
      },
      {
        question:
          "In which novel would you find the character 'Atticus Finch'?",
        correctAnswer: "To Kill a Mockingbird",
        wrongAnswers: [
          "East of Eden",
          "The Scarlet Letter",
          "The Grapes of Wrath",
        ],
      },
      {
        question: "Who is the author of the novel 'Frankenstein'?",
        correctAnswer: "Mary Shelley",
        wrongAnswers: ["Bram Stoker", "H.G. Wells", "Jules Verne"],
      },
      {
        question: "Who wrote 'The Brothers Karamazov'?",
        correctAnswer: "Fyodor Dostoevsky",
        wrongAnswers: ["Leo Tolstoy", "Vladimir Nabokov", "Maxim Gorky"],
      },
      {
        question: "Who wrote the epic poem 'Paradise Lost'?",
        correctAnswer: "John Milton",
        wrongAnswers: ["Geoffrey Chaucer", "William Blake", "Alexander Pope"],
      },
      {
        question:
          "Which novel features the characters Elizabeth Bennet and Mr. Darcy?",
        correctAnswer: "Pride and Prejudice",
        wrongAnswers: ["Sense and Sensibility", "Emma", "Jane Eyre"],
      },
      {
        question: "Who wrote 'The Road'?",
        correctAnswer: "Cormac McCarthy",
        wrongAnswers: [
          "William Faulkner",
          "John Steinbeck",
          "Ernest Hemingway",
        ],
      },
      {
        question: "Who wrote 'The Handmaid's Tale'?",
        correctAnswer: "Margaret Atwood",
        wrongAnswers: ["Toni Morrison", "Alice Walker", "Virginia Woolf"],
      },
      {
        question:
          "What is the title of the first book in the 'Game of Thrones' series?",
        correctAnswer: "A Game of Thrones",
        wrongAnswers: [
          "A Clash of Kings",
          "A Storm of Swords",
          "A Dance with Dragons",
        ],
      },
      {
        question: "Who is the author of 'The Kite Runner'?",
        correctAnswer: "Khaled Hosseini",
        wrongAnswers: [
          "Chimamanda Ngozi Adichie",
          "Salman Rushdie",
          "Arundhati Roy",
        ],
      },
      {
        question: "Which novel features the character 'Jay Gatsby'?",
        correctAnswer: "The Great Gatsby",
        wrongAnswers: [
          "This Side of Paradise",
          "Tender Is the Night",
          "The Beautiful and Damned",
        ],
      },
      {
        question: "Who wrote 'Brave New World'?",
        correctAnswer: "Aldous Huxley",
        wrongAnswers: ["George Orwell", "Ray Bradbury", "Isaac Asimov"],
      },
      {
        question: "Who wrote 'One Hundred Years of Solitude'?",
        correctAnswer: "Gabriel García Márquez",
        wrongAnswers: [
          "Julio Cortázar",
          "Mario Vargas Llosa",
          "Jorge Luis Borges",
        ],
      },
      {
        question:
          "What is the title of the first book in the 'Harry Potter' series?",
        correctAnswer: "Harry Potter and the Philosopher's Stone",
        wrongAnswers: [
          "Harry Potter and the Chamber of Secrets",
          "Harry Potter and the Prisoner of Azkaban",
          "Harry Potter and the Goblet of Fire",
        ],
      },
      {
        question: "Who wrote 'The Fault in Our Stars'?",
        correctAnswer: "John Green",
        wrongAnswers: ["Suzanne Collins", "Rainbow Rowell", "Stephen Chbosky"],
      },
      {
        question:
          "Which Shakespeare play features the characters Oberon and Titania?",
        correctAnswer: "A Midsummer Night's Dream",
        wrongAnswers: [
          "Much Ado About Nothing",
          "Romeo and Juliet",
          "Twelfth Night",
        ],
      },
      {
        question: "Who wrote 'The Secret Garden'?",
        correctAnswer: "Frances Hodgson Burnett",
        wrongAnswers: ["Louisa May Alcott", "L.M. Montgomery", "E.B. White"],
      },
      {
        question: "Who wrote 'The Alchemist'?",
        correctAnswer: "Paulo Coelho",
        wrongAnswers: [
          "Gabriel García Márquez",
          "Jorge Amado",
          "Isabel Allende",
        ],
      },
      {
        question: "Who wrote 'The Bell Jar'?",
        correctAnswer: "Sylvia Plath",
        wrongAnswers: ["Virginia Woolf", "Toni Morrison", "Margaret Atwood"],
      },
    ],
    Movies: [
      {
        question: "Which movie won the Academy Award for Best Picture in 1994?",
        correctAnswer: "Forrest Gump",
        wrongAnswers: [
          "Pulp Fiction",
          "The Shawshank Redemption",
          "Four Weddings and a Funeral",
        ],
      },
      {
        question: "Who directed the movie 'Inception'?",
        correctAnswer: "Christopher Nolan",
        wrongAnswers: [
          "Steven Spielberg",
          "Quentin Tarantino",
          "James Cameron",
        ],
      },
      {
        question: "Which actor played Jack Dawson in 'Titanic'?",
        correctAnswer: "Leonardo DiCaprio",
        wrongAnswers: ["Brad Pitt", "Tom Cruise", "Johnny Depp"],
      },
      {
        question: "In which movie does the character 'Andy Dufresne' appear?",
        correctAnswer: "The Shawshank Redemption",
        wrongAnswers: ["Pulp Fiction", "The Green Mile", "Schindler's List"],
      },
      {
        question: "Which movie features the quote 'I'll be back'?",
        correctAnswer: "The Terminator",
        wrongAnswers: ["Die Hard", "Predator", "RoboCop"],
      },
      {
        question: "Who directed the 'Lord of the Rings' trilogy?",
        correctAnswer: "Peter Jackson",
        wrongAnswers: ["George Lucas", "James Cameron", "Ridley Scott"],
      },
      {
        question:
          "Which movie won the first Academy Award for Best Animated Feature?",
        correctAnswer: "Shrek",
        wrongAnswers: ["Toy Story", "Finding Nemo", "The Lion King"],
      },
      {
        question: "Which film features the song 'My Heart Will Go On'?",
        correctAnswer: "Titanic",
        wrongAnswers: ["Romeo + Juliet", "The Bodyguard", "Pretty Woman"],
      },
      {
        question: "Who starred as 'The Joker' in 'The Dark Knight'?",
        correctAnswer: "Heath Ledger",
        wrongAnswers: ["Joaquin Phoenix", "Jack Nicholson", "Jared Leto"],
      },
      {
        question: "Which movie is set on the fictional planet Pandora?",
        correctAnswer: "Avatar",
        wrongAnswers: ["Dune", "Star Wars", "Guardians of the Galaxy"],
      },
      {
        question:
          "Which 1999 movie is famous for the line 'I see dead people'?",
        correctAnswer: "The Sixth Sense",
        wrongAnswers: ["The Others", "The Exorcist", "Poltergeist"],
      },
      {
        question: "Who played 'Indiana Jones'?",
        correctAnswer: "Harrison Ford",
        wrongAnswers: ["Tom Selleck", "Mel Gibson", "Tom Hanks"],
      },
      {
        question: "Which movie franchise features 'Optimus Prime'?",
        correctAnswer: "Transformers",
        wrongAnswers: ["Star Trek", "Pacific Rim", "Power Rangers"],
      },
      {
        question:
          "Which movie features the quote 'Here's looking at you, kid'?",
        correctAnswer: "Casablanca",
        wrongAnswers: [
          "Gone with the Wind",
          "Citizen Kane",
          "The Maltese Falcon",
        ],
      },
      {
        question:
          "Which movie is about a boy who befriends an alien and helps him go home?",
        correctAnswer: "E.T. the Extra-Terrestrial",
        wrongAnswers: [
          "Close Encounters of the Third Kind",
          "The Iron Giant",
          "Flight of the Navigator",
        ],
      },
      {
        question: "Which actress starred in 'Breakfast at Tiffany's'?",
        correctAnswer: "Audrey Hepburn",
        wrongAnswers: ["Grace Kelly", "Marilyn Monroe", "Elizabeth Taylor"],
      },
      {
        question: "Which movie involves a park full of cloned dinosaurs?",
        correctAnswer: "Jurassic Park",
        wrongAnswers: ["King Kong", "The Lost World", "Land of the Lost"],
      },
      {
        question:
          "Which film is based on the novel 'Do Androids Dream of Electric Sheep?'?",
        correctAnswer: "Blade Runner",
        wrongAnswers: ["Total Recall", "The Matrix", "Minority Report"],
      },
      {
        question:
          "Which film franchise is known for the phrase 'May the Force be with you'?",
        correctAnswer: "Star Wars",
        wrongAnswers: ["Star Trek", "The Lord of the Rings", "Harry Potter"],
      },
      {
        question:
          "Which movie directed by Steven Spielberg features a man-eating shark?",
        correctAnswer: "Jaws",
        wrongAnswers: ["Deep Blue Sea", "The Abyss", "Sharknado"],
      },
      {
        question: "What movie features a character named 'Forrest Gump'?",
        correctAnswer: "Forrest Gump",
        wrongAnswers: [
          "The Curious Case of Benjamin Button",
          "The Green Mile",
          "Saving Private Ryan",
        ],
      },
      {
        question: "Who directed 'Pulp Fiction'?",
        correctAnswer: "Quentin Tarantino",
        wrongAnswers: [
          "Martin Scorsese",
          "Francis Ford Coppola",
          "David Fincher",
        ],
      },
      {
        question:
          "Which movie features a dance scene on a rooftop in Los Angeles?",
        correctAnswer: "La La Land",
        wrongAnswers: ["500 Days of Summer", "Grease", "Footloose"],
      },
      {
        question: "Who played the character of 'Neo' in 'The Matrix'?",
        correctAnswer: "Keanu Reeves",
        wrongAnswers: ["Matt Damon", "Brad Pitt", "Hugh Jackman"],
      },
      {
        question: "Which movie features a character named 'Darth Vader'?",
        correctAnswer: "Star Wars",
        wrongAnswers: ["Star Trek", "Dune", "Avatar"],
      },
      {
        question: "What animated film features the song 'Let It Go'?",
        correctAnswer: "Frozen",
        wrongAnswers: ["Tangled", "Moana", "Coco"],
      },
      {
        question: "Who directed 'Jurassic Park'?",
        correctAnswer: "Steven Spielberg",
        wrongAnswers: ["James Cameron", "Peter Jackson", "Ron Howard"],
      },
      {
        question:
          "Which film features a famous fight scene in a hotel corridor?",
        correctAnswer: "Oldboy",
        wrongAnswers: ["The Raid", "John Wick", "Kill Bill"],
      },
      {
        question:
          "Who starred in 'The Silence of the Lambs' as Hannibal Lecter?",
        correctAnswer: "Anthony Hopkins",
        wrongAnswers: ["Johnny Depp", "Gary Oldman", "Al Pacino"],
      },
      {
        question: "Which movie features a young girl named 'Matilda'?",
        correctAnswer: "Matilda",
        wrongAnswers: ["The Parent Trap", "Annie", "The Wizard of Oz"],
      },
      {
        question:
          "Which movie is set during World War II and features the character 'Captain Miller'?",
        correctAnswer: "Saving Private Ryan",
        wrongAnswers: ["Dunkirk", "Fury", "1917"],
      },
      {
        question: "What is the name of the lion in 'The Lion King'?",
        correctAnswer: "Simba",
        wrongAnswers: ["Mufasa", "Scar", "Nala"],
      },
      {
        question: "Which movie features a time-traveling car?",
        correctAnswer: "Back to the Future",
        wrongAnswers: ["Timecop", "The Time Machine", "Looper"],
      },
      {
        question:
          "Who played the role of 'Hermione Granger' in the Harry Potter films?",
        correctAnswer: "Emma Watson",
        wrongAnswers: ["Katherine Langford", "Lily Collins", "Dakota Fanning"],
      },
      {
        question: "Which animated film features a blue tang fish named 'Dory'?",
        correctAnswer: "Finding Nemo",
        wrongAnswers: ["Finding Dory", "Shark Tale", "Rio"],
      },
      {
        question: "Who directed the film 'The Godfather'?",
        correctAnswer: "Francis Ford Coppola",
        wrongAnswers: ["Martin Scorsese", "Quentin Tarantino", "Sofia Coppola"],
      },
    ],
    Sports: [
      {
        question: "In what sport would you perform a slam dunk?",
        correctAnswer: "Basketball",
        wrongAnswers: ["Tennis", "Soccer", "Volleyball"],
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        correctAnswer: "France",
        wrongAnswers: ["Brazil", "Germany", "Argentina"],
      },
      {
        question: "In which sport is the term 'love' used?",
        correctAnswer: "Tennis",
        wrongAnswers: ["Badminton", "Squash", "Table Tennis"],
      },
      {
        question: "Who holds the record for the most Olympic gold medals?",
        correctAnswer: "Michael Phelps",
        wrongAnswers: ["Usain Bolt", "Carl Lewis", "Mark Spitz"],
      },
      {
        question: "Which sport is associated with Wimbledon?",
        correctAnswer: "Tennis",
        wrongAnswers: ["Cricket", "Soccer", "Golf"],
      },
      {
        question: "How many players are there on a standard soccer team?",
        correctAnswer: "11",
        wrongAnswers: ["9", "10", "12"],
      },
      {
        question: "Which athlete is known as the 'fastest man on Earth'?",
        correctAnswer: "Usain Bolt",
        wrongAnswers: ["Carl Lewis", "Tyson Gay", "Yohan Blake"],
      },
      {
        question:
          "What is the maximum score in a single game of ten-pin bowling?",
        correctAnswer: "300",
        wrongAnswers: ["250", "200", "150"],
      },
      {
        question: "In which sport can you win the Stanley Cup?",
        correctAnswer: "Ice Hockey",
        wrongAnswers: ["Basketball", "Soccer", "Baseball"],
      },
      {
        question: "In which country were the first modern Olympic Games held?",
        correctAnswer: "Greece",
        wrongAnswers: ["France", "United States", "United Kingdom"],
      },
      {
        question: "How many holes are there in a standard round of golf?",
        correctAnswer: "18",
        wrongAnswers: ["9", "12", "15"],
      },
      {
        question: "Which sport is associated with the 'Super Bowl'?",
        correctAnswer: "American Football",
        wrongAnswers: ["Baseball", "Basketball", "Rugby"],
      },
      {
        question:
          "Who is the all-time leading goal scorer in the Premier League?",
        correctAnswer: "Alan Shearer",
        wrongAnswers: ["Thierry Henry", "Wayne Rooney", "Sergio Agüero"],
      },
      {
        question: "Which sport is played at the Augusta National Golf Club?",
        correctAnswer: "Golf",
        wrongAnswers: ["Tennis", "Cricket", "Rugby"],
      },
      {
        question: "Which country has won the most Cricket World Cups?",
        correctAnswer: "Australia",
        wrongAnswers: ["India", "West Indies", "England"],
      },
      {
        question: "In which sport would you find the 'All Blacks' team?",
        correctAnswer: "Rugby",
        wrongAnswers: ["Cricket", "Football", "Basketball"],
      },
      {
        question:
          "In which sport would you compete for the 'Vince Lombardi Trophy'?",
        correctAnswer: "American Football",
        wrongAnswers: ["Baseball", "Basketball", "Ice Hockey"],
      },
      {
        question: "What sport does Lionel Messi play?",
        correctAnswer: "Soccer",
        wrongAnswers: ["Tennis", "Basketball", "Rugby"],
      },
      {
        question: "In which sport can you win the 'Davis Cup'?",
        correctAnswer: "Tennis",
        wrongAnswers: ["Badminton", "Squash", "Golf"],
      },
      {
        question:
          "Which athlete is nicknamed 'The Greatest' and is an Olympic gold medalist?",
        correctAnswer: "Muhammad Ali",
        wrongAnswers: ["Mike Tyson", "Joe Frazier", "George Foreman"],
      },
      {
        question: "Which country hosted the 2008 Summer Olympics?",
        correctAnswer: "China",
        wrongAnswers: ["Greece", "United Kingdom", "Brazil"],
      },
      {
        question: "What is the official distance of a marathon?",
        correctAnswer: "26.2 miles",
        wrongAnswers: ["25 miles", "27 miles", "26 miles"],
      },
      {
        question: "Which sport is known as 'the beautiful game'?",
        correctAnswer: "Soccer",
        wrongAnswers: ["Basketball", "Cricket", "Tennis"],
      },
      {
        question: "Which country has the most Olympic gold medals overall?",
        correctAnswer: "United States",
        wrongAnswers: ["China", "Russia", "Great Britain"],
      },
      {
        question: "What is the maximum break in snooker?",
        correctAnswer: "147",
        wrongAnswers: ["150", "145", "130"],
      },
      {
        question:
          "In which sport do players use a racket to hit a shuttlecock?",
        correctAnswer: "Badminton",
        wrongAnswers: ["Tennis", "Squash", "Table Tennis"],
      },
      {
        question: "What position does a quarterback play in?",
        correctAnswer: "American Football",
        wrongAnswers: ["Baseball", "Basketball", "Soccer"],
      },
      {
        question: "Which sport is associated with the Tour de France?",
        correctAnswer: "Cycling",
        wrongAnswers: ["Running", "Swimming", "Triathlon"],
      },
      {
        question: "Which sport is played on a diamond?",
        correctAnswer: "Baseball",
        wrongAnswers: ["Cricket", "Softball", "Football"],
      },
      {
        question: "What do you call the scoring area in football?",
        correctAnswer: "End zone",
        wrongAnswers: ["Goal area", "Penalty area", "Touchdown zone"],
      },
      {
        question: "Which sport is played on a court and features volleys?",
        correctAnswer: "Tennis",
        wrongAnswers: ["Rugby", "American Football", "Baseball"],
      },
      {
        question: "What is the name of the trophy awarded to the NHL champion?",
        correctAnswer: "Stanley Cup",
        wrongAnswers: [
          "Lombardi Trophy",
          "Commissioner's Trophy",
          "World Series Trophy",
        ],
      },
      {
        question: "Which athlete is famous for his 'white gloves' in boxing?",
        correctAnswer: "Muhammad Ali",
        wrongAnswers: ["Mike Tyson", "Floyd Mayweather", "Sugar Ray Leonard"],
      },
      {
        question: "In which sport do players aim to score goals using a stick?",
        correctAnswer: "Ice Hockey",
        wrongAnswers: ["Soccer", "Rugby", "Cricket"],
      },
      {
        question:
          "Which country is known for its national sport of Sumo wrestling?",
        correctAnswer: "Japan",
        wrongAnswers: ["China", "South Korea", "Mongolia"],
      },
      {
        question:
          "In which sport do athletes compete in events like the 100m and marathon?",
        correctAnswer: "Athletics",
        wrongAnswers: ["Gymnastics", "Swimming", "Cycling"],
      },
    ],

    Music: [
      {
        question: "Who is known as the 'King of Pop'?",
        correctAnswer: "Michael Jackson",
        wrongAnswers: ["Elvis Presley", "Prince", "Freddie Mercury"],
      },
      {
        question: "Which band released the album 'Abbey Road'?",
        correctAnswer: "The Beatles",
        wrongAnswers: ["The Rolling Stones", "The Who", "Pink Floyd"],
      },
      {
        question: "Which classical composer became deaf later in life?",
        correctAnswer: "Ludwig van Beethoven",
        wrongAnswers: [
          "Johann Sebastian Bach",
          "Wolfgang Amadeus Mozart",
          "Franz Schubert",
        ],
      },
      {
        question: "Who is the lead singer of the band 'Queen'?",
        correctAnswer: "Freddie Mercury",
        wrongAnswers: ["David Bowie", "Mick Jagger", "Robert Plant"],
      },
      {
        question: "Which artist released the album 'Thriller'?",
        correctAnswer: "Michael Jackson",
        wrongAnswers: ["Prince", "Madonna", "Whitney Houston"],
      },
      {
        question: "What is the real name of 'Eminem'?",
        correctAnswer: "Marshall Mathers",
        wrongAnswers: ["Curtis Jackson", "Shawn Carter", "Andre Young"],
      },
      {
        question:
          "Which pop star is known for hits like 'Poker Face' and 'Bad Romance'?",
        correctAnswer: "Lady Gaga",
        wrongAnswers: ["Britney Spears", "Katy Perry", "Rihanna"],
      },
      {
        question: "Who is known as the 'Queen of Soul'?",
        correctAnswer: "Aretha Franklin",
        wrongAnswers: ["Whitney Houston", "Diana Ross", "Tina Turner"],
      },
      {
        question: "Which artist is famous for the song 'Purple Rain'?",
        correctAnswer: "Prince",
        wrongAnswers: ["Michael Jackson", "David Bowie", "Stevie Wonder"],
      },
      {
        question: "Which famous guitarist is known for playing left-handed?",
        correctAnswer: "Jimi Hendrix",
        wrongAnswers: ["Eric Clapton", "Jimmy Page", "B.B. King"],
      },
      {
        question: "What is the name of the lead vocalist of 'Nirvana'?",
        correctAnswer: "Kurt Cobain",
        wrongAnswers: ["Chris Cornell", "Eddie Vedder", "Layne Staley"],
      },
      {
        question: "Who is the best-selling female artist of all time?",
        correctAnswer: "Madonna",
        wrongAnswers: ["Whitney Houston", "Celine Dion", "Mariah Carey"],
      },
      {
        question: "Which band was fronted by Mick Jagger?",
        correctAnswer: "The Rolling Stones",
        wrongAnswers: ["The Beatles", "Led Zeppelin", "The Kinks"],
      },
      {
        question: "Which famous rapper is also known as 'Dr. Dre'?",
        correctAnswer: "Andre Young",
        wrongAnswers: ["Sean Combs", "Curtis Jackson", "Shawn Carter"],
      },
      {
        question: "Which country artist is known for the song 'Jolene'?",
        correctAnswer: "Dolly Parton",
        wrongAnswers: ["Reba McEntire", "Patsy Cline", "Shania Twain"],
      },
      {
        question: "Which British singer released the hit 'Someone Like You'?",
        correctAnswer: "Adele",
        wrongAnswers: ["Amy Winehouse", "Jessie J", "Duffy"],
      },
      {
        question: "Who composed the music for the film 'Star Wars'?",
        correctAnswer: "John Williams",
        wrongAnswers: ["Hans Zimmer", "James Horner", "Howard Shore"],
      },
      {
        question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
        correctAnswer: "Queen",
        wrongAnswers: ["Pink Floyd", "The Beatles", "Led Zeppelin"],
      },
      {
        question:
          "Who is known for the songs 'Like a Virgin' and 'Material Girl'?",
        correctAnswer: "Madonna",
        wrongAnswers: ["Whitney Houston", "Cyndi Lauper", "Tina Turner"],
      },
      {
        question: "Which classical composer wrote 'The Four Seasons'?",
        correctAnswer: "Antonio Vivaldi",
        wrongAnswers: [
          "Johann Sebastian Bach",
          "Wolfgang Amadeus Mozart",
          "Ludwig van Beethoven",
        ],
      },
      {
        question: "What is the title of the first album by The Beatles?",
        correctAnswer: "Please Please Me",
        wrongAnswers: ["Help!", "Rubber Soul", "Revolver"],
      },
      {
        question: "Which artist is known for the song 'Rolling in the Deep'?",
        correctAnswer: "Adele",
        wrongAnswers: ["Beyoncé", "Taylor Swift", "Rihanna"],
      },
      {
        question: "Who is the lead singer of the band 'U2'?",
        correctAnswer: "Bono",
        wrongAnswers: ["The Edge", "Adam Clayton", "Larry Mullen Jr."],
      },
      {
        question: "What year did Elvis Presley pass away?",
        correctAnswer: "1977",
        wrongAnswers: ["1975", "1980", "1968"],
      },
      {
        question: "Which famous singer's real name is Stefani Germanotta?",
        correctAnswer: "Lady Gaga",
        wrongAnswers: ["Ariana Grande", "Katy Perry", "Rihanna"],
      },
      {
        question: "What genre of music is Taylor Swift primarily known for?",
        correctAnswer: "Country",
        wrongAnswers: ["Pop", "Rock", "Hip-Hop"],
      },
      {
        question: "Who was the lead singer of 'The Doors'?",
        correctAnswer: "Jim Morrison",
        wrongAnswers: ["Janis Joplin", "Jimi Hendrix", "Robert Plant"],
      },
      {
        question: "Which band is known for the hit 'Sweet Child o' Mine'?",
        correctAnswer: "Guns N' Roses",
        wrongAnswers: ["Aerosmith", "Def Leppard", "Metallica"],
      },
      {
        question:
          "Which singer is known for her powerful vocal range and song 'Vision of Love'?",
        correctAnswer: "Mariah Carey",
        wrongAnswers: ["Whitney Houston", "Celine Dion", "Beyoncé"],
      },
      {
        question:
          "Which iconic band is known for the song 'Stairway to Heaven'?",
        correctAnswer: "Led Zeppelin",
        wrongAnswers: ["The Who", "Pink Floyd", "The Rolling Stones"],
      },
      {
        question:
          "Which pop star famously performed at the Super Bowl halftime show in 2004 with a 'wardrobe malfunction'?",
        correctAnswer: "Janet Jackson",
        wrongAnswers: ["Madonna", "Beyoncé", "Shakira"],
      },
      {
        question: "Who sang the theme song for the movie 'Titanic'?",
        correctAnswer: "Celine Dion",
        wrongAnswers: ["Whitney Houston", "Mariah Carey", "Adele"],
      },
      {
        question: "Which rapper's debut album was titled 'Illmatic'?",
        correctAnswer: "Nas",
        wrongAnswers: ["Jay-Z", "2Pac", "Notorious B.I.G."],
      },
      {
        question:
          "Which music festival takes place annually in Indio, California?",
        correctAnswer: "Coachella",
        wrongAnswers: ["Lollapalooza", "Glastonbury", "Bonnaroo"],
      },
    ],
    Technology: [
      {
        question: "Who is credited with inventing the World Wide Web?",
        correctAnswer: "Tim Berners-Lee",
        wrongAnswers: ["Bill Gates", "Steve Jobs", "Larry Page"],
      },
      {
        question: "What does 'HTTP' stand for in web addresses?",
        correctAnswer: "HyperText Transfer Protocol",
        wrongAnswers: [
          "Hyper Transfer Text Protocol",
          "HighText Transfer Protocol",
          "Hyperlink Text Transfer Protocol",
        ],
      },
      {
        question: "Which company developed the Android operating system?",
        correctAnswer: "Google",
        wrongAnswers: ["Microsoft", "Apple", "Samsung"],
      },
      {
        question: "What year was the first iPhone released?",
        correctAnswer: "2007",
        wrongAnswers: ["2005", "2008", "2010"],
      },
      {
        question:
          "Which programming language is known as the foundation of web development?",
        correctAnswer: "HTML",
        wrongAnswers: ["Python", "Java", "C++"],
      },
      {
        question:
          "Which company is known for developing the Windows operating system?",
        correctAnswer: "Microsoft",
        wrongAnswers: ["Apple", "IBM", "Google"],
      },
      {
        question:
          "What is the name of the first electronic general-purpose computer?",
        correctAnswer: "ENIAC",
        wrongAnswers: ["UNIVAC", "Colossus", "ABC"],
      },
      {
        question: "Who is the co-founder of Microsoft?",
        correctAnswer: "Bill Gates",
        wrongAnswers: ["Steve Jobs", "Elon Musk", "Mark Zuckerberg"],
      },
      {
        question: "What does the acronym 'RAM' stand for?",
        correctAnswer: "Random Access Memory",
        wrongAnswers: [
          "Read Access Memory",
          "Rapid Access Memory",
          "Run Access Memory",
        ],
      },
      {
        question:
          "Which company is known for creating the 'Macintosh' computer?",
        correctAnswer: "Apple",
        wrongAnswers: ["Microsoft", "IBM", "Dell"],
      },
      {
        question:
          "Which technology is used to make telephone calls over the Internet?",
        correctAnswer: "VoIP",
        wrongAnswers: ["VPN", "HTTP", "SMTP"],
      },
      {
        question: "What is the name of the main circuit board in a computer?",
        correctAnswer: "Motherboard",
        wrongAnswers: ["Processor", "Hard Drive", "Power Supply"],
      },
      {
        question: "Who is the founder of SpaceX and Tesla?",
        correctAnswer: "Elon Musk",
        wrongAnswers: ["Jeff Bezos", "Bill Gates", "Larry Page"],
      },
      {
        question:
          "Which company originally developed the Java programming language?",
        correctAnswer: "Sun Microsystems",
        wrongAnswers: ["Oracle", "Microsoft", "IBM"],
      },
      {
        question: "What year did Facebook launch?",
        correctAnswer: "2004",
        wrongAnswers: ["2003", "2005", "2006"],
      },
      {
        question: "What does 'USB' stand for?",
        correctAnswer: "Universal Serial Bus",
        wrongAnswers: [
          "Universal Service Bus",
          "Unified System Bus",
          "User Serial Bus",
        ],
      },
      {
        question: "What is the world's most widely used search engine?",
        correctAnswer: "Google",
        wrongAnswers: ["Bing", "Yahoo", "DuckDuckGo"],
      },
      {
        question: "Which company developed the 'MacBook'?",
        correctAnswer: "Apple",
        wrongAnswers: ["Microsoft", "HP", "Lenovo"],
      },
      {
        question: "What does 'AI' stand for in technology?",
        correctAnswer: "Artificial Intelligence",
        wrongAnswers: [
          "Automated Intelligence",
          "Active Integration",
          "Advanced Information",
        ],
      },
      {
        question:
          "What technology underpins blockchain-based cryptocurrencies?",
        correctAnswer: "Distributed Ledger",
        wrongAnswers: ["Cloud Computing", "AI", "Quantum Computing"],
      },
      {
        question: "Which company created the iOS operating system?",
        correctAnswer: "Apple",
        wrongAnswers: ["Microsoft", "Google", "Samsung"],
      },
      {
        question: "What does the term 'IoT' stand for?",
        correctAnswer: "Internet of Things",
        wrongAnswers: [
          "Internet of Technology",
          "Integrated Operating Technology",
          "International Open Technology",
        ],
      },
      {
        question:
          "Which programming language is primarily used for web development alongside HTML?",
        correctAnswer: "JavaScript",
        wrongAnswers: ["C++", "Java", "Ruby"],
      },
      {
        question: "What is the primary function of a web browser?",
        correctAnswer: "To access and display web pages",
        wrongAnswers: [
          "To create software",
          "To design graphics",
          "To manage databases",
        ],
      },
      {
        question: "Who is known as the father of computer science?",
        correctAnswer: "Alan Turing",
        wrongAnswers: ["Charles Babbage", "John von Neumann", "Ada Lovelace"],
      },
      {
        question:
          "Which protocol is used for secure communication over the Internet?",
        correctAnswer: "HTTPS",
        wrongAnswers: ["HTTP", "FTP", "SMTP"],
      },
      {
        question: "What is a common use for the programming language Python?",
        correctAnswer: "Data analysis",
        wrongAnswers: ["Graphic design", "Web hosting", "Hardware design"],
      },
      {
        question: "What does the acronym 'VPN' stand for?",
        correctAnswer: "Virtual Private Network",
        wrongAnswers: [
          "Virtual Public Network",
          "Variable Private Network",
          "Visual Private Network",
        ],
      },
      {
        question: "Which device is used to connect to a wireless network?",
        correctAnswer: "Wi-Fi adapter",
        wrongAnswers: ["Modem", "Router", "Switch"],
      },
      {
        question: "What is the main function of an operating system?",
        correctAnswer: "Manage hardware and software resources",
        wrongAnswers: ["Run applications", "Store data", "Create graphics"],
      },
      {
        question: "What is the primary function of a search engine?",
        correctAnswer: "To index and retrieve information from the web",
        wrongAnswers: [
          "To host websites",
          "To create web pages",
          "To provide cloud storage",
        ],
      },
      {
        question: "What does 'DNS' stand for?",
        correctAnswer: "Domain Name System",
        wrongAnswers: [
          "Data Network Service",
          "Digital Name System",
          "Domain Network Security",
        ],
      },
      {
        question:
          "Which company is known for the development of the Linux operating system?",
        correctAnswer: "Linus Torvalds",
        wrongAnswers: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
      },
    ],
    Art: [
      {
        question: "Who painted the 'Mona Lisa'?",
        correctAnswer: "Leonardo da Vinci",
        wrongAnswers: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      },
      {
        question: "Which artist is known for 'The Starry Night'?",
        correctAnswer: "Vincent van Gogh",
        wrongAnswers: ["Salvador Dalí", "Claude Monet", "Edgar Degas"],
      },
      {
        question: "What movement is Pablo Picasso known for co-founding?",
        correctAnswer: "Cubism",
        wrongAnswers: ["Impressionism", "Surrealism", "Expressionism"],
      },
      {
        question: "Which artist painted the ceiling of the Sistine Chapel?",
        correctAnswer: "Michelangelo",
        wrongAnswers: ["Leonardo da Vinci", "Raphael", "Donatello"],
      },
      {
        question:
          "Which famous artist is known for the 'Campbell's Soup Cans' paintings?",
        correctAnswer: "Andy Warhol",
        wrongAnswers: [
          "Roy Lichtenstein",
          "Jackson Pollock",
          "Jean-Michel Basquiat",
        ],
      },
      {
        question: "What style is Claude Monet famous for?",
        correctAnswer: "Impressionism",
        wrongAnswers: ["Cubism", "Surrealism", "Realism"],
      },
      {
        question: "Who sculpted 'David'?",
        correctAnswer: "Michelangelo",
        wrongAnswers: ["Donatello", "Bernini", "Rodin"],
      },
      {
        question:
          "Which artist is known for his melting clocks in 'The Persistence of Memory'?",
        correctAnswer: "Salvador Dalí",
        wrongAnswers: ["René Magritte", "Joan Miró", "Paul Klee"],
      },
      {
        question:
          "Who painted 'Guernica', a mural sized artwork reflecting the Spanish Civil War?",
        correctAnswer: "Pablo Picasso",
        wrongAnswers: ["Diego Rivera", "Salvador Dalí", "Francisco Goya"],
      },
      {
        question: "Which artist is known for the 'Sunflowers' series?",
        correctAnswer: "Vincent van Gogh",
        wrongAnswers: ["Paul Gauguin", "Henri Matisse", "Georges Seurat"],
      },
      {
        question:
          "What medium did Jackson Pollock famously use in his action paintings?",
        correctAnswer: "Drip painting",
        wrongAnswers: ["Pointillism", "Cubism", "Collage"],
      },
      {
        question: "Which architect designed the Guggenheim Museum in New York?",
        correctAnswer: "Frank Lloyd Wright",
        wrongAnswers: ["Le Corbusier", "Frank Gehry", "Zaha Hadid"],
      },
      {
        question:
          "What is the art style of Edvard Munch's famous painting 'The Scream'?",
        correctAnswer: "Expressionism",
        wrongAnswers: ["Impressionism", "Surrealism", "Cubism"],
      },
      {
        question:
          "Which artist is known for creating the bronze sculpture 'The Thinker'?",
        correctAnswer: "Auguste Rodin",
        wrongAnswers: [
          "Henry Moore",
          "Alberto Giacometti",
          "Constantin Brâncuși",
        ],
      },
      {
        question: "Who painted 'Girl with a Pearl Earring'?",
        correctAnswer: "Johannes Vermeer",
        wrongAnswers: ["Rembrandt", "Caravaggio", "Peter Paul Rubens"],
      },
      {
        question: "Which art movement is René Magritte associated with?",
        correctAnswer: "Surrealism",
        wrongAnswers: ["Cubism", "Impressionism", "Futurism"],
      },
      {
        question: "Which painter is known for the 'Water Lilies' series?",
        correctAnswer: "Claude Monet",
        wrongAnswers: [
          "Pierre-Auguste Renoir",
          "Paul Cézanne",
          "Henri Rousseau",
        ],
      },
      {
        question:
          "Which Renaissance artist is known for his 'Vitruvian Man' drawing?",
        correctAnswer: "Leonardo da Vinci",
        wrongAnswers: ["Raphael", "Donatello", "Michelangelo"],
      },
      {
        question: "Which artist is famous for painting 'American Gothic'?",
        correctAnswer: "Grant Wood",
        wrongAnswers: ["Edward Hopper", "Andrew Wyeth", "Georgia O'Keeffe"],
      },
      {
        question:
          "Which famous Mexican artist is known for self-portraits like 'The Two Fridas'?",
        correctAnswer: "Frida Kahlo",
        wrongAnswers: [
          "Diego Rivera",
          "Jose Clemente Orozco",
          "David Alfaro Siqueiros",
        ],
      },
      {
        question: "Who painted 'The Birth of Venus'?",
        correctAnswer: "Sandro Botticelli",
        wrongAnswers: ["Titian", "Caravaggio", "Raphael"],
      },
      {
        question: "What style is Jackson Pollock associated with?",
        correctAnswer: "Abstract Expressionism",
        wrongAnswers: ["Cubism", "Surrealism", "Futurism"],
      },
      {
        question: "Which artist is known for using pointillism in his work?",
        correctAnswer: "Georges Seurat",
        wrongAnswers: ["Vincent van Gogh", "Henri Matisse", "Paul Signac"],
      },
      {
        question: "Which artist created the sculpture 'Venus de Milo'?",
        correctAnswer: "Alexandros of Antioch",
        wrongAnswers: ["Phidias", "Praxiteles", "Calamis"],
      },
      {
        question: "Who is known for the painting 'The Girl with the Balloon'?",
        correctAnswer: "Banksy",
        wrongAnswers: ["Shepard Fairey", "Damien Hirst", "Ai Weiwei"],
      },
      {
        question:
          "What is the main theme of Edvard Munch's painting 'The Scream'?",
        correctAnswer: "Anxiety and existential dread",
        wrongAnswers: ["Love and joy", "War and peace", "Nature and beauty"],
      },
      {
        question: "Which famous painter is known for his blue period?",
        correctAnswer: "Pablo Picasso",
        wrongAnswers: ["Henri Matisse", "Vincent van Gogh", "Paul Gauguin"],
      },
      {
        question: "What type of paint did Claude Monet use in his artwork?",
        correctAnswer: "Oil paint",
        wrongAnswers: ["Acrylic paint", "Watercolor", "Tempera"],
      },
      {
        question: "Which artist is known for the mural 'The Last Supper'?",
        correctAnswer: "Leonardo da Vinci",
        wrongAnswers: ["Raphael", "Michelangelo", "Caravaggio"],
      },
      {
        question:
          "What is the primary subject of the painting 'The Night Watch'?",
        correctAnswer: "A militia company",
        wrongAnswers: ["A landscape", "A historical event", "A portrait"],
      },
      {
        question: "Which artist is known for his work on the Sistine Chapel?",
        correctAnswer: "Michelangelo",
        wrongAnswers: ["Raphael", "Leonardo da Vinci", "Donatello"],
      },
      {
        question: "Who painted the 'Creation of Adam'?",
        correctAnswer: "Michelangelo",
        wrongAnswers: ["Raphael", "Leonardo da Vinci", "Titian"],
      },
      {
        question:
          "Which style is characterized by exaggerated colors and distorted forms?",
        correctAnswer: "Fauvism",
        wrongAnswers: ["Impressionism", "Cubism", "Surrealism"],
      },
      {
        question: "Who is the artist behind the 'Campbell's Soup Cans' series?",
        correctAnswer: "Andy Warhol",
        wrongAnswers: [
          "Roy Lichtenstein",
          "Jackson Pollock",
          "Jean-Michel Basquiat",
        ],
      },
    ],
    General: [
      {
        question: "What is the capital of France?",
        correctAnswer: "Paris",
        wrongAnswers: ["Berlin", "Rome", "Madrid"],
      },
      {
        question: "What is the largest planet in our solar system?",
        correctAnswer: "Jupiter",
        wrongAnswers: ["Earth", "Mars", "Saturn"],
      },
      {
        question: "What is the hardest natural substance on Earth?",
        correctAnswer: "Diamond",
        wrongAnswers: ["Gold", "Iron", "Quartz"],
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        correctAnswer: "William Shakespeare",
        wrongAnswers: ["Charles Dickens", "Mark Twain", "Jane Austen"],
      },
      {
        question: "Which ocean is the largest?",
        correctAnswer: "Pacific Ocean",
        wrongAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      },
      {
        question: "What is the chemical symbol for gold?",
        correctAnswer: "Au",
        wrongAnswers: ["Ag", "Pb", "Fe"],
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        correctAnswer: "Michelangelo",
        wrongAnswers: ["Leonardo da Vinci", "Raphael", "Caravaggio"],
      },
      {
        question: "What is the currency of Japan?",
        correctAnswer: "Yen",
        wrongAnswers: ["Won", "Dollar", "Yuan"],
      },
      {
        question: "Which element has the atomic number 1?",
        correctAnswer: "Hydrogen",
        wrongAnswers: ["Oxygen", "Helium", "Carbon"],
      },
      {
        question: "What is the largest mammal in the world?",
        correctAnswer: "Blue Whale",
        wrongAnswers: ["Elephant", "Giraffe", "Hippopotamus"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        correctAnswer: "Mars",
        wrongAnswers: ["Earth", "Venus", "Jupiter"],
      },
      {
        question: "What is the most spoken language in the world?",
        correctAnswer: "Mandarin Chinese",
        wrongAnswers: ["Spanish", "English", "Hindi"],
      },
      {
        question: "Who was the first man to step on the moon?",
        correctAnswer: "Neil Armstrong",
        wrongAnswers: ["Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
      },
      {
        question: "What is the main ingredient in guacamole?",
        correctAnswer: "Avocado",
        wrongAnswers: ["Tomato", "Onion", "Pepper"],
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        correctAnswer: "Japan",
        wrongAnswers: ["China", "South Korea", "Thailand"],
      },
      {
        question: "What is the smallest country in the world?",
        correctAnswer: "Vatican City",
        wrongAnswers: ["Monaco", "Nauru", "Tuvalu"],
      },
      {
        question: "Which famous scientist developed the theory of relativity?",
        correctAnswer: "Albert Einstein",
        wrongAnswers: ["Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
      },
      {
        question: "What is the primary ingredient in bread?",
        correctAnswer: "Flour",
        wrongAnswers: ["Water", "Sugar", "Yeast"],
      },
      {
        question: "Who is known as the father of modern physics?",
        correctAnswer: "Albert Einstein",
        wrongAnswers: ["Isaac Newton", "Nikola Tesla", "Richard Feynman"],
      },
      {
        question: "What is the largest desert in the world?",
        correctAnswer: "Sahara Desert",
        wrongAnswers: ["Arabian Desert", "Gobi Desert", "Kalahari Desert"],
      },
      {
        question: "What is the longest river in the world?",
        correctAnswer: "Nile River",
        wrongAnswers: ["Amazon River", "Yangtze River", "Mississippi River"],
      },
      {
        question: "Which planet is known for its rings?",
        correctAnswer: "Saturn",
        wrongAnswers: ["Jupiter", "Uranus", "Neptune"],
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        correctAnswer: "Carbon Dioxide",
        wrongAnswers: ["Oxygen", "Nitrogen", "Hydrogen"],
      },
      {
        question: "What is the capital city of Australia?",
        correctAnswer: "Canberra",
        wrongAnswers: ["Sydney", "Melbourne", "Brisbane"],
      },
      {
        question: "Which element is represented by the symbol 'O'?",
        correctAnswer: "Oxygen",
        wrongAnswers: ["Gold", "Silver", "Iron"],
      },
      {
        question: "What is the largest continent on Earth?",
        correctAnswer: "Asia",
        wrongAnswers: ["Africa", "North America", "South America"],
      },
      {
        question:
          "What is the most widely used social media platform as of 2024?",
        correctAnswer: "Facebook",
        wrongAnswers: ["Twitter", "Instagram", "Snapchat"],
      },
      {
        question: "What is the main language spoken in Brazil?",
        correctAnswer: "Portuguese",
        wrongAnswers: ["Spanish", "English", "French"],
      },
      {
        question: "Which scientist is known for his laws of motion?",
        correctAnswer: "Isaac Newton",
        wrongAnswers: ["Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      },
      {
        question: "What is the capital of Italy?",
        correctAnswer: "Rome",
        wrongAnswers: ["Milan", "Venice", "Florence"],
      },
      {
        question: "What is the tallest mountain in the world?",
        correctAnswer: "Mount Everest",
        wrongAnswers: ["K2", "Kangchenjunga", "Lhotse"],
      },
      {
        question: "What is the most spoken language in the world?",
        correctAnswer: "Mandarin Chinese",
        wrongAnswers: ["Spanish", "English", "Hindi"],
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        correctAnswer: "Michelangelo",
        wrongAnswers: ["Leonardo da Vinci", "Raphael", "Caravaggio"],
      },
      {
        question: "What is the capital of Canada?",
        correctAnswer: "Ottawa",
        wrongAnswers: ["Toronto", "Vancouver", "Montreal"],
      },
      {
        question:
          "Which organ is responsible for pumping blood throughout the body?",
        correctAnswer: "Heart",
        wrongAnswers: ["Liver", "Lungs", "Kidneys"],
      },
      {
        question: "What is the chemical symbol for water?",
        correctAnswer: "H2O",
        wrongAnswers: ["O2", "CO2", "NaCl"],
      },
      {
        question: "Who invented the telephone?",
        correctAnswer: "Alexander Graham Bell",
        wrongAnswers: ["Thomas Edison", "Nikola Tesla", "Samuel Morse"],
      },
      {
        question: "What is the primary ingredient in chocolate?",
        correctAnswer: "Cocoa",
        wrongAnswers: ["Sugar", "Milk", "Vanilla"],
      },
    ],
    Random: [],
  },
};

const mutations = {
  mutateCategory(state, category) {
    state.selectedCategory = category;
  },
  mutateNumQuestions(state, num) {
    state.numQuestions = num;
  },
  mutateScore(state, score) {
    state.score = score;
  },
  mutateIncrementScore(state) {
    state.score++;
  },
};

const actions = {
  setCategory({ commit }, category) {
    commit("mutateCategory", category);
  },
  setNumQuestions({ commit }, num) {
    commit("mutateNumQuestions", num);
  },
  setScore({ commit }, score) {
    commit("mutateScore", score);
  },
  incrementScore({ commit }) {
    commit("mutateIncrementScore");
  },
  resetScore({ commit }) {
    commit("mutateScore", 0);
  },
  startQuiz({ state }) {
    let questionsToReturn = [];

    if (state.selectedCategory === "Random") {
      Object.keys(state.questions).forEach((category) => {
        if (category !== "Random") {
          questionsToReturn = questionsToReturn.concat(
            state.questions[category]
          );
        }
      });
    } else {
      questionsToReturn = state.questions[state.selectedCategory];
    }
    questionsToReturn = questionsToReturn.sort(() => Math.random() - 0.5);
    return questionsToReturn.slice(0, state.numQuestions);
  },
};

const getters = {
  getQuestionsByCategory: (state) => (category) => {
    return state.questions[category] || [];
  },
  getScore: (state) => state.score,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
