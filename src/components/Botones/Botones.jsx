
import '../Botones/Botones.css';
export const Botones = ({icon , texto , onClick ,className})=>{

    return(
        <>
            <button className={`${"btn"} ${className || ''}`} onClick={onClick}>
                {texto}
                {icon && <ion-icon name={icon} className='styleIconBtns'></ion-icon>}
                </button>
        </>
    )
}