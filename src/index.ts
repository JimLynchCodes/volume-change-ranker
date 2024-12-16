import { EARLIER_DATE, RECENT_DATE, TOKENS } from "./config.js";
import { getVolumeDataForCoin } from "./getVolumeForCoin.js";
import { printResults } from "./printResults.js";
import { CoinData } from "./types.js";

const timeStepMs = 30_000

async function main() {

    console.log("Starting script...");

    const coinDataArray: CoinData[] = [];

    TOKENS.forEach(async (token, index) => {

        setTimeout(async () => {

            console.log("Calling for " + token + "... ");

            const volumeRecentData = await getVolumeDataForCoin(token, RECENT_DATE);

            if (volumeRecentData)

                setTimeout(async () => {

                    const volumeEarlierDate = await getVolumeDataForCoin(token, EARLIER_DATE);

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

                    const lastElement = index === (TOKENS.length - 1);

                    if (lastElement)
                        printResults(coinDataArray, RECENT_DATE, EARLIER_DATE);

                }, timeStepMs / 2);
        }, index * timeStepMs);
    })
}

main()