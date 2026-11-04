
import { useState } from "react";
import { FiltroCategorias } from "../../components/FiltroCategorias/FiltroCategorias";
import { WspFloat } from "../../components/WspFloat/WspFloat";
import { useProductos } from "../../context/ProductosContext";
import { useNavigate } from "react-router-dom";
import "./Catalogo.css";

export const Catalogo = () => {

    const { categorias } = useProductos();
    const navigate = useNavigate();

    const [subFiltradas, setSubFiltradas] = useState([]);

    const irAListaProductos = (subcategorias) => {
        setSubFiltradas(subcategorias);

        navigate("/lista", {
            state: { subFiltradas: subcategorias }
        });
    };

    return (
        <>
            <WspFloat />

            <section className="catalogoCategorias">
                <FiltroCategorias
                    categorias={categorias}
                    seleccionadas={subFiltradas}
                    onFiltrar={irAListaProductos}
                    variante="cards"
                />
            </section>
        </>
    );
};
