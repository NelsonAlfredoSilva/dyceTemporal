
import { CardProduct } from "../CardProduct/CardProduct";
import './DestacadoProducto.css';

export const DestacadoProducto = ({ destacados }) => {



    return (
        <>
            <section className="destacadosProd">
                <h2 className="destcadosTitulo">Productos destacados</h2>
                <div className="destacadosProdContainer">
                    {
                        destacados.map((prod, index) => {

                            return (
                                <>
                                    <CardProduct key={index}{...prod} className="cardDest"></CardProduct>
                                </>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}