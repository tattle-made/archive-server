import { Express, Request, Response } from 'express';

/**
 * todo : send success response, send failure response
 * @param app
 */
export function register(app: Express) {
    app.post('/api/fact-check-story', (req: Request, res: Response) => {
        console.log(req.body);

        res.json({result: 'done'});
    });
}
