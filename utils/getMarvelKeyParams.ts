import md5 from "md5";

export const getMarvelKeyParams = (): string => {
    const publicKey = process.env.MARVEL_PUBLIC ?? "";
    const privateKey = process.env.MARVEL_PRIVATE ?? "";
    const timestamp = Number(new Date());
    const hash = md5(timestamp + privateKey + publicKey);
    return `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
}