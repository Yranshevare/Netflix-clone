let img = document.querySelectorAll(".s-img1")
let p = document.querySelectorAll(".p")
let right = document.querySelector(".left")
let left = document.querySelector(".right")
let l = 1;
let r = 0;

left.addEventListener("click",(e)=>{
    console.log("hell")
    if(r<2){
        img.forEach((val)=>{
            val.style.transitionDuration = "2s"
             val.style.transform = `translateX(-${510*l}px)`
            val.style.transitionDuration = "0.2s"
        })
        l++
        r++
    }
})
right.addEventListener("click", () => {
    if (l>1) {
        console.log("hello")
        img.forEach((val) => {
            console.log("img")
            val.style.transitionDuration = "2s"
            val.style.transform = `translateX(${-(510*(l-1))+510}px)`
               val.style.transitionDuration = "0.2s"
        })
        l--
        r--

        
    }
})

let cont1 = document.querySelector(".que-contaner1")
let cont2 = document.querySelector(".que-contaner2")
let cont3 = document.querySelector(".que-contaner3")
let cont4 = document.querySelector(".que-contaner4")
let cont5 = document.querySelector(".que-contaner5")
let cont6 = document.querySelector(".que-contaner6")

let qbox1 = document.querySelector(".box1")
let qbox2 = document.querySelector(".box2")
let qbox3 = document.querySelector(".box3")
let qbox4 = document.querySelector(".box4")
let qbox5 = document.querySelector(".box5")
let qbox6 = document.querySelector(".box6")

let ibox1 = document.querySelector(".inner1")
let ibox2 = document.querySelector(".inner2")
let ibox3 = document.querySelector(".inner3")
let ibox4 = document.querySelector(".inner4")
let ibox5 = document.querySelector(".inner5")
let ibox6 = document.querySelector(".inner6")

let cross1 = document.querySelector(".cross1")
let cross2 = document.querySelector(".cross2")
let cross3 = document.querySelector(".cross3")
let cross4 = document.querySelector(".cross4")
let cross5 = document.querySelector(".cross5")
let cross6 = document.querySelector(".cross6")

let p1 = document.querySelector(".para1")
let p2 = document.querySelector(".para2")
let p3 = document.querySelector(".para3")
let p4 = document.querySelector(".para4")
let p5 = document.querySelector(".para5")
let p6 = document.querySelector(".para6")

let a=0;
let n;

qbox1.addEventListener("click",()=>{
    if(a==0){
     ibox1.style.height = "200px"
        cross1.style.rotate = "45deg"
        p1.style.display="inline"
        a++
        n=1
    }else if(n==1) {

        ibox1.style.height = "0px"
        cross1.style.rotate = "0deg"
        p1.style.display="none"
        a=0
    }else if(a!=0){
        ibox1.style.height = "200px"
        cross1.style.rotate = "45deg"
        p1.style.display="inline"

        p2.style.display="none"
        ibox2.style.height = "0px"
        cross2.style.rotate = "0deg"

        p3.style.display="none"
        ibox3.style.height = "0px"
        cross3.style.rotate = "0deg"

        p4.style.display="none"
        ibox4.style.height = "0px"
        cross4.style.rotate = "0deg"

        p5.style.display="none"
        ibox5.style.height = "0px"
        cross5.style.rotate = "0deg"

        p6.style.display="none"
        ibox6.style.height = "0px"
        cross6.style.rotate = "0deg"
        a++
        n=1
    }

})

qbox2.addEventListener("click",()=>{
    if(a==0){
        ibox2.style.height = "120px"
        cross2.style.rotate = "45deg"
        p2.style.display="inline"
        a++
        n=2;
    }else if(n==2) {
        ibox2.style.height = "0px"
        cross2.style.rotate = "0deg"
        p2.style.display="none"
        a=0
    }else if(a!=0){
        ibox2.style.height = "120px"
        cross2.style.rotate = "45deg"
        p2.style.display="inline"

        p1.style.display="none"
        ibox1.style.height = "0px"
        cross1.style.rotate = "0deg"

        p3.style.display="none"
        ibox3.style.height = "0px"
        cross3.style.rotate = "0deg"

        p4.style.display="none"
        ibox4.style.height = "0px"
        cross4.style.rotate = "0deg"

        p5.style.display="none"
        ibox5.style.height = "0px"
        cross5.style.rotate = "0deg"

        p6.style.display="none"
        ibox6.style.height = "0px"
        cross6.style.rotate = "0deg"
        a++
        n=2;
    }

})

