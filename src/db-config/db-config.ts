import { Dialect } from 'sequelize';

const databaseConfig = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "123",
    DB: "HouseInfo",
    dialect: "postgres" as Dialect,
    // used for Sequelize connection pool configuration
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

export default databaseConfig;