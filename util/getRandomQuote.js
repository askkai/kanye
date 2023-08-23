const { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_KEY } = process.env;

export async function getRandomQuote() {
    return { quote: "Hey I'm a quote from a util function!", NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_KEY}
}