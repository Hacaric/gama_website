const memeList = [
    "meme0.png",
    "meme1.png",
];
var unseenMemes = memeList.slice();

document.addEventListener("DOMContentLoaded", function() {
    randomMeme();
});

function loadMeme(filename_) {
    const filename=filename_;
    console.log("Loading meme: " + filename);
    const memeContainer = document.getElementById("meme-container");
    if (memeContainer) {
        memeImg = document.createElement("img");
        memeImg.src = new URL(filename, window.location.origin + "/jokes/memes/")
        memeImg.alt = "Meme";
        memeImg.id = "meme";
        try{
            memeContainer.removeChild(document.getElementById("meme"));
        }catch(e){}
        memeContainer.appendChild(memeImg);
    }
}
function randint(from, to){
    return Math.floor(Math.random() * (to - from) + from);
}
function randomMeme() {
    var memeIndex = randint(0, unseenMemes.length);
    var memeContent = unseenMemes[memeIndex];
    if (unseenMemes.length <= 1) {
        unseenMemes = memeList.slice();
    }
    unseenMemes.splice(unseenMemes.indexOf(memeContent), 1);
    loadMeme(memeContent);
}