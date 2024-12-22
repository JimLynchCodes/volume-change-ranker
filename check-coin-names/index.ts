
function main() {
    const url = 'https://api.coingecko.com/api/v3/coins/list?status=active';
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json[100], json[111], json[112]))
        .catch(err => console.error(err));

}

main()