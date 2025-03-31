
function min(a, b){
    return a < b ? a : b;
}
function minList(list){
    if (list.length == 0){
        throw "List is empty";
    }
    var min_ = list[0];
    for (var i=0;i<list.length;i++){
        min_ = min(min_, list[i]);
    }
    return min_;
}
    
function max(a, b){
    return a > b ? a : b;
}

function maxList(list){
    if (list.length == 0){
        throw "List is empty";
    }
    var max_ = list[0];
    for (var i=0;i<list.length;i++){
        max_ = max(max_, list[i]);
    }
    return max_;
}


const MAX_CHAR_PER_PREVIEW = 15;
const COLUMNS = 2;
const MAX_PREVIEWS_PER_TABLE = 5;
id_song_list = [];


class Song{
    constructor(name, lyrics, author="anonymous", album="none", id=-1){
        if (id < 0){
            try{
                this.id = maxList(id_song_list)+1;
            }catch(e){
                this.id = 0;
            }
        }else{
            this.id = this.getUniqueID(id);
        }
        this.name = name;
        this.lyrics = lyrics;
        this.author = author;
        this.album = album;
    }
    getPreview(maxLenght=MAX_CHAR_PER_PREVIEW){
        return this.lyrics.substring(0, min(maxLenght, this.lyrics.length));
    }
    getUniqueID(id){
        if(!id in id_song_list){
            return id;
        }else{
            return this.getUniqueID(id+1);
        }
    }
}

const songs_source = [
    ["name", "text", "author", "album"],
]
const songs = new Array();
for (var i = 0; i < songs_source.length; i++){
    if (songs_source[i].length == 2){
        songs_source[i].push("anonymous");
        songs_source[i].push("none");
    }else if (songs_source[i].length == 3){
        songs_source[i].push("none");
    }
    songs.push(new Song(songs_source[i][0], songs_source[i][1], songs_source[i][2], songs_source[i][3]));
}    


function buildTable(){
    console.log(songs)
    var table = document.createElement("table");
    table.id = "previews_table";
    var table_elements = [];
    for (var i=0;i<COLUMNS;i++){
        table_elements.push([]);
    }
    for (var i=0;i<min(songs.length, MAX_PREVIEWS_PER_TABLE);i++){
        table_elements[i%COLUMNS].push(songs[i]);
    }
    console.log(table_elements);
    for (var i=0;i<table_elements[0].length;i++){
        var tr = document.createElement("tr");
        for (var j=0;j<table_elements.length;j++){
            if (table_elements[j][i] == undefined){
                continue;
            }
            var td = document.createElement("td");
            var a = document.createElement("a")
            var p = document.createElement("p");
            p.innerText = table_elements[j][i].getPreview();
            a.href = "#" + table_elements[j][i].id;
            a.appendChild(p);
            td.appendChild(a);
            tr.appendChild(td);
        }
        table.appendChild(tr);
        console.log(table);
    }
    document.getElementById("table_container").appendChild(table);

}
function loadPage(){
    buildTable();
}

document.addEventListener("DOMContentLoaded", function() {
    loadPage();
});