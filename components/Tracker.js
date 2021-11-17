function getGoogleMapsImage(props) {
    const base = 'https://maps.googleapis.com/maps/api/staticmap'
    const {
        center,
        markers,
        zoom = '12',
        size = '640x400',
        api_key,
    } = props;

    // const markers_string = markers
    //     .map(marker => `${marker.lat},${marker.lng}`)
    //     .join('|');

    return `${base}?center=${center}&zoom=${zoom}&size=${size}&key=${api_key}`;
}

function Tracker(props) {
    const { barcode, postal } = props;

    return (
        <div className="tracker">
            <p><strong>{barcode}</strong></p>
            <p>{postal}</p>
            <img
                src={getGoogleMapsImage(props)}
                alt="" />
        </div>
    );
}

export default Tracker;
