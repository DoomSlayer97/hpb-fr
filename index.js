const cardFront = document.querySelector(".cardFront");

init();

function init() {

    var randomNumberIndex = randomNumbersGenerator(0, 6);

    var colorPalette = colorsPalette()[randomNumberIndex];

    cardFront.style.backgroundColor = colorPalette.cardFront;
    document.getElementsByTagName("body")[0].style.backgroundColor = colorPalette.background;

}

function randomNumbersGenerator(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
}
  

function colorsPalette () {

    return [
        {
            background: "#a1cafa",
            cardFront: "#ffc1aa",
            theme: "dark"
        },
        {
            background: "#ffffa2",
            cardFront: "#00c3ff",
            theme: "dark"
        },
        {
            background: "#553d79",
            cardFront: "#ff96ff",
            theme: "dark"
        },
        {
            background: "#a4a1e9",
            cardFront: "#615d8e",
            theme: "dark"
        },
        {
            background: "#ffbc8f",
            cardFront: "#f27d80",
            theme: "dark"
        },
        {
            background: "#1d6a7b",
            cardFront: "#8cf1ae",
            theme: "dark"
        },
    ];

}