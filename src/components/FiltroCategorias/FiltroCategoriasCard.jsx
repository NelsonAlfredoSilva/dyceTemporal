import './FiltroCategoriasCard.css'
export const FiltroCategoriasCard = ({
    categorias,
    seleccionadas,
    categoriaAbierta,
    toggleCategoria,
    toggleSubcategoria
}) => {

    return (
        <div className="dropdownContainer">

            <div className="dropdownHeader">
                <h3 className="tituloFiltros">
                    Categorías
                </h3>
            </div>

            <div className="dropdownContainerCat">
                {categorias.map((categoria) => (
                    <div
                        className="categoriaContainer"
                        key={categoria.nombre}
                    >
                        <div
                            className="categoriaPrincipal"
                            onClick={() => toggleCategoria(categoria.nombre)}
                            /**
                             * Con esta simple linea usando elemento style de React si tiene valor imgCategoria la incluimos
                             * imgCategoria se agrega en el context (productosContext)
                             */
                            style={
                                categoria.imgCategoria ? {backgroundImage: `url(${categoria.imgCategoria})`} : {}
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
                                        className={`subcategoriaItem ${
                                            seleccionadas.includes(sub)
                                                ? "subcategoriaSeleccionada"
                                                : ""
                                        }`}
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
};
