import { DestacadoProducto } from '../../components/Destacado/DestacadoProducto';
import { WspFloat } from '../../components/WspFloat/WspFloat';
import { BannerSlider } from '../../components/BannerSlider/BannerSlider';
import { Cards } from '../../components/Cards/Cards';
import { useProductos } from '../../context/ProductosContext';
import marcasData from '../../data/marcasData';
import { Marcas } from '../../components/Marcas/Marcas';
import { Valores } from '../../components/Valores/Valores';
export const Inicio= ({})=>{
    const {productos} = useProductos();
    //para destacados
    const destacados = productos.filter(
        producto => producto.destacado == true
    );
    return(
        <>
            <WspFloat></WspFloat>
            <BannerSlider></BannerSlider>
            <Valores></Valores>
            <Marcas marcas={marcasData}></Marcas>
            
        </>
    )
}
/*<DestacadoProducto destacados={destacados}></DestacadoProducto>*/