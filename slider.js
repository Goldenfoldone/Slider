const data = [{
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
    if (data.length === 0) return;

    let sliderImage = document.querySelector('.right__btnblock_images')
    let sliderArrows = document.querySelector('.slider__arrow')
    let sliderDots = document.querySelector('.slider__dots')
    let buttons = document.querySelector('.right__btnblock')
    let textCity = document.querySelector('.city')
    let textArea = document.querySelector('.area')
    let textTime = document.querySelector('.time')
    

    initImage();
    initArrows();
    initDots();
    initText();
    initButton();


    function initImage(){
        data.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${image.url})" data-index="${index}"></div>`;
            sliderImage.innerHTML += imageDiv
        })
    }
    function initArrows(){
        sliderArrows.querySelectorAll('.slider__arrows').forEach((arrow) => {
            arrow.addEventListener('click',function() {
                const curNumber = +sliderImage.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left')){
                    nextNumber = curNumber === 0 ? data.length - 1 : curNumber - 1
                } else{
                    nextNumber = curNumber === data.length - 1 ?  0 : curNumber + 1
                }
                moveSlider(nextNumber)
            })
        })
    }

    function initDots(){
        data.forEach((image, index) => {
            const dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index ='${index}'></div>`
            sliderDots.innerHTML += dot;
        })
        sliderDots.querySelectorAll(".slider__dots-item").forEach((dot)=>{
            dot.addEventListener("click",function(){
                moveSlider(this.dataset.index)
            })
        })
    }

    function initButton(){
        data.forEach((image, index) => {
            const bt = `<a class="right__btnblock_btn n${index} ${index === 0 ? "active" : ""}" data-index ='${index}'>${image.city}</a>`
            buttons.innerHTML += bt;
        })
        buttons.querySelectorAll('.right__btnblock_btn').forEach((bt)=>{
            bt.addEventListener("click",function(){
                moveSlider(this.dataset.index)
            })
        })
    }

    function initText(){
        const city = `<pre class="left__table_block_text">${data[0].city}</pre>`
        textCity.innerHTML += city
        const area = `<pre class="left__table_block_text">${data[0].area}</pre>`
        textArea.innerHTML += area
        const time = `<pre class="left__table_block_text">${data[0].time}</pre>`
        textTime.innerHTML += time
        
    }

    function changeTitle(num){
        const sliderTitle = textCity.querySelector(".left__table_block_text");
        sliderTitle.innerText = data[num].city;
        const slider = textArea.querySelector(".left__table_block_text");
        slider.innerText = data[num].area;
        const sliderT = textTime.querySelector(".left__table_block_text");
        sliderT.innerText = data[num].time;
    }

    function moveSlider(num) {
        sliderImage.querySelector('.active').classList.remove('active')
        sliderImage.querySelector(".n" + num).classList.add('active')        
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        buttons.querySelector(".active").classList.remove("active");
        buttons.querySelector(".n" + num).classList.add("active");
        changeTitle(num)
        
    }
} 

document.addEventListener("DOMContentLoaded", () =>{
    initSlider();
})