let sliderItems = document.querySelectorAll(".slider-item");
let sliderDots = document.querySelectorAll(".dot");
let dot = document.querySelectorAll('.dot');
let i = 0;

if(sliderItems){
    function changeSlide(){
        sliderItems[i].classList.remove("active");
        sliderDots[i].classList.remove("active");
        i++;
        if( i >= sliderItems.length){
            i = 0;
            sliderItems[i].classList.add("active");
            sliderDots[i].classList.add("active");
        }
        sliderItems[i].classList.add("active");
        sliderDots[i].classList.add("active");
    };

    // let timerId = setInterval(changeSlide, 5000);

    for (let i = 0; i < dot.length; i++ ) {
        dot[i].onclick = function () {

            for (let j = 0; j < dot.length; j++ ) {
                if(dot[j] === this) {
                    // clearInterval(timerId);
                    for( let item of sliderItems){
                        item.classList.remove("active");
                    }
                    for( let item of sliderDots){
                        item.classList.remove("active");
                    }
                    sliderItems[j].classList.add("active");
                    sliderDots[j].classList.add("active");
                    // timerId = setInterval(changeSlide, 5000);
                }

            }
        }
    }
    // for (let item of sliderItems){
    //     item.addEventListener("mouseover", function () {
    //         clearInterval(timerId);
    //     });
    //     item.addEventListener("mouseout", function () {
    //         timerId = setInterval(changeSlide, 5000);
    //     });
    // }
}

