/**
 * Classe de acesso a dados de alunos.
 */

// Import das bibliotecas próprias
// Cria a conexão com o banco de dados utilizado pelo objeto 'sql'
const db = require("./dbconfig");

// Cria a classe de conexão com o banco de dados
const { sql } = require ('@vercel/postgres');

// Define a classe AlunoDAO 
class AlunoDAO {

    /**
     * Retorna uma lista com todos os alunos.
     * 
     * @returns uma lista.
     */
    getLista(){
        return sql`SELECT alunoId, nome, curso, cpf FROM aluno ORDER BY alunoId;`;
    }

    /**
     * Retorna um aluno pelo id.
     * 
     * @param {*} alunoId O id do aluno.
     * @returns Os dados do aluno.
     */
    getAluno(alunoId){
        return sql`SELECT alunoid, nome, curso, cpf FROM aluno WHERE alunoid = ${alunoId};`;
    }

    /**
     * Insere um novo aluno.
     * 
     * @param {*} alunoId O id do aluno.
     * @param {*} nome O nome do aluno.
     * @param {*} curso O curso do aluno.
     * @param {*} cpf O cpf do aluno.
     * @returns 
     */
    inserir(alunoId, nome, cpf){
        return sql`INSERT INTO aluno (alunoid, nome, curso, cpf) VALUES (${alunoId}, ${nome}, ${curso}, ${cpf});`;
    }

    /**
     * Altera os dados de um aluno pelo id.
     * 
     * @param {*} alunoId O id do aluno.
     * @param {*} nome O nome do aluno.
     * @param {*} curso O curso do aluno.
     * @param {*} cpf O cpf do aluno.
     * @returns 
     */
    alterar(alunoId, nome, cpf){
        return sql`UPDATE aluno SET nome = ${nome}, curso = ${curso}, cpf = ${cpf} WHERE alunoid = ${alunoId};`;
    }

    /**
     * Exclui um aluno pelo id.
     * 
     * @param {*} alunoId O id do aluno.
     * @returns 
     */
    excluir(alunoId){
        return sql`DELETE FROM aluno WHERE alunoid = ${alunoId};`;
    }
}

// Exporta o modelo
module.exports = AlunoDAO;