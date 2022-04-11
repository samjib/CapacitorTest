
# Capacitor Test

A small test project in React with Typescript to demo some Capacitor functionality.

Current plugins:

- @capacitor/action-sheet
- @capacitor/camera
- @capacitor/device
- @capacitor/geolocation
- @capacitor/haptics
- @capacitor/local-notifications
- @capacitor/screen-reader
- @capacitor/share
- @capacitor/toast

## Run On Web

```npm
npm install
npm start
```

## Run On Android

_The first time you clone the repository, the project will need to be built in Android Studio, but after that you can just follow the [Live Realod](#with-live-reload) or [Offlne](#deploy-offline) instructions_

```npm
npm install
npm run open-android-studio
```

Build the project in Android Studio, then you can close Android Studio.

### With Live Reload

Set server URL for [live reload](#live-reload)

```npm
npm install
npm start
```

Leave the development server running, open a new terminal and run:

```npm
npm run debug-android
```

### Deploy Offline

Remove the server element in the [capacitor config file](./capacitor.config.ts) mentioned in the [live reload section](#live-reload).

```npm
npm run build
npm run debug-android
```

## Live Reload

Set the `server.url` property in the [capacitor config file](#live-reload) to the LAN IP of your machine, i.e. `10.0.0.20`. If you are using the Android emulator instead of a physical device, you can use the `10.0.2.2` host loopback address instead of having to maintain your real LAN IP.

```json
server: {
  "url": "http://10.0.2.2:3000",
  cleartext: true
}
```
