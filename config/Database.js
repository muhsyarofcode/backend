import { Sequelize } from "sequelize";

const db = new Sequelize('DB_NAME','root','', {
    host: "localhost",
    dialect: "mysql"
})

export default db;