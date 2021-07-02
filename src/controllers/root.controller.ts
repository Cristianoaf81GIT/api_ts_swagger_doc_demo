import { Request, Response } from 'express';


export function rootController(_req: Request, res: Response) {
    res.json({ version: '1.0' });
}