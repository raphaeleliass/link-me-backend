<div align="center">

# Link-Me

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stars](https://img.shields.io/github/stars/seu-usuario/link-me?style=social)](https://github.com/raphaeleliass/link-me-backend/stargazers)

<em style="display: block; margin: 1rem auto; max-width: 600px; color: #666">
Uma aplicação para gerenciamento de links pessoais. Permite que usuários criem, organizem e gerenciem seus links favoritos em um único lugar.
</em>

</div>

---

<p style="font-size: 1.6rem; margin-top: 4rem">🔧 Pré-requisitos</p>

- Node.js (v16+)
- PostgreSQL
- pnpm (v10.9.0+)

<p style="font-size: 1.6rem; margin-top: 4rem">⚙️ Instalação</p>

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/link-me.git

# Navegue até o diretório
cd link-me

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
# Crie um arquivo .env com o seguinte conteúdo:
# DATABASE_URL="postgresql://username:password@localhost:5432/linkme?schema=public"

# Execute a migração do banco de dados
pnpm prisma migrate dev
```

> 🎉 **Pronto para começar!**

---

<p style="font-size: 1.6rem; margin-top: 4rem">💡 Executando o Projeto</p>

```bash
pnpm dev
```

<p style="font-size: 1.6rem; margin-top: 4rem">✨ Exemplos de Uso</p>

```bash
# Inicie o servidor em modo de desenvolvimento
pnpm dev

# Compile o projeto
pnpm build

# Inicie o servidor em produção
pnpm start
```

---

<p style="font-size: 1.6rem; margin-top: 4rem">🌟 Principais Funcionalidades</p>

- Cadastro e autenticação de usuários
- Criação e gerenciamento de links pessoais
- Diferentes níveis de acesso (Admin/User)
- API RESTful segura com rate limiting

<p style="font-size: 1.6rem; margin-top: 4rem">📚 Links Úteis</p>

> [📚 Documentação da API](https://link-me-backend-nine.vercel.app/api-docs)

---

<p style="font-size: 1.6rem; margin-top: 4rem">📋 Padrão de Commits</p>

- `feat`: Nova feature
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `chore`: Alterações em configurações e tarefas de build
- `refactor`: Refatoração de código sem alteração de comportamento

---

<p style="font-size: 1.6rem; margin-top: 4rem">👥 Autores</p>

👤 [Raphael]

<p style="font-size: 1.6rem; margin-top: 4rem">🛠️ Tecnologias Utilizadas</p>

- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- JWT para autenticação
- Zod para validação

---
