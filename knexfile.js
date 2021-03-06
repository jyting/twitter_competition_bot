// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://postgres@localhost/twitter_bot',
	migrations: {
	  tableName: 'knex_migrations'
	}
  },

  test: {
    client: 'postgresql',
	connection: 'postgres://postgres@localhost/twitter_bot_test',
	migrations: {
	  tableName: 'knex_migrations'
	}
  },

  heroku_test: {
    client: 'postgresql',
    connection: 'postgres://scqygvouxbqauu:UiY4xLbT5yoG5DkVJVvDmvvzWn@ec2-107-20-148-211.compute-1.amazonaws.com:5432/dfej6b7lbiclln',
    migrations: {
      tableName: 'knex_migrations'
    },
	ssl: true
  },

  heroku: {
    client: 'postgresql',
    connection: 'postgres://muorgdpkcznrjr:K6HQFMGamF9IrZZ1US-sCJFw6j@ec2-107-20-136-89.compute-1.amazonaws.com:5432/d8i70c6n902tqj',
    migrations: {
      tableName: 'knex_migrations'
    },
	ssl: true
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
