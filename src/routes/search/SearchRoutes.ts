import { Express, Request, Response } from 'express';
import {plainToClass} from 'class-transformer';
import { SearchServer } from '../../service/search-server';

const searchServer = new SearchServer();
/**
 * todo : send success response, send failure response
 * @param app
 */
export function register(app: Express) {
    app.post('/api/search/duplicate', (req: Request, res: Response) => {
        const url = req.body.url;
        const threshold = req.body.threshold;
        searchServer.findDuplicate(url)
        .then((result) => res.json({status: 'data', ...result}))
        .catch((err) => res.json({status: 'error', message : err.message}));
    });
}
