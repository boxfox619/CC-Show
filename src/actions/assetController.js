export const actionTypes = {
    MODIFY_WIDTH: 'MODIFY_WIDTH',
    MODIFY_HEIGHT: 'MODIFY_HEIGHT',
    MODIFY_X: 'MODIFY_X',
    MODIFY_Y: 'MODIFY_Y',
    MODIFY_ANGLE: 'MODIFY_ANGLE'
}

export function modifyWidth() {
    return {
        type: actionTypes.MODIFY_WIDTH,
        value
    }
}

export function modifyHeight() {
    return {
        type: actionTypes.MODIFY_HEIGHT,
        value
    }
}

export function modifyX() {
    return {
        type: actionTypes.MODIFY_X,
        value
    }
}

export function modifyY() {
    return {
        type: actionTypes.MODIFY_Y,
        value
    }
}

export function modifyAngle() {
    return {
        type: actionTypes.MODIFY_ANGLE,
        value
    }
}