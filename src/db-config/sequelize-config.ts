import databaseConfig from "./db-config";
import { Sequelize, ModelStatic } from "sequelize";
import defineHouseInfo, {HouseInstance} from "../models/HouseInfo";

interface Database {
  // represents the Sequelize library itself and provides all the functionality 
  // for interacting with the database using the ORM
  sequelizeClass: typeof Sequelize;

  // specific instance of the Sequelize library that is
  // configured to connect to a specific database
  sequelizeInstance: Sequelize;

  houseInfo: ModelStatic<HouseInstance>;
}

// Initializing 

const sequelizeClass: Database["sequelizeClass"] = Sequelize;

const sequelizeInstance: Database["sequelizeInstance"] = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
  operatorsAliases: {},
  pool: {
    max: databaseConfig.pool.max,
    min: databaseConfig.pool.min,
    acquire: databaseConfig.pool.acquire,
    idle: databaseConfig.pool.idle
  }
});

const houseInfo = defineHouseInfo(sequelizeInstance);
  
const db: Database = {
  sequelizeClass,
  sequelizeInstance,
  houseInfo,
};

export default db;
  