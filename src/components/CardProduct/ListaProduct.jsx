import './ListaProduct.css';

export const ListaProduct = ({ categoria, nombre, prec, stock, img, descripcion, className, subcategoria }) => {
    const noStock = stock === 0 ? <p className="noStock">No disponible</p> : null;
    const bajoStock = stock > 0 && stock <= 20 ? <p className="bajoStock">Bajo Stock</p> : null;
    const hayStock = stock > 20 ? <p className="hayStock">Disponible</p> : null;
    const etiquetaSubCat = categoria.trim().toLowerCase() !== subcategoria.trim().toLowerCase() 
    ? <div className="-subcat"><p>{subcategoria}</p></div> 
    : null;

    return (
        <div className={`listaProductContainer ${className || ''}`}>
            <div className="listaProductImg">
                <img src={img} alt={nombre} />
            </div>
            
            <div className="listaProductContent">
                <div className="-categoriaContainer">
                    <div className="-categoria">
                      <p>{categoria}</p>  
                    </div>
                    {etiquetaSubCat}
                </div>
                <div className="-titulo">
                    <p>{nombre}</p>
                </div>
                <div className="-desc">
                    <p>{descripcion}</p>
                </div>
            </div>

            <div className="listaProductRight">
                <div className="listaProduct-stock">
                    {noStock}
                    {bajoStock}
                    {hayStock}
                </div>
                <div className="-prec">
                    <p>${prec}</p>
                </div>
            </div>
        </div>
    );
};