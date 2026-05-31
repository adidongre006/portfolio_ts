
"use client";
import { useEffect, useRef } from "react";
import styles from "./Scroll.module.css";


// import { companies, testimonials } from "@/data";
import { scrollItems } from "./types";
export default function HorizontalScroll() {
  const innerRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;
    const children = Array.from(el.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      el.appendChild(clone);
    });

  }, []);

  return (
    <div className={styles.container}>
      <ul ref={innerRef} className={styles.inner}>
        {scrollItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <img src={item.img} alt={item.label} className="md:w-10 w-5" />
            <span className="text-xl ml-1 font-bold leading-[1.6] text-white mt-3.2">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}




















// 0------------------------------------------------------------------------------

// "use client";

// import React, { useEffect, useRef } from "react";
// type Item = {
//   id: string;
//   title: string;
//   img: string;
// };
// type Props = {
//   items: Item[];
//   speed?: "slow" | "normal" | "fast";
//   direction?: "left" | "right";
// };
// const HorizontalScroller: React.FC<Props> = ({
//   items,
//   speed = "normal",
//   direction = "left",
// }) => {
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const innerRef = useRef<HTMLUListElement>(null);
//   useEffect(() => {
//     const scroller = scrollerRef.current;
//     const inner = innerRef.current;
//     if (!scroller || !inner) return;
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     // Reset content (important for rerender)
//     inner.innerHTML = "";
//     // Create original items
//     items.forEach((item) => {
//       inner.appendChild(createItem(item));
//     });
//     const baseItems = Array.from(inner.children);
//     let totalWidth = inner.scrollWidth;
//     const containerWidth = scroller.offsetWidth;
//     // Duplicate items for seamless loop
//     while (totalWidth < containerWidth * 2) {
//       baseItems.forEach((node) => {
//         const clone = node.cloneNode(true) as HTMLElement;
//         clone.setAttribute("aria-hidden", "true");
//         inner.appendChild(clone);
//       });
//       totalWidth = inner.scrollWidth;
//     }
//     // 

// //  Perfect speed sync
//     const pxPerSec = getSpeed(speed);
//     const duration = totalWidth / pxPerSec;
//     inner.style.setProperty("--duration", `${duration}s`);
//     inner.style.setProperty(
//       "--direction",
//       direction === "right" ? "reverse" : "normal"
//     );
//   }, [items, speed, direction]);
//   return (
//     <div ref={scrollerRef} className="scroller">
//       <ul ref={innerRef} className="scroller__inner" />
//     </div>
//   );
// };
// // 
// // 
// //  Create ONE item (Image + Text)
// function createItem(item: Item): HTMLLIElement {
//   const li = document.createElement("li");
//   // Image
//   const img = document.createElement("img");
//   img.src = item.img;
//   img.alt = item.title;
//   img.loading = "lazy";
//   // Text
//   const text = document.createElement("p");
//   text.textContent = item.title;
//   li.appendChild(img);
//   li.appendChild(text);
//   return li;
// }
// // 

// //  Speed controller
// function getSpeed(speed: "slow" | "normal" | "fast") {
//   switch (speed) {
//     case "fast":
//       return 140;
//     case "slow":
//       return 50;
//     default:
//       return 90;
//   }
// }
// export default HorizontalScroller;
 













// -------------------------------------------------------------------------------------------------------------------------

// "use client";
// import { useEffect, useRef } from "react";
// import styles from "./Scroll.module.css";


// import { companies, testimonials } from "@/data";
// import { scrollItems } from "./types";
// export default function HorizontalScroll() {
//   const innerRef = useRef<HTMLUListElement>(null);
//   useEffect(() => {
//     const el = innerRef.current;
//     if (!el) return;
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)",
//     ).matches;
//     if (prefersReducedMotion) return;
//     const children = Array.from(el.children);
//     children.forEach((child) => {
//       const clone = child.cloneNode(true);
//       el.appendChild(clone);
//     });

//   }, []);

//   return (
//     <div className={styles.container}>
//       <ul ref={innerRef} className={styles.inner}>
//         {scrollItems.map((item) => (
//           <li key={item.id} className={styles.item}>
//             <img src={item.img} alt={item.label} className="md:w-10 w-5" />
//             <span className="text-xl ml-1 font-bold leading-[1.6] text-white mt-3.2">
//               {item.label}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
