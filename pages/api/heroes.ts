import md5 from "md5";

export default async (req, res) => {
    const { query } = req
    const { page, query: queryString } = query;
    const publicKey = process.env.MARVEL_PUBLIC ?? "";
    const privateKey = process.env.MARVEL_PRIVATE ?? "";
    const limit = process.env.MARVEL_LIMIT ?? "10";
    const offset = Number(limit) * (Number(page) - 1);
    const timestamp = Number(new Date());
    const hash = md5(timestamp + privateKey + publicKey);
    const url =
        "https://gateway.marvel.com:443/v1/public/characters?" +
        `ts=${timestamp}&apikey=${publicKey}&hash=${hash}` +
        `&limit=${limit}&offset=${offset}` +
        (queryString ? `&nameStartsWith=${queryString}` : "")

    const response = await fetch(url);
    const {
        data: { results, total },
    } = await response.json();
    res.setHeader('Cache-Control', 's-maxage=60, state-while-revalidate')
    res.status(200).json({ results, pages: Math.ceil(total / Number(limit)) })

};
