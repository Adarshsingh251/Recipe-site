document.addEventListener("contextmenu",function(e){
    e.preventDefault()
},false)

t = gsap.timeline();

t.from(".main-screen h1",{
    scale:0,
    opacity:0,
    duration:0.8
})
t.from(".main-screen p",{
    x:-500,
    opacity:0,
    duration:0.8,
})
t.from(".main .arrow-icon",{
    y:-500,
    opacity:0,
    duration:0.8,
    // scrollTrigger:{
    //     trigger:".main .arrow-icon",
    //     scroller:"body",
    //     markers:true,
    //     start:"top 60%",
    //     end:"top 10%",
    // }
})

gsap.to(".section1 .left1 .instruction",{
    x: 500,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".main-part .content-div .sec1",
        // scroller:"body",
        // markers:true,
        // start:"top 110%",
        // end:"top -40%",
        start:"top 60%",
        end:"top:50%",
        scrub:1,
    }
})
// gsap.from(".sec2 .left1 .int2",{
//     x: 500,
//     opacity:0,
//     duration:0.8,
//     scrollTrigger:{
//         trigger:".sec2",
//         scroller:"body",
//         markers:true,
//         start:"top 45%",
//         end:"top -40%",
//         scrub:2,
//     }
// })
// gsap.from(".sec3 .left1 .int3",{
//     x: 500,
//     opacity:0,
//     duration:0.8,
//     scrollTrigger:{
//         trigger:".sec3",
//         scroller:"body",
//         markers:true,
//         start:"top 45%",
//         end:"top -40%",
//         scrub:2,
//     }
// })
// gsap.from(".sec4.left1 .int4",{
//     x: 500,
//     opacity:0,
//     duration:0.8,
//     scrollTrigger:{
//         trigger:".sec4",
//         scroller:"body",
//         markers:true,
//         start:"top 45%",
//         end:"top -40%",
//         scrub:2,
//     }
// })
