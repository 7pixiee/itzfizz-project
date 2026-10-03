import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickyViewport from "./StickyViewport";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        
      const tl = gsap.timeline();

      tl.from(".hero-brand", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero-label",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".hero-title",
          {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".hero-product",
          {
            scale: 0.7,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // Responsive product movement
      const mm = gsap.matchMedia();

      mm.add("(max-width: 639px)", () => {
        // MOBILE
        gsap.to(".hero-product", {
          x: 0,
          y: 50,
          scale: 1.02,
          ease: "none",

          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      });

      mm.add("(min-width: 640px)", () => {
        // DESKTOP / TABLET
        gsap.to(".hero-product", {
          x: 180,
          y: -40,
          scale: 1.1,
          ease: "none",

          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      });

      // motion trail
      gsap.to(".hero-trail", {
        scaleX: 1.8,
        opacity: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // progress bar
      gsap.to(".hero-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // First headline/ second headline
      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "15% top",
            end: "45% top",
            scrub: 1,
          },
        })
        .to(".hero-title", {
          x: -80,
          opacity: 0,
          ease: "power2.inOut",
        })
        .fromTo(
          ".hero-title-second",
          {
            x: 120,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            ease: "power2.inOut",
          },
          "<",
        );

      // Stats reveal one by one
      gsap.fromTo(
        ".hero-stat",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "10% top",
            end: "45% top",
            scrub: 0.6,
          },
        },
      );

      // Orbit rotates around the S
      gsap.to(".hero-orbit", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[180vh] bg-[#08090b] text-white sm:min-h-[200vh]"
    >
     <StickyViewport />

    </section>
  );
}
