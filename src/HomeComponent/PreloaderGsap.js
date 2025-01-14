import gsap from 'gsap'
import { setInLocalStorage } from '../lib/localStorage';

const tl =  gsap.timeline();

export const Preloadergsap = () => {

    tl.from('.preloader-bx .preloader-logo', {
        
        y : 60,
        duration: .76,
         opacity : 0,

        
    })

    tl.from('.preloader-text p', {
            y : 30,
            stagger : 0.05,
            duration : .6,
            opacity : 0,


    })

    tl.to('.preloader-bx ', {
        
        duration: .67,
         opacity : 0,

        
    })

  

    // tl.to('.preloader-text p', {

    //     x : -60,
    //     stagger : 0.2,
    //     duration : 1,
    //     opacity : 0,
    //     delay : .3,
        
    // })

    tl.to('.preloader-comp', {

        transform : "translateY(-80%)",
        duration : .76,
        
    })

    tl.to('.preloader-comp', {

        opacity : 0,
        duration : .76,
        
    })


    
    // tl.from(".hero-compnt .left-navbar-bx", {
    //     y : -10,
    //     opacity: 0,
    //     duration : 1,
        
    // })

    //   tl.from(".hero-compnt .lefttext", {
    //     x : -80,
    //     opacity: 0,
    //     stagger : 0.1,
    //     duration : 1,
    //     delay : -0.5,
        
    // })

    // tl.from(".hero-compnt .hero-text-first", {
    //     y : 100,
    //     opacity: 0,
    //     rotate : 8,
    //     stagger : 0.1,
    //     duration : 1,
    //     delay : -0.3,
        
    // })

    // tl.from(".hero-compnt .second-text", {
    //     y : 100,
    //     opacity: 0,
    //     rotate : 8,
    //     stagger : 0.1,
    //     duration : 1,
    //     delay : -0.5,
        
    // })

    // tl.from(".hero-compnt .style-text-bx", {
    //     x : -60,
    //     opacity: 0,
    //     stagger : 0.1,
    //     duration : 1,
    //     delay : -0.7,
        
    // })

    // tl.from(".wrap-content-bx", {
    //     y : -30,
    //     opacity: 0,
    //     stagger : 0.1,
    //     duration : 1,
    //     delay : -0.6,
        
    // })
    
    tl.to('.preloader-comp' ,{
            display : "none",
    })


    setInLocalStorage("notbeginer", "true");
}