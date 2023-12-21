let constId: string|undefined;

export const setId = (id:string|undefined) => {
    constId = id
}

export const getId = () => {
    return constId
}