
import './CardProduct.css';


export const CardProduct = ({ categoria, nombre, prec, stock, img, descripcion , className , subcategoria  }) => {
    const noStock = stock === 0 ? <p className="noStock">No disponible</p> : null;
    const bajoStock = stock > 0 && stock <= 20 ? <p className="bajoStock">Bajo Stock</p> : null;
    const hayStock = stock > 20 ? <p className="hayStock">Disponible</p> : null ;
    const etiquetaSubCat = categoria.trim().toLowerCase() !== subcategoria.trim().toLowerCase() 
    ? <div className="-subcat"><p>{subcategoria}</p></div> 
    : null




    return (
        <>
            <div className={`cardContainer ${className || ''}`}>
                <div className="cardContainerImg">
                    <img src={img}></img>
                </div>
                <div className="cardContainerContent">
                    <div className="-categoriaContainer">
                        <div className="-categoria">
                          <p>{categoria}</p>  
                        </div>
                        {
                          etiquetaSubCat   
                        }
                    </div>
                    <div className="-titulo">
                        <p>{nombre}</p>
                    </div>
                    <div className="-desc">
                        <p>{descripcion}</p>
                    </div>
                    <div className="-prec">
                        <p>${prec}</p>
                    </div>
                </div>
                <div className="cardContainer-stock">
                    {noStock}
                    {bajoStock}
                    {hayStock}
                </div>
            </div>
        </>
    )
}