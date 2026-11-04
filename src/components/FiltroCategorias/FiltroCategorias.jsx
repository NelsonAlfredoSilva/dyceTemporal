
import { useFiltroCategorias } from "./useFiltroCategoria.js";
import { FiltroCategoriasCard } from "./FiltroCategoriasCard";
import { FiltroCategoriasMenu } from "./FiltroCategoriasMenu";

export const FiltroCategorias = ({
    categorias,
    seleccionadas,
    onFiltrar,
    variante = "cards"
}) => {

    const {
        categoriaAbierta,
        toggleCategoria,
        toggleSubcategoria
    } = useFiltroCategorias(seleccionadas, onFiltrar);

    const propsFiltro = {
        categorias,
        seleccionadas,
        categoriaAbierta,
        toggleCategoria,
        toggleSubcategoria
    };

    if (variante === "menu") {
        return <FiltroCategoriasMenu {...propsFiltro} />;
    }

    return <FiltroCategoriasCard {...propsFiltro} />;
};


















/*import "./FiltroCategorias.css";
import { useState } from "react";

export const FiltroCategorias = ({
    categorias,
    seleccionadas,
    onFiltrar,
    mostrar
}) => {

    const [categoriaAbierta, setCategoriaAbierta] = useState(null);

    const toggleSubcategoria = (subcategoria) => {

        let nuevas = [];

        if (seleccionadas.includes(subcategoria)) {
            nuevas = seleccionadas.filter(
                s => s !== subcategoria
            );
        } else {
            nuevas = [...seleccionadas, subcategoria];
        }

        onFiltrar(nuevas);
        setCategoriaAbierta(null);
    };

    return (
        <div
            className={`dropdownContainer ${mostrar ? "dropdownAbierto" : ""
                }`}
        >

            <div className="dropdownHeader">
                <h3 className="tituloFiltros">
                    Categorías
                </h3>
            </div>

            <div className="dropdownContainerCat">

                {categorias.map((categoria) => (

                    <div className="categoriaContainer" key={categoria.nombre}>
                        <div
                            className="categoriaPrincipal"
                            onClick={() =>
                                setCategoriaAbierta(
                                    categoriaAbierta === categoria.nombre
                                        ? null
                                        : categoria.nombre
                                )
                            }
                        >
                            <div className="categoriaTitulo">
                                <p>{categoria.nombre}</p>
                            </div>
                        </div>
                        {categoriaAbierta === categoria.nombre && (
                            <div className="subcategoriasContainer">

                                {categoria.subcategorias.map((sub) => (
                                    <div
                                        className="subcategoriaItem"
                                        key={sub}
                                        onClick={() => toggleSubcategoria(sub)}
                                    >
                                        {sub}
                                    </div>



                                ))}

                            </div>
                        )}

                    </div>

                ))}

            </div>

        </div>
    );
};*/