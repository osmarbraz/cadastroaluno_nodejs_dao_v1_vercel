# Programa servidor API-REST do CRUD de Aluno utilizando Node.js e Vercel Postgres com DAO.

- O projeto foi desenvolvido no VSCodde deve ser chamado "aluno_nodejs_dao_v1_vercel".
- Programa cliente está no projeto "cadastroaluno_reactjs_v1_vercel" ou "cadastroaluno_reactjs_bootstrap_v1_vercel".
- Programa servidor web que cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e os métodos GET, POST, PUT e DELETE.
- A pasta src contêm os fontes do projeto.
- Os dados de configuração da integração com o banco de dados estão no arquivo src/dbconfig.js.
- A tabela aluno possui os campos alunoId, nome, curso e cpf.

- Dependências:    
    - express,
    - cors,
    - dotenv
    - @vercel/postgres.

- Execução:    
   <pre><code>npm start</code></pre>

- Arquivos em src:
    - index.js - Programa principal com o servidor Express.
    - alunodao.js - Classe de acesso aos dados do banco de dados.
    - alunorecurso.js - Contêm os métodos de acesso aos recursos do banco de dados.
    - dbconfig.js - Contêm as configurações e conexão com o banco de dados.
    - servicos.js - Contêm as rotas aos métodos de acesso ao banco de dados.

- Vercel   
    https://cadastroaluno-nodejs-dao-v1-vercel.vercel.app/    