var catOne = document.getElementById('cat-1');
var catTwo = document.getElementById('cat-2');
var catThree = document.getElementById('cat-3');
var catFour = document.getElementById('cat-4');
var catFive = document.getElementById('cat-5');



function color(position) {
    for (i = position; i > 0; i--) {
        document.getElementById("cat-" + i).classList.add("color");
    }

    for (i = position + 1; i <= 5; i++) {
        document.getElementById("cat-" + i).classList.remove("color");
    }
}


catOne.onclick = function() {
    color(1);
};
catTwo.onclick = function() {
    color(2);
};
catThree.onclick = function() {
    color(3);
};
catFour.onclick = function() {
    color(4);
};
catFive.onclick = function() {
    color(5);
};



document.addEventListener("click", (evt) => {
    let iconCat = document.getElementById("cats");
    let targetElement = evt.target;

    if (!iconCat.contains(targetElement)) {
        color(0);
    }
})