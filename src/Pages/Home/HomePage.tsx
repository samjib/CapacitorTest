import { BatteryInfo, Device, DeviceInfo } from '@capacitor/device';
import { useEffect, useState } from 'react';

export default function HomePage() {

    const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
    const [batteryInfo, setBatteryInfo] = useState<BatteryInfo | null>(null);

    useEffect(() => {
        if (deviceInfo === null) {
            Device.getInfo().then(setDeviceInfo);
        }
    });

    useEffect(() => {
        if (batteryInfo === null) {
            Device.getBatteryInfo().then(setBatteryInfo);
        }
    });

    return (<div>
        {
            deviceInfo === null
                ? <div>Loading device info...</div>
                : <>
                    <div className='device-info-container'>
                        <p><strong>Running in an emulator?</strong> {deviceInfo.isVirtual ? 'Yes' : 'No'}</p>
                        <p><strong>Name:</strong> {deviceInfo.name}</p>
                        <p><strong>Manufacturer:</strong> {deviceInfo.manufacturer}</p>
                        <p><strong>Model:</strong> {deviceInfo.model}</p>
                        <p><strong>Memory usage (MB):</strong> {deviceInfo.memUsed ? Math.round(deviceInfo.memUsed / (1024 ^ 2)) : '???'}</p>
                        <p><strong>OS:</strong> {deviceInfo.operatingSystem}</p>
                        <p><strong>Platform:</strong> {deviceInfo.platform}</p>
                        <p><strong>Disk space free (MB):</strong> {deviceInfo.realDiskFree ? Math.round(deviceInfo.realDiskFree / (1024 ^ 2)) : '???'}</p>
                        <p><strong>Disk space total (MB):</strong> {deviceInfo.realDiskTotal ? Math.round(deviceInfo.realDiskTotal / (1024 ^ 2)) : '???'}</p>
                        <p><strong>Webview version:</strong> {deviceInfo.webViewVersion}</p>
                        {
                            batteryInfo && <>
                                <p><strong>Battery level:</strong> {batteryInfo.batteryLevel ? `${(Math.round(batteryInfo.batteryLevel * 100))}%` : '???'}</p>
                                <p><strong>On charge?</strong> {batteryInfo.isCharging !== undefined ? (batteryInfo.isCharging! ? 'Yes' : 'No') : '???'}</p>
                            </>
                        }
                    </div>
                </>
        }
    </div>);
}