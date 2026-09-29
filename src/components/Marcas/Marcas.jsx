import "./Marcas.css";

export const Marcas = ({ marcas }) => {

    return (
        <section className="marcas">
            <h3>Nuestras marcas</h3>

            <div className="marcasContainer">

                {[...marcas, ...marcas].map((marca, index) => (
                    <div className="marca" key={index}>
                        <img
                            src={marca.logo}
                            alt={marca.nombre}
                            className="logosMarcas"
                        />
                    </div>
                ))}

            </div>

        </section>
    );

};