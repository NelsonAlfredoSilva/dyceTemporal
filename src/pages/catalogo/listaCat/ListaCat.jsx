import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CardProduct } from "../../../components/CardProduct/CardProduct";
import { FiltroCategorias } from "../../../components/FiltroCategorias/FiltroCategorias";
import { Buscador } from "../../../components/Buscador/Buscador";
import { WspFloat } from "../../../components/WspFloat/WspFloat";
import { useProductos } from "../../../context/ProductosContext";

import "./ListaCat.css";
export const ListaCat = ({ }) => {
    const location = useLocation();
    const { productos, categorias } = useProductos();

    const [busqueda, setBusqueda] = useState('');
    const [subFiltradas, setSubFiltradas] = useState(
        location.state?.subFiltradas || []
    );
    const [mostrarFiltros, setMostrarFiltros] = useState(false);


    const productosFiltrados = productos
        .filter(p =>
            subFiltradas.length === 0 ||
            subFiltradas.includes(p.subcategoria)
        )
        .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()) || p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
        );




    return (
        <>
            <WspFloat></WspFloat>
            <section className="catalogoFiltros">
                <Buscador onBuscar={setBusqueda} />
            </section>
            <section className="menuProd">

                {mostrarFiltros && (
                    <div
                        className="menuOverlayFiltros"
                        onClick={() => setMostrarFiltros(false)}
                    ></div>
                )}

                <aside className={`menuSidebar ${mostrarFiltros ? "menuSidebarAbierto" : ""}`}>

                    <ion-icon
                        name="options-outline"
                        className="menuFiltroResponsive"
                        onClick={() => setMostrarFiltros(!mostrarFiltros)}
                    ></ion-icon>
                    <FiltroCategorias
                        categorias={categorias}
                        seleccionadas={subFiltradas}
                        onFiltrar={setSubFiltradas}
                        variante="menu"
                    />

                </aside>

                <div className="menuProductosContainer">

                    <div className="menuCategoriasActivas">

                        {subFiltradas.map(sub => (
                            <div className="menuCategoriaTag" key={sub}>
                                <span>{sub}</span>

                                <ion-icon
                                    name="close-outline"
                                    onClick={() =>
                                        setSubFiltradas(
                                            subFiltradas.filter(c => c !== sub)
                                        )
                                    }
                                ></ion-icon>
                            </div>
                        ))}

                    </div>

                    <div className="menuCategoriasProd">

                        {productos
                            .filter(p =>
                                subFiltradas.length === 0 ||
                                subFiltradas.includes(p.subcategoria)
                            )
                            .filter(p =>
                                p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                                p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
                            )
                            .map(producto => (
                                <CardProduct
                                    key={producto.id}
                                    {...producto}
                                />
                            ))}

                    </div>

                </div>

            </section>
        </>
    );

}
/*-- CATALOGO*/