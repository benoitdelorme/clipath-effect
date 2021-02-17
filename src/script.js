import './reset.css'
import './style.css'
import gsap from 'gsap';

/* 
| Cache elements
*/
let h2s = document.querySelectorAll('h2')
let ps = document.querySelectorAll('p')

/* 
| Helpers
*/
const offset = (el) => {
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
};

const relativePosition = (e, el) => {
    const position = {}
    position.relX = e.pageX - offset(el).left
    position.relY = e.pageY - offset(el).top
    
    return position
}
/*
| Magic
*/
const render = (e) => {
    const relH2 = relativePosition(e, h2s[0])
    const relP = relativePosition(e, ps[0])
    
    /* Circle 1 */
    gsap.to(h2s[1], {duration: 0.7, "clip-path":`circle(200px at ${relH2.relX}px  ${relH2.relY}px`, ease: "expo.out"})
    gsap.to(ps[1], {duration: 0.7, "clip-path":`circle(200px at ${relP.relX}px  ${relP.relY}px`, ease: "expo.out"})

    /* Circle 2 */
    gsap.to(h2s[2], {duration: 1, "clip-path":`circle(100px at ${relH2.relX + 100}px  ${relH2.relY + 200}px`, ease: "expo.out"})
    gsap.to(ps[2], {duration: 1, "clip-path":`circle(100px at ${relP.relX + 100}px  ${relP.relY + 200}px`, ease: "expo.out"})
}

/* 
| Events
*/
document.addEventListener('mousemove', render)