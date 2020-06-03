import Knex from 'knex';

export async function up(knex : Knex) {
    //criar tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsap').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longetude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
}

export async function down(knex : Knex) {
    //voltar atras (deletar tabela)
    return knex.schema.dropTable('point');
}