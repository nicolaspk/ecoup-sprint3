
```markdown
# ECOUP - Gamificação Sustentável para SoulUp

## 📝 Título e Descrição do Projeto
O **ECOUP** é uma aplicação Single Page Application (SPA) desenvolvida para a plataforma SoulUp, focada em resolver a queda de engajamento dos usuários através da **Gamificação Sustentável**. A solução simula a validação de atitudes ecológicas reais enviadas pelo usuário, convertendo-as através de análise em Pontos Ecoa (de 0 a 100). Estes pontos geram benefícios reais e escaláveis, como subsídios na conta de energia elétrica, criando uma mecânica de retenção forte e duradoura.


---


## 🚀 Tecnologias Utilizadas
O projeto foi desenvolvido seguindo estritamente as tecnologias e bibliotecas exigidas para a Sprint 03 do Front-End Design Engineering:
* **React (`react`, `react-dom`)**: Biblioteca principal para construção de interfaces e componentização.
* **Vite (`vite`)**: Bundler e ambiente de desenvolvimento local de altíssima performance.
* **TypeScript (`typescript`)**: Utilizado para tipagem estática e segurança do código.
* **Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`)**: Framework utilitário utilizado para 100% da estilização e responsividade (Mobile-First, Tablet, Desktop), substituindo arquivos CSS externos.
* **React Router DOM (`react-router-dom`)**: Gerenciamento de navegação dinâmica via `createBrowserRouter` e `Outlet` para funcionamento em SPA sem recarregamento de página.
* **React Hook Form (`react-hook-form`)**: Biblioteca para gerenciamento de estado e validação nativa de formulários (aplicada na página de Contato).

---

## 📁 Estrutura de Pastas do Projeto
A arquitetura foi organizada separando rotas e componentes reutilizáveis, seguindo o padrão oficial:
```text
my-app/
├── public/
│   └── img/                 # Imagens estáticas, fotos dos integrantes e ícones
├── src/
│   ├── components/          # Componentes isolados e reutilizáveis
│   │   ├── Button.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── MemberCard.tsx
│   ├── pages/               # Componentes de páginas roteáveis
│   │   ├── Contato.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Faq.tsx
│   │   ├── Home.tsx
│   │   ├── Integrantes.tsx
│   │   ├── Simulador.tsx
│   │   └── Sobre.tsx
│   ├── App.tsx              # Componente de Layout base (Injeta Header, Footer e Outlet)
│   ├── main.tsx             # Ponto de entrada e configuração do roteador central
│   └── index.css            # Arquivo CSS global (contendo apenas a injeção do Tailwind)
├── package.json             # Dependências e scripts do projeto
├── tsconfig.json            # Configurações do compilador TypeScript
└── vite.config.ts           # Configurações do build e plugins do Vite + Tailwind


```

---

## ⚙️ Como Usar (Instalação e Execução)

1. Clone o repositório utilizando o Git:
Siga os passos abaixo para rodar a aplicação localmente:

```bash
git clone [https://github.com/nicolaspk/ecoup-gamificacao-sprint3.git](https://github.com/nicolaspk/ecoup-gamificacao-sprint3.git)

```


2. **Acesse a pasta do projeto:**
```bash
cd my-app

```

3. Instale todas as dependências necessárias listadas acima (este comando gerará a pasta `node_modules` localmente):

3. **Instale as dependências:**
```bash
npm install

```


4. **Execute o servidor de desenvolvimento:**
```bash
npm run dev

```

5. **Acesso:** Abra o navegador na URL indicada no terminal (geralmente `http://localhost:5173/`).

* **Link do repositório no GitHub:** [https://github.com/nicolaspk/ecoup-gamificacao-sprint3](https://www.google.com/search?q=https://github.com/nicolaspk/ecoup-gamificacao-sprint3)
* **Link do vídeo no YouTube:** [INSERIR LINK DO VÍDEO AQUI]

---

## 🖼️ Imagens e Ícones do Projeto

A interface conta com iconografia nativa e imagens responsivas localizadas na pasta `/public/img/`. Destaque para:

* **Maria Eduarda Escandor** (RM: 568216) - Turma 1TDSPO
* **Dashboard Executivo (`dashboard.png`)**: Painel de análise de dados com métricas reais interativas.
* **Simulador da Jornada (`interacao-simulador.png`)**: Protótipo que ilustra o envio de evidências e o cálculo automático dos Pontos Ecoa via IA.

---

## 👥 Autores e Créditos (Integrantes do Grupo)

Equipe responsável pelo desenvolvimento:


* **Maria Eduarda Escandor**
* RM: 568216 | Turma: 1TDSPO
* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/maria-eduarda-escandor-5b1587359/) | [GitHub](https://www.google.com/search?q=https://github.com/mariabatistaescandor-gif)
* Foto: `/public/img/foto-maria1.jpeg`


* **Erick Menezes**
* RM: 570325 | Turma: 1TDSPF
* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/erick-menezes-b53009232/) | [GitHub](https://www.google.com/search?q=https://github.com/Erick488-maker)
* Foto: `/public/img/foto-erick.jpeg`


* **Mateus**
* RM:  | Turma: 
* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/katerine-hildebrand-8928752a3/) | [GitHub](https://www.google.com/search?q=https://github.com/katpeaga)
* Foto: `/public/img/foto-.jpeg`


* **Maria Eduarda Lopes de Lima**
* RM: 572425 | Turma: 1TDSPO
* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/maria-eduarda-lopes-de-lima-1291b6289/) | [GitHub](https://www.google.com/search?q=https://github.com/mariaeduardaalima)
* Foto: `/public/img/foto-maria2.png`


* **Nicolas Sousa**
* RM: 574141 | Turma: 1TDSPH
* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/nicolas-sousaa/) | [GitHub](https://www.google.com/search?q=https://github.com/nicolaspk)
* Foto: `/public/img/foto-nicolas.jpg`



---

## 📞 Contato

Dúvidas ou suporte sobre a implementação da Gamificação Sustentável:

* **E-mail Oficial da Equipe:** materiafiap@gmail.com