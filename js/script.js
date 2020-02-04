let songList = [];
let artistList = [];
let lengthList = [];
let imageURL = [];
let linkList = [];
let song = {
}

function addName(){
    let songName = $(".songName").val();
    song.song_name = songName;
    console.log(song.song_name);
    $(".songList").append("<li>" + song.song_name + "</li>");
}

function addArtist(){
    let artistName = $(".artistName").val();
    song.artist_name = artistName;
    console.log(song.artist_name);
    $(".songList").append("<li>" + song.artist_name + "</li>");   
}

function addLength(){
    let songLength = $(".songLength").val();
    song.song_length = songLength;
    console.log(song.song_length);
    $(".songList").append("<li>" + song.song_length + "</li>");
}

function addURL(){
    let imgURL = $(".imgURL").val();
    song.image_URL = imgURL;
    console.log(song.image_URL);
    $(".songList").append("<li>" + song.image_URL + "</li>");
}

function addLink(){
    let songLink = $(".songLink").val();
    song.song_Link = songLink;
    console.log(song.song_Link);
    $(".songList").append("<li>" + song.song_Link + "</li>");
}

$(".addSong").click(function(){
    addName();
    addArtist();
    addLength();
    addURL();
    addLink();
});
