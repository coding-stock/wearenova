'use client'
import clsx from 'clsx'
import styles from "./process.module.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
function Process() {
  const scrollRef =  useRef<HTMLDivElement | null>(null); 
  useGSAP(()=>{
     const el = scrollRef.current;
     if (!el) return;
     const boxes = gsap.utils.toArray<HTMLElement>(el.children);
     
       boxes.forEach(box =>{
         gsap.from(box,{
            opacity: 0,
            scrollTrigger:{
                trigger: box,
                start: "bottom bottom",
                end: "top 20%",
                scrub: true,
            }
         })
       })
     
  },[])
  return (
    <section ref={scrollRef} className={clsx('bg-amber-200 h-screen  relative', styles.process)}>
         <div  className='bg-amber-800 h-50 w-50'></div>
    </section>
  )
}

export default Process

function box(value: HTMLElement, index: number, array: HTMLElement[]): void {
    throw new Error('Function not implemented.');
}
