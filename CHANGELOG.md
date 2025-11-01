# 🧾 Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.  
O formato é baseado em **[Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)**  
e este projeto adere ao **Versionamento Semântico**.

---

## [1.0.0] - 2025-10-31

### 🚀 Versão inicial
Versão inicial do **portfólio pessoal**.  
Esta é a **primeira versão estável**, apresentando todas as seções principais e integração completa com o backend **Supabase**.

---

### ✨ Adicionado

#### 🧱 Estrutura do Projeto
- Projeto inicializado como **SPA (Single Page Application)** usando **Vite**, **React 18** e **TypeScript**.  
- Configuração de estilização híbrida com **styled-components** (para componentização e theming) e **Tailwind CSS** (para classes utilitárias).  
- Criação de **tema de design customizado** (`src/styles/theme.ts`) e **estilos globais** (`src/styles/GlobalStyles.ts`).  
- Configuração de **linting** com **ESLint** e **TypeScript-ESLint**.  
- Estrutura de pastas organizada em `components`, `services` e `styles`.  

---

#### 🧩 Componentes de UI e Seções
- **Navbar** fixa, responsiva e com navegação *smooth-scroll*.  
- **Hero Section** com título, subtítulo e links para redes sociais (GitHub, LinkedIn, Email).  
- **About Section (Sobre Mim)** com biografia e foto.  
- **Projects Section** com layout em grade para exibição dos trabalhos.  
- **TechStack Section** listando as principais tecnologias utilizadas.  
- **Resume Section (Currículo)** com layout de linha do tempo para **Experiência** e **Formação**.  
- **Contact Section** com formulário funcional.  
- **Footer** com informações de copyright.  
- **ParallaxBackground** para efeitos visuais animados.  
- Uso da biblioteca **lucide-react** para iconografia.  

---

#### 🗄️ Backend e Integração (Supabase)
- Configuração do cliente **Supabase** (`src/services/supabaseClient.ts`) para conexão com o banco de dados.  
- Integração dinâmica da seção **Projects**, buscando dados da tabela `projetos`.  
- Integração dinâmica da seção **Resume**, buscando dados das tabelas `experiencias` e `formacao`.  
- Integração do formulário **Contact**, enviando mensagens diretamente para a tabela `mensagens`.  
- Busca de dados de **configuração** (como URL do currículo) da tabela `configuracoes`.  
- Criação de scripts **SQL** para definição da estrutura do banco (`CREATE TABLE`) e políticas de segurança (**RLS**).  

---

#### 🧰 Gerenciamento de Conteúdo
- Criação de um **Painel Administrativo (CMS/CRM)** separado para gerenciar o conteúdo do portfólio  
  (Adicionar, Editar e Remover Projetos, etc.).  

---

#### 📚 Documentação
- Criação do **README.md** detalhado com visão geral do projeto, tecnologias e instruções de setup.  
- Adição de **LICENSE (MIT)**.  
- Criação deste arquivo **CHANGELOG.md**.  

---

📦 **Versão:** 1.0.0  
📅 **Data:** 31 de outubro de 2025  
👨‍💻 **Autor:** [Kauã Oliveira Gonçalves](https://github.com/Kauaog13)
