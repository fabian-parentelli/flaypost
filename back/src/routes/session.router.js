import Router from './routes.js';
import * as sessionController from '../controllers/session.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class SessionRouter extends Router {
    init() {
        this.post('/form', ['PUBLIC'], passportEnum.NOTHING, sessionController.postForm);
        // this.post('/', ['PUBLIC'], passportEnum.NOTHING, sessionController.postSession);
    };
};