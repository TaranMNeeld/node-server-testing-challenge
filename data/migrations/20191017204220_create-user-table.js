
exports.up = function (knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
        users.text('username', 16)
            .notNullable()
            .unique();
        users.text('password', 24)
            .notNullable();
        users.integer('age', 3)
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
