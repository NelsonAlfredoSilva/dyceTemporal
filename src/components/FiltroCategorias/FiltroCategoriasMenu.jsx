import './FiltroCategoriasMenu.css'
export const FiltroCategoriasMenu = ({
    categorias,
    seleccionadas,
    categoriaAbierta,
    toggleCategoria,
    toggleSubcategoria
}) => {

    return (
        <div className="menuCategorias">

            <h3 className="tituloFiltros">
                Categorías
            </h3>

            <div className="menuCategoriasLista">

                {categorias.map((categoria) => (

                    <div
                        className="menuCategoriaItem"
                        key={categoria.nombre}
                    >

                        <div
                            className="menuCategoriaPrincipal"
                            onClick={() => toggleCategoria(categoria.nombre)}
                        >
                            <span>{categoria.nombre}</span>

                            <span>
                                {categoriaAbierta === categoria.nombre ? "−" : "+"}
                            </span>
                        </div>

                        {categoriaAbierta === categoria.nombre && (

                            <div className="menuSubcategorias">

                                {categoria.subcategorias.map((sub) => (

                                    <div
                                        className={`menuSubcategoria ${
                                            seleccionadas.includes(sub)
                                                ? "menuSubcategoriaSeleccionada"
                                                : ""
                                        }`}
                                        key={sub}
                                        onClick={() => toggleSubcategoria(sub, false)}
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
};
