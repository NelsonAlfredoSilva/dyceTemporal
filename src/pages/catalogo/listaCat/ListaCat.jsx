import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CardProduct } from "../../../components/CardProduct/CardProduct";
import { ListaProduct } from "../../../components/CardProduct/ListaProduct";
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
    const [vista, setVista] = useState("list");


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
                    
                    <div className="menuProductosVistaContainer">
                        <ion-icon 
                            name={vista === "grid" ? "list-outline" : "grid-outline"}
                            className="iconVista"
                            onClick={() => setVista(vista === "grid" ? "list" : "grid")}
                        ></ion-icon>
                    </div>

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

                    {/* NUEVO: Le pasamos la clase dinámica `grid` o `list` al contenedor */}
                    <div className={`menuCategoriasProd ${vista}`}>
                        {productosFiltrados.map(producto => (
                            vista === "grid" ? (
                                <CardProduct key={producto.id} {...producto} />
                            ) : (
                                <ListaProduct key={producto.id} {...producto} />
                            )
                        ))}
                    </div>

                </div>

            </section>
        </>
    );

}
/*-- CATALOGO*/