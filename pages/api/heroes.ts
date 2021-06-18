import { getMarvelKeyParams } from "../../utils/getMarvelKeyParams";

export default async (req, res) => {
    const { query } = req
    const { page, query: queryString } = query;
    const limit = process.env.MARVEL_LIMIT ?? "10";
    const offset = Number(limit) * (Number(page) - 1);
    const url =
        "https://gateway.marvel.com:443/v1/public/characters?"
        + `${getMarvelKeyParams()}&limit=${limit}&offset=${offset}` +
        (queryString ? `&nameStartsWith=${queryString}` : "")
    console.log(url, getMarvelKeyParams())

    const response = await fetch(url);
    const {
        data: { results, total },
    } = await response.json();
    res.setHeader('Cache-Control', 's-maxage=60, state-while-revalidate')
    res.status(200).json({ results, pages: Math.ceil(total / Number(limit)) })

};
