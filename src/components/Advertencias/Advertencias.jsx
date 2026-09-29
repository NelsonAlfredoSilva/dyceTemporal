
import { style } from '../Advertencias/Advertencias.jsx';
export const Advertencias = ({ tipo, texto }) => {
    const configuracion = {
        success: {
            icon: "checkmark-circle-outline",
            color: 'green'
        },
        warning: {
            icon: "warning-outline",
            color: 'orange'
        },
        error: {
            icon: "close-circle-outline",
            color: 'red'
        },
        loading: {
            icon: "reload-outline",
            color: 'grey'
        },

    }
    //casos
    switch (tipo) {
        case "success":
            icon: "checkmark-circle-outline";
            break;
        case "warning":
            icon: "warning-outline";
            break;
        case "error":
            icon: "close-circle-outline";
            break;
        case "loading":
            icon: "reload-outline";
            break;
    }

    return (
        <>
            <div className={style.adv}>
                <div className={style.advContainer}>
                    <div className={style.advIcon}>
                        <ion-icon name={configuracion.icon} className={style.icon}></ion-icon>
                    </div>
                    <div className={style.advTexto}>
                        <p>{texto}</p>
                    </div>
                </div>
            </div>

        </>
    )
}