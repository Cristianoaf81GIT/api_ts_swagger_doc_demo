import {Request, Response, NextFunction} from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader === undefined) {
        return res.sendStatus(401).send();
    }
    const token = authorizationHeader.split('Bearer ')[1];
    if (!token ) {
        return res.sendStatus(401).send();
    }

    const user = token;
    req.user = user;
    next();
}