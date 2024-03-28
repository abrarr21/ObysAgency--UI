function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.5,
    delay: 0.3,
});
tl.from("#line1-part1", {
    opacity: 0,
    onStart: function(){
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function(){
            if(grow<100){
                h5timer.innerHTML = grow++
            }
            else{
                h5timer.innerHTML = grow
            }
            }, 33);
    },
});
tl.to(".line h2", {
    animationName: "anime",
    opacity: 0,
})
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
});
tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease:Power4
});
tl.to("#loader", {
    display: "none"
})
tl.from("#nav-part2 h4", {
    opacity: 0
})
tl.from(".hero-section h1", {
    y: 120,
    stagger: 0.2
})
}
function cursorAnimation(){
    document.addEventListener('mouseover', function(dets){
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y 
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}

loadingAnimation()
cursorAnimation()