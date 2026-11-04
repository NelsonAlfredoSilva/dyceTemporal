
import { useState } from "react";

export const useFiltroCategorias = (seleccionadas, onFiltrar) => {

    const [categoriaAbierta, setCategoriaAbierta] = useState(null);

    // Abre o cierra una categoría
    const toggleCategoria = (nombre) => {
        setCategoriaAbierta(actual =>
            actual === nombre ? null : nombre
        );
    };

    // Selecciona o deselecciona una subcategoría
    const toggleSubcategoria = (subcategoria, cerrarAlSeleccionar = true) => {

        let nuevas =[];

        if (seleccionadas.includes(subcategoria)) {
            nuevas = seleccionadas.filter(
                s => s !== subcategoria
            );
        } else {
            nuevas = [...seleccionadas, subcategoria];
        }

        onFiltrar(nuevas);

        if (cerrarAlSeleccionar) {
            setCategoriaAbierta(null);
        }
    };

    return {
        categoriaAbierta,
        toggleCategoria,
        toggleSubcategoria
    };
};
