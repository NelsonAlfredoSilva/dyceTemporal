import "./Buscador.css";

export const Buscador = ({ onBuscar }) => {

    return (

        <div className="buscadorContainer">

            <div className="buscadorInputContainer">

                <ion-icon
                    name="search-outline"
                    className="buscadorIcon"
                ></ion-icon>

                <input
                    type="text"
                    placeholder="Buscar componentes..."
                    onChange={(e) => onBuscar(e.target.value)}
                />

            </div>

        </div>

    );

}