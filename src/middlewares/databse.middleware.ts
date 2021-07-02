import {Request, Response, NextFunction} from 'express';
import {db} from '../database';

export function dbMiddleware(req: Request, _res: Response, next: NextFunction): void {
    req.db = db;
    next();
}