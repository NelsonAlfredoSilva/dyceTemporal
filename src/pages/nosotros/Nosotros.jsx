import { WspFloat } from "../../components/WspFloat/WspFloat";
import corpo from "../../assets/nosotrosImg.jpg"
import './Nosotros.css';
import { Cards } from "../../components/Cards/Cards";

export const Nosotros = () => {

    return (
        <>
            <WspFloat></WspFloat>
            <section className="nosotros">
                <div className="nosotrosContainerImg">
                    <img src={corpo} />
                    <div className="-titulo">
                        <h4>Quienes Somos</h4>
                    </div>
                </div>
                <div className="separadorSvg">
                </div>
                <div className="nosotrosContainerTexto">
                    <div className="-texto">
                        <p>Dyce S.A.  es una compañía creada en el año 2003 </p>
                        <p>Sus socios cuentan con más de 40 años de experiencia en el mercado de componentes electrónicos, brindando soluciones confiables y un servicio de excelencia a empresas, técnicos y profesionales del sector.
                        </p>
                        <p>Somos importadores y distribuidores de las principales marcas del mercado, manteniendo un stock permanente para garantizar disponibilidad y una respuesta ágil a las necesidades de nuestros clientes.</p>
                    </div>
                </div>
                <div className="separador">
                    <span>o</span>
                </div>
                <div className="nosotrosContainerDestacados">
                    <h5>Servicios Exclusivos </h5>
                    <div className="destacadosCardsContainer">
                        <Cards titulo="Seguimiento Continuo" texto="Atención personalizada y asesoramiento especializado." icon=""></Cards>
                        <Cards titulo="Cobertura Nacional" texto="Despachos en toda Argentina." icon=""></Cards>
                        <Cards titulo="Cobertura Local" texto="Cobertura especial en CABA y Gran Buenos Aires." icon=""></Cards>
                    </div>
                </div>
                <div className="nosotrosContainerUbicacion">
                    <h6>¿En dónde estamos? </h6>
                    <div className="ubiacionContainer">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3662425361485!2d-58.423463!3d-34.620184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca50b1014de3%3A0x28f6fee0de8ed3ee!2sDYCE%20Dise%C3%B1os%20y%20Componentes%20Electr%C3%B3nicos%20S.A.!5e0!3m2!1ses!2sar!4v1790267932269!5m2!1ses!2sar"
                            width="1100"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}
