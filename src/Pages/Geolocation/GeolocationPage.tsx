import { Geolocation, Position } from '@capacitor/geolocation';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function GeolocationPage() {

    const [position, setPosition] = useState<Position | null>(null);

    return (<div>
        <Button variant='contained' onClick={() => Geolocation.getCurrentPosition().then(setPosition)}>Get Location</Button>
        {
            position !== null && <div>
                <iframe
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBDAPjPTq-7yXjuHWQb23HobhsPC9nOdGM&q=${position.coords.latitude},${position.coords.longitude}`}>
                </iframe>
            </div>
        }
    </div>);
}