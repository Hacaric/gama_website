
const morse_code_dict = [
    'A', '.-',
    'B', '-...',
    'C', '-.-.',
    'D', '-..',
    'E', '.',
    'F', '..-.',
    'G', '--.',
    'H', '....',
    'I', '..',
    'J', '.---',
    'K', '-.-',
    'L', '.-..',
    'M', '--',
    'N', '-.',
    'O', '---',
    'P', '.--.',
    'Q', '--.-',
    'R', '.-.',
    'S', '...',
    'T', '-',
    'U', '..-',
    'V', '...-',
    'W', '.--',
    'X', '-..-',
    'Y', '-.--',
    'Z', '--..',
    '0', '-----',
    '1', '.----',
    '2', '..---',
    '3', '...--',
    '4', '....-',
    '5', '.....',
    '6', '-....',
    '7', '--...',
    '8', '---..',
    '9', '----.',
    // '.', '.-.-.-',
    // ',', '--..--',
    // '?', '..--..',
    // "'", '.----.',
    // '!', '-.-.--',
    // '/', '-..-.',
    // '&', '.-...',
    // ':', '---...',
    // ';', '-.-.-.',
    // '=', '-...-',
    // '+', '.-.-.',
    // '-', '-....-',
    // '_', '..--.-',
    // '"', '.-..-.',
    // '$', '...-..-',
    // '@', '.--.-.',
    ' ', '',
    '\n', '/',
]
class MorseClass {
    constructor() {
        this.abc = morse_code_dict;
        this.abcLength = this.abc.length;
    }
    format(input, maxLineLength = 50) {
        var output = "";
        var latestSpace = 0;
        for (var i = 0; i < input.length-1; i++) {
            if (input[i] == "/") {
                latestSpace = i;
            }
            if (i % maxLineLength == 0 && i != 0) {
                output = output.slice(0,latestSpace) + "/\n" + output.slice(latestSpace+1);
            }
            output += input[i];
        }
        return output;
    }
    encode(input, maxLineLength = 50) {
        var output = [];
        input = input.toUpperCase();
        for (let i = 0; i < input.length; i++) {
            try {
                const index = this.abc.indexOf(input[i]);
                if (index === -1) {
                    output.push(input[i]);
                } else {
                    output.push(this.abc[index + 1]);
                }
            } catch (error) {
                output.push(input[i]);
            }
        }
        return this.format(output.join("/"), maxLineLength=maxLineLength)+"///";
    }
    decode(input) {
        var output = [];
        var inputArray = input.split("/");
        for (let i = 0; i < inputArray.length; i++) {
            try {
                const index = this.abc.indexOf(inputArray[i]);
                if (index === -1) {
                    output.push(inputArray[i]);
                } else {
                    output.push(this.abc[index - 1]);
                }
            } catch (error) {
                output.push(inputArray[i]);
            }
        }
        return output.join("").toLowerCase();
    }
}

function cutSpacesFromEnd(input){
    while (input[input.length-1] == " "){
        input = input.slice(0, -1);
    }
    return input;
}

const words = [
    "gamma je super", 
    "skvely ivan", 
    "morzeovka nas bavi", 
    "ja jsem chnapik", 
    "jeden dva tri", 
    "ahoj jak sa mas", 
    "prehral som", 
    "ideme na druzinu roka", 
    "dnes pojdem von", 
    "pretoze malu betu lubi boh", 
    "tesim sa na skautsky tabor",
    "mam rad programovanie",
    "dnes je pekny den",
    "ucim sa morzeovku",
    "mam rad skauting",
    "rad citam knihy",
    "varim si cajicky",
    "mam rad sever proti juhu",
    "chodim na trojkopciak",
    "rad varim kapustove fliacky",
    "mam rad vaclava",
    "uzastny vaclav, bocian ktory stastie prinasa",
    "misko je kral",
    "matko je batman",
    "matko je vydracena bomba"
]

var random_text = ""; //this is answer
function new_assigment(){
    var morse = new MorseClass(); 
    globalThis.random_text = words[Math.floor(Math.random() * words.length)];
    try{
        var maxLineLength = document.getElementById("assigment").cols;
    }catch{
        console.log("[Error:73] cols not found");
        var maxLineLength = 50;    
    }
    var text = morse.encode(globalThis.random_text, maxLineLength=maxLineLength);
    document.getElementById("answer_input").value = "";
    var assigment = document.getElementById("assigment");
    assigment.innerHTML = text;
}
function submit_answer(){
    var user_answer = document.getElementById("answer_input").value;
    if (cutSpacesFromEnd(user_answer).toLowerCase() == globalThis.random_text.toLowerCase()){
        alert("Spravne!");
    }else{
        alert("Nespravne!");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    new_assigment();
    console.log("Nepodvádzaj!!!");
});

Object.defineProperty(globalThis, "answer", {
    get() {
      console.log("Access denied!");
      open("https://youtu.be/FqdmWQ-ACv0");
      return "Nepodvádzaj!!!"; // You can return any value here
    },
    set(value) {
      console.log(`Access denied. You tried to set answer to ${value}`);
    },
  });
