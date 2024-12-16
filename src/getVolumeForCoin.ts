export async function getVolumeDataForCoin(ticker: string, date: string): Promise<number> {

    process.stdout.write("Getting data for " + date + "...");

    const baseUrl = 'https://api.coingecko.com/api/v3/coins';
    const url = `${baseUrl}/${ticker}/history?date=${date}&localization=usd`;

    const options = {
        method: 'GET', headers: {
            accept: 'application/json',
        }
    };

    return fetch(url, options as any)
        .then(res => res.json())
        .then(json => {
            // console.log(json) // nice for testing new coins
            console.log(" ✅ ");
            return json["market_data"]["total_volume"]["usd"]
        })
        .catch(err => console.error(err));

};