import { createContext, useContext, useEffect, useState } from "react";


export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const cargarProductos = async () => {

        try {

            const res = await fetch("/productos.json");

            const data = await res.json();

            setProductos(data);

        } catch (error) {

            console.error(error);

        } finally {

            setCargando(false);

        }

    }

    useEffect(() => {

        cargarProductos();

    }, []);
    //categorias
    const categorias = productos.reduce((acc, producto) => {

    const existe = acc.find(
        c => c.nombre === producto.categoria
    );

    if (existe) {

        if (!existe.subcategorias.includes(producto.subcategoria)) {

            existe.subcategorias.push(producto.subcategoria);

        }

    } else {

        acc.push({

            nombre: producto.categoria,

            subcategorias: [producto.subcategoria]

        });

    }

    return acc;

}, []);

    return (

        <ProductosContext.Provider
            value={{
                productos, cargando , categorias
            }}
        >

            {children}

        </ProductosContext.Provider>

    );

}

export const useProductos = () => useContext(ProductosContext);