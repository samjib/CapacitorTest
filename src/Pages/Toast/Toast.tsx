import { Toast } from '@capacitor/toast';
import { Button, FormControlLabel, Radio, RadioGroup, Slider, Switch, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import "./ToastPage.scss";

export default function ToastPage() {

    const [text, setText] = useState("");
    const [isLong, setIsLong] = useState(false);

    return (<div className='toast-page'>
        <TextField label="Toast Text" value={text} onChange={(event) => setText(event.target.value)} />
        <FormControlLabel label={isLong ? "Long" : "Short"} control={<Switch value={isLong} onChange={(event) => setIsLong(event.target.checked)} />} />
        <Button variant='contained' disabled={text.length === 0} onClick={() => Toast.show({ text: text, duration: isLong ? 'long' : 'short' })}>Show Toast</Button>
    </div>);
}