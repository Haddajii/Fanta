var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    markers:true
}})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    markers:true
}})

tl.to("#fanta",{
    top:"120%" ,
    left:"0%"
},'orange')

tl.to("#orange-cut",{
    top:"160%",
    left:"23%",
},'orange')

tl.to("#orange",{
    width:"15%",
    top:"170%",
    right:"10%",
},'orange')

tl.to("#leaf",{
    
    top:"110%",
    rotate:"130deg",
    left:"80%",
},'orange')



tl2.to("#fanta",{
    top:"205%",
    left:"30%",
},'or')

tl2.to("#orange-cut",{
    top:"190%",
    left:"42%",
},'or')






