import dotenv from 'dotenv';

console.log('API URL:', process.env.API_URL);

async function main() {

    // Load .env file
    dotenv.config();

    console.log("Starting script...");

    console.log('Geck Key:', process.env.GECKO_KEY);

    console.log("Script Fionished.");
}

main()