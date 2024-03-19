export const getRandomNumber = (a:number, b:number):number => {
    const minCeiled = Math.ceil(a);
    const maxFloored = Math.floor(b);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}