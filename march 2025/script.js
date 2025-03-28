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
document.getElementById('open_btn_01').addEventListener('click', openPopup01);
document.getElementById('open_btn_02').addEventListener('click', openPopup02);
document.getElementById('open_btn_03').addEventListener('click', openPopup03);
document.getElementById('open_btn_04').addEventListener('click', openPopup04);
document.getElementById('open_btn_05').addEventListener('click', openPopup05);
document.getElementById('open_btn_06').addEventListener('click', openPopup06);
document.getElementById('open_btn_07').addEventListener('click', openPopup07);
document.getElementById('open_btn_08').addEventListener('click', openPopup08);
document.getElementById('open_btn_09').addEventListener('click', openPopup09);
document.getElementById('open_btn_10').addEventListener('click', openPopup10);
document.getElementById('open_btn_11').addEventListener('click', openPopup11);


// back 01
function openPopup01() {
    // console.log("opened a new window popup.");
    let win_01_02 = window.open(
        'popup02.html',
        null,
        'popup, width=450, height=300, left=60, top=75, noopener'
    );
    let win_01_01 = window.open(
        'popup01.html', 
        null, 
        'popup, resizable=0, width=320, height=330, left=250, top=350, noopener'
    );
}

// front 02
function openPopup02() {
    let win_02_01 = window.open(
        'popup03.html',
        null,
        'popup, width=350, height=450, left=900, top=80, noopener'
    );
}

// back 02
function openPopup03() {
    let win_03_07 = window.open(
        'popup10.html',
        null,
        'popup, width=220, height=400, left=0, top=10, noopener'
    );
    let win_03_06 = window.open(
        'popup09.html',
        null,
        'popup, width=220, height=300, left=100, top=200, noopener'
    );
    let win_03_05 = window.open(
        'popup08.html',
        null,
        'popup, width=220, height=800, left=10, top=20, noopener'
    );
    let win_03_04 = window.open(
        'popup07.html',
        null,
        'popup, width=220, height=580, left=80, top=50, noopener'
    );
    let win_03_03 = window.open(
        'popup06.html',
        null,
        'popup, width=220, height=580, left=50, top=200, noopener'
    );
    let win_03_02 = window.open(
        'popup05.html',
        null,
        'popup, width=220, height=520, left=20, top=30, noopener'
    );
    let win_03_01 = window.open(
        'popup04.html',
        null,
        'popup, width=400, height=550, left=120, top=80, noopener'
    );
}


// front 03
function openPopup04() {
    let win_04_01 = window.open(
        'popup11.html',
        null,
        'popup, width=420, height=580, left=900, top=150, noopener'
    );
}

// back 03
function openPopup05() {
    let win_05_02 = window.open(
        'popup13.html',
        null,
        'popup, width=420, height=580, left=0, top=300, noopener'
    );
    let win_05_01 = window.open(
        'popup12.html',
        null,
        'popup, width=450, height=600, left=200, top=0, noopener'
    );
}


// front 04
function openPopup06() {
    let win_06_01 = window.open(
        'popup14.html',
        null,
        'popup, width=700, height=750, left=600, top=0, noopener'
    );
}


// back 04
function openPopup07() {
    let win_07_01 = window.open(
        'popup15.html',
        null,
        'popup, width=350, height=400, left=20, top=100, noopener'
    );
}


// front 05
function openPopup08() {
    let win_08_03 = window.open(
        'popup18.html',
        null,
        'popup, width=400, height=400, left=700, top=0, noopener'  
      );
    let win_08_02 = window.open(
        'popup17.html',
        null,
        'popup, width=350, height=300, left=750, top=150, noopener'  
      );
    let win_08_01 = window.open(
      'popup16.html',
      null,
      'popup, width=350, height=300, left=800, top=400, noopener'  
    );
}


// back 05
function openPopup09() {
    let win_09_03 = window.open(
        'popup21.html',
        null,
        'popup, width=500, height=300, left=30, top=500, noopener'  
      );
    let win_09_02 = window.open(
        'popup20.html',
        null,
        'popup, width=300, height=600, left=200, top=300, noopener'  
      );
    let win_09_01 = window.open(
      'popup19.html',
      null,
      'popup, width=300, height=300, left=100, top=100, noopener'  
    );
}


// front 06
function openPopup10() {
    let win_10_01 = window.open(
      'popup22.html',
      null,
      'popup, width=400, height=500, left=800, top=300, noopener'  
    );
}



// back 06
function openPopup11() {
    /* let win_11_03 = window.open(
        'popup25.html',
        null,
        'popup, width=120, height=120, left=300, top=500, noopener'  
      ); */
    let win_11_02 = window.open(
        'popup24.html',
        null,
        'popup, width=480, height=300, left=100, top=30, noopener'  
      );
    let win_11_01 = window.open(
      'popup23.html',
      null,
      'popup, width=450, height=520, left=400, top=200, noopener'  
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
