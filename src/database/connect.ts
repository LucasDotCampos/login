import { createConnection } from 'typeorm'

createConnection().then(() => console.log('conectou no banco com sucesso'))