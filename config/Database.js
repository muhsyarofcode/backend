import { Sequelize } from "sequelize";

const db = new Sequelize('muhsyar11_auth','muhsyar11_auth','1234567890qwertyuiop', {
    host: "103.112.244.90",
    dialect: "mysql"
})

export default db;