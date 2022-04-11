import { Share } from "@capacitor/share";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function SharePage() {

    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        Share.canShare().then(result => setCanShare(result.value));
    }, []);


    return (<div>
        {
            canShare
                ? <Button variant="contained" onClick={() => Share.share({
                    title: 'This is a title',
                    text: 'This is the text',
                    url: 'https://reddit.com/',
                    dialogTitle: 'Share things!',
                })} >Share!</Button>
                : <p>Sharing is not enabled</p>
        }
    </div>);
}