import { Cards } from "../Cards/Cards";
import './Valores.css';

export const Valores = () => {



    return (
        <>
            <section className="homeValores">
                <h2>¿Por qué elegirnos?</h2>
                <div className="homeValoresGrid">
                    <Cards texto="+3.000 referencias" titulo="Semiconductores" icon="hardware-chip-outline"></Cards>
                    <Cards texto="Cantidad variada de productos." titulo="10K de Productos" icon="cube-outline"></Cards>
                    <Cards texto="Envíos rápidos y constantes." titulo="Envío las 24hs" icon="rocket-outline"></Cards>
                    <Cards texto="En el mercado electrónico." titulo="+20 Años" icon="ribbon-outline"></Cards>
                </div>

            </section>
        </>
    )
}