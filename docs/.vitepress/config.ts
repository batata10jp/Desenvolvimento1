import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Iwood', link: '/iwood.md' },
          { text: 'Descrição do projeto', link: '/iwood2.md' },
          { text: 'FUncionalidades', link: '/Iwood3.md' },
          { text: 'Casos de uso', link: '/Iwood4.md' },
          { text: 'Deiagramas de classe', link: '/Iwood5.md' },
          { text: 'Protótipos de tela', link: '/Iwood6.md' },
          { text: 'Cronograma', link: '/Iwood7.md' },
          { text: 'Riscos e Mitigação', link: '/Iwood8.md' },
          { text: 'Custos e Orçamento', link: '/Iwood9.md' },
          { text: 'Considerações finais', link: '/iwood10.md' },
          // ...
        ],
      },
    ],
  },
});
