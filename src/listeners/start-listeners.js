import {START_EVENT} from '../../data/constants.js';
import { startHandler } from '../handlers/start-handlers.js';

export const startListener = (element) => {
    element.addEventListener(START_EVENT, startHandler);
};