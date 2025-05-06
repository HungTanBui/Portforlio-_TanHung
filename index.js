// document.addEventListener("DOMContentLoaded",function(){
//     let title = document.getElementById("title");
//     let des = document.getElementById("des");
//     // console.log("H1: ");
//     // console.log(title);

//     // title.innerText = "Thịnh";

//     title.addEventListener("click",function(){
//         des.innerHTML = "Hehe";
//     });
// });


document.addEventListener("DOMContentLoaded",function(){
    let menuToggle = document.getElementById("menu-toggle");
    let mobileNav = document.getElementById("mobile-nav");
    let barIcon = document.getElementById("bar-icon");
    let closeIcon = document.getElementById("close-icon");
    let headLogo = document.getElementById("head-logo");
    
    menuToggle.addEventListener("click",function(){
        // Thêm class active vào mobile nav
        // Nếu đã có active thì bỏ đi, nếu chưa có thì thêm vào
        mobileNav.classList.toggle("active");
        if(mobileNav.classList.contains("active")){
            barIcon.style.display = "none";
            closeIcon.style.display = "block";
            headLogo.style.display = "none";
        }else{
            barIcon.style.display = "block";
            closeIcon.style.display = "none";
            headLogo.style.display = "block";
        }   
    });

});

