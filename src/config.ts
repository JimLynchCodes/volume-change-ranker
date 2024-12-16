
/**
 *   Rules
 * 
 *   1) Dates should always be in this format: dd-mm-yyy
 * 
 *   2) RECENT_DATE should be later in time than EARLIER_DATE
 * 
 *   3) Add or remove tokens in the tokens list. All data comes from CoinGecko API
 */

export const RECENT_DATE = '16-12-2024';

export const EARLIER_DATE = '14-12-2024';

export const TOKENS: ReadonlyArray<string> = [
    "cardano",
    "chainlink",
    "cosmos",
    "litecoin",
    "book-of-meme",
    "goatseus-maximus",
    "optimism",
    "moo-deng",
    "polkadot",
    "dogecoin",
    "bitcoin",
    "ethereum",
    "bonk",
    "floki",
    "pepe",
    "peanut-the-squirrel",
    "helium",
    "the-sandbox",
    "shiba-inu",
    "ripple",
    "fantom",
    "popcat",
    "solana",
    "dogelon-mars",
    "stellar",
    "near",
    "sui",
]
