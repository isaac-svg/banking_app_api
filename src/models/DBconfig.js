const Pool = require("pg").Pool;

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
//   password:process.env.POSTGRES_PASSWORD,
//   host:process.env.POSTGRES_HOST,
//   user:process.env.POSTGRES_USER,
//   database:process.env.POSTGRES_DATABASE
// })
const pool = new Pool({
  password:process.env.POSTGRES_PASSWORD,
  host:process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  database:process.env.POSTGRES_DATABASE
})


module.exports =  pool




