let x = "";
let text_x = "";
let question_state = false;
let language = "ukr";

const UKR_NUMS = [
    "нуль", 
    "один",
    "два",
    "три",
    "чотири",
    "п’ять",
    "шість",
    "сім",
    "вісім",
    "дев’ять",
    "десять",
    "одинадцять",
    "дванадцять",
    "тринадцять",
    "чотирнадцять",
    "п'ятнадцять",
    "шістнадцять",
    "сімнадцять",
    "вісімнадцять",
    "дев’ятнадцять",
    "двадцять",
    "двадцять один",
    "двадцять два",
    "двадцять три",
    "двадцять чотири",
    "двадцять п’ять",
    "двадцять шість",
    "двадцять сім",
    "двадцять вісім",
    "двадцять дев’ять",
    "тридцять",
    "тридцять один",
    "тридцять два",
    "тридцять три",
    "тридцять чотири",
    "тридцять п’ять",
    "тридцять шість",
    "тридцять сім",
    "тридцять вісім",
    "тридцять дев’ять",
    "сорок",
    "сорок один",
    "сорок два",
    "сорок три",
    "сорок чотири",
    "сорок п’ять",
    "сорок шість",
    "сорок сім",
    "сорок вісім",
    "сорок дев’ять",
    "п’ятдесят",
    "п’ятдесят один",
    "п’ятдесят два",
    "п’ятдесят три",
    "п’ятдесят чотири",
    "п’ятдесят п’ять",
    "п’ятдесят шість",
    "п’ятдесят сім",
    "п’ятдесят вісім",
    "п’ятдесят дев’ять",
    "шістдесят",
    "шістдесят один",
    "шістдесят два",
    "шістдесят три",
    "шістдесят чотири",
    "шістдесят п’ять",
    "шістдесят шість",
    "шістдесят сім",
    "шістдесят вісім",
    "шістдесят дев’ять",
    "сімдесят",
    "сімдесят один",
    "сімдесят два",
    "сімдесят три",
    "сімдесят чотири",
    "сімдесят п’ять",
    "сімдесят шість",
    "сімдесят сім",
    "сімдесят вісім",
    "сімдесят дев’ять",
    "вісімдесят",
    "вісімдесят один",
    "вісімдесят два",
    "вісімдесят три",
    "вісімдесят чотири",
    "вісімдесят п’ять",
    "вісімдесят шість",
    "вісімдесят сім",
    "вісімдесят вісім",
    "вісімдесят дев’ять",
    "дев’яносто",
    "дев’яносто один",
    "дев’яносто два",
    "дев’яносто три",
    "дев’яносто чотири",
    "дев’яносто п’ять",
    "дев’яносто шість",
    "дев’яносто сім",
    "дев’яносто вісім",
    "дев’яносто дев’ять",
    "сто"
]

const ENG_NUMS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty-one",
    "twenty-two",
    "twenty-three",
    "twenty-four",
    "twenty-five",
    "twenty-six",
    "twenty-seven",
    "twenty-eight",
    "twenty-nine",
    "thirty",
    "thirty-one",
    "thirty-two",
    "thirty-three",
    "thirty-four",
    "thirty-five",
    "thirty-six",
    "thirty-seven",
    "thirty-eight",
    "thirty-nine",
    "forty",
    "forty-one",
    "forty-two",
    "forty-three",
    "forty-four",
    "forty-five",
    "forty-six",
    "forty-seven",
    "forty-eight",
    "forty-nine",
    "fifty",
    "fifty-one",
    "fifty-two",
    "fifty-three",
    "fifty-four",
    "fifty-five",
    "fifty-six",
    "fifty-seven",
    "fifty-eight",
    "fifty-nine",
    "sixty",
    "sixty-one",
    "sixty-two",
    "sixty-three",
    "sixty-four",
    "sixty-five",
    "sixty-six",
    "sixty-seven",
    "sixty-eight",
    "sixty-nine",
    "seventy",
    "seventy-one",
    "seventy-two",
    "seventy-three",
    "seventy-four",
    "seventy-five",
    "seventy-six",
    "seventy-seven",
    "seventy-eight",
    "seventy-nine",
    "eighty",
    "eighty-one",
    "eighty-two",
    "eighty-three",
    "eighty-four",
    "eighty-five",
    "eighty-six",
    "eighty-seven",
    "eighty-eight",
    "eighty-nine",
    "ninety",
    "ninety-one",
    "ninety-two",
    "ninety-three",
    "ninety-four",
    "ninety-five",
    "ninety-six",
    "ninety-seven",
    "ninety-eight",
    "ninety-nine",
    "one hundred"
]

function changeLanguage() {
    if (language == "ukr") {
        document.getElementById("answer-sound").style.display = "none";
    } else {
        document.getElementById("answer-sound").style.display = "inline"; 
    }

    if (x != "") {
        getTextNumber(x);
    }
}

function getNewNumber() {
    x = Math.floor(Math.random() * 101); // Numbers 0 to 100
}

function getTextNumber(x) {
    if (language == "ukr") {
        text_x = UKR_NUMS[x];
    } else {
        text_x = ENG_NUMS[x];
        audio = new Audio("../audio/eng/" + x + ".wav");
    }
    document.getElementById("number-label").innerHTML = text_x;
}

changeLanguage(); // Setup
document.getElementById("answer").style.visibility = "hidden";

// Change the value of the language variable depending on what's selected.
let radios = document.querySelectorAll('input[type=radio][name="language"]');
radios.forEach(radio => radio.addEventListener('change', function(){
    language=radio.value;
    changeLanguage();
}));

let audio = new Audio("../audio/eng/1.wav");
let answer_sound = document.getElementById("answer-sound");
answer_sound.addEventListener("click", () => {
    audio.play();
  });


document.getElementById("control-button").onclick = function(){
    if (question_state == false) {
        document.getElementById("answer").style.visibility = "hidden";
        getNewNumber();
        getTextNumber(x);
        document.getElementById("random-number").innerHTML = x;
        document.getElementById("control-button").innerHTML = 'Show Answer';
        question_state = true;
    } else {
        // Show the answer
        document.getElementById("answer").style.visibility = "visible";        
        document.getElementById("control-button").innerHTML = 'Get Next Number';
        question_state = false;
    }
    
}