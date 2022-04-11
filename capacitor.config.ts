import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capacitortest.app',
  appName: 'CapacitorTest',
  webDir: 'build',
  bundledWebRuntime: false,
  server: { // only required during development on web and emulator
    "url": "http://10.0.2.2:3000",
    cleartext: true
  }
};

export default config;
