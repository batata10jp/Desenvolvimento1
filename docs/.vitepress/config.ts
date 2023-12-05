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
          { text: 'FUncionalidades', link: '/iwood3.md' },
          { text: 'Casos de uso', link: '/iwood4.md' },
          { text: 'Deiagramas de classe', link: '/iwood5.md' },
          { text: 'Protótipos de tela', link: '/iwood6.md' },
          { text: 'Cronograma', link: '/iwood7.md' },
          { text: 'Riscos e Mitigação', link: '/iwood8.md' },
          { text: 'Custos e Orçamento', link: '/iwood9.md' },
          { text: 'Considerações finais', link: '/iwood10.md' },
          // ...
        ],
      },
    ],
  },
});
