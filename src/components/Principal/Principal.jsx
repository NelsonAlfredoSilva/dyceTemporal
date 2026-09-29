import { Botones } from '../Botones/Botones';
import { Card } from '../Cards/Card';
import './Principal.css'
export const Principal = () => {
    return (
        <section className="contenedor">
            <div className='size_50 direccion_en_columna'>
                <div className='resaltado_verde'>Distribuidor Mayorista de componentes Electrónicos de Alta Calidad</div>
                <p className='size_50per titular'>
                    La mejor <span className='fuente_azul'>Tecnología</span> al
                    Alcance de tus
                    Proyectos
                </p>
                <div className='descContainer'>
                    <p>Mas de 10.000 Componentes electrónicos en stock.</p>
                    <p>Distribuidores Autorizados de las mejores marcas mundiales.</p>
                </div>
                <div className='boton_opciones'>
                    <Botones texto="Ver catalogo" className="prinPerso" icon="arrow-forward-outline"></Botones>
                    <Botones texto="Contactar ventas" className="prinPerso"></Botones>
                </div>
            </div>

            <div className='size_50 contenedorPrin'>
                
            </div>
        </section>
    )
}