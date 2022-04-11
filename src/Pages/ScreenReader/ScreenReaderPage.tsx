import { ScreenReader } from '@capacitor/screen-reader';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import "./ScreenReaderPage.scss";

export default function ScreenReaderPage() {

    const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);
    const [message, setMessage] = useState("Beep boop");

    useEffect(() => {
        const screenReaderListener = ScreenReader.addListener('stateChange', ({ value }) => setScreenReaderEnabled(value));

        return () => {
            screenReaderListener.remove();
        }
    }, [])


    return (<div className='screen-reader-page'>
        {
            screenReaderEnabled
                ? <>
                    <TextField label="Message" value={message} onChange={event => setMessage(event.target.value)} />
                    <Button variant='contained' onClick={() => ScreenReader.speak({ value: message })}>Read</Button>
                </>
                : <p>Screen reader is not enabled</p>
        }
    </div>);
}