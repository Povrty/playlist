let songList = [];
let artistList = [];
let lengthList = [];
let imageURLs = [];
let linkList = [];

$(".addSong").click(function(){
    // Song Name:
    var songName = $(".songName").val();
        songList.push(songName);
        $(".songLists").empty();
        songList.forEach(function(songs){
            $(".songLists").append("<li>" + songs + "</li>");
        })
    // Artist Name:
    var artistName = $(".artistName").val();
        artistList.push(artistName);
        $(".artistLists").empty();
        artistList.forEach(function(artists){
            $(".artistLists").append("<li>" + artists + "</li>");
        })
});
