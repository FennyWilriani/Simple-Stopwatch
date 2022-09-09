// event types
export const START_EVENT = 'click';
export const STOP_EVENT = 'click';
export const RESET_EVENT = 'click';

// IDs
export const START_ID = 'Start';
export const STOP_ID = 'Stop';
export const RESET_ID = 'Reset';
export const MINUTES_ID = 'mainMinute';
export const SECONDS_ID = 'mainSecond';
export const MILLISECONDS_ID = 'millisecond';

export const [milliseconds,second,minute,] = [0,0,0];
export const timerRef = document.querySelector('.mainTime');
export const int = null;