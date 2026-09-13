# ECOUP - Sistema de Gamificação Sustentável para SoulUp

## 📝 Descrição do Projeto

O **ECOUP** é uma aplicação moderna desenvolvida para a plataforma SoulUp, focada em resolver a queda de engajamento dos usuários através da **Gamificação Sustentável**. A solução simula a validação de atitudes ecológicas reais enviadas pelo usuário, convertendo-as através de análise em **Pontos Ecoa** (de 0 a 100). Estes pontos geram benefícios reais e escaláveis, como subsídios na conta de energia elétrica. O projeto foi totalmente reestruturado como uma SPA (Single Page Application) profissional, garantindo alta performance, modularidade e responsividade total.

## 🛠️ Tecnologias e Bibliotecas Utilizadas

Para a construção e reestruturação desta aplicação, foram utilizadas estritamente as tecnologias exigidas para o desenvolvimento Front-End moderno:

* **React (`react`, `react-dom`):** Construção da interface baseada em componentes visuais reutilizáveis e gerenciamento de estado (`useState`, `useEffect`).
* **Vite (`vite`):** Ferramenta de build de altíssima performance para inicialização e execução do ambiente de desenvolvimento.
* **TypeScript (`typescript`):** Superset do JavaScript que adiciona tipagem estática rigorosa para todo o código, garantindo segurança na passagem de dados (Props) e na captura de formulários.
* **Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`):** Framework de estilização utilitária responsável por 100% da interface e responsividade (Mobile-First, Tablet, Desktop) sem o uso de arquivos CSS externos.
* **React Router DOM (`react-router-dom`):** Gerenciamento da navegação em modelo SPA através de rotas estáticas (`BrowserRouter`, `Routes`, `Route`, `Outlet`), impedindo o recarregamento da página.
* **React Hook Form (`react-hook-form`):** Biblioteca focada em performance para captura de dados, validação de campos obrigatórios e tratamento de mensagens de erro no formulário de contato.

## 📁 Estrutura de Pastas do Projeto

A arquitetura foi dividida de forma lógica para maximizar a reutilização e organização do código:

* `/public/img/`: Diretório que armazena todas as imagens estáticas, ilustrações e fotos dos integrantes utilizadas no sistema.


* `/src/components/`: Componentes visuais menores e reutilizáveis (Ex: `Header.tsx`, `Footer.tsx`, `Button.tsx`, `FeatureCard.tsx`, `MemberCard.tsx`).
* `/src/pages/`: Componentes que representam as páginas completas da aplicação (`Home.tsx`, `Sobre.tsx`, `Faq.tsx`, `Contato.tsx`, `Integrantes.tsx`, `Simulador.tsx`, `Dashboard.tsx`).
* `/src/`: Arquivos principais de configuração (`App.tsx` para Layout base e `main.tsx` abrigando o roteador `createBrowserRouter`).
* `vite.config.ts`: Configurações de compilação do Vite com o plugin do Tailwind embutido.
* `index.css`: Arquivo base contendo apenas a importação oficial (`@import "tailwindcss";`).

## 🚀 Como Executar Localmente

Siga as instruções abaixo para configurar e rodar o projeto na sua máquina:

1. Clone o repositório utilizando o Git:

```bash
git clone https://github.com/nicolaspk/ecoup-gamificacao-sprint3.git

```

2. Acesse o diretório principal do projeto (onde encontra-se o `package.json`):

```bash
cd my-app

```

3. Instale todas as dependências necessárias listadas acima (este comando gerará a pasta `node_modules` localmente):

```bash
npm install

```

4. Inicie o servidor local de desenvolvimento:

```bash
npm run dev

```

5. Acesse o link fornecido no terminal (geralmente `http://localhost:5173/`) através do seu navegador.

## 🔗 Links Oficiais

* **Repositório GitHub:** [https://github.com/nicolaspk/ecoup-gamificacao-sprint3.git](https://github.com/nicolaspk/ecoup-gamificacao-sprint3.git)

* **Vídeo Pitch/Demonstração (YouTube):** [INSERIR O LINK DO VÍDEO NO YOUTUBE AQUI ANTES DO ENVIO]

## 👥 Autores e Créditos

Este projeto foi idealizado e desenvolvido pela equipe de engenharia:

* **Maria Eduarda Escandor** (RM: 568216) - Turma 1TDSPO


* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/maria-eduarda-escandor-5b1587359/) | [GitHub](https://www.google.com/search?q=https://github.com/mariabatistaescandor-gif)



* **Erick Menezes** (RM: 570325) - Turma 1TDSPF


* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/erick-menezes-b53009232/) | [GitHub](https://www.google.com/search?q=https://github.com/Erick488-maker)



* **Katerine Hildebrand** (RM: 569809) - Turma 1TDSPF


* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/katerine-hildebrand-8928752a3/) | [GitHub](https://www.google.com/search?q=https://github.com/katpeaga)



* **Maria Eduarda Lopes de Lima** (RM: 572425) - Turma 1TDSPO


* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/maria-eduarda-lopes-de-lima-1291b6289/) | [GitHub](https://www.google.com/search?q=https://github.com/mariaeduardaalima)



* **Nicolas Sousa** (RM: 574141) - Turma 1TDSPH


* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/nicolas-sousaa/) | [GitHub](https://www.google.com/search?q=https://github.com/nicolaspk)




## 📞 Contato

Para dúvidas técnicas ou suporte comercial sobre a implementação da solução gamificada, entre em contato conosco diretamente pelo canal oficial:

* **E-mail:** materiafiap@gmail.com



## 🖼️ Imagens e Ícones do Projeto

Abaixo estão as capturas das principais telas do sistema, ilustrando o fluxo funcional da aplicação:

* **Dashboard Executivo:** Apresenta a análise de dados (usuários, eventos) provando a queda de engajamento da plataforma e detalha a solução em formato de grid. Conta com modais interativos (criados via `useState`).


* **Simulador da Jornada:** Protótipo interativo construído com `useState` e `useEffect` que ilustra passo a passo a escolha da ação sustentável, a análise pela IA e o acúmulo dos Pontos Ecoa com validação de dados em tela.