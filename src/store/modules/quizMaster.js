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
        question: "What part of the cell contains genetic material?",
        correctAnswer: "Nucleus",
        wrongAnswers: ["Mitochondria", "Ribosome", "Cytoplasm"],
      },
      {
        question: "What is the powerhouse of the cell?",
        correctAnswer: "Mitochondria",
        wrongAnswers: ["Nucleus", "Ribosome", "Golgi apparatus"],
      },
      {
        question: "What is the chemical symbol for gold?",
        correctAnswer: "Au",
        wrongAnswers: ["Ag", "Pb", "Fe"],
      },
      {
        question: "Which gas is essential for human respiration?",
        correctAnswer: "Oxygen",
        wrongAnswers: ["Carbon Dioxide", "Hydrogen", "Nitrogen"],
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
