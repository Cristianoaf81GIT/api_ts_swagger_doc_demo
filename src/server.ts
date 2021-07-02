import express, { Router, Express } from 'express';
import * as middlewares from './middlewares';

export class Server {

    private port:number = 3333;
    private app: Express = express();
    private appRouter: Router = null;
   
    constructor(port: number, routes: Router) {
        this.port = port;
        this.appRouter = routes;
        this.applyDefaultMiddlewares();
    }

    private applyDefaultMiddlewares(): void {
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
        this.app.use(middlewares.dbMiddleware);
        this.app.use('/v1',this.appRouter);        
    }
    
    public Lift(): void {        
        this.app.listen(this.port,() => {
            console.log(`app running at: http://localhost:${this.port}/v1`);
        });
    }

    public get App(): Express {
        return this.app;
    }
}