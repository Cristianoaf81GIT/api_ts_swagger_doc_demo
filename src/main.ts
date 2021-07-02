import { router } from './routes';
import { Server } from './server';

const server = new Server(3000,router);
server.Lift();