
const undefinedChar = "\uFFFD";
var shifre = null;

function mod(x, y) {
    return ((x % y) + y) % y;
}
class MorseClass {
    constructor() {
        this.abc = morse_code_dict;
        this.abcLength = this.abc.length;
    }
    format(input, maxLineLength = 50) {
        var output = "";
        var latestNew = 0;
        input = input.split("/")
        var len = 0;
        for (var i = 0; i < input.length; i++) {
            len += input[i].length;
            if (len > maxLineLength) {
                output += "\n";
                len = input[i].length;
            }
            output += input[i]+"/";
        }
        output = output.slice(0,-1);
        return output;
    }
    encode(input, maxLineLength = 25) {
        var output = [];
        input = input.toUpperCase();
        for (let i = 0; i < input.length; i++) {
            try {
                if (input[i] == ".") {
                    output.push(".-.-.-");
                    continue;
                }else if (input[i] == "-") {
                    output.push("-....-");
                    continue;
                }
                const index = this.abc.indexOf(input[i]);
                if (index === -1) {
                    throw "Unknown character";
                } else {
                    output.push(this.abc[index + 1]);
                }
            } catch (error) {
                output.push(input[i]);
            }
        }
        return this.format(output.join("/"), maxLineLength=maxLineLength);
    }
    decode(input) {
        input = input.replaceAll("\n","").replaceAll(" ","").replaceAll("\t","");
        var output = [];
        var inputArray = input.split("/");
        for (let i = 0; i < inputArray.length; i++) {
            try {
                const index = this.abc.indexOf(inputArray[i]);
                if (index === -1) {
                    throw "Unknown character";
                } else {
                    output.push(this.abc[index - 1]);
                }
            } catch (error) {
                if (inputArray[i].replaceAll("-","").replaceAll(".","") == "") {
                    output.push(undefinedChar);
                }else{
                    output.push(inputArray[i]);
                }
            }
        }
        return output.join("").toLowerCase();
    }
}

class MorseClassWithKey {
    constructor() {
        this.morse = new MorseClass();
    }
    encode(input, key) {
        var maxLineLength = document.getElementById("output").cols;
        return this.morse.encode(input, maxLineLength);
    }
    decode(input, key) {
        return this.morse.decode(input);
    }
}

class CeaserClass {
    constructor() {
        this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\ áéíóúďťňľčšÁÉÍÓÚĎŤŇĽČŠúÚňô";
        this.abcLength = this.abc.length;
    }

    encode(input, key) {
        key = Math.floor(key);
        const output = [];
        for (let i = 0; i < input.length; i++) {
            const index = this.abc.indexOf(input[i]);
            if (index === -1) {
                output.push(input[i]);
            } else {
                output.push(this.abc[(index + key) % this.abcLength]);
            }
        }
        return output.join("");
    }

    decode(input, key) {
        key = Math.floor(key);
        const output = [];
        for (let i = 0; i < input.length; i++) {
            const index = this.abc.indexOf(input[i]);
            if (index === -1) {
                output.push(input[i]);
            } else {
                output.push(this.abc[(index - key + this.abcLength) % this.abcLength]);
            }
        }
        return output.join("");
    }
}

class VigenerClass {
    constructor() {
        this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\ áéíóúďťňľčšÁÉÍÓÚĎŤŇĽČŠúÚňô";
        this.abcLength = this.abc.length;
    }

    encode(input, key) {
        const keyIndexes = [];
        for (let i = 0; i < key.length; i++) {
            const index = this.abc.indexOf(key[i]);
            if (index === -1) {
                keyIndexes.push(0);
            } else {
                keyIndexes.push(index);
            }
        }
        const keyLength = keyIndexes.length;
        const output = [];
        for (let i = 0; i < input.length; i++) {
            const index = this.abc.indexOf(input[i]);
            if (index === -1) {
                output.push(input[i]);
            } else {
                output.push(this.abc[(index + keyIndexes[i % keyLength]) % this.abcLength]);
            }
        }
        return output.join("");
    }

