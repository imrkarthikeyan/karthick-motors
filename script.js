function show2024() {
    const details=document.querySelectorAll('.cardetail');
    const cars = document.querySelectorAll('.cars2024');
    cars.forEach(car => {
        car.style.display = 'inline-block'
    });
    details.forEach(detail => {
        detail.style.display = 'block';
    });
}

function show2023() {
    const details=document.querySelectorAll('.cardetail2');
    const cars = document.querySelectorAll('.cars2023');
    cars.forEach(car => {
        car.style.display = 'inline-block'
    });
    details.forEach(detail => {
        detail.style.display = 'block';
    });
}

function show2022() {
    const details=document.querySelectorAll('.cardetail3');
    const cars = document.querySelectorAll('.cars2022');
    cars.forEach(car => {
        car.style.display = 'inline-block'
    });
    details.forEach(detail => {
        detail.style.display = 'block';
    });
}

document.addEventListener("DOMContentLoaded",function(){
    const mobile=document.querySelectorAll(".contactLink a");
    const mimg=document.querySelectorAll(".moreimages a");
    mobile.forEach(link=>{
        link.addEventListener("click",function(event){
            console.log("Making a call to: " + link.getAttribute("href"));
        })
    })
    mimg.forEach(link=>{
        link.addEventListener("click",function(event){
            console.log("Additional images : " + link.getAttribute("href"));
        })
    })
});
