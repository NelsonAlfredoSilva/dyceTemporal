import './Cards.css';

export const Cards = ({titulo , texto , icon }) => {

    return (
        <>
            <div className="homeValorCard">
                <ion-icon name={icon} class="valorIcon"></ion-icon>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </>
    )
}