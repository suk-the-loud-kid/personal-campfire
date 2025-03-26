// references to the DOM elements
const prevBtn = document.querySelector("#prev_btn");
const nextBtn = document.querySelector("#next_btn");
const diary = document.querySelector("#diary");

const page01 = document.querySelector("#diary_page_01");
const page02 = document.querySelector("#diary_page_02");
const page03 = document.querySelector("#diary_page_03");
const page04 = document.querySelector("#diary_page_04");
const page05 = document.querySelector("#diary_page_05");
const page06 = document.querySelector("#diary_page_06");


// event listner
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


// business logic
let currentLocation = 1;
let numOfPages = 6;
let maxLocation = numOfPages += 1;

function openDiary() {
    diary.style.transform = "translateX(50%)"; // idk wtf does this do
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeDiary(isAtBeginning) {
    if (isAtBeginning) {
        diary.style.transform = "translateX(0%)"; // idk wtf does this do
    }
    else {
        diary.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openDiary();
                page01.classList.add("flipped");
                page01.style.zIndex = 1;
                break;
            case 2:
                page02.classList.add("flipped");
                page02.style.zIndex = 2;
                break;
            case 3:
                page03.classList.add("flipped");
                page03.style.zIndex = 3;
                break;
            case 4:
                page04.classList.add("flipped");
                page04.style.zIndex = 4;
                break;
            case 5:
                page05.classList.add("flipped");
                page05.style.zIndex = 5;
                break;
            case 6:
                page06.classList.add("flipped");
                page06.style.zIndex = 6;
                closeDiary();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++; // make currentLocation 1 again?? i guess??
    }
}

function goPrevPage() {
    if(currentLocation > 1){
        switch(currentLocation) {
            case 2:
                closeDiary(true);
                page01.classList.remove("flipped");
                page01.style.zIndex = 6;
                break;
            case 3:
                page02.classList.remove("flipped");
                page02.style.zIndex = 5;
                break;
            case 4:
                page03.classList.remove("flipped");
                page03.style.zIndex = 4;
                break;
            case 5:
                page04.classList.remove("flipped");
                page04.style.zIndex = 3;
                break;
            case 6:
                page05.classList.remove("flipped");
                page05.style.zIndex = 2;
                break;
            case 7: 
                openDiary();
                page06.classList.remove("flipped");
                page06.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}


// new window popup script 

// back_01
document.getElementById('open_btn_01').addEventListener('click', openPopup);

function openPopup() {
    console.log("opened a new window popup.");
    let win = window.open(
        'popup01.html', 
        null, 
        'popup, resizable=0, width=320, height=400, left=200, top=150, noopener'
    );
}


// in new windows -> imgae hover flip effect
function flipCard(event) {
    // 클릭한 요소가 'a' 태그나 그 자식 요소일 경우 함수 종료
    if (event.target.closest("a")) {
        return;
    }
    document.getElementById("chill_bro").classList.toggle("flipped");
}
