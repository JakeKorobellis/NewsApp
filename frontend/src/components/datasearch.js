const data = [
  {
    name: "Apple Inc.",
    id: "AAPL",
  },

  {
    name: "Amazon.com Inc.",
    id: "AMZN",
  },
  {
    name: "Alphabet Inc. (Google)",
    id: "GOOGL",
  },
  {
    name: "AMC Entertainment Holdings Inc",
    id: "AMC",
  },
  {
    name: "GameStop Corp",
    id: "GME",
  },
  {
    name: "Facebook Inc.",
    id: "FB",
  },
  {
    name: "Tesla Inc.",
    id: "TSLA",
  },
  {
    name: "Berkshire Hathaway Inc.",
    id: "BRK.A",
  },
  {
    name: "Johnson & Johnson",
    id: "JNJ",
  },
  {
    name: "JPMorgan Chase & Co.",
    id: "JPM",
  },
  {
    name: "Visa Inc.",
    id: "V",
  },
  {
    name: "Procter & Gamble Co.",
    id: "PG",
  },
  {
    name: "NVIDIA Corporation",
    id: "NVDA",
  },
  {
    name: "Walt Disney Company",
    id: "DIS",
  },
  {
    name: "Netflix Inc.",
    id: "NFLX",
  },
  {
    name: "Mastercard Incorporated",
    id: "MA",
  },
  {
    name: "Pfizer Inc.",
    id: "PFE",
  },
  {
    name: "AT&T Inc.",
    id: "T",
  },
  {
    name: "Coca-Cola Company",
    id: "KO",
  },
  {
    name: "McDonald's Corporation",
    id: "MCD",
  },
  {
    name: "Boeing Co.",
    id: "BA",
  },
  {
    name: "Home Depot Inc.",
    id: "HD",
  },
  {
    name: "Goldman Sachs Group Inc.",
    id: "GS",
  },
  {
    name: "IBM",
    id: "IBM",
  },
  {
    name: "Cisco Systems Inc.",
    id: "CSCO",
  },
  {
    name: "Verizon Communications Inc.",
    id: "VZ",
  },
  {
    name: "Chevron Corporation",
    id: "CVX",
  },
  {
    name: "Exxon Mobil Corporation",
    id: "XOM",
  },
  {
    name: "Intel Corporation",
    id: "INTC",
  },
  {
    name: "Adobe Inc.",
    id: "ADBE",
  },

  {
    name: "General Electric Company",
    id: "GE",
  },
  {
    name: "Walmart Inc.",
    id: "WMT",
  },
  {
    name: "Caterpillar Inc.",
    id: "CAT",
  },
  {
    name: "Oracle Corporation",
    id: "ORCL",
  },
  {
    name: "Bank of America Corporation",
    id: "BAC",
  },
  {
    name: "PepsiCo Inc.",
    id: "PEP",
  },
  {
    name: "3M Company",
    id: "MMM",
  },
  {
    name: "UnitedHealth Group Inc.",
    id: "UNH",
  },
  {
    name: "Honeywell International Inc.",
    id: "HON",
  },
  {
    name: "Amgen Inc.",
    id: "AMGN",
  },
  {
    name: "General Motors Company",
    id: "GM",
  },
  {
    name: "Nike Inc.",
    id: "NKE",
  },
  {
    name: "Merck & Co. Inc.",
    id: "MRK",
  },

  {
    name: "Adobe Inc.",
    id: "ADBE",
  },
  {
    name: "Salesforce.com Inc.",
    id: "CRM",
  },
  {
    name: "Microsoft Corporation",
    id: "MSFT",
  },

  {
    name: "PayPal Holdings Inc.",
    id: "PYPL",
  },
  {
    name: "Square Inc.",
    id: "SQ",
  },
  {
    name: "Uber Technologies Inc.",
    id: "UBER",
  },
  {
    name: "Lyft Inc.",
    id: "LYFT",
  },
  {
    name: "Airbnb Inc.",
    id: "ABNB",
  },
  {
    name: "Zoom Video Communications Inc.",
    id: "ZM",
  },
  {
    name: "Pinterest Inc.",
    id: "PINS",
  },
  {
    name: "Snap Inc.",
    id: "SNAP",
  },
  {
    name: "Roku Inc.",
    id: "ROKU",
  },
  {
    name: "Moderna Inc.",
    id: "MRNA",
  },
  {
    name: "DocuSign Inc.",
    id: "DOCU",
  },
  {
    name: "Peloton Interactive Inc.",
    id: "PTON",
  },
  {
    name: "Beyond Meat Inc.",
    id: "BYND",
  },
  {
    name: "DoorDash Inc.",
    id: "DASH",
  },
  {
    name: "Palantir Technologies Inc.",
    id: "PLTR",
  },
  {
    name: "Snowflake Inc.",
    id: "SNOW",
  },
  {
    name: "CrowdStrike Holdings Inc.",
    id: "CRWD",
  },
  {
    name: "Twilio Inc.",
    id: "TWLO",
  },
  {
    name: "Unity Software Inc.",
    id: "U",
  },
  {
    name: "Okta Inc.",
    id: "OKTA",
  },
  {
    name: "Bitcoin",
    id: "BTC",
    type: "Coin",
  },
  {
    name: "Ethereum",
    id: "ETH",
    type: "Coin",
  },

  {
    name: "USD Coin",
    id: "USDC",
    type: "Coin",
  },
  {
    name: "Tether",
    id: "USDT",
    type: "Coin",
  },
  {
    name: "Avalanche",
    id: "AVAX",
    type: "Coin",
  },
  {
    name: "Chainlink",
    id: "LINK",
    type: "Coin",
  },
  {
    name: "Litecoin",
    id: "LTC",
    type: "Coin",
  },
  {
    name: "Uniswap",
    id: "UNI",
    type: "Coin",
  },
  {
    name: "Tezos",
    id: "XTZ",
  },
  {
    name: "Aave",
    id: "AAVE",
    type: "Coin",
  },
  {
    name: "Bitcoin Cash",
    id: "BCH",
  },

  {
    name: "Maker",
    id: "MKR",
    type: "Coin",
  },
  {
    name: "Basic Attention Token",
    id: "BAT",
    type: "Coin",
  },
  {
    name: "Curve DAO Token",
    id: "CRV",
    type: "Coin",
  },
  {
    name: "The Graph",
    id: "GRT",
    type: "Coin",
  },

  {
    name: "SPDR S&P 500 ETF Trust",
    id: "SPY",
  },
  {
    name: "Invesco QQQ Trust",
    id: "QQQ",
  },
  {
    name: "iShares Russell 2000 ETF",
    id: "IWM",
  },
  {
    name: "Vanguard Total Stock Market ETF",
    id: "VTI",
  },
  {
    name: "Vanguard Total Bond Market ETF",
    id: "BND",
  },
  {
    name: "iShares MSCI Emerging Markets ETF",
    id: "EEM",
  },
  {
    name: "iShares iBoxx $ Investment Grade Corporate Bond ETF",
    id: "LQD",
  },
  {
    name: "SPDR Gold Trust",
    id: "GLD",
  },
  {
    name: "Vanguard FTSE Developed Markets ETF",
    id: "VEA",
  },
  {
    name: "Vanguard Real Estate ETF",
    id: "VNQ",
  },
];

export default data;
