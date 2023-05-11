# SOFT (Kenzie Empresas)
Projeto de conclusão do Módulo 2 da Kenzie Academy.

## Sobre o projeto
O SOFT é uma plataforma versátil de gerenciamento de empresas, projetada para facilitar a administração de dados e proporcionar uma experiência personalizada aos usuários. Com recursos de cadastro, login e diferentes níveis de acesso, a plataforma oferece funcionalidades específicas para administradores e usuários.

O objetivo do projeto é criar uma plataforma onde usuários possam interagir com empresas cadastradas e com diferentes permissões de acesso.

## Demonstração
Você pode acessar o projeto através do link: https://kenzie-empresas-i0tr91h1w-winniebran.vercel.app/

## Como executar o projeto
Para executar o projeto localmente, siga as instruções abaixo:

1. Clone o repositório da API:

  ```bash
  git clone https://github.com/Winniebran/Kenzie-Empresas-API.git
  ```

2. Inicialize-a para conseguir acessar a página do projeto
  ```bash
  yarn dev
  ```
3. Explore as funcionalidades da página de e-commerce.

## Funcionalidades

### Público geral (Usuário não logado)
- Visualizar as empresas cadastradas.

### Usuário comum (logado)
- Visualizar e editar os próprios dados: Os usuários podem visualizar suas informações pessoais cadastradas, como nome, cargo e departamento, além de ter a possibilidade de realizar edições caso necessário.

- Visualizar os departamentos da empresa: Os usuários podem acessar a lista de departamentos da empresa em que estão vinculados, possibilitando uma melhor compreensão da estrutura organizacional.

- Visualizar outros funcionários do departamento: Os usuários têm a capacidade de visualizar informações sobre os colegas de trabalho dentro do mesmo departamento, facilitando a colaboração e comunicação interna.

- Fazer logout: Os usuários podem encerrar sua sessão na plataforma.

### Administrador (logado)
- Visualizar os setores disponíveis: Os administradores podem acessar a lista de setores cadastrados na plataforma, permitindo uma visão abrangente das áreas de atuação das empresas.

- Visualizar empresas cadastradas: Os administradores têm acesso a uma lista completa de empresas registradas na plataforma, podendo obter informações detalhadas sobre cada uma delas.

- Cadastrar novas empresas: Os administradores podem adicionar novas empresas ao sistema, fornecendo informações relevantes, como nome, descrição e outros detalhes específicos.

- Visualizar departamentos das empresas: Os administradores têm acesso aos departamentos de cada empresa, permitindo uma visualização organizada e detalhada da estrutura interna.

- Criar, editar ou deletar um departamento: Os administradores têm a capacidade de criar, editar ou excluir departamentos dentro das empresas cadastradas, possibilitando a personalização e atualização da estrutura organizacional.

- Visualizar todos os funcionários cadastrados: Os administradores têm acesso a uma lista completa de todos os funcionários registrados na plataforma, podendo visualizar informações como nome, cargo, departamento, entre outros.

- Admitir, editar ou demitir um funcionário: Os administradores têm o controle para admitir novos funcionários, editar as informações existentes ou demitir funcionários já cadastrados.

- Deletar funcionário do sistema: Os administradores podem remover um funcionário completamente do sistema, excluindo todas as informações relacionadas.

- Fazer logout: Os administradores podem encerrar sua sessão na plataforma.

#### Dados de acesso para o perfil de Administrador:
- E-mail: admin@mail.com
- Senha: admin

## Status do projeto
O projeto está em fase de refatoração, buscando melhorias e implementações adicionais.
