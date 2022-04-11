import { LocalNotifications } from "@capacitor/local-notifications";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import './LocalNotificationsPage.scss';

export default function LocalNotificationPage() {

    const [hasNotificationPermission, setHasNotificationPermission] = useState(false);

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(
        () => {
            LocalNotifications.checkPermissions().then(checkPermissionResult => {
                setHasNotificationPermission(checkPermissionResult.display === "granted");
            });
        }, []
    );


    const requestPermission = () => {
        if (!hasNotificationPermission) {
            LocalNotifications.checkPermissions().then(checkPermissionResult => {
                if (checkPermissionResult.display === "prompt") {
                    LocalNotifications.requestPermissions().then(requestPermssionResult => setHasNotificationPermission(requestPermssionResult.display === "granted"));
                }
                else {
                    setHasNotificationPermission(checkPermissionResult.display === "granted");
                }
            });
        }
    };

    return (<>
        {
            hasNotificationPermission
                ? <div className="local-notifications-page">
                    <TextField label="Title" variant="outlined" onChange={(event) => setTitle(event.target.value)} value={title} />
                    <TextField label="Body" variant="outlined" onChange={(event) => setBody(event.target.value)} value={body} />
                    <Button variant="contained" onClick={() => {
                        setId(id + 1);
                        LocalNotifications.schedule({
                            notifications: [
                                { id: id, title: title, body: body }
                            ]
                        });
                    }}>Send Notification</Button>
                </div>
                : <Button onClick={requestPermission}>Request Permission</Button>
        }
    </>);
}