    decode(input, key) {
        const keyIndexes = [];
        for (let i = 0; i < key.length; i++) {
            keyIndexes.push(this.abcLength - this.abc.indexOf(key[i]));
        }
        const keyLength = keyIndexes.length;
        const output = [];
        for (let i = 0; i < input.length; i++) {
            const index = this.abc.indexOf(input[i]);
            if (index === -1) {
                output.push(input[i]);
            } else {
                output.push(this.abc[(index + keyIndexes[i % keyLength]) % this.abcLength]);
            }
        }
        return output.join("");
    }
}
var submit_values = {"text": "", "key": "", "operationType": "encode"};
function submit_values_changed(text, key, operationType){
    if (submit_values["text"] != text || submit_values["key"] != key || submit_values["operationType"] != operationType){
        return true;
    }
}

function submit(operationType, shifreType, overwrite=true) {
    var input = document.getElementById("input").value;
    var shifre;
    if (shifreType == "ceaser") {
        shifre = new CeaserClass();
    } else if (shifreType == "vigener") {
        shifre = new VigenerClass();
    } else if (shifreType == "morse") {
        shifre = new MorseClassWithKey();
    } else {
        console.error("Unknown shifre type: " + shifreType);
        return;
    }
    try {
        var key = document.getElementById("key").value;
        if (!key) {
            submit_values["text"] = input;
            submit_values["key"] = key;
            submit_values["shifreType"] = shifreType;
            submit_values["operationType"] = operationType;
            document.getElementById("output").value = "";
        }
    } catch (error) {
        var key = null;
    }
    if (!submit_values_changed(input, key, operationType)){
        return;
    }
    var output;
    if (operationType === "encode") {
        output = shifre.encode(input, key);
    } else if (operationType === "decode") {
        output = shifre.decode(input, key);
    } else {
        const outputEn = shifre.encode(input, key);
        const outputDe = shifre.decode(input, key);
        if (outputEn === "" && outputDe === "") {
            document.getElementById("instant_output").style.display = "none";
        } else {
            document.getElementById("instant_output").style.display = "block";
            const outputText = `Encode: ${outputEn}\nDecode: ${outputDe}`;
            document.getElementById("instant_output").innerHTML = outputText;
        }
        return;
    }
    if (overwrite || submit_values_changed(input, key, operationType)){
        submit_values["text"] = input;
        submit_values["key"] = key;
        submit_values["shifreType"] = shifreType;
        submit_values["operationType"] = operationType;
        document.getElementById("output").value = output;
    }
}

function vigener_submit(operationType) {
    submit(operationType, "vigener");
}

function ceaser_submit(operationType) {
    submit(operationType, "ceaser");
}

function morse_submit(operationType) {
    submit(operationType, "morse");
}

function pushOutputToInput() {
    const output = document.getElementById("output").value;
    document.getElementById("input").value = output;
    if (submit_values["operationType"] == "encode"){
        submit_values["operationType"] = "decode"
    }else{
        submit_values["operationType"] = "encode"
    }
    autorun();
}

function copyOutputToClipboard() {
    const output = document.getElementById("output").value;
    navigator.clipboard.writeText(output);
}

function autorun() {
    console.log("Auto translating... (delay: 0.5sec)");
    if (shifre == null) {
        return null;
    }
    if (shifre == "morse" && (submit_values["text"] == "" || document.getElementById("input").value.length <= 1)) {
        if (document.getElementById("input").value.indexOf(".") != -1 || document.getElementById("input").value.indexOf("-") != -1){
            submit_values["operationType"] = "decode";
        }else{
            submit_values["operationType"] = "encode";
        }
    }
    submit(submit_values["operationType"], shifre, overwrite=false);
}

function setup_shifre(shifreType) {
    shifre = shifreType;
    const interval = setInterval(autorun, 500);

    //url decoding
    const url = new URL(window.location.href);
    console.log(url);
    const language = url.searchParams.get("lang") || "en";
    console.log(language);
}


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