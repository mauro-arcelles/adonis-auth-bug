import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'libsql',
  connections: {
    libsql: {
      client: 'libsql',
      connection: {
        filename: env.get('TURSO_DB_URL'),
      },
      pool: {
        min: 0,
        idleTimeoutMillis: 5 * 1000,
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
