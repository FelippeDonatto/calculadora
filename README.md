<div align="center">
  <img src="https://user-images.githubusercontent.com/7221671/228865434-48fb40fe-58f8-49b1-8a7b-0627b1846165.png" width="150" />
</div>

<h2 align="center"> Calculadora - Desafio 4 - #bora codar Rocketseat</h2>

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/7221671/232148155-fb09436c-afa7-49ff-ae37-508839c62e9d.png" width="1920" />
</div>

<h1>Bora Codar - Calculadora</h1>

<p align="center">Desenvolvi essa aplicação utilizando como base o modelo sugerido no evento da Rockeseat #boraCodar. Foi utilizadas as tecnologias como NEXT, Tailwind.</p>

<h2>Referência</h2>

- [Template Bora Codar](https://www.figma.com/community/file/1202607074523509182/%23boraCodar---Desafio-5)
- [GitHub BoraCoadar](https://github.com/maykbrito/boracodar)

<h2>Licença</h2>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

<h2>Documentação de cores</h2>

| Cor        | Hexadecimal                                                      |
| ---------- | ---------------------------------------------------------------- |
| Violet 700 | ![#462878](https://via.placeholder.com/10/462878?text=+) #462878 |
| Violet 600 | ![#975DFA](https://via.placeholder.com/10/975DFA?text=+) #975DFA |
| Violet 500 | ![#807ECE](https://via.placeholder.com/10/807ECE?text=+) #807ECE |
| Violet 400 | ![#8E7ECE](https://via.placeholder.com/10/8E7ECE?text=+) #8E7ECE |

<h2>Instalação</h2>

Instale Card Produto com npm

_Para instalar as dependencias_

```bash
  npm intall
```

_Para rodar o projeto_

```bash
  npm run dev
```

<h2>Tecnologias utilizadas</h2>

_Instalação do Tailwind para Next_

```bash
  npm install -D tailwindcss postcss autoprefixer
```

```bash
  npx tailwindcss init -p
```

_Adicionar ao arquivo tailwind.config.js_

```bash

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      violet: {
        700: '#462878',
        600: '#975DFA',
        500: '#807ECE',
        400: '#8E7ECE'
      },

      gray: {
        900: '#2D2A37',
        500: '#6B6B6B',
        100: '#EBEBEB'
      },

      white: '#ffffff',
      black: '#000000'
    },
    extend: {}
  },
  plugins: []
}


```

_Adicione ao seu CSS global_

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
