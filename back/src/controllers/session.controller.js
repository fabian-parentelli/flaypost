import * as sessionService from '../services/session.service.js';
import { CustomNotFound } from '../utils/custom-exceptions.utils.js';
import { useragent } from '../utils/useragent.utils.js';
import env from '../config/env.config.js';

const isDev = env.environment === 'development';

const postForm = async (req, res) => {
    const userAgent = await useragent(req.headers['user-agent'] || '');
    try {
        const result = await sessionService.postForm({ ...req.body }, userAgent);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CustomNotFound) return res.status(401).res.send(error.message);
        res.sendServerError(error.message);
    };
};

export { postForm };