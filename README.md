# Framework Express Pronto

Este projeto é um **framework pronto para reutilização**, criado para evitar a necessidade de configurar o "Express" do zero em novos projetos.

## Objetivo

Facilitar o desenvolvimento de aplicações Node.js, fornecendo uma base pré-configurada com o **Express**, já com suporte a algumas funcionalidades comuns, como **autenticação**, **validação de dados** e **conexão com banco de dados**.

## Como usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   ```

2. Instale as dependências com `npm install`.
3. Personalize conforme necessário para o seu projeto.

## Tecnologias

- Node.js
- Express

## Dependências

### Principais dependências:

- **@prisma/client**: Cliente para interagir com o banco de dados usando o Prisma.
- **bcryptjs**: Biblioteca para criptografar senhas de maneira segura.
- **cors**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens (CORS).
- **dayjs**: Manipulação e formatação de datas.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **express**: Framework web para Node.js, usado para criar servidores e rotas.
- **express-handlebars**: Motor de templates para renderização de HTML.
- **express-session**: Middleware para gerenciar sessões de usuários.
- **jsonwebtoken**: Biblioteca para trabalhar com JSON Web Tokens (JWT) para autenticação.
- **passport**: Middleware de autenticação, com suporte a várias estratégias de login.
- **passport-local**: Estratégia de autenticação local para o Passport, útil para login via email/senha.
- **yup**: Biblioteca para validação de dados, muito útil em formulários e validação de entrada.

### Dependências de desenvolvimento:

- **nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento, ao detectar mudanças nos arquivos.
- **prisma**: Ferramenta ORM (Object-Relational Mapping) para interação com o banco de dados de forma mais eficiente e segura.

## Uso do Prisma como ORM

Quando utilizar o **Prisma** como seu ORM, as pastas `models` e `assets` podem ser descartadas, pois o Prisma gerencia a estrutura do banco de dados e as operações de leitura/escrita de forma eficiente.

### O que você pode fazer:

- **Excluir** as pastas `models` e `assets`, pois elas não serão mais necessárias.
- **Criar suas migrations** e usar o **Prisma Client** para manipulação do banco de dados.

Com isso, você terá uma integração eficiente e simplificada para manipulação de dados no seu projeto.

## Imagem

### Exemplo

![Estrutura básica](/assets/Estrutura%20Básica.png)


## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
