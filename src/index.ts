/**
 *      Add or remove tokens and tweak the amount of time it waits (to avoid rate limiting throttles
 */

const timeStepMs = 30_000

const recentDate = '16-12-2024';

const earlierDate = '14-12-2024';

const tokens = [
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

/**
 * 
 *  Don't edit below here!
 * 
 */

type CoinData = {
    token: string,
    readableChange: string,
    percentDiff: number,
}

async function main() {

    console.log("Starting script...");

    const coinDataArray: CoinData[] = [];

    tokens.forEach(async (token, index) => {

        setTimeout(async () => {

            console.log("Calling for " + token + "... ");

            const volumeRecentData = await getVolumeDataForCoin(token, recentDate);  //dd-mm-yyy

            console.log("✅");

            if (volumeRecentData)

                setTimeout(async () => {

                    const volumeEarlierDate = await getVolumeDataForCoin(token, earlierDate);
                    console.log("✅");

                    const diff = volumeRecentData - volumeEarlierDate

                    const percentDiff = Math.floor(diff / volumeEarlierDate * 100)

                    let readableChange;
                    if (diff < 0) {
                        readableChange = "Lower by " + Math.abs(percentDiff) + "%";
                    }
                    else {
                        readableChange = "Higher by " + Math.abs(percentDiff) + "%";
                    }

                    coinDataArray.push({
                        token,
                        readableChange,
                        percentDiff,
                    })

                    const lastElement = index === (tokens.length - 1);

                    if (lastElement) {

                        console.log(" ")
                        console.log("====")
                        console.log(" ")
                        console.log("Comparison of Volume on: " + recentDate + " to volume from: " + earlierDate);

                        coinDataArray.sort((a, b) => a.percentDiff - b.percentDiff);

                        console.table(coinDataArray);

                    }

                }, timeStepMs / 2);
        }, index * timeStepMs);
    })
}

async function getVolumeDataForCoin(ticker: string, date: string): Promise<number> {

    console.log("Getting data for " + date + "...");

    const baseUrl = 'https://api.coingecko.com/api/v3/coins';
    const url = `${baseUrl}/${ticker}/history?date=${date}&localization=usd`;

    const options = {
        method: 'GET', headers: {
            accept: 'application/json',
            // 'x-cg-pro-api-key': process.env.GECKO_KEY
        }
    };

    return fetch(url, options as any)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json["market_data"]["total_volume"]["usd"]
        })
        .catch(err => console.error(err));

};

main()