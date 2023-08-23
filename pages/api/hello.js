import { getRandomQuote } from '../../util/getRandomQuote'

export default async function handler(req, res) {
    const randomQuote = await getRandomQuote()
    res.status(200).json(randomQuote)
  }