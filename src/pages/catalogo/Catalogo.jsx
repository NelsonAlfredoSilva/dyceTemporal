import { useState, useRef } from "react";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { FiltroCategorias } from "../../components/FiltroCategorias/FiltroCategorias";
import { Buscador } from "../../components/Buscador/Buscador";
import { WspFloat } from "../../components/WspFloat/WspFloat";
import { useProductos } from "../../context/ProductosContext";
import './Catalogo.css';
export const Catalogo = ({ }) => {
    const { productos, categorias } = useProductos();
    const [busqueda, setBusqueda] = useState('');
    const [subFiltradas, setSubFiltradas] = useState([]);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const productosRef = useRef(null);


    const productosFiltrados = productos
        .filter(p =>
            subFiltradas.length === 0 ||
            subFiltradas.includes(p.subcategoria)
        )
        .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()) || p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
        );
    //Despazamiento automatico 
    const irAProductos = () => {
        productosRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };


    return (
        <>
            <WspFloat></WspFloat>
            <section className="catalogoCategorias">
                <FiltroCategorias
                    categorias={categorias}
                    seleccionadas={subFiltradas}
                    onFiltrar={(subcategorias) => {
                        setSubFiltradas(subcategorias);
                        irAProductos();
                    }}
                    cerrarFiltro={() => setMostrarFiltros(false)}
                    mostrar={mostrarFiltros}
                />
            </section>
            <section className="catalogoFiltros">
                <Buscador onBuscar={(valor) => {
                    setBusqueda(valor);
                }}></Buscador>
            </section>
            <section className="catalogoProd" ref={productosRef} >
                {
                    mostrarFiltros && (
                        <div
                            className="overlayFiltros"
                            onClick={() => setMostrarFiltros(false)}
                            
                        ></div>
                    )
                }
                <div className="catalogoProductosContainer">
                    <div className="categoriasActivas">

                        {
                            subFiltradas.map(sub => (

                                <div className="categoriaTag" key={sub}>

                                    <span className="categoriaTagTitulo">{sub}</span>

                                    <ion-icon
                                        name="close-outline"
                                        className="closeCategorias"
                                        onClick={() =>
                                            setSubFiltradas(
                                                subFiltradas.filter(c => c !== sub)
                                            )
                                        }
                                    ></ion-icon>

                                </div>

                            ))
                        }

                    </div>
                    <div className="categoriasProd" >
                        {
                            productosFiltrados.map((producto) => {
                                return (
                                    <CardProduct key={producto.id}{...producto}></CardProduct>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        </>
    )
}
