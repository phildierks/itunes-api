$(document).ready(function(){
    $("#musicSearch").on("click",function(){
        amount = $("#amount").val();
        var artist = $("#artist").val();
        $('table').empty();
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + artist + "&limit=" + amount,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                myFunction(result) },
            error: function() {
                alert('Failed!');
            }
        });
    });
});

function myFunction(result) {

    for (var i = 0; i < amount; i++) {
        var albumName = result.results[i].collectionName;
        var cover = result.results[i].artworkUrl100;
        var songName = result.results[i].trackName;
        var music = result.results[i].previewUrl;
        var price = result.results[i].collectionPrice;
        var genre = result.results[i].primaryGenreName;
        document.getElementById("table").innerHTML +=
             "<tr class='song'>"+"</tr><td id='number'>" + (i + 1) + "</td>"+ "<td id='img'><img src=" + cover + "></td>" +
            "<td <div align='center' id='info'>" + songName +
            "<br>" + albumName + "<br><audio controls=\"true\" src=\"" +
            music + "\" id=\"audio\" type=\"audio/m4a\"></audio></div><br><button class='detail'>View Details</button><div style='display: none' class='det'><br>$"+ price + "<br> Genre: " +genre +"</div></td>";
    }
    $(".detail").on("click",function(){
        var det = $(this).parent().find(".det");
        console.log(det);
        det.slideToggle();
    })

}

