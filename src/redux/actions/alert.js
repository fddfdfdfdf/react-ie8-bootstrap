/*action*/

export const ALERTQUIT = "alert/ALERTQUIT";
export const ALERTHIDE = "alert/ALERTHIDE";
export const ALERTSHOW = "alert/ALERTSHOW";

export function alerquit(text,status) {
    return {
        type: ALERTQUIT,
        text: text,
        status :status
    }
}

export function alerthide(text,status) {
    return {
        type: ALERTHIDE,
        text: text,
        status :status
    }
}

export function alertshow(text,status) {

    return {
        type: ALERTSHOW,
        text: text,
        status :status
    }
}