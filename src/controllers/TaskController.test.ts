import {setupSequelizeDbConnection} from "../db/db";
import request from 'supertest';
import {app} from '../server';
import {Sequelize} from "sequelize";
import {Task} from "../models/Task";

let sequelizeConnection: Sequelize;

beforeAll(async () => {
    sequelizeConnection = await setupSequelizeDbConnection();
})

describe('get tasks by amount', () => {

    it('should return 5 tasks', async () => {
        const resp = await request(app)
            .get('/tasks?quantity=5');
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).toHaveLength(5);
    })

    it('should complete a task', async () => {
        // Get a task
        const getTasksResp = await request(app)
            .get('/tasks?quantity=1');
        const task = getTasksResp.body[0];

        // Complete the task
        const editTaskResp = await request(app)
            .put('/tasks')
            .send({
                ...task,
                completed: true
            });
        expect(editTaskResp.statusCode).toEqual(200);
        expect(editTaskResp.body).toHaveProperty('uuid');

        // Verify the task was updated in the database
        const updatedTask = await Task.findOne({
            where: {
                uuid: task.uuid
            }
        });
        expect(updatedTask && updatedTask.get('completed')).toBeTruthy();
    })

})

afterAll(async () => {
    await sequelizeConnection.close();
})