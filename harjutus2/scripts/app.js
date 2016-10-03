// Sama värk, esimene on puhas JS, teine JQuery...
// document.getElementById('gameboard').style.backgroundColor = 'red';
// $('#gameboard').css('background-color', 'blue');

var images = [
    'images/nugis1.jpg',
    'images/nugis2.jpg',
    'images/nugis3.jpg',
    'images/nugis4.jpg',
    'images/nugis5.jpg',
    'images/nugis6.jpeg',
    'images/nugis7.jpg',
    'images/nugis8.jpg'
];

function startGame() {
    
    var tileImages = [];
    var openedTiles = [];
    
    for (var i = 0; i < images.length; i++){
        tileImages.push(images[i]);
        tileImages.push(images[i]); 
    }
    tileImages = _.shuffle(tileImages);
    
    for (var i = 0; i < tileImages.length; i++) {
        var tile = 'div class="card"></div>'
        $('#gameboard').append(tile);
    }
    $('#gameboard .card').click(function (event) {
        var index = $(this).index();
        
        var image = tileImages[index];
        $(this).css('background-image', 'url(' + image + ')');
                    
        openedTiles.push(index);
        if (openedTiles.length === 2) {
            var index1 = openedTiles[0];
            var index2 = openedTiles[1];
            if (tileImages[index1] === tileImages[index2]) {
                // pildid samad
                openedTiles = [];
            }
            else {
                var tile1 = $('gameboard .card').eq(index1);
                var tile2 = $('gameboard .card').eq(index2);
                openedTiles = [];
                // pildid erinevad
            }
        }
    });
    
}

startGame();