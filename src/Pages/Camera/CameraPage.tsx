import { Camera, CameraResultType, Photo } from "@capacitor/camera";
import { Button } from "@mui/material";
import { useState } from "react";

export default function CameraPage() {

    const [photo, setPhoto] = useState<Photo | null>(null);

    return (<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button variant="contained" onClick={async () => {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            });
            setPhoto(image);
        }}>
            Take or select a photo!
        </Button>
        {
            photo && <div>
                <p>Format: {photo.format}</p>
                <p>URI: {photo.webPath}</p>
                <img style={{ display: "block", width: "auto", height: "25%" }} src={photo.webPath} />
            </div>
        }
    </div>);
}

