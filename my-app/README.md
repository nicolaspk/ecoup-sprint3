

# ECOUP - Gamificação Sustentável para SoulUp
 
## 📝 Título e Descrição do Projeto
 
---
 
## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido seguindo estritamente as tecnologias e bibliotecas exigidas para a Sprint 03 do Front-End Design Engineering:

.

* **React (`react`, `react-dom`)**: Biblioteca principal para construção de interfaces, utilizando Hooks essenciais (`useState`, `useEffect`).

* **Vite (`vite`)**: Bundler e ambiente de desenvolvimento local de altíssima performance.

* **TypeScript (`typescript`)**: Utilizado para tipagem estática básica e segurança estrutural do código.

* **Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`)**: Framework utilitário utilizado para 100% da estilização e responsividade (Mobile-First, Tablet, Desktop), substituindo arquivos CSS externos.

* **React Router DOM (`react-router-dom`)**: Gerenciamento de navegação dinâmica via `createBrowserRouter` e `Outlet` para funcionamento em SPA sem recarregamento de página.

* **React Hook Form (`react-hook-form`)**: Biblioteca para gerenciamento de estado e validação nativa de formulários (aplicada na página de Contato).
 
---
 
## 📁 Estrutura de Pastas do Projeto

A arquitetura foi organizada separando rotas e componentes reutilizáveis, seguindo o padrão oficial da disciplina:
 
```text

my-app/

├── public/

│   └── img/                 # Imagens estáticas, fotos dos integrantes e ícones

├── src/

│   ├── components/          # Componentes isolados e reutilizáveis (UI)

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

│   │   ├── Recompensas.tsx  # Catálogo de subsídios

│   │   ├── Simulador.tsx

│   │   └── Sobre.tsx

│   ├── App.tsx              # Componente de Layout base (Injeta Header, Footer e Outlet)

│   ├── main.tsx             # Ponto de entrada e configuração do roteador central

│   └── index.css            # Arquivo CSS global (contendo apenas a injeção do Tailwind)

├── package.json             # Dependências e scripts do projeto

├── tsconfig.json            # Configurações do compilador TypeScript

└── vite.config.ts           # Configurações do build e plugins do Vite + Tailwind
 
 
⚙️ Como Usar (Instalação e Execução)

Siga os passos abaixo para rodar a aplicação localmente:
 


Clone o repositório:
 
Bash

git clone [https://github.com/nicolaspk/ecoup-gamificacao-sprint3.git](https://github.com/nicolaspk/ecoup-gamificacao-sprint3.git)

Acesse a pasta do projeto:


Bash

cd my-app

Instale as dependências:
 


Bash

npm install

Execute o servidor de desenvolvimento:
 


Bash

npm run dev

Acesso: Abra o navegador na URL indicada no terminal (geralmente http://localhost:5173/).
 
Link do repositório no GitHub: https://github.com/nicolaspk/ecoup-gamificacao-sprint3
 
Link do vídeo no YouTube: [INSERIR LINK DO VÍDEO AQUI]
 


🖼️ Imagens e Ícones do Projeto

A interface conta com iconografia nativa e imagens responsivas localizadas na pasta /public/img/. Destaque para:
 
Dashboard Executivo (dashboard.png): Painel de análise de dados com métricas interativas baseadas em useState.
 


Simulador da Jornada (interacao-simulador.png): Protótipo que ilustra o envio de evidências e o cálculo de Pontos Ecoa simulado via useEffect.


👥 Autores e Créditos (Integrantes do Grupo)

Equipe responsável pelo desenvolvimento:
 
Maria Eduarda Escandor
 
RM: 568216 | Turma: 1TDSPO
 
LinkedIn | GitHub
 
Erick Menezes
 
RM: 570325 | Turma: 1TDSPF
 


LinkedIn | GitHub
 
Katerine Hildebrand
 


RM: 569809 | Turma: 1TDSPF
 
LinkedIn | GitHub
 


Maria Eduarda Lopes de Lima
 
RM: 572425 | Turma: 1TDSPO
 
 
Nicolas Sousa
 
RM: 574141 | Turma: 1TDSPH
 
---
 
LinkedIn | GitHub
 
📞 Contato

Dúvidas ou suporte sobre a implementação da Gamificação Sustentável:
 
E-mail Oficial da Equipe: materiafiap@gmail.com
 