//format the current section
let Introduction_sec = document.querySelector(".landing").clientHeight - 1;
let Services_sec= document.querySelector(".services").clientHeight + Introduction_sec;
let Gallery_sec = document.querySelector(".gallery").clientHeight + Services_sec;
let About_sec= document.querySelector(".about").clientHeight + Gallery_sec;
let Contact_sec= document.querySelector(".landing").clientHeight + About_sec;
window.onresize = () => {
 Introduction_sec = document.querySelector(".landing").clientHeight;
 Services_sec= document.querySelector(".services").clientHeight + Introduction_sec;
 Gallery_sec = document.querySelector(".gallery").clientHeight + Services_sec;
 About_sec= document.querySelector(".about").clientHeight + Gallery_sec;
 Contact_sec= document.querySelector(".landing").clientHeight + About_sec;
};
window.onscroll = () => {
    // console.log(window.scrollY);
    if(window.scrollY <= Introduction_sec) {
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[0].classList.add("active");
    }
    else if(window.scrollY <= Services_sec) {
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[1].classList.add("active");
    }
    else if(window.scrollY <= Gallery_sec) {
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[2].classList.add("active");
    }
    else if(window.scrollY < About_sec) {
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[3].classList.add("active");
    }
    else{
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[4].classList.add("active");
    }
};

window.onload = () => {
        if(window.scrollY <= Introduction_sec) {
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[0].classList.add("active");
    }
    else if(window.scrollY <= Services_sec) {
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[1].classList.add("active");
    }
    else if(window.scrollY <= Gallery_sec) {
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[2].classList.add("active");
    }
    else if(window.scrollY < About_sec) {
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[3].classList.add("active");
    }
    else{
        document.querySelectorAll("header .container ul li a ").forEach((sec)=>{
            sec.classList.remove("active");
        })
        document.querySelectorAll("header .container ul li a ")[4].classList.add("active");
    }
}

// format the gallary 
document.querySelectorAll(".gallery .controle span").forEach((btn,ind) => {
    btn .addEventListener("click",()=>{
        //gallery controle
        document.querySelectorAll(".gallery .controle span").forEach((ele) =>{
            ele.classList.remove("active");
        })
        btn.classList.add("active");

        //gallery slides
        document.querySelectorAll(".gallery .slides-holder .slide").forEach((ele) =>{
            ele.classList.remove("active");
        })
        document.querySelectorAll(".gallery .slides-holder .slide")[ind].classList.add("hidden");
        document.querySelectorAll(".gallery .slides-holder .slide")[ind].classList.add("active");
        setTimeout(()=>{
        document.querySelectorAll(".gallery .slides-holder .slide")[ind].classList.remove("hidden");

        },100)
        // document.querySelectorAll(".gallery .slides-holder .slide")[ind].classList.add("active");
    });
})


//formath the header
document.querySelector("header ul i").addEventListener("click", () =>{
    document.querySelector("header ul i").classList.toggle("active");
    document.querySelector("header").classList.toggle("active");
    document.querySelectorAll("header ul li").forEach((e)=>{
        e.classList.toggle("active");
    })
})
document.querySelectorAll("header ul li a").forEach((e)=>{
    e.addEventListener("click",()=>{
    document.querySelector("header ul i").classList.remove("active");
    document.querySelector("header").classList.remove("active");
    document.querySelectorAll("header ul li").forEach((e)=>{
        e.classList.remove("active");
    })
    })
})