let Happiness = 0;
let Food = 0;
let Cleaning = 0;

function refreshUI() {
    let foodMeter = document.getElementById("Food-meter");
    foodMeter.value = Food;

    let foodParagraph = document.getElementById("Food-paragraph");
    foodParagraph.innerHTML = Food;

    //Happiness
    let HappinessMeter = document.getElementById("Happiness-meter");
    HappinessMeter.value = Happiness;

    let HappinessParagraph = document.getElementById("Happiness-paragraph");
    HappinessParagraph.innerHTML = Happiness;

    //Cleaning 
    let CleaningMeter = document.getElementById("Cleaning-meter");
    CleaningMeter.value = Cleaning;

    let CleaningParagraph = document.getElementById("Cleaning-paragraph");
    CleaningParagraph.innerHTML = Cleaning;

    //update pet image and paragraph
    let petImg = document.getElementById("pet-img");
    let petParagraph = document.getElementById("pet-condition");
    if (Happiness < 5 && Food <= 5 && Cleaning <= 5) {
        petImg.src = "Images/deaddog.jfif";
        petParagraph.innerHTML = "you are dead to me";
    } else if (Happiness > 6 && Food <= 9 && Cleaning >= 6) {
        petImg.src = "Images/fullbellydog.jfif";
        petParagraph.innerHTML = "Your belly hurts!";
    } else if (Happiness > 5 && Food >= 3 && Cleaning <= 6) {
        petImg.src = "Images/hungrydog.jfif";
        petParagraph.innerHTML = "I'm starving!";
    } else if (Happiness > 5 && Food <= 6 && Cleaning <= 6) {
        petImg.src = "Images/saddog.jfif";
        petParagraph.innerHTML = "So sad!";
    } else {
        petImg.src = "Images/Happydog.jfif";
        petParagraph.innerHTML = "Happy Lucky"
    }
}

//feeding the pet
function feedPet() {
    console.log("Feed me!");
    if (Food <= 9) {
        Food += 1;
    }
    console.log("Food: " + Food);

    refreshUI();
}

function decreasePet() {
    if (Food > 0) { Food -= 1 };
    refreshUI();
}


let petTimer = setInterval(decreasePet, 1000);


//Making the pet happy
function happyPet() {
    console.log("Play with me!");
    if (Happiness <= 9) {
        Happiness += 1;
    }
    console.log("Happiness: " + Happiness);

    refreshUI();
}

function decreasePet1() {
    if (Happiness > 0) { Happiness -= 1 };
    refreshUI();
}

let petTimer2 = setInterval(decreasePet1, 1000);


//Cleaning the Pet
function cleanPet() {
    console.log("Need a shower!");
    if (Cleaning <= 9) {
        Cleaning += 1;
    }
    console.log("Cleaning: " + Cleaning);

    refreshUI();
}

function decreasePet2() {
    if (Cleaning > 0) { Cleaning -= 1 };
    refreshUI();
}

let petTimer3 = setInterval(decreasePet2, 750);