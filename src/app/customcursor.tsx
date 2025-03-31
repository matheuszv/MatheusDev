// import { useEffect, useRef } from "react";

// const CustomCursor = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     let mouseX = 0, mouseY = 0; // Posição do mouse
//     let cursorX = 0, cursorY = 0; // Posição do cursor
//     const speed = 0.1; // Velocidade do atraso (0.1 = bem suave)

//     const updatePosition = () => {
//       cursorX += (mouseX - cursorX) * speed;
//       cursorY += (mouseY - cursorY) * speed;
//       if (cursor) {
//         cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
//       }
//       requestAnimationFrame(updatePosition);
//     };

//     document.addEventListener("mousemove", (e) => {
//       mouseX = e.clientX - cursor.offsetWidth / 2;
//       mouseY = e.clientY - cursor.offsetHeight / 2;
//     });

//     updatePosition(); // Inicia a animação

//     return () => {
//       document.removeEventListener("mousemove", () => {});
//     };
//   }, []);

//   return (
//     <div ref={cursorRef} className="custom-cursor hidden md:block">
//       <div className="cursor-dot"></div>
//     </div>
//   );
// };

// export default CustomCursor;
