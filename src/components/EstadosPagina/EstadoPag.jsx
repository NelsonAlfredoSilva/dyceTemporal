import mantenimiento from "../../assets/mantenimiento.svg";
import tuerca from "../../assets/tuerca.svg";
import logo from "../../assets/logo.jpg";
import "./EstadoPag.css";
export const EstadoPag = ({ titulo, subtitulo }) => {

    return (

        <>
            <div className="logo">
                <img
                    src={logo}
                    alt="Logo Dyce"
                />
            </div>

            <div className="notFound">

                <div className="mantenimiento-img">

                    <img
                        src={mantenimiento}
                        className="mtn"
                        alt=""
                    />

                    <img
                        src={tuerca}
                        className="tuercas left"
                        alt=""
                    />

                    <img
                        src={tuerca}
                        className="tuercas right"
                        alt=""
                    />

                    <img
                        src={tuerca}
                        className="tuercas top"
                        alt=""
                    />

                </div>

                <div className="texto">

                    <h1>{titulo}</h1>

                    <h2>{subtitulo}</h2>

                    <div className="contacto-box">
                     <div className="email">
                        <a href="mailto:info@dyce.com.ar"><ion-icon name="mail-outline"></ion-icon></a>
                        <a href="mailto:info@dyce.com.ar"><p>info@dyce.com.ar</p></a>
                    </div>
                    <div className="wsp">
                        <a href="tel:+541149310069"><ion-icon name="call-outline"></ion-icon></a>
                        <a href="tel:+541149310069"><p>011-49310069</p></a>
                    </div>
                    </div>

                </div>

            </div>
        </>

    )
}