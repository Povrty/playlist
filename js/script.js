let song = {
}

function addName(){
    let songName = $(".songName").val();
    song.song_name = songName;
    console.log(song.song_name);
    $(".songList").append("<li>" + song.song_name + "</li> <div><hr class='hr'></div>");
}

function addArtist(){
    let artistName = $(".artistName").val();
    song.artist_name = artistName;
    console.log(song.artist_name);
    $(".artistList").append("<li>" + song.artist_name + "</li> <div><hr class='hr'></div>");   
}

function addLength(){
    let songLength = $(".songLength").val();
    song.song_length = songLength;
    console.log(song.song_length);
    $(".lengthList").append("<li>" + song.song_length + "</li> <div><hr class='hr'></div>");
}

/*
function addURL(){
    let imgURL = $(".imgURL").val();
    song.image_URL = imgURL;
    console.log(song.image_URL);
    $(".imageURL").append("<li>" + "<img class='pIMG' src='" + song.image_URL + "'>" + "</li>");
}

function addLink(){
    let songLink = $(".songLink").val();
    song.song_Link = songLink;
    console.log(song.song_Link);
    $(".linkList").append("<li>" + song.song_Link + "</li>");
}
*/

$(".addSong").click(function(){
    addName();
    addArtist();
    addLength();
    //addURL();
    //addLink();
});
