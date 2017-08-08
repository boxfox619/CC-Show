export const TEXT = 'TEXT';
export const VIDEO = 'VIDEO';
export const SHAPE = 'SHAPE';

export function text() {
    return {
        type: TEXT,
        width,
        height,
        x,
        y,
        angle
    }
}

export function video() {
    return {
        type: VEDIO,
        width,
        height,
        x,
        y,
        angle
    }
}

export function shape() {
    return {
        type: SHAPE,
        width,
        height,
        x,
        y,
        angle
    }
}