qbox3.addEventListener("click",()=>{
    if(a==0){
        ibox3.style.height = "220px"
        cross3.style.rotate = "45deg"
        p3.style.display="inline"
        a++
        n=3
    }else if(n==3){
        ibox3.style.height = "0px"
        cross3.style.rotate = "0deg"
        p3.style.display="none"
        a=0
    }else if(a!=0){
        ibox3.style.height = "220px"
        cross3.style.rotate = "45deg"
        p3.style.display="inline"

        p2.style.display="none"
        ibox2.style.height = "0px"
        cross2.style.rotate = "0deg"

        p1.style.display="none"
        ibox1.style.height = "0px"
        cross1.style.rotate = "0deg"

        p4.style.display="none"
        ibox4.style.height = "0px"
        cross4.style.rotate = "0deg"

        p5.style.display="none"
        ibox5.style.height = "0px"
        cross5.style.rotate = "0deg"

        p6.style.display="none"
        ibox6.style.height = "0px"
        cross6.style.rotate = "0deg"
        a++
        n=3
    }

})

qbox4.addEventListener("click",()=>{
    if(a==0){
        ibox4.style.height = "120px"
        cross4.style.rotate = "45deg"
        p4.style.display="inline"
        a++
        n=4
    }else if(n==4){
        ibox4.style.height = "0px"
        cross4.style.rotate = "0deg"
        p4.style.display="none"
        a=0
    }else if(a!=0){
        ibox4.style.height = "120px"
        cross4.style.rotate = "45deg"
        p4.style.display="inline"

        p2.style.display="none"
        ibox2.style.height = "0px"
        cross2.style.rotate = "0deg"

        p3.style.display="none"
        ibox3.style.height = "0px"
        cross3.style.rotate = "0deg"

        p1.style.display="none"
        ibox1.style.height = "0px"
        cross1.style.rotate = "0deg"

        p5.style.display="none"
        ibox5.style.height = "0px"
        cross5.style.rotate = "0deg"

        p6.style.display="none"
        ibox6.style.height = "0px"
        cross6.style.rotate = "0deg"
        a++
        n=4
    }

})

qbox5.addEventListener("click",()=>{
    if(a==0){
        ibox5.style.height = "120px"
        cross5.style.rotate = "45deg"
        p5.style.display="inline"
        a++
        n=5
    }else if(n==5){
        ibox5.style.height = "0px"
        cross5.style.rotate = "0deg"
        p5.style.display="none"
        a=0
    }else if(a!=0){
        ibox5.style.height = "120px"
        cross5.style.rotate = "45deg"
        p5.style.display="inline"

        p2.style.display="none"
        ibox2.style.height = "0px"
        cross2.style.rotate = "0deg"

        p3.style.display="none"
        ibox3.style.height = "0px"
        cross3.style.rotate = "0deg"

        p4.style.display="none"
        ibox4.style.height = "0px"
        cross4.style.rotate = "0deg"

        p1.style.display="none"
        ibox1.style.height = "0px"
        cross1.style.rotate = "0deg"

        p6.style.display="none"
        ibox6.style.height = "0px"
        cross6.style.rotate = "0deg"
        a++
        n=5
    }

})

qbox6.addEventListener("click",()=>{
    if(a==0){
        ibox6.style.height = "150px"
        cross6.style.rotate = "45deg"
        p6.style.display="inline"
        a++
        n=6
    }else if(n==6){
        ibox6.style.height = "0px"
        cross6.style.rotate = "0deg"
        p6.style.display="none"
        a=0
    }else if(a!=0){
        ibox6.style.height = "150px"
        cross6.style.rotate = "45deg"
        p6.style.display="inline"

        p2.style.display="none"
        ibox2.style.height = "0px"
        cross2.style.rotate = "0deg"

        p3.style.display="none"
        ibox3.style.height = "0px"
        cross3.style.rotate = "0deg"

        p4.style.display="none"
        ibox4.style.height = "0px"
        cross4.style.rotate = "0deg"

        p5.style.display="none"
        ibox5.style.height = "0px"
        cross5.style.rotate = "0deg"

        p1.style.display="none"
        ibox1.style.height = "0px"
        cross1.style.rotate = "0deg"
        a++
        n=6
    }

})

