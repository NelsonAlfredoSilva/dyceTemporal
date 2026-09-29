import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import "./Carrusel.css"

export const Carrusel = ({imagenes}) => {
    // Inicalizando carrusel y su plugin
    const [emblaRef] = useEmblaCarousel({loop:true}, [Autoplay({delay:3000})])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {imagenes.map((url,index)=>(
                    <div className="embla__slide" key={index}>
                        <img src="{url}" alt={`Slide ${index+1}`} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}