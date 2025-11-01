# 💼 [Portfólio Pessoal](https://oliveirak.vercel.app/) — Kauã Oliveira Gonçalves

## 🧩 Visão Geral
Este é o repositório do meu **portfólio pessoal**, desenvolvido como uma **SPA (Single Page Application)** moderna para demonstrar minhas habilidades, projetos e trajetória profissional.  

O site é **totalmente dinâmico**, buscando dados diretamente de um **banco de dados Supabase**, o que permite atualizar projetos, experiências e formações **sem precisar realizar novos deploys**.  

O site tem uma aplicação de **painel administrativo (CMS/CRM)** desenvolvido para gerenciar o conteúdo de um portfólio profissional. (ex: adicionar/remover algum projeto).
> Isso torna o site mais intuitivo para realizar o CRUD (ver, adicionar, editar e remover), Sem a necessidade de adicionar conteúdo pelo código ou pelo banco de dados.
<img width="408" height="336" alt="image" src="https://github.com/user-attachments/assets/f83f26c5-70b1-4ccf-bcab-7fbc71f8a47f" /> 
---

## 🚀 Sobre o Projeto
O portfólio foi criado para **centralizar informações sobre mim** como **Desenvolvedor Full Stack** e **Empreendedor Digital**.  

Ele é composto por seções principais:

- **Hero** → Introdução com links para GitHub, LinkedIn e Email.  
- **Sobre Mim** → Uma breve biografia sobre minha paixão por tecnologia e trajetória profissional.  
- **Projetos** → Grade dinâmica de projetos carregados do Supabase, com links para repositórios ou demos.  
- **Tecnologias** → Lista das stacks utilizadas (atualmente estática, mas integrada ao banco).  
- **Currículo** → Linha do tempo com experiências e formações, buscadas em tempo real do Supabase.  
- **Contato** → Formulário funcional que envia mensagens para o banco de dados Supabase.  

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| **Core** | React 18, TypeScript, Vite |
| **Estilização** | styled-components (tema customizado) + Tailwind CSS |
| **Backend & Banco de Dados** | Supabase (PostgreSQL + API REST + Auth) |
| **Ícones** | lucide-react |
| **Linting** | ESLint e TypeScript-ESLint |

---

## 📁 Estrutura de Pastas

portifolio-pessoal/  
├── src/  
│ ├── components/ # Componentes React (Hero, About, Projects, etc.)  
│ │ ├── About.tsx  
│ │ ├── Contact.tsx  
│ │ ├── Footer.tsx  
│ │ ├── Hero.tsx  
│ │ ├── Navbar.tsx  
│ │ ├── ParallaxBackground.tsx  
│ │ ├── Projects.tsx  
│ │ ├── Resume.tsx  
│ │ └── TechStack.tsx  
│ ├── services/ # Configuração do cliente Supabase  
│ │ └── supabaseClient.ts  
│ ├── styles/ # Estilos globais e tema  
│ │ ├── GlobalStyles.ts  
│ │ └── theme.ts  
│ ├── App.tsx # Componente principal que une todas as seções  
│ ├── main.tsx # Ponto de entrada do React  
│ └── index.css # Importação base do Tailwind  
├── .gitignore  
├── index.html # Template HTML principal  
├── package.json # Dependências do projeto  
├── tsconfig.json # Configuração do TypeScript  
└── vite.config.ts # Configuração do Vite  


---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Pré-requisitos
- Node.js (v18 ou superior)  
- NPM ou Yarn  
- Conta gratuita no [Supabase](https://supabase.com)  

---

### 2️⃣ Instalação
Clone o repositório:
```bash
git clone https://github.com/Kauaog13/portifolio-pessoal.git
cd portifolio-pessoal
```

Instale as dependências:
```bash
npm install
# ou
yarn install
```
### 3️⃣ Configuração do Banco (Supabase)

1. Crie um novo projeto no **painel do Supabase**.  
2. Vá até **SQL Editor** e execute o script SQL que cria as tabelas:
   - `projetos`
   - `experiencias`
   - `formacao`
   - `configuracoes`
   - `mensagens`
3. Execute também o **script de seed** (inserção inicial de dados).  
4. Ative as **políticas de segurança RLS** conforme o script fornecido anteriormente.  

---

### 4️⃣ Variáveis de Ambiente

No painel do Supabase, vá até **Project Settings → API** e copie:  
- `Project URL`  
- `anon public key`  

Na raiz do projeto, crie um arquivo chamado **`.env.local`** com o conteúdo:

```bash
VITE_SUPABASE_URL="SUA_URL_DO_SUPABASE_AQUI"
VITE_SUPABASE_ANON_KEY="SUA_CHAVE_ANON_PUBLICA_AQUI"
```

### 5️⃣ Rodando o Projeto
Após configurar tudo, execute:
```bash
npm run dev
```
O site estará disponível em:
👉 http://localhost:5173

---

## 👤 Autor

Kauã Oliveira Gonçalves

- GitHub: [Kauaog13](https://github.com/Kauaog13)
- LinkedIn: [Kauã Oliveira](https://www.linkedin.com/in/kau%C3%A3-oliveira-7a099b270/)
