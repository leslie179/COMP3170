function ArtistDetails({ artist }) {
    // props are the information that's being passed to your component
    return <div className="artist">
        <img src={artist.photo_url} className="artist-image" />
        <div className="artist-info">
            <h2>{artist.name}</h2> 
            <span>Country: {artist.country}</span>
            <span>Years active: {artist.years_active}</span>
        </div>
    </div>
}

export default ArtistDetails