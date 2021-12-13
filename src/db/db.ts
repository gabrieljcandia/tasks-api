import { Sequelize } from 'sequelize';
import {init as initTask} from '../models/Task';

export const setupSequelizeDbConnection = async (): Promise<Sequelize> => {
    const sequelize = new Sequelize(
        process.env.DB_DATABASE as string,
        process.env.DB_USERNAME as string,
        process.env.DB_PASSWORD as string,
        {
            host: process.env.DB_HOST as string,
            dialect: "mysql",
            port: Number(process.env.DB_PORT),
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
    );
    await testConnection(sequelize);
    initModels(sequelize);
    return sequelize;
}

const testConnection = async (sequelize: Sequelize) => {
    try{
        await sequelize.authenticate();
        console.log(`Connection established successfully to the database ${process.env.DB_DATABASE}`);
    } catch (e){
        console.error(`Unable to connect to the database ${process.env.DB_DATABASE}`, e);
    }
}

const initModels = (sequelize: Sequelize) => {
    initTask(sequelize);
}