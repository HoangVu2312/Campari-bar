// using gsap with locomotive scroll => use scroller proxy from gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll'



const ScrollTriggerProxy = () => {

    // Step 1: get instance of locomotive scroll
    const {scroll} = useLocomotiveScroll();

    // Step 2: register scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);

    //Step 3:
    useEffect(() => {

        if(scroll){
            const element = scroll?.el; // locomotive scrolling element => app (main)

            scroll.on('scroll', ScrollTrigger.update) // on scroll of locomotive => update scrolltrigger

            // scroller proxy
            ScrollTrigger.scrollerProxy(element, {
              scrollTop(value) {
                return arguments.length
                  ? scroll.scrollTo(value,  0, 0)
                  : scroll.scroll.instance.scroll.y;
              }, // we don't have to define a scrollLeft because we're only scrolling vertically.
              getBoundingClientRect() {
                return {
                  top: 0,
                  left: 0,
                  width: window.innerWidth,
                  height: window.innerHeight,
                };
              },
              // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
              pinType: element.style.transform
                ? "transform"
                : "fixed",
            });
              
        }

        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        return () => {
            ScrollTrigger.addEventListener("refresh", () => scroll?.update());
            ScrollTrigger.refresh();
        }
    }, [scroll])



  return null
}

export default ScrollTriggerProxy