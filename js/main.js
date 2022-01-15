let slider = document.querySelector('.swiper-container');

const mySwiper = new Swiper(slider,{
    slidesPerView: 2,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
})

let viewSlider = document.querySelector('.review-swiper');

let mySecondSwiper = new Swiper(viewSlider,{
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
})
function outputUpdate(vol){
    var output = document.querySelector('#volume');
    output.value = vol;
    output.style.left = vol - 20 + 'px';
}
function yearUpdate(vol){
    var output = document.querySelector('#volume-year');
    output.value = vol;
    output.style.left = vol - 20 + 'px';
}

let validateForms = function(selector, rules){
    new window.JustValidate(selector,{
        rules: rules,
        submitHandles: function(form){
            let data = FormData(form);
        }
    })
}
validateForms('.form', {email: {required: true, email:true}, tel: {required: true}});
