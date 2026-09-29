export const MapsLink = ({direccion}) => {
    const mapsUrl = `https://google.com/maps/place/${encodeURIComponent(direccion)}`
    console.log(mapsUrl)
    return (
        <div>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">{direccion}</a>
        </div>
    )    
}