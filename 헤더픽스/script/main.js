let header = document.querySelector("header");
let headerTop = 0;


window.addEventListener("scroll", () => {
    //스크롤한 값을 구해서 변수로 담고
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop


    if (scrollTop > headerTop) {
        header.classList.add("on");

    } else {
        header.classList.remove("on");

    }
    //조건문을 사용해서 처음 header의 위치를 0으로 잡고
    //약간이라도 스크롤을 내리면 양수를 가지므로 조건무을 활용해서 스크롤을 추적할수있습니다

})