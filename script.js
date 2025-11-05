function ValueSetter() {
    gsap.set('.hero nav a', {
        y: "-80%",
        opacity: 0
    })
    gsap.set('.hero span .child', {
        y: "80%",
        opacity: 0
    });
    gsap.set('.row2 img',{
        opacity:0
    })
    let elems = document.querySelectorAll('#Visual>g')
    elems.forEach((e) => {
        e.childNodes[1].childNodes[1].style.strokeDasharray = e.childNodes[1].childNodes[1].getTotalLength() + 'px';
        e.childNodes[1].childNodes[1].style.strokeDashoffset = e.childNodes[1].childNodes[1].getTotalLength() + 'px';
    })
}

function elemToSpan() {
    document.querySelectorAll('.reveal').forEach(function (elem) {
        let parent = document.createElement('span')
        let child = document.createElement('span')

        parent.classList.add('parent')
        child.classList.add('child')

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        elem.innerHTML = '';
        elem.appendChild(parent);
    })
}
function LoaderAnimation() {

    const tl = gsap.timeline()
    tl
        .from(' .loader .child span ', {
            x: "50%",
            stagger: .1,
            ease: Expo.easeInout
        })


        .to('.loader .reveal .parent .child', {
            y: "-100%",
            duration: 1,
            ease: "circ.inOut"
        })
    tl.to('.loader', {
        height: 0,
        ease: Expo.easeInout,
    })
        .to('.green-overlay', {
            height: "100vh",
            top: 0,
            ease: "circ.Inout",
            delay: -.6,
            duration: .6
        })
        .to('.green-overlay', {
            height: 0,
            delay: -.3,
            ease: Expo.easeInout,
             onComplete: function () {
                AnimateHome();
            }
        })
        .to('.hero', {
            ease: Expo.easeInout,
            y: 0,
           
        })
}

function AnimateSvg() {

    gsap.to('#Visual>g>g>path , #Visual>g>g>polyline', {
        strokeDashoffset: 0,    
        ease:Expo.easeInout
       
    })
}
function AnimateHome() {


    let tl = gsap.timeline()
    tl.to('.hero nav a', {
        y: 0,
        opacity: 1,
        delay:-.3,
        stagger: .05,
        ease:Expo.easeInout
    })
    .to('.hero .parent .child', {
            y: 0,
            opacity: 1,
            delay:-.6,
            stagger: .1,
        ease:Expo.easeInout

        })
    .to('.row2 img',{
        opacity:1 ,
        ease:Expo.easeInout,
        onComplete:function(){
                AnimateSvg();
            }
    })
}
elemToSpan();
ValueSetter();
LoaderAnimation();
// AnimateSvg();
// AnimateHome();