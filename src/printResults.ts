import { CoinData } from "./types.js";


export function printResults(coinDataArray: CoinData[], recentDate: string, earlierDate: string) {
    console.log(" ")
    console.log("====")
    console.log(" ")
    console.log("Comparison of Volume on: " + recentDate + " to volume from: " + earlierDate);

    coinDataArray.sort((a, b) => b.percentDiff - a.percentDiff);

    console.table(coinDataArray);
}