const quizzes = [
    {
        title: "Capitals of the World",
        questions: [
            { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
            { question: "What is the capital of Japan?", options: ["Seoul", "Tokyo", "Beijing", "Bangkok"], answer: "Tokyo" },
            { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: "Ottawa" },
            { question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Brisbane"], answer: "Canberra" },
            { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], answer: "Brasília" },
            { question: "What is the capital of Germany?", options: ["Berlin", "Munich", "Frankfurt", "Hamburg"], answer: "Berlin" },
            { question: "What is the capital of Italy?", options: ["Venice", "Rome", "Milan", "Naples"], answer: "Rome" },
            { question: "What is the capital of Russia?", options: ["Moscow", "Saint Petersburg", "Kazan", "Sochi"], answer: "Moscow" },
            { question: "What is the capital of China?", options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"], answer: "Beijing" },
            { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"], answer: "New Delhi" },
        ]
    },
    {
        title: "Famous Landmarks",
        questions: [
            { question: "Where is the Eiffel Tower located?", options: ["London", "Paris", "Rome", "Berlin"], answer: "Paris" },
            { question: "Which country is home to the Great Wall?", options: ["Japan", "China", "India", "Korea"], answer: "China" },
            { question: "Where is the Statue of Liberty?", options: ["New York", "Los Angeles", "Chicago", "Miami"], answer: "New York" },
            { question: "Where is the Colosseum located?", options: ["Athens", "Rome", "Istanbul", "Madrid"], answer: "Rome" },
            { question: "Where is Machu Picchu?", options: ["Peru", "Chile", "Brazil", "Argentina"], answer: "Peru" },
            { question: "Where is the Taj Mahal located?", options: ["India", "Pakistan", "Bangladesh", "Nepal"], answer: "India" },
            { question: "Where is Mount Rushmore?", options: ["South Dakota", "California", "Texas", "Nevada"], answer: "South Dakota" },
            { question: "Where is the Sydney Opera House?", options: ["Melbourne", "Sydney", "Brisbane", "Perth"], answer: "Sydney" },
            { question: "Where is the Pyramids of Giza?", options: ["Egypt", "Morocco", "Sudan", "Libya"], answer: "Egypt" },
            { question: "Where is Christ the Redeemer?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: "Rio de Janeiro" },
        ]
    },
    {
        title: "Science Trivia",
        questions: [
            { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
            { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
            { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
            { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"], answer: "300,000 km/s" },
            { question: "What is the center of an atom called?", options: ["Electron", "Proton", "Nucleus", "Neutron"], answer: "Nucleus" },
            { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Hg"], answer: "Au" },
            { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], answer: "Photosynthesis" },
            { question: "What is the boiling point of water?", options: ["100°C", "50°C", "200°C", "0°C"], answer: "100°C" },
            { question: "What is the smallest unit of life?", options: ["Atom", "Molecule", "Cell", "Organ"], answer: "Cell" },
        ]
    },
    {
        title: "History Quiz",
        questions: [
            { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
            { question: "In which year did World War II end?", options: ["1945", "1939", "1918", "1963"], answer: "1945" },
            { question: "Who discovered America?", options: ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "Vasco da Gama"], answer: "Christopher Columbus" },
            { question: "Which empire built the Colosseum?", options: ["Greek", "Roman", "Ottoman", "Byzantine"], answer: "Roman" },
            { question: "Who was known as the Iron Lady?", options: ["Margaret Thatcher", "Indira Gandhi", "Angela Merkel", "Queen Elizabeth II"], answer: "Margaret Thatcher" },
            { question: "What was the name of the ship on which the Pilgrims traveled to America?", options: ["Mayflower", "Santa Maria", "Endeavour", "Victoria"], answer: "Mayflower" },
            { question: "Who was the first man to step on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
            { question: "Which ancient civilization built the pyramids?", options: ["Egyptians", "Mayans", "Romans", "Aztecs"], answer: "Egyptians" },
            { question: "Who wrote the Declaration of Independence?", options: ["Thomas Jefferson", "Benjamin Franklin", "John Adams", "George Washington"], answer: "Thomas Jefferson" },
            { question: "What year did the Berlin Wall fall?", options: ["1989", "1991", "1975", "1961"], answer: "1989" },
        ]
    },
    {
        title: "Sports Quiz",
        questions: [
            { question: "Which country won the FIFA World Cup in 2018?", options: ["Brazil", "Germany", "France", "Argentina"], answer: "France" },
            { question: "How many players are there in a soccer team?", options: ["9", "10", "11", "12"], answer: "11" },
            { question: "Which sport is known as the 'king of sports'?", options: ["Basketball", "Soccer", "Tennis", "Cricket"], answer: "Soccer" },
            { question: "Who holds the record for the most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"], answer: "Michael Phelps" },
            { question: "Which country is known for sumo wrestling?", options: ["China", "Japan", "South Korea", "Thailand"], answer: "Japan" },
            { question: "What is the national sport of Canada?", options: ["Hockey", "Lacrosse", "Baseball", "Basketball"], answer: "Lacrosse" },
            { question: "Which tennis player has won the most Grand Slam titles?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], answer: "Novak Djokovic" },
            { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "Japan", "USA"], answer: "Brazil" },
            { question: "What is the highest score in a single frame of bowling?", options: ["100", "200", "300", "400"], answer: "300" },
            { question: "Which sport uses the term 'love' for a score of zero?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], answer: "Tennis" },
        ]
    },
    {
        title: "Movies and TV",
        questions: [
            { question: "Who directed the movie 'Inception'?", options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], answer: "Christopher Nolan" },
            { question: "Which movie features the character 'Jack Dawson'?", options: ["Titanic", "Avatar", "The Great Gatsby", "Inception"], answer: "Titanic" },
            { question: "What is the name of the wizarding school in 'Harry Potter'?", options: ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"], answer: "Hogwarts" },
            { question: "Which TV series is set in the fictional town of Hawkins?", options: ["Stranger Things", "The X-Files", "Twin Peaks", "Dark"], answer: "Stranger Things" },
            { question: "Who played the Joker in 'The Dark Knight'?", options: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"], answer: "Heath Ledger" },
            { question: "What is the highest-grossing movie of all time?", options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"], answer: "Avatar" },
            { question: "Which movie features the quote 'May the Force be with you'?", options: ["Star Wars", "Star Trek", "Guardians of the Galaxy", "Dune"], answer: "Star Wars" },
            { question: "What is the name of the main character in 'Breaking Bad'?", options: ["Walter White", "Jesse Pinkman", "Saul Goodman", "Hank Schrader"], answer: "Walter White" },
            { question: "Which animated movie features the song 'Let It Go'?", options: ["Frozen", "Moana", "Tangled", "The Lion King"], answer: "Frozen" },
            { question: "Who played Iron Man in the Marvel Cinematic Universe?", options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"], answer: "Robert Downey Jr." },
        ]
    },
    {
        title: "Music Quiz",
        questions: [
            { question: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"], answer: "Michael Jackson" },
            { question: "Which band released the album 'Abbey Road'?", options: ["The Beatles", "The Rolling Stones", "Pink Floyd", "Led Zeppelin"], answer: "The Beatles" },
            { question: "What is the name of Beyoncé's fanbase?", options: ["Beyhive", "Swifties", "Little Monsters", "Directioners"], answer: "Beyhive" },
            { question: "Which artist sang 'Shape of You'?", options: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Sam Smith"], answer: "Ed Sheeran" },
            { question: "What is the best-selling album of all time?", options: ["Thriller", "Back in Black", "The Dark Side of the Moon", "The Wall"], answer: "Thriller" },
            { question: "Which classical composer became deaf later in life?", options: ["Mozart", "Beethoven", "Bach", "Chopin"], answer: "Beethoven" },
            { question: "Who is the lead singer of the band Queen?", options: ["Freddie Mercury", "Mick Jagger", "Robert Plant", "David Bowie"], answer: "Freddie Mercury" },
            { question: "Which artist is known for the song 'Rolling in the Deep'?", options: ["Adele", "Taylor Swift", "Lady Gaga", "Katy Perry"], answer: "Adele" },
            { question: "What is the name of Taylor Swift's debut album?", options: ["Fearless", "1989", "Taylor Swift", "Red"], answer: "Taylor Swift" },
            { question: "Which rapper is known as 'Slim Shady'?", options: ["Eminem", "Dr. Dre", "Kanye West", "Jay-Z"], answer: "Eminem" },
        ]
    },
    {
        title: "Geography Quiz",
        questions: [
            { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
            { question: "Which desert is the largest in the world?", options: ["Sahara", "Gobi", "Kalahari", "Arctic"], answer: "Sahara" },
            { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Luxor", "Giza"], answer: "Cairo" },
            { question: "Which country has the most islands?", options: ["Sweden", "Indonesia", "Philippines", "Canada"], answer: "Sweden" },
            { question: "What is the smallest country in the world?", options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], answer: "Vatican City" },
            { question: "Which continent is known as the 'Frozen Continent'?", options: ["Antarctica", "Europe", "Asia", "North America"], answer: "Antarctica" },
            { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], answer: "Japan" },
            { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
            { question: "Which mountain range is home to Mount Everest?", options: ["Andes", "Rockies", "Himalayas", "Alps"], answer: "Himalayas" },
            { question: "What is the official language of Brazil?", options: ["Spanish", "Portuguese", "French", "English"], answer: "Portuguese" },
        ]
    },
    {
        title: "Egypt Quiz",
        questions: [
            { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Luxor", "Giza"], answer: "Cairo" },
            { question: "Which river flows through Egypt?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
            { question: "What is the name of the ancient writing system used in Egypt?", options: ["Cuneiform", "Hieroglyphics", "Latin", "Sanskrit"], answer: "Hieroglyphics" },
            { question: "Which ancient structure is one of the Seven Wonders of the World?", options: ["Great Pyramid of Giza", "Colosseum", "Machu Picchu", "Stonehenge"], answer: "Great Pyramid of Giza" },
            { question: "Who was the famous female pharaoh of Egypt?", options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Nefertari"], answer: "Hatshepsut" },
            { question: "What is the official language of Egypt?", options: ["Arabic", "English", "French", "Coptic"], answer: "Arabic" },
            { question: "Which sea borders Egypt to the north?", options: ["Red Sea", "Mediterranean Sea", "Black Sea", "Arabian Sea"], answer: "Mediterranean Sea" },
            { question: "What is the name of the famous Egyptian museum in Cairo?", options: ["The Egyptian Museum", "Louvre Museum", "British Museum", "Smithsonian"], answer: "The Egyptian Museum" },
            { question: "Which Egyptian city is known for its ancient temples?", options: ["Luxor", "Aswan", "Alexandria", "Hurghada"], answer: "Luxor" },
            { question: "What is the currency of Egypt?", options: ["Egyptian Pound", "Dollar", "Euro", "Dinar"], answer: "Egyptian Pound" },
        ]
    },
    {
        title: "General Knowledge",
        questions: [
            { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
            { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], answer: "William Shakespeare" },
            { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Hg"], answer: "Au" },
            { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], answer: "Japan" },
            { question: "What is the smallest country in the world?", options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], answer: "Vatican City" },
            { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], answer: "Leonardo da Vinci" },
            { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
            { question: "Which ocean is the largest?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
            { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Lime"], answer: "Avocado" },
            { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"], answer: "Alexander Fleming" },
        ]
    },
];

let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;

const quizListElement = document.getElementById("quiz-list");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

// Display quiz list
function displayQuizList() {
    quizListElement.style.display = "block";
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    submitButton.style.display = "none";
    resultElement.style.display = "none";
}

// Start selected quiz
function startQuiz(quizIndex) {
    currentQuiz = quizzes[quizIndex];
    currentQuestionIndex = 0;
    score = 0;
    quizListElement.style.display = "none";
    questionElement.style.display = "block";
    optionsElement.style.display = "block";
    submitButton.style.display = "block";
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

// Handle option selection
function selectOption(selectedOption) {
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Show result
function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    submitButton.style.display = "none";
    resultElement.style.display = "block";
    resultElement.innerHTML = `
        <p>You scored ${score} out of ${currentQuiz.questions.length}</p>
        <button id="home-btn">Go to Home</button>
    `;
    document.getElementById("home-btn").addEventListener("click", displayQuizList);
}

// Restart quiz
function restartQuiz() {
    displayQuizList();
}

// Add event listeners to quiz buttons
document.querySelectorAll(".quiz-btn").forEach((button, index) => {
    button.addEventListener("click", () => startQuiz(index));
});

// Add event listener to submit button
submitButton.addEventListener("click", restartQuiz);

// Initialize the quiz list
displayQuizList();