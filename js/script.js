let songList = [];
let artistList = [];
let lengthList = [];
let imageURL = [];
let linkList = [];

$(".addSong").click(function(){
    /*Song Name:
    var songName = $(".songName").val();
        songList.push(songName);
        $(".songList").empty();
        songList.forEach(function(songs){
            $(".songList").append("<li>" + songs + "</li>");
        })
    */
    let song {
        song_name: "Song1",
        artist_name: "Mr. Song",
        song_length: "3:00",
        image_URL: "",
        song_Link: "",
    }
    // Artist Name:
    var artistName = $(".artistName").val();
        artistList.push(artistName);
        $(".artistList").empty();
        artistList.forEach(function(artists){
            $(".artistList").append("<li>" + artists + "</li>");
        })
    // Song Length:
    var songLength = $(".songLength").val();
        lengthList.push(songLength);
        $(".lengthList").empty();
        lengthList.forEach(function(lengths){
            $(".lengthList").append("<li>" + lengths + "</li>");
        })   
    // Image URL:
    var imgURL = $(".imgURL").val();
        imageURL.push(imgURL);
        $(".imageURL").empty();
        imageURL.forEach(function(images){
            $(".imageURL").append("<li>" + images + "</li>");
        })
    // Song Link
    var songLink = $(".songLink").val();
        linkList.push(songLink);
        $(".linkList").empty();
        linkList.forEach(function(links){
            $(".linkList").append("<li>" + links + "</li>");
        })
});
