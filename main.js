// References to DOM Elements
let aud = document.getElementById("audio");
aud.volume = 0.1;

const titulo = document.getElementById("titulo");

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 6;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                titulo.innerHTML = "Falling in Love"
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                titulo.innerHTML = "Circus!"
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                titulo.innerHTML = "LOVERS"
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                titulo.innerHTML = "Boyfriend and Girlfriend stuff"
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                titulo.innerHTML = "just us"
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                titulo.innerHTML = "My favorite"
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 6;
                titulo.innerHTML = "The beginning"
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 5;
                titulo.innerHTML = "Falling in Love"
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 4;
                titulo.innerHTML = "Circus!"
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 3;
                titulo.innerHTML = "LOVERS"
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 2;
                titulo.innerHTML = "Boyfriend and Girlfriend stuff"
                break;
            case 7:
                openBook();
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 1;
                titulo.innerHTML = "just us"
                break;         

            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}