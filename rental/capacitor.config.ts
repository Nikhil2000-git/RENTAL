
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.53d2af4bcd4f4183a52cb3ffc3af7293',
  appName: 'drone-spray-rentals-india',
  webDir: 'dist',
  server: {
    url: "https://53d2af4b-cd4f-4183-a52c-b3ffc3af7293.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
    }
  }
};

export default config;
