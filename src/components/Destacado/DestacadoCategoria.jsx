

import { Card } from "../Cards/Card";
import './DestacadoCategoria.css';


export const DestacadoCategoria = ({ }) => {


    return (
        <>
            <section className="destacadoCat">
                <div className="destacadoCatContainer">
                    <Card className="dest">
                        <p>Semiconductores</p>
                        <p>+3.000 referencias</p>
                    </Card>


                    <Card className="dest">
                        <h1>10K+</h1>
                        <p>Productos en Stock</p>
                    </Card>


                    <Card className="dest">
                        <p>Envío en 24hs</p>
                        <p>a todo el pais</p>
                    </Card>


                    <Card estiloAdd="colorFondo_azul" className="dest">
                        <h1>15+</h1>
                        <h5>Años de experiencia</h5>
                    </Card>
                </div>
            </section>
        </>
    )

}