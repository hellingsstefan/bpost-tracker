import { useState } from 'react';

function TrackerForm(props) {
    const { onClick } = props;
    const [ barcode, setBarcode ] = useState('');
    const [ postal, setpostal ] = useState('');
    const tracker = {
        barcode,
        postal,
    };

    console.log('', { tracker });

    return (
        <div className="tracker-form">
            <input
                type="text"
                onChange={event => setBarcode(event.target.value)}
                name="Barcode" />
            <input
                type="text"
                onChange={event => setpostal(event.target.value)}
                name="Postal"
                autoComplete="postal-code" />
            <button
                onClick={() => onClick(tracker)}>
                Add tracker
            </button>
        </div>
    );
}

export default TrackerForm;
