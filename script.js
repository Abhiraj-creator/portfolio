document.querySelectorAll('.reveal').forEach(function(elem){
    let parent=document.createElement('span')
    let child=document.createElement('span')

    parent.classList.add('parent')
    child.classList.add('child')

    child.textContent=elem.textContent;
    parent.appendChild(child);
    elem.textContent='';
    elem.appendChild(parent);
})

const tl=gsap.timeline()
tl.to('.loader',{
   height:0,
    ease:Expo.easeInout,
    delay:.5
})
.to('.green-overlay',{
    y:0,
    ease:Expo.easeInout,
    delay:-.3
})
.to('.green-overlay',{
    height:0,
    delay:-.4
})
.to('.hero',{
   ease:Expo.easeInout,
   y:0,
   delay:.1
})