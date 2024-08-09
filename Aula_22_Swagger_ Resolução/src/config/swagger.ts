import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import path from 'path';
import fs from 'fs';

const swaggerFile = path.join(__dirname, '../swagger.json');
const swaggerSpec = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'));

export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};