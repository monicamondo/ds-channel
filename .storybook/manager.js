import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const channelTheme = create({
  base: 'light',
  brandTitle: 'Channel Design System',
  brandImage: 'assets/img/logo-channel_.png',
  brandTarget: '_self',
});

addons.setConfig({
  theme: channelTheme,
});
