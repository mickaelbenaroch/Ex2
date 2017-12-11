$("document").ready(function() {
    console.log("hello world using JQuery!");
});

function colorChoose() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var i;
var boxNums = 7;
function createBox(){   //creates boxNums sections

    $("body").ready(function(){

            for(i = 0; i < boxNums; i++) {
                if(i == 0 ||i == 1||i == 2||i == 3||i == 4||i == 5)
                    var temp = $("#m").append('<section class="newBox" id="s'+ i +'" />');
                    $('#s' + i + '').css("background-color",colorChoose());
                if(i == (boxNums-1)){
                    $("#m").append('<article class="lastBox" id="s'+ i +'" />');
                    var plus = document.createElement("IMG");
                    plus.setAttribute('class', 'plusClass');
                    plus.setAttribute('id', 'plus' + i + '');
                    plus.src = "./images/white_plus.png";

                    $('#s' + i + '').html(plus);

                }
            }


    });}


var j;
function createImg() {

    var size = 7;
    var Images = [size];

    $("body").ready(function() {
        //the star is being creating

        for(j = 0; j<size-1; j++) {
            console.log("new image");

            Images[j] = document.createElement("IMG");
            Images[j].setAttribute('class', 'starClass');
            Images[j].setAttribute('id', 'img' + j + '');
            Images[j].src = "./images/white_star.png";
            console.log(Images[j].getAttribute("id"));
            console.log(Images[j].getAttribute("class"));

            $('#s' + j + '').html(Images[j]);   //append to the section
        }

});}

function click() {

            $("body").on('click','section',function() {
            var t = $(this).attr('id');
            if ($('#' + t + '').children().css('display') == 'block') {   //hide the star
                $('#' + t + '').children().attr('class', 'starClass');
            } else {                                                        //show the star
                $('#' + t + '').children().attr('class', 'starClassShow');
            }
                });


}


function plusClick() {
    $("body").ready(function () {
        $('#s6').click(function () {
            $("#m").prepend('<section class="newBox" id="s' + i + '" />');
            $('#s' + i + '').css("background-color",colorChoose());
            var newbox= document.createElement("IMG");
            newbox.setAttribute('class', 'starClass');
            newbox.setAttribute('id', 'img' + (j+1) + '');
            newbox.src = "./images/white_star.png";
            $('#s' + i + '').html(newbox);   //append to the section
            ++i;
            ++j;


        });
    });



}
