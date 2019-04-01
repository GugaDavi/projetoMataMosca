(function (win, doc) {
    'use strict';

    var $inicar = doc.querySelector("#iniciar");

    $inicar.addEventListener( 'click', function() {
        win.location.href = "app.html";
    } );

    var $widthWindowGame = window.innerWidth - 100;
    var $heightWindowGame = window.innerHeight - 50;

    var x = Math.floor(Math.random() * $widthWindowGame);
    var y = Math.floor(Math.random() * $heightWindowGame);

})(window, document);