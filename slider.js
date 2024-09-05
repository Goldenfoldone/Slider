let file = [{
    url:"./image\\ 1.png",
    city:`Rostov-on-Don 
LCD admiral`,
    area:"81 m2",
    time:"3.5 months"
}, {
    url:"./image\\ 2.png",
    city:`Sochi 
Thieves`,
    area: "105 m2",
    time:"4 months"
},{
    url:"./image\\ 3.png",
    city:`Rostov-on-Don 
Patriotic`,
    area:"93 m2",
    time:"3 months"
}]
function initSlider(){
    if (!file || !file.length) {return};

    let sliderImage = document.querySelector('.right__btnblock_images')
    let sliderArrows = document.querySelector('.slider__arrow')
    let sliderDots = document.querySelector('.slider__dots')
    let btn = document.querySelector('.right__btnblock')
    let text_city = document.querySelector('.city')
    let text_area = document.querySelector('.area')
    let text_time = document.querySelector('.time')
    

    initImage();
    initArrows();
    initDots();
    initText();
    initBTN();


    function initImage(){
        file.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${image.url})" data-index="${index}"></div>`;
            sliderImage.innerHTML += imageDiv
        })
    }
    function initArrows(){
        sliderArrows.querySelectorAll('.slider__arrows').forEach((arrow) => {
            arrow.addEventListener('click',function() {
                let curNumber = +sliderImage.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left')){
                    nextNumber = curNumber === 0 ? file.length - 1 : curNumber - 1
                } else{
                    nextNumber = curNumber === file.length - 1 ?  0 : curNumber + 1
                }
                moveSlider(nextNumber)
            })
        })
    }

    function initDots(){
        file.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index ='${index}'></div>`
            sliderDots.innerHTML += dot;
        })
        sliderDots.querySelectorAll(".slider__dots-item").forEach((dot)=>{
            dot.addEventListener("click",function(){
                moveSlider(this.dataset.index)
            })
        })
    }

    function initBTN(){
        file.forEach((image, index) => {
            let bt = `<a class="right__btnblock_btn n${index} ${index === 0 ? "active" : ""}" data-index ='${index}'>${image.city}</a>`
            btn.innerHTML += bt;
        })
        btn.querySelectorAll('.right__btnblock_btn').forEach((bt)=>{
            bt.addEventListener("click",function(){
                moveSlider(this.dataset.index)
            })
        })
    }

    function initText(){
        let city = `<pre class="left__table_block_text">${file[0].city}</pre>`
        text_city.innerHTML += city
        let area = `<pre class="left__table_block_text">${file[0].area}</pre>`
        text_area.innerHTML += area
        let time = `<pre class="left__table_block_text">${file[0].time}</pre>`
        text_time.innerHTML += time
        
    }

    function changeTitle(num){
        let sliderTitle = text_city.querySelector(".left__table_block_text");
        sliderTitle.innerText = file[num].city;
        let slider = text_area.querySelector(".left__table_block_text");
        slider.innerText = file[num].area;
        let sliderT = text_time.querySelector(".left__table_block_text");
        sliderT.innerText = file[num].time;
    }

    function moveSlider(num) {
        sliderImage.querySelector('.active').classList.remove('active')
        sliderImage.querySelector(".n" + num).classList.add('active')        
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        btn.querySelector(".active").classList.remove("active");
        btn.querySelector(".n" + num).classList.add("active");
        changeTitle(num)
        
    }
} 

document.addEventListener("DOMContentLoaded", () =>{
    initSlider();
})