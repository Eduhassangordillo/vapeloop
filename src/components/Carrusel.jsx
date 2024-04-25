import Carousel from "react-bootstrap/Carousel";
import foto1 from "./../img/jpg/IMG-20240413-WA0006.jpg";
import foto2 from "./../img/jpg/IMG-20240413-WA0007.jpg";
import foto3 from "./../img/jpg/IMG-20240413-WA0008.jpg";
import "../css/Carrusel.css";

function Carrusel() {
  return (
    <Carousel className="Carrusel">
      <Carousel.Item className="ItemCarrusel">
        <img className="ImagenCarrusel" src={foto1} />
      </Carousel.Item>
      <Carousel.Item className="ItemCarrusel">
        <img className="ImagenCarrusel" src={foto2} />
      </Carousel.Item>
      <Carousel.Item className="ItemCarrusel">
        <img className="ImagenCarrusel" src={foto3} />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;

// import Carousel from "react-bootstrap/Carousel";
// import foto1 from "./../img/jpg/IMG-20240413-WA0006.jpg";
// import foto2 from "./../img/jpg/IMG-20240413-WA0007.jpg";
// import foto3 from "./../img/jpg/IMG-20240413-WA0008.jpg";
// import "../css/Carrusel.css";

// function Carrusel() {
//   const ArrayDeImg = [
//     {
//       img: { foto1 },
//       id: "Producto 1",
//     },
//     {
//       img: { foto2 },
//       id: "Producto 2",
//     },
//     {
//       img: { foto3 },
//       id: "Producto 3",
//     },
//   ];

//   return (
//     <Carousel className="Carrusel" data-bs-theme="dark">
//       {ArrayDeImg.map((Element) => {
//         return (
//           <Carousel.Item className="ItemCarrusel">
//             <img className="ImagenCarrusel" src={Element.img} />
//             <Carousel.Caption>
//               <h5>{Element.id}</h5>
//             </Carousel.Caption>
//           </Carousel.Item>
//         );
//       })}
//     </Carousel>
//   );
// }

// export default Carrusel;
