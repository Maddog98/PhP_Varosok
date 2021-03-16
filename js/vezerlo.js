$(function () {
    
    $("#vnev").on("keyup",valtoz);
    
});

var varosok=[];

function valtoz(){
    console.log($("#vnev").val());
    $.ajax({
        type:"GET",
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result);
            varosok = JSON.parse(result);
            console.log(varosok);
            kiir();
        },
        error: function () {
            alert("hiba az adaztok betöltésekor!");
        }
    });
}