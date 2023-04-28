import { global as globalThis } from '@junk-temporary-prototypes/global';

export default {
  component: globalThis.Components.Button,
  tags: ['autodocs'],
  args: { label: 'Rendered in iframe' },
  parameters: {
    chromatic: { disable: true },
    docs: {
      story: {
        iframeHeight: '120px',
        inline: true,
      },
    },
  },
};

export const Basic = {};
