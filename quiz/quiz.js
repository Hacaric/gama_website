class MorseClass {
    constructor() {
        this.abc = morse_code_dict;
        this.abcLength = this.abc.length;
    }
    format(input, maxLineLength = 50) {
        var output = "";
        var latestSpace = 0;
        for (var i = 0; i < input.length-1; i++) {
            if (input[i] == "/" && input[i + 1] != "/") {
                latestSpace = i;
            }
            if (i % maxLineLength == 0 && i != 0) {
                output = output.slice(0,latestSpace) + "/\n" + output.slice(latestSpace);
            }else{
                output += input[i];
            }
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

const words = ["gamma je super", "skvely ivan", "morzeovka nas bavi", "ja jsem chnapik", "jeden dva tri", "ahoj jak sa mas", "prehral som", "ideme na druzinu roka", "dnes pojdem von", "pretoze malu betu lubi boh", "tesim sa na skautsky tabor"]

var answer = "";
function new_assigment(){
    var morse = new MorseClass(); 
    globalThis.answer = words[Math.floor(Math.random() * words.length)];
    try{
        var maxLineLength = document.getElementById("assigment").cols;
    }catch{
        console.log("[Error:73] cols not found");
        var maxLineLength = 50;    
    }
    var text = morse.encode(globalThis.answer, maxLineLength=maxLineLength);
    document.getElementById("answer_input").value = "";
    var assigment = document.getElementById("assigment");
    assigment.innerHTML = text;
}
function submit_answer(){
    var user_answer = document.getElementById("answer_input").value;
    if (cutSpacesFromEnd(user_answer).toLowerCase() == globalThis.answer.toLowerCase()){
        alert("Spravne!");
        new_assigment();
    }else{
        alert("Nespravne!");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    new_assigment();
    console.log("Nepodvádzaj!!!");
});

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
    '.', '.-.-.-',
    ',', '--..--',
    '?', '..--..',
    "'", '.----.',
    '!', '-.-.--',
    '/', '-..-.',
    '&', '.-...',
    ':', '---...',
    ';', '-.-.-.',
    '=', '-...-',
    '+', '.-.-.',
    '-', '-....-',
    '_', '..--.-',
    '"', '.-..-.',
    '$', '...-..-',
    '@', '.--.-.',
    ' ', '',
    '\n', '/',
]