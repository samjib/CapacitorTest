import { Button } from "@mui/material";
import { Haptics } from '@capacitor/haptics';
import { Capacitor } from "@capacitor/core";

export default function HapticPage() {
    return (<div>
        {
            Capacitor.getPlatform() === "web"
                ? <p>Cannot use haptics on web</p>
                : <Button variant="contained" onClick={() => Haptics.vibrate()}>Vibrate</Button>
        }
    </div>);
}