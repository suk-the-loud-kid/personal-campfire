function flipCard(event) {
    // 클릭한 요소가 'a' 태그나 그 자식 요소일 경우 함수 종료
    if (event.target.closest("a")) {
        return;
    }
    document.getElementById("suki_card").classList.toggle("flipped");
}
