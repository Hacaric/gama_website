//const undefinedChar = "\uFFFD";


function mod(x, y) {
    return ((x % y) + y) % y; //Source: https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
}
class vigenerClass{
    constructor() {
        //abc2 = "abcdefghijklmnopqrstuvwxyzABYCEFGHIJKLMNOPQRSTUVWXYZ0123456789.,-_?:!\"\\' @&{}[]()/";
        this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\ áéíóúďťňľčšÁÉÍÓÚĎŤŇĽČŠúÚňô";       
        this.abc_length = this.abc.length;
        // this.abc2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\ ";       
        // this.abc_length2 = this.abc2.length;
    }
    encode(input, key) {
        key = Math.floor(key);
        var output = "";
        for (var i = 0; i < input.length; i++) {
            var index_of_char = this.abc.indexOf(input[i]);
            if (index_of_char == -1){         
                output += input[i];
            }else{
                output += this.abc[(this.abc.indexOf(input[i]) + key) % this.abc_length];
            }
        }
        return output;
    }
    decode(input, key) {
        key = Math.floor(key);
        var output = "";
        for (var i = 0; i < input.length; i++) {
            var index_of_char = this.abc.indexOf(input[i]);
            if (index_of_char == -1){         
                output += input[i];
            }else{
                output += this.abc[(this.abc.indexOf(input[i]) + key) % this.abc_length];
            }
        }
        return output;
    }
}
function to_vigener(input) {
    
}
function sample(operation_type) {
    var input = document.getElementById("input").value;
    var vigener = new vigenerClass()
    var key = document.getElementById("key").value;
    if (!key){
        return;
    }
    if (operation_type == "encode"){
        var output = vigener.encode(input, key)
        document.getElementById("output").innerHTML = output;
    }else if (operation_type == "decode"){
        var output = vigener.decode(input, key)
        document.getElementById("output").innerHTML = output;
    }else{
        var output_en = vigener.encode(input, key);
        var output_de = vigener.decode(input, key);
        if (output_en == "" && output_de == ""){
            document.getElementById("instant_output").style.display = "none";
        }else{
            document.getElementById("instant_output").style.display = "block";
            var output_text = "Encode: " + output_en + "\nDecode: " + output_de;
            document.getElementById("instant_output").innerHTML = output_text;
        }
    }

    return output;
}
function push_output_to_input() {
    var output = document.getElementById("output").value;
    // document.getElementById("input").
    // console.log("Debug: pushing text to input: " + output)
    document.getElementById("input").value = output;
}
function copy_output_to_clipboard(){
    var output = document.getElementById("output").value;
    navigator.clipboard.writeText(output);
}
function onload_(){
    var interval = setInterval(sample, 500);
}
