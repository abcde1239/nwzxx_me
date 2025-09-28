import { defineConfig } from 'unocss';

export default defineConfig({
    // ...UnoCSS options

    theme: {
        fontFamily: {
            pixel: "'Press Start 2P', cursive",
            baloo: "'Baloo 2', cursive",
            luckiest: "'Luckiest Guy', cursive",
        },
    },
    shortcuts: {
        'font-pixel': 'font-pixel',
        'font-baloo': 'font-baloo',
        'font-luckiest': 'font-luckiest',
        'scrollbar-minimal': `
      overflow-x-hidden overflow-y-auto
      scrollbar-width-thin
      scrollbar-color-transparent
      transition-scrollbar-color-300
      scrollbar-custom
      scrollbar-color-gray-500/15
    `,
    },
});
