import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./BannerSlider.css";
import { Botones } from "../Botones/Botones";
export const BannerSlider = ({ }) => {
    const [actual, setActual] = useState(0);
    const banners = [
        {
            titulo: "Componentes Electronicos de alta calidad",
            texto: "",
            imagen: "/b1.jpeg",
            boton: true,
            textoBoton: "Ver Catálogo",
            ruta: "/catalogo"
        },
        {
            titulo: "La mejor Tecnología al Alcance de tus Proyectos",
            texto: "Mas de 10.000 Componentes electrónicos en stock.Distribuidores Autorizados de las mejores marcas mundiales.",
            imagen: "/b3.jpeg",
            boton: true,
            textoBoton: "Contactar ventas",
            ruta: "/contacto"
        }
    ];
    //transicion
    const [fade, setFade] = useState(true);
    useEffect(() => {

        const intervalo = setInterval(() => {

            setFade(false);

            setTimeout(() => {

                setActual(prev =>
                    (prev + 1) % banners.length
                );

                setFade(true);

            }, 400);

        }, 4000);

        return () => clearInterval(intervalo);

    }, []);



    return (
        <>
            <section className="banner">

                <img
                    src={banners[actual].imagen}
                    alt={banners[actual].titulo}
                />

                <div className={`bannerContenido ${fade ? "fadeIn" : "fadeOut"}`}>
                    <h2>{banners[actual].titulo}</h2>
                    <p>{banners[actual].texto}</p>
                    <Link to={banners[actual].ruta}>
                        <Botones
                            texto={banners[actual].textoBoton}
                            className="btnBanner"
                            icon="arrow-forward-outline"
                        />
                    </Link>

                </div>

            </section>
        </>
    )
}