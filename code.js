const undefinedChar = "\uFFFD";
var shifre = null;

function mod(x, y) {
    return ((x % y) + y) % y;
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

function submit(operationType, shifreType) {
    const input = document.getElementById("input").value;
    let shifre;
    if (shifreType === "ceaser") {
        shifre = new CeaserClass();
    } else if (shifreType === "vigener") {
        shifre = new VigenerClass();
    } else {
        console.error("Unknown shifre type: " + shifreType);
        return;
    }
    const key = document.getElementById("key").value;
    if (!key) {
        return;
    }
    let output;
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
    document.getElementById("output").innerHTML = output;
}

function vigener_submit(operationType) {
    submit(operationType, "vigener");
}

function ceaser_submit(operationType) {
    submit(operationType, "ceaser");
}

function pushOutputToInput() {
    const output = document.getElementById("output").value;
    document.getElementById("input").value = output;
}

function copyOutputToClipboard() {
    const output = document.getElementById("output").value;
    navigator.clipboard.writeText(output);
}

function autorun() {
    console.log("Debug: line 163 ran.");
    if (shifre == null) {
        return null;
    }
    submit("encode", shifre);
}

function onload_(shifreType) {
    shifre = shifreType;
    console.log("LOADEEEEED :D");
    const interval = setInterval(autorun, 500);

    //url decoding
    const url = new URL(window.location.href);
    console.log(url);
    const language = url.searchParams.get("lang") || "en";
    console.log(language);
}

