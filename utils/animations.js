import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export function gsapAnimation(items,from,to){
    gsap.from(items, {
        duration: 1,
        ...from,
        stagger:.5,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
            trigger: items,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play pause resume reverse",
        },
    });
    gsap.to(items, {
        duration: 1,
        ...to,
        stagger:.5,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
            trigger: items,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play pause resume reverse",
        },
    });
}