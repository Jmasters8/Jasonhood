const data = [
  {"ticker": "NIO", "name": "Nio"},
  {"ticker": "TSLA", "name": "Tesla"},
  {"ticker": "AAPL", "name": "Apple"},
  {"ticker": "MSFT", "name": "Microsoft"},
  {"ticker": "AMZN", "name": "Amazon"},
  {"ticker": "ZM", "name": "Zoom"},
  {"ticker": "HOOD", "name": "Robinhood Markets"},
  {"ticker": "GOOGL", "name": "Alphabet Class A"},
  {"ticker": "GOOG", "name": "Alphabet Class C"},
  {"ticker": "FB", "name": "Facebook"},
  {"ticker": "TSM", "name": "Taiwan Semiconductor Manufacturing"},
  {"ticker": "BABA", "name": "Alibaba"},
  {"ticker": "GM", "name": "General Motors"},
  {"ticker": "GME", "name": "GameStop"},
  {"ticker": "AMC", "name": "AMC Entertainment"},
  {"ticker": "ZTS", "name": "Zoetis"},
  {"ticker": "ABNB", "name": "Airbnb"},
  {"ticker": "TWTR", "name": "Twitter"},
  {"ticker": "HMC", "name": "Honda"},
  {"ticker": "SPOT", "name": "Spotify"},
  {"ticker": "FDX", "name": "FedEx"},
  {"ticker": "ROST", "name": "Ross"},
  {"ticker": "JPM", "name": "JPMorgan Chase"},
  {"ticker": "DOW", "name": "Dow"},
  {"ticker": "V", "name": "Visa"},
  {"ticker": "DASH", "name": "DoorDash"},
  {"ticker": "NOK", "name": "Nokia"},
  {"ticker": "RBLX", "name": "Roblox"},
  {"ticker": "KHC", "name": "Kraft Foods"},
  {"ticker": "BMWYY", "name": "BMW"},
  {"ticker": "BLNK", "name": "Blink Charging"},
  {"ticker": "FSR", "name": "Fisker"},
  {"ticker": "FLDM", "name": "Fluidigm"},
  {"ticker": "TNXP", "name": "Tonix Pharmaceuticals"},
  {"ticker": "ASXC", "name": "Asensus Surgical"},
  {"ticker": "BYDDY", "name": "BYD Company"},
  {"ticker": "IBIO", "name": "iBio"},
  {"ticker": "SLV", "name": "iShares Silver trust"},
  {"ticker": "EHTH", "name": "eHealth"},
  {"ticker": "SVM", "name": "Silvercorp Metals"},
  {"ticker": "EXPR", "name": "Express"},
  {"ticker": "CYRX", "name": "CryoPort"},
  {"ticker": "PLAY", "name": "Dave & Buster's"},
  {"ticker": "GNUS", "name": "Genius Brands"},
  {"ticker": "TLRY", "name": "Tilray"},
  {"ticker": "BMRN", "name": "BioMarin"},
  {"ticker": "NKLA", "name": "Nikola"},
  {"ticker": "BBBY", "name": "Bed Bath & Beyond"},
  {"ticker": "M", "name": "Macy's"},
  {"ticker": "UA", "name": "Under Armour"},
  {"ticker": "SNDL", "name": "Sundial Growers"},
  {"ticker": "ACB", "name": "Aurora Cannabis"},
  {"ticker": "ZOM", "name": "Zomedica"},
  {"ticker": "GPRO", "name": "GoPro"},
  {"ticker": "OGI", "name": "OrganiGram"},
  {"ticker": "NAKD", "name": "Naked Brand"},
  {"ticker": "BAC", "name": "Bank of America"},
  {"ticker": "CGC", "name": "Canopy Growth"},
  {"ticker": "FCEL", "name": "FuelCell Energy"},
  {"ticker": "SPCE", "name": "Virgin Galactic Holdings"},
  {"ticker": "IDEX", "name": "Ideanomics"},
  {"ticker": "NCLH", "name": "Norwegian Cruise Line"},
  {"ticker": "VOO", "name": "Vanguard S&P 500 ETF"},
  {"ticker": "SPY", "name": "SPDR S&P 500 ETF"},
  {"ticker": "ZNGA", "name": "Zynga"},
  {"ticker": "BB", "name": "Blackberry"},
  {"ticker": "PSEC", "name": "Prospect Capital"},
  {"ticker": "CRON", "name": "Cronos Group"},
  {"ticker": "OCGN", "name": "Ocugen"},
  {"ticker": "BNGO", "name": "Bionano Genomics"},
  {"ticker": "ARKK", "name": "ARK Innovation ETF"},
  {"ticker": "TXMD", "name": "TherapeuticsMD"},
  {"ticker": "MRO", "name": "Marathon Oil"},
  {"ticker": "RIOT", "name": "Riot Blockchain"},
  {"ticker": "HEXO", "name": "HEXO"},
  {"ticker": "JBLU", "name": "JetBlue Airways"},
  {"ticker": "CPRX", "name": "Catalyst Pharmaceuticals"},
  {"ticker": "RYCEY", "name": "Rolls-Royce"},
  {"ticker": "NNDM", "name": "Nano Dimension"},
  {"ticker": "ET", "name": "Energy Transfer"},
  {"ticker": "VTI", "name": "Vanguard Total Stock Market ETF"},
  {"ticker": "SOS", "name": "SOS Limited"},
  {"ticker": "CHPT", "name": "ChargePoint"},
  {"ticker": "MVIS", "name": "MicroVision"},
  {"ticker": "IVR", "name": "Invesco Mortgage Capital"},
  {"ticker": "NRZ", "name": "New Residential Invesment"},
  {"ticker": "SAVE", "name": "Spirit Airlines"},
  {"ticker": "SENS", "name": "Senseonics"},
  {"ticker": "GSAT", "name": "Globalstar"},
  {"ticker": "PENN", "name": "Penn National Gambling"},
  {"ticker": "INO", "name": "Inovio"},
  {"ticker": "GOOS", "name": "Canada Goose"},
  {"ticker": "SPPI", "name": "Spectrum Pharmaceuticals"},
  {"ticker": "EPIX", "name": "Essa Pharma"},
  {"ticker": "GH", "name": "Guardant Health"},
  {"ticker": "POSH", "name": "Poshmark"},
  {"ticker": "WOOF", "name": "Petco Health and Wellness"},
  {"ticker": "INPX", "name": "Inpixon"},
  {"ticker": "LU", "name": "Lufax"},
  {"ticker": "BLUE", "name": "Bluebird bio"},
  {"ticker": "WISH", "name": "ContextLogic"},
  {"ticker": "NOVA", "name": "Sunnova Energy"},
  {"ticker": "PAAS", "name": "Pan American Silver"},
  {"ticker": "OTLK", "name": "Outlook Therapeutics"},
  {"ticker": "ARPO", "name": "Aerpio Pharmaceuticals"},
  {"ticker": "LPCN", "name": "Lipocine"},
  {"ticker": "CRBP", "name": "Corbus Pharmaceuticals"},
  {"ticker": "OVID", "name": "Ovid Therapeutics"},
  {"ticker": "ACST", "name": "Acasti Pharma"},
  {"ticker": "TRCH", "name": "Torchlight Energy Resources"},
  {"ticker": "BMBL", "name": "Bumble"},
  {"ticker": "VXRT", "name": "Vaxart"},
  {"ticker": "JNJ", "name": "Johnson & Johnson"},
  {"ticker": "NVDA", "name": "NVIDIA"},
  {"ticker": "WMT", "name": "Walmart"},
  {"ticker": "KDP", "name": "Keurig Dr Pepper"},
  {"ticker": "PINS", "name": "Pinterest"},
  {"ticker": "SNAP", "name": "Snap"}, 
  {"ticker": "WBA", "name": "Walgreens"},
  {"ticker": "NDAQ", "name": "Nasdaq"},
  {"ticker": "UNH", "name": "UnitedHealth"},
  {"ticker": "TWLO", "name": "Twilio"},
  {"ticker": "WORK", "name": "Slack"},
  {"ticker": "F", "name": "Ford Motor"},
  {"ticker": "MA", "name": "Mastercard"},
  {"ticker": "HD", "name": "Home Depot"},
  {"ticker": "PG", "name": "Procter & Gamble"},
  {"ticker": "HSY", "name": "Hershey"},
  {"ticker": "DFS", "name": "Discover"},
  {"ticker": "DIS", "name": "Disney"},
  {"ticker": "EA", "name": "Electronic Artis"},
  {"ticker": "CMG", "name": "Chipotle"},
  {"ticker": "SRE", "name": "Sempra Energy"},
  {"ticker": "UBER", "name": "Uber"},
  {"ticker": "MAR", "name": "Mariott"},
  {"ticker": "LULU", "name": "Lululemon Athletica"},
  {"ticker": "PYPL", "name": "PayPal"},
  {"ticker": "ASML", "name": "ASML Holding"},
  {"ticker": "ZIP", "name": "ZipRecruiter"},
  {"ticker": "CMCSA", "name": "Comcast"},
  {"ticker": "XOM", "name": "Exxon Mobil"},
  {"ticker": "AZO", "name": "AutoZone"},
  {"ticker": "ZG", "name": "Zillow Class A"},
  {"ticker": "Z", "name": "Zillow Class C"},
  {"ticker": "DKNG", "name": "DraftKings"},
  {"ticker": "DAL", "name": "Delta Air Lines"},
  {"ticker": "SONY", "name": "Sony"},
  {"ticker": "GE", "name": "General Electric"},
  {"ticker": "ROKU", "name": "Roku"},
  {"ticker": "ADBE", "name": "Adobe"},
  {"ticker": "KO", "name": "Coca-Cola"},
  {"ticker": "VZ", "name": "Verizon"},
  {"ticker": "ETSY", "name": "Etsy"},
  {"ticker": "ATVI", "name": "Activision Blizzard"},
  {"ticker": "TM", "name": "Toyota"},
  {"ticker": "INTC", "name": "Intel"},
  {"ticker": "ORCL", "name": "Oracle"},
  {"ticker": "CVS", "name": "CVS Health"},
  {"ticker": "ALL", "name": "Allstate"},
  {"ticker": "CSCO", "name": "Cisco"},
  {"ticker": "MNST", "name": "Monster"},
  {"ticker": "DISCB", "name": "Discovery"},
  {"ticker": "UAL", "name": "United Airlines"},
  {"ticker": "NFLX", "name": "Netflix"},
  {"ticker": "BBY", "name": "Best Buy"},
  {"ticker": "CRM", "name": "Salesforce"},
  {"ticker": "PFE", "name": "Pfizer"},
  {"ticker": "CHWY", "name": "Chewy"},
  {"ticker": "BCS", "name": "Barclays"},
  {"ticker": "RACE", "name": "Ferrari"},
  {"ticker": "NKE", "name": "Nike"},
  {"ticker": "LYFT", "name": "Lyft"},
  {"ticker": "SQ", "name": "Square"},
  {"ticker": "T", "name": "AT&T"},
  {"ticker": "ABT", "name": "Abbot Laboratories"},
  {"ticker": "LUV", "name": "Southwest Airlines"},
  {"ticker": "PEP", "name": "Pepsi"},
  {"ticker": "CVX", "name": "Chevron"},
  {"ticker": "COIN", "name": "Coinbase"},
  {"ticker": "ABV", "name": "AbbVie"},
  {"ticker": "NVS", "name": "Novartis AG"},
  {"ticker": "EXPE", "name": "Expedia"},
  {"ticker": "WFC", "name": "Wells Fargo"},
  {"ticker": "AVGO", "name": "Broadcom"},
  {"ticker": "DUOL", "name": "Duolingo"},
  {"ticker": "CVNA", "name": "Carvano"},
  {"ticker": "MRK", "name": "Merck"},
  {"ticker": "OKTA", "name": "Okta"},
  {"ticker": "LLY", "name": "Eli Lilly"},
  {"ticker": "BHP", "name": "BHP Group"},
  {"ticker": "UPS", "name": "United Parcel Service"},
  {"ticker": "TMO", "name": "Thermo Fisher Scientific"},
  {"ticker": "DHR", "name": "Danaher"},
  {"ticker": "NVO", "name": "Novo Nordisk"},
  {"ticker": "ACN", "name": "Accenture plc Class A"},
  {"ticker": "TMUS", "name": "T-Mobile"},
  {"ticker": "TXN", "name": "Texas Instruments"},
  {"ticker": "MCD", "name": "McDonald's"},
  {"ticker": "PLUG", "name": "Plug Power"},
  {"ticker": "MDB", "name": "MongoDB"},
  {"ticker": "MDT", "name": "Medtronic"},
  {"ticker": "DLTR", "name": "Dollar Tree"},
  {"ticker": "MS", "name": "Morgan Stanley"},
  {"ticker": "K", "name": "Kellogg"},
  {"ticker": "COST", "name": "Costco Wholesale"},
  {"ticker": "SAP", "name": "SAP SE"},
  {"ticker": "CLX", "name": "Clorox"},
  {"ticker": "C", "name": "Citigroup"},
  {"ticker": "HON", "name": "Honeywell"},
  {"ticker": "UL", "name": "Unilever PLC"},
  {"ticker": "LIN", "name": "Linde"},
  {"ticker": "GIS", "name": "General Mills"},
  {"ticker": "XEL", "name": "Xcel Energy"},
  {"ticker": "LOGI", "name": "Logitech"},
  {"ticker": "TGT", "name": "Target"},
  {"ticker": "NET", "name": "Cloudflare"},
  {"ticker": "IRBT", "name": "iRobot"},
  {"ticker": "UPWK", "name": "Upwork"},
  {"ticker": "RDFN", "name": "Redfin"},
  {"ticker": "FVRR", "name": "Fiverr"},
  {"ticker": "BYND", "name": "Beyond Meat"},
  {"ticker": "ISRG", "name": "Intuitive Surgical"},
  {"ticker": "BRK.A", "name": "Berkshire Hathaway"},
  {"ticker": "BRK.B", "name": "Berkshire Hathaway"},
  {"ticker": "DPZ", "name": "Domino's Pizza"},
  {"ticker": "SNOW", "name": "Snowflake"},
  {"ticker": "SHOP", "name": "Shopify"},
  {"ticker": "BBL", "name": "BHP Group"},
  {"ticker": "QCOM", "name": "QUALCOMM"},
  {"ticker": "PM", "name": "Philip Morris"},
  {"ticker": "BUD", "name": "Anheuser-Busch Inbev"},
  {"ticker": "UNP", "name": "Union Pacific"},
  {"ticker": "AZN", "name": "AstraZeneca"},
  {"ticker": "MTCH", "name": "Match"},
  {"ticker": "RY", "name": "Royal Bank of Canada"},
  {"ticker": "DOCU", "name": "DocuSign"},
  {"ticker": "BMY", "name": "Bristol-Myers Squibb"},
  {"ticker": "BA", "name": "Boeing"},
  {"ticker": "NEE", "name": "NextEra Energy"},
  {"ticker": "CHTR", "name": "Charter Communications"},
  {"ticker": "CCIV", "name": "Churchill Capital"},
  {"ticker": "PLTR", "name": "Palantir Technologies"},
  {"ticker": "LI", "name": "Li Auto"},
  {"ticker": "XPEV", "name": "Xpeng"},
  {"ticker": "ULTA", "name": "Ulta Beauty"},
  {"ticker": "FUBO", "name": "Fubo"},
  {"ticker": "WKHS", "name": "Workhorse"},
  {"ticker": "LB", "name": "L Brands"},
  {"ticker": "RIO", "name": "Rio Tinto"},
  {"ticker": "HDB", "name": "HDFC Bank"},
  {"ticker": "SCHW", "name": "Charles Schwab"},
  {"ticker": "LOW", "name": "Lowe's"},
  {"ticker": "AMGN", "name": "Amgen"},
  {"ticker": "RTX", "name": "Raytheon Technologies"},
  {"ticker": "SBUX", "name": "Starbucks"},
  {"ticker": "SKM", "name": "SK Telecom"},
  {"ticker": "BLK", "name": "BlackRock"},
  {"ticker": "SNY", "name": "Sanofi"},
  {"ticker": "SE", "name": "Sea Limited AMerican Depositary Shares"},
  {"ticker": "HSBC", "name": "HSBC Holdings"},
  {"ticker": "CAT", "name": "Caterpillar"},
  {"ticker": "TD", "name": "Toronto Dominion Bank"},
  {"ticker": "SIRI", "name": "Sirius XM"},
  {"ticker": "AXP", "name": "American Express"},
  {"ticker": "KMX", "name": "CarMax"},
  {"ticker": "IBM", "name": "International Business Machines"},
  {"ticker": "AMAT", "name": "Applied Materials"},
  {"ticker": "GS", "name": "Goldman Sachs"},
  {"ticker": "CSAN", "name": "Cosan"},
  {"ticker": "TOT", "name": "Total"},
  {"ticker": "INTU", "name": "Intuit"}, 
  {"ticker": "AAL", "name": "American Airlines"},
  {"ticker": "MMM", "name": "3M"},
  {"ticker": "AMT", "name": "American Tower"},
  {"ticker": "JD", "name": "JD.com"}, 
  {"ticker": "KR", "name": "Kroger"},
  {"ticker": "TTD", "name": "The Trade Desk"},
  {"ticker": "DE", "name": "Deere & Company"},
  {"ticker": "DEO", "name": "Diaegeo"}, 
  {"ticker": "BURL", "name": "Burlington Stores"},
  {"ticker": "EL", "name": "Estee Lauder"},
  {"ticker": "DISH", "name": "DISH Network"},
  {"ticker": "VALE", "name": "Vale"},
  {"ticker": "Real", "name": "The RealReal"},
  {"ticker": "LMT", "name": "Lockheed Martin"}, 
  {"ticker": "AMCX", "name": "AMC Networks"},
  {"ticker": "DIT", "name": "Amcon Distributing"}, 
  {"ticker": "ZI", "name": "ZoomInfo"},
  {"ticker": "GSK", "name": "GlaxoSmithKline"},
  {"ticker": "ANTM", "name": "Anthem"},
  {"ticker": "AMD", "name": "Advanced Micro Devices"},
  {"ticker": "CZR", "name": "Caesars Entertainment"},
  {"ticker": "FOXA", "name": "Fox Class A"},
  {"ticker": "FOX", "name": "Fox Class B"},
  {"ticker": "SNA", "name": "Snap-On"},
  {"ticker": "NTAP", "name": "NetApp"},
  {"ticker": "BKNG", "name": "Booking Holdings"},
  {"ticker": "SYK", "name": "Stryker"}, 
  {"ticker": "MGM", "name": "MGM Resorts"},
  {"ticker": "MU", "name": "Micron"},
  {"ticker": "NOW", "name": "ServiceNow"},
  {"ticker": "LCRX", "name": "Lam Research"},
  {"ticker": "FIS", "name": "Fidelity"},
  {"ticker": "SPGI", "name": "S&P Global"},
  {"ticker": "MO", "name": "Altria"},
  {"ticker": "USB", "name": "US Bank"},
  {"ticker": "MDLZ", "name": "Mondelez International"},
  {"ticker": "BTI", "name": "British American Tobacco Industry"},
  {"ticker": "BP", "name": "BP plc"},
  {"ticker": "CI", "name": "Cigna"},
  {"ticker": "PLD", "name": "Prologis"}, 
  {"ticker": "ADP", "name": "Automatic Data Processing"},
  {"ticker": "TFC", "name": "Truist Financial"},
  {"ticker": "GILD", "name": "Gilead Sciences"},
  {"ticker": "PNC", "name": "PNC Financial Services Group"},
  {"ticker": "INFY", "name": "Infosys"},
  {"ticker": "CCI", "name": "Crown Castle International"},
  {"ticker": "BNS", "name": "Bank of Nova Scotia"},
  {"ticker": "TJX", "name": "TJX Companies"},
  {"ticker": "CNI", "name": "Canadian National Railway"},
  {"ticker": "BAM", "name": "Brookfield Asset Management"},
  {"ticker": "NTES", "name": "NetEase"},
  {"ticker": "CME", "name": "CME Group"},
  {"ticker": "CB", "name": "Chubb Limited"},
  {"ticker": "FISV", "name": "Fiserv"},
  {"ticker": "CSX", "name": "CSX Corporation"},
  {"ticker": "PTR", "name": "PetroChina"},
  {"ticker": "SHW", "name": "Sherwin-Williams"},
  {"ticker": "DELL", "name": "Dell"},
  {"ticker": "COP", "name": "ConocoPhillips"},
  {"ticker": "WBK", "name": "Westpac Banking"},
  {"ticker": "MUFG", "name": "Mitsubishi"},
  {"ticker": "MRNA", "name": "Moderna"},
  {"ticker": "ITW", "name": "Illinois Tools Works"},
  {"ticker": "SAN", "name": "Banco Santander"},
  {"ticker": "COF", "name": "Capital One Financial"},
  {"ticker": "EQNR", "name": "Equinor"},
  {"ticker": "HCA", "name": "HCA HealthCare"},
  {"ticker": "CL", "name": "Colgate"},
  {"ticker": "CPNG", "name": "Coupang"},
  {"ticker": "MMC", "name": "Marsh & McLennan"},
  {"ticker": "BDX", "name": "Becton, Dickinson & Company"},
  {"ticker": "NSC", "name": "Norfolk Southern Corporation"},
  {"ticker": "ABB", "name": "Abb Ltd"},
  {"ticker": "BIDU", "name": "Baidu"},
  {"ticker": "BMO", "name": "Bank of Montreal"},
  {"ticker": "MELI", "name": "MercadoLibre"},
  {"ticker": "SO", "name": "Southern Company"},
  {"ticker": "PBR", "name": "Petroleo Brasileiro"},
  {"ticker": "APD", "name": "Air Products and Chemicals"},
  {"ticker": "VMW", "name": "Vmware"},
  {"ticker": "EQIX", "name": "Equinix"},
  {"ticker": "SNP", "name": "China Petroleum & Chemical Corporation"},
  {"ticker": "BX", "name": "The Blackstone Group"},
  {"ticker": "ICE", "name": "Intercontinental Exchange"},
  {"ticker": "ADSK", "name": "Autodesk"},
  {"ticker": "MCO", "name": "Moody's"},
  {"ticker": "FCX", "name": "Freeport-McMoRan"},
  {"ticker": "IBN", "name": "ICICI Bank"},
  {"ticker": "BEKE", "name": "KE Holdings"},
  {"ticker": "ECL", "name": "Ecolab"},
  {"ticker": "D", "name": "Doiminion Energy"},
  {"ticker": "STLA", "name": "Stellantis"},
  {"ticker": "ADI", "name": "Analog Devices"},
  {"ticker": "LFC", "name": "China Life Insurance"},
  {"ticker": "BSX", "name": "Boston Scientific"},
  {"ticker": "EW", "name": "Edwards Lifesciences"},
  {"ticker": "WM", "name": "Waste Management"},
  {"ticker": "ILMN", "name": "Illumina"},
  {"ticker": "BSBR", "name": "Banco Santander Brasil"},
  {"ticker": "NOC", "name": "Northrop Grumman"},
  {"ticker": "TEAM", "name": "Atlassian"},
  {"ticker": "NXPI", "name": "NXP Semiconductors"},
  {"ticker": "PGR", "name": "Progressive"},
  {"ticker": "ETN", "name": "Eaton"},
  {"ticker": "UBS", "name": "UBS Group"},
  {"ticker": "EMR", "name": "Emerson Electric"},
  {"ticker": "MET", "name": "MetLife"},
  {"ticker": "GPN", "name": "Globaal Payments"},
  {"ticker": "AON", "name": "Aon"},
  {"ticker": "HUM", "name": "Humana"},
  {"ticker": "PUK", "name": "Prudential Public"},
  {"ticker": "WDAY", "name": "Workday"},
  {"ticker": "ITUB", "name": "Itau Unibanco"},
  {"ticker": "ING", "name": "ING"},
  {"ticker": "ABEV", "name": "Ambev"},
  {"ticker": "CP", "name": "Canadian Pacific Railway"},
  {"ticker": "VRTX", "name": "Vertex Pharmaceuticals"},
  {"ticker": "SCCO", "name": "Southern Copper"},
  {"ticker": "TAK", "name": "Takeda Pharmaceutical"},
  {"ticker": "GD", "name": "General Dynamics"},
  {"ticker": "REGN", "name": "Regeneron Pharmaceuticals"},
  {"ticker": "CM", "name": "Canadian Imperial Bank of Commerce"},
  {"ticker": "VOD", "name": "Vodafone"},
  {"ticker": "EPD", "name": "Enterprise Products"},
  {"ticker": "PHG", "name": "Royal Philips"},
  {"ticker": "AMX", "name": "America Movil"},
  {"ticker": "RELX", "name": "RELX"},
  {"ticker": "AMOV", "name": "American Movil"},
  {"ticker": "SMFG", "name": "Sumitomo Mitsui"},
  {"ticker": "CRWD", "name": "CrowdStrike"},
  {"ticker": "TRP", "name": "TC Energy"},
  {"ticker": "LYG", "name": "Lloyds Banking"},
  {"ticker": "PSA", "name": "Public Storage"},
  {"ticker": "BBD", "name": "Banco Bradesco"},
  {"ticker": "BNTX", "name": "BioNTech"},
  {"ticker": "KLAC", "name": "KLA"},
  {"ticker": "DG", "name": "Dollar General"},
  {"ticker": "TRI", "name": "Thomson Reuters"},
  {"ticker": "JCI", "name": "Johnson Controls International"},
  {"ticker": "IDXX", "name": "IDEXX Laboratories"},
  {"ticker": "NGG", "name": "National Grid Transco"},
  {"ticker": "ROP", "name": "Roper"},
  {"ticker": "EOG", "name": "EOG Resources"},
  {"ticker": "ALGN", "name": "Align"},
  {"ticker": "STZ", "name": "Constellation Brands"},
  {"ticker": "IQV", "name": "IQVIA Holdings"},
  {"ticker": "BK", "name": "The Bank of New York Mellon"},
  {"ticker": "AIG", "name": "American International Group"},
  {"ticker": "DD", "name": "DuPont de Nemours"},
  {"ticker": "BCE", "name": "BCE"},
  {"ticker": "TEL", "name": "TE Connectivity"},
  {"ticker": "ERIC", "name": "Ericsson"},
  {"ticker": "LHX", "name": "L3Harris"},
  {"ticker": "INFO", "name": "IHS Markit"},
  {"ticker": "VEEV", "name": "Veeva Systems"},
  {"ticker": "LVS", "name": "Las Vegas Sands"},
  {"ticker": "EXC", "name": "Exelon"},
  {"ticker": "KMB", "name": "Kimberly-Clark"},
  {"ticker": "E", "name": "Eni"},
  {"ticker": "SLB", "name": "Schlumberger"},
  {"ticker": "TROW", "name": "T.Rowe Price"},
  {"ticker": "WIT", "name": "Wipro"},
  {"ticker": "AEP", "name": "American Electric Power"},
  {"ticker": "MCHP", "name": "Microchip Technology"},
  {"ticker": "CNC", "name": "Centene"},
  {"ticker": "GOLD", "name": "Barrick Gold"},
  {"ticker": "DLR", "name": "Digital Realty Trust"},
  {"ticker": "PPG", "name": "PPG"},
  {"ticker": "BBDO", "name": "Banco Bradesco"},
  {"ticker": "SPG", "name": "Simon Property Group"},
  {"ticker": "PRU", "name": "Prudential Financial"},
  {"ticker": "A", "name": "Agilent"},
  {"ticker": "KMI", "name": "Kinder Morgan"},
  {"ticker": "BBVA", "name": "Banco Bilbao"},
  {"ticker": "PATH", "name": "UiPath"},
  {"ticker": "SYY", "name": "Sysco"},
  {"ticker": "BAX", "name": "Baxter"},
  {"ticker": "CNQ", "name": "Canadian Natural Resources"},
  {"ticker": "CRH", "name": "CRH"},
  {"ticker": "APTV", "name": "Aptiv"},
  {"ticker": "BILI", "name": "Bilibili"},
  {"ticker": "MFC", "name": "Manulife"},
  {"ticker": "MPC", "name": "Marathon Petroleum"},
  {"ticker": "BIIB", "name": "Biogen"},
  {"ticker": "APH", "name": "Amphenol"},
  {"ticker": "TRV", "name": "Travelers"},
  {"ticker": "CARR", "name": "Carrier Global"},
  {"ticker": "PH", "name": "Parker-Hannifin"},
  {"ticker": "MFG", "name": "Mizuho"},
  {"ticker": "ALXN", "name": "Alexion"},
  {"ticker": "SNPS", "name": "Synopsys"},
  {"ticker": "MSCI", "name": "MSCI"},
  {"ticker": "CTSH", "name": "Cognizant"},
  {"ticker": "LYB", "name": "LyondelBassel"},
  {"ticker": "CMI", "name": "Cummins"},
  {"ticker": "ORLY", "name": "O'Reilly"},
  {"ticker": "ADM", "name": "Archer-Daniels-Midland"},
  {"ticker": "GLW", "name": "Corning"},
  {"ticker": "CTAS", "name": "Cintas"},
  {"ticker": "PXD", "name": "Pioneer"},
  {"ticker": "PSX", "name": "Phillips 66"},
  {"ticker": "PAYX", "name": "Paychex"},
  {"ticker": "HPQ", "name": "HP"},
  {"ticker": "YUM", "name": "Yum!"},
  {"ticker": "DXCM", "name": "DexCom"},
  {"ticker": "FTNT", "name": "Fortinet"},
  {"ticker": "TDG", "name": "Transdigm"},
  {"ticker": "NTR", "name": "Nutrien"},
  {"ticker": "PANW", "name": "Palo Alto Networks"},
  {"ticker": "CDNS", "name": "Cadence Design Systems"},
  {"ticker": "IFF", "name": "International Flavors & Fragrances"},
  {"ticker": "CCL", "name": "Carnival"},
  {"ticker": "ZBH", "name": "Zimmer Biomet"},
  {"ticker": "SWK", "name": "Stanley Black & Decker"},
  {"ticker": "HLT", "name": "Hilton Worldwide Holdings"},
  {"ticker": "MSI", "name": "Motorola Solutions"},
  {"ticker": "RSG", "name": "Reupublic Services"},
  {"ticker": "ALC", "name": "Alcon"},
  {"ticker": "SU", "name": "Suncor Energy"},
  {"ticker": "MT", "name": "Arcelor Mittal"},
  {"ticker": "NWG", "name": "NatWest"},
  {"ticker": "DHI", "name": "D.R. Horton"},
  {"ticker": "ORAN", "name": "Orange"},
  {"ticker": "FRC", "name": "FIRST REPUBLIC BANK"},
  {"ticker": "CSGP", "name": "CoStar Group"},
  {"ticker": "WLTW", "name": "Willis Towers Watson"},
  {"ticker": "OTIS", "name": "Otis"},
  {"ticker": "BASE", "name": "Couchbase"},
  {"ticker": "ERAS", "name": "Erasca"},
  {"ticker": "BLND", "name": "Blend Labs"},
  {"ticker": "STM", "name": "STMicroelectronics"},
  {"ticker": "CTVA", "name": "Corteva"},
  {"ticker": "BGNE", "name": "BeiGene"},
  {"ticker": "PTON", "name": "Peloton"},
  {"ticker": "DNUT", "name": "Krispy Kreme"},
  {"ticker": "VLO", "name": "Valero Energy"},
  {"ticker": "WKME", "name": "WalkMe"},
  {"ticker": "MRVL", "name": "Marvell Tecnhology"},
  {"ticker": "SBAC", "name": "SBA Communications"},
  {"ticker": "KKR", "name": "KKR"},
  {"ticker": "WMB", "name": "Williams Companies"},
  {"ticker": "W", "name": "Wayfair"},
  {"ticker": "PCAR", "name": "PACCAR"},
  {"ticker": "CHT", "name": "Chunghwa Telecom"},
  {"ticker": "WCN", "name": "Waste Connections"},
  {"ticker": "SIVB", "name": "SVB"},
  {"ticker": "DB", "name": "Deutsche Bank"},
  {"ticker": "SLF", "name": "Sun Life"},
  {"ticker": "LBRDK", "name": "Liberty Broadband"},
  {"ticker": "PEG", "name": "Public Service Enterprise"},
  {"ticker": "VFC", "name": "V.F. Corporation"},
  {"ticker": "XLNX", "name": "Xilinx"},
  {"ticker": "WELL", "name": "Welltower"},
  {"ticker": "AME", "name": "AMTEK"},
  {"ticker": "LEN", "name": "Lennar"},
  {"ticker": "ODFL", "name": "Old Dominion Freight Line"},
  {"ticker": "NUE", "name": "Nucor"},
  {"ticker": "LBRDA", "name": "Liberty Broadband"},
  {"ticker": "ROK", "name": "Rockwell Automation"},
  {"ticker": "TU", "name": "Telus"},
  {"ticker": "CPRT", "name": "Copart"},
  {"ticker": "TASK", "name": "TaskUs"},
  {"ticker": "MQ", "name": "Marqeta"},
  {"ticker": "FAST", "name": "Fastenal"},
  {"ticker": "MCK", "name": "McKesson"},
  {"ticker": "FERG", "name": "Ferguson"},
  {"ticker": "MGA", "name": "Magna"},
  {"ticker": "MTD", "name": "Mettler-Toledo"},
  {"ticker": "STT", "name": "State Street"},
  {"ticker": "AJG", "name": "Arthur J Gallagher"},
  {"ticker": "AMP", "name": "Ameriprise"},
  {"ticker": "VIACA", "name": "ViacomCBS Class A"},
  {"ticker": "RMD", "name": "ResMed"},
  {"ticker": "FITB", "name": "Fifth Third Bancorp"},
  {"ticker": "WEC", "name": "WEC Energy"},
  {"ticker": "MPLX", "name": "MPLX LP"},
  {"ticker": "CBRE", "name": "CBRE"},
  {"ticker": "ANSS", "name": "ANSYS"},
  {"ticker": "CUK", "name": "Carnival"},
  {"ticker": "FMX", "name": "Fomento Economico Mexicano"},
  {"ticker": "TSN", "name": "Tyson Foods"},
  {"ticker": "EQR", "name": "Equity Residential"},
  {"ticker": "AVB", "name": "AvalonBay"},
  {"ticker": "EFX", "name": "Equifax"},
  {"ticker": "FNV", "name": "Franco-Nevada"},
  {"ticker": "YUMC", "name": "Yum China"},
  {"ticker": "WY", "name": "Weyerhaeuser"},
  {"ticker": "SGEN", "name": "Seagen"},
  {"ticker": "AWK", "name": "American Water Works"},
  {"ticker": "DDOG", "name": "Datadog"},
  {"ticker": "SWKS", "name": "Skyworks"},
  {"ticker": "IBKR", "name": "Interactive Brokers Group"},
  {"ticker": "VRSK", "name": "Verisk Analytics"},
  {"ticker": "ES", "name": "Eversource Energy"},
  {"ticker": "SYF", "name": "Synchrony"},
  {"ticker": "CCEP", "name": "Coca-Cola Europacific Partners"},
  {"ticker": "VIAC", "name": "ViacomCBS Class B"},
  {"ticker": "MXIM", "name": "Maxim Integrated"},
  {"ticker": "GRMN", "name": "Garmin"},
  {"ticker": "TEF", "name": "Telefonica"},
  {"ticker": "APP", "name": "Applovin"},
  {"ticker": "KSU", "name": "Kansas City Southern"},
  {"ticker": "BLL", "name": "Ball"},
  {"ticker": "EPAM", "name": "EPAM"},
  {"ticker": "LH", "name": "LabCorp"},
  {"ticker": "TCOM", "name": "Trip.com"},
  {"ticker": "TME", "name": "Tencent Music Entertainment"},
  {"ticker": "ZBRA", "name": "Zebra Technologies"},
  {"ticker": "GMAB", "name": "Genmab"},
  {"ticker": "ZTO", "name": "ZTO Express"},
  {"ticker": "ED", "name": "Consolidated Edison"},
  {"ticker": "ZS", "name": "Zscaler"},
  {"ticker": "U", "name": "Unity Software"},
  {"ticker": "RYAAY", "name": "Ryanair Holdings"},
  {"ticker": "ARE", "name": "Alecandria Real Estate Equities"},
  {"ticker": "KEYS", "name": "Keysight Technologies"},
  {"ticker": "HRL", "name": "Hormel Foods"},
  {"ticker": "RCI", "name": "Rogers Communication"},
  {"ticker": "CS", "name": "Credit Suisse"},
  {"ticker": "ANET", "name": "Arista"},
  {"ticker": "HES", "name": "HESS"},
  {"ticker": "TAL", "name": "TAL Education"},
  {"ticker": "WST", "name": "West Pharmaceutical"},
  {"ticker": "O", "name": "Realty Income"},
  {"ticker": "BKR", "name": "Baker Hughes"},
  {"ticker": "NTRS", "name": "Northern Trust"},
  {"ticker": "CAJ", "name": "Canon"},
  {"ticker": "VRSN", "name": "VeriSign"},
  {"ticker": "IP", "name": "international Paper Company"},
  {"ticker": "FTV", "name": "Fortive"},
  {"ticker": "EC", "name": "Ecopetrol"},
  {"ticker": "RPRX", "name": "Royalty Pharma"},
  {"ticker": "VMC", "name": "Vulcan Materials"},
  {"ticker": "PKX", "name": "POSCO"},
  {"ticker": "OXY", "name": "Occidental Petroleum"},
  {"ticker": "IMO", "name": "Imperial Oil"},
  {"ticker": "URI", "name": "United Rentals"},
  {"ticker": "GWW", "name": "W.W. Grainger"},
  {"ticker": "RNG", "name": "RingCentral"},
  {"ticker": "MKC", "name": "McCormick & Company"},
  {"ticker": "RCL", "name": "Royal Caribbean Group"},
  {"ticker": "YNDX", "name": "Yandex"},
  {"ticker": "CERN", "name": "Cerner"},
  {"ticker": "ABC", "name": "AmerisourceBergn"},
  {"ticker": "HUBS", "name": "HubSpot"},
  {"ticker": "OKE", "name": "ONEOK"},
  {"ticker": "FMS", "name": "Fresenius Medical Care"},
  {"ticker": "UMC", "name": "United Microelectronics"},
  {"ticker": "HIG", "name": "Hartford Financial Services Group"},
  {"ticker": "TDOC", "name": "Teladoc Health"},
  {"ticker": "CNHI", "name": "CHN Industrial"},
  {"ticker": "CDW", "name": "CDW Corp"},
  {"ticker": "WDC", "name": "Western Digital"},
  {"ticker": "TLK", "name": "PT Telekommunikasi Indonesia"},
  {"ticker": "FLT", "name": "FleetCor"},
  {"ticker": "MLM", "name": "Martin Marietta Materials"},
  {"ticker": "RF", "name": "Regions Financial"},
  {"ticker": "PPL", "name": "PPL"},
  {"ticker": "KEY", "name": "KeyCorp"},
  {"ticker": "XP", "name": "XP Inc"},
  {"ticker": "GIB", "name": "CGI"},
  {"ticker": "TER", "name": "Teradyne"},
  {"ticker": "STX", "name": "Seagate Technology"},
  {"ticker": "DOV", "name": "Dover"},
  {"ticker": "WPM", "name": "Wheaton Precious Metals Corp"},
  {"ticker": "LNG", "name": "Cheniere Energy"},
  {"ticker": "AEE", "name": "Ameren"},
  {"ticker": "IX", "name": "Orix"},
  {"ticker": "TTWO", "name": "Take-Two Interactive Software"},
  {"ticker": "FTS", "name": "Fortis"},
  {"ticker": "IAC", "name": "IAC"},
  {"ticker": "XYL", "name": "Xylem"},
  {"ticker": "CFG", "name": "Citizens Financial Group"},
  {"ticker": "EXPD", "name": "Expeditors International of Washington"},
  {"ticker": "EIX", "name": "Edison International"},
  {"ticker": "QSR", "name": "Restaurant Brands"},
  {"ticker": "ETR", "name": "Entergy"},
  {"ticker": "NVCR", "name": "NovoCure"},
  {"ticker": "CHD", "name": "Church & Dwight"},
  {"ticker": "TSCO", "name": "Tractor Supply"},
  {"ticker": "FUTU", "name": "Futu Holdings"},
  {"ticker": "IR", "name": "Ingersoll Rand"},
  {"ticker": "VTR", "name": "Ventas"},
  {"ticker": "HPE", "name": "Hewlett Packard"},
  {"ticker": "CVAC", "name": "CureVac"},
  {"ticker": "GNRC", "name": "Generac Holdings"},
  {"ticker": "MTB", "name": "M&T Bank"},
  {"ticker": "FE", "name": "FirstEnergy"},
  {"ticker": "HZNP", "name": "Horizon Therapeutics"},
  {"ticker": "INVH", "name": "Invitation Homes"},
  {"ticker": "QRVO", "name": "Qorvo"},
  {"ticker": "TRU", "name": "TransUnion"},
  {"ticker": "STNE", "name": "StoneCo"},
  {"ticker": "AGR", "name": "Avangrid"},
  {"ticker": "ALLY", "name": "Ally Financial"},
  {"ticker": "PCG", "name": "Pacific Gas & Electric"},
  {"ticker": "KB", "name": "KB Financial"},
  {"ticker": "EXR", "name": "Extra Space Storage"},
  {"ticker": "HAL", "name": "Haliburton"},
  {"ticker": "CQP", "name": "Cheniere Energy Partners"},
  {"ticker": "IT", "name": "Gartner"},
  {"ticker": "WAT", "name": "Waters"},
  {"ticker": "SPLK", "name": "Splunk"},
  {"ticker": "PAYC", "name": "Paycom Software"},
  {"ticker": "TXG", "name": "10x Genomics"},
  {"ticker": "LYV", "name": "Live Nation Entertainment"},
  {"ticker": "SHG", "name": "Shinhan Financial Group"},
  {"ticker": "CINF", "name": "Cincinatti Financial Corp"},
  {"ticker": "TRMB", "name": "Trimble"},
  {"ticker": "TDY", "name": "Teledyne"},
  {"ticker": "ALB", "name": "Albemarle"},
  {"ticker": "TW", "name": "Tradeweb Markets"},
  {"ticker": "ENPH", "name": "Enphase Energy"},
  {"ticker": "COO", "name": "Cooper Companies"},
  {"ticker": "ESS", "name": "Essex Property Trust"},
  {"ticker": "SNN", "name": "Smith & Nephew"},
  {"ticker": "HEI", "name": "Heico"},
  {"ticker": "EXAS", "name": "Exact Sciences"},
  {"ticker": "GPC", "name": "Genuine Parts"},
  {"ticker": "UI", "name": "Ubiquiti"},
  {"ticker": "SSNC", "name": "SS&C Technologies"},
  {"ticker": "TFX", "name": "Teleflex"},
  {"ticker": "DRI", "name": "Darden Restaurants"},
  {"ticker": "SUI", "name": "Sun Communities"},
  {"ticker": "AVTR", "name": "Avantor"},
  {"ticker": "CE", "name": "Celanese"},
  {"ticker": "AKAM", "name": "Akamai Technologies"},
  {"ticker": "BR", "name": "Broadridge Financial Solutions"},
  {"ticker": "J", "name": "Jacobs Engineering Group"},
  {"ticker": "WMG", "name": "Warner Music Group"},
  {"ticker": "INCY", "name": "Incyte"},
  {"ticker": "VTRS", "name": "Viatris"},
  {"ticker": "MAA", "name": "Mid-America Apartment Communities"},
  {"ticker": "HTHT", "name": "Huazhu Group"},
  {"ticker": "CLVT", "name": "Clarivate"},
  {"ticker": "BXP", "name": "Boston Properties"},
  {"ticker": "AVY", "name": "Avery Dennison"},
  {"ticker": "CAG", "name": "ConAgra Brands"},
  {"ticker": "RJF", "name": "Raymond James Financial"},
  {"ticker": "AMCR", "name": "Amcor"},
  {"ticker": "CMS", "name": "CMS Energy"},
  {"ticker": "JBHT", "name": "J.B. Hunt Transport Services"},
  {"ticker": "PEAK", "name": "Healthpeak Properties"},
  {"ticker": "DVN", "name": "Devon Energy"},
  {"ticker": "BIO", "name": "Bio-Rad Laboratories"},
  {"ticker": "PODD", "name": "Insulet"},
  {"ticker": "CTLT", "name": "Catalent"},
  {"ticker": "PFG", "name": "principal Financial Group"},
  {"ticker": "NVR", "name": "NVR"},
  {"ticker": "PBA", "name": "Pembina Pipeline"},
  {"ticker": "RLX", "name": "RLX Technology"},
  {"ticker": "MKTX", "name": "MarketAxess"},
  {"ticker": "OMC", "name": "Omnicom"},
  {"ticker": "XM", "name": "Qualtrics International"},
  {"ticker": "POOL", "name": "Pool Corp"},
  {"ticker": "COUP", "name": "Coupa Software Inc"},
  {"ticker": "BPY", "name": "Brookfield Property Partners"},
  {"ticker": "AEM", "name": "Agnico Eagle Mines"},
  {"ticker": "DRE", "name": "Duke Realty"},
  {"ticker": "EDU", "name": "New Oriential Education & Technology"},
  {"ticker": "LSXMB", "name": "Liberty Media"},
  {"ticker": "BEN", "name": "Franklin Resources"},
  {"ticker": "ON", "name": "ON Semiconductor"},
  {"ticker": "EMN", "name": "Eastman Chemical"},
  {"ticker": "ELAN", "name": "Elanco Animal Health"},
  {"ticker": "NMR", "name": "Nomura Holdings"},
  {"ticker": "CRL", "name": "Charlers River Laboratories"},
  {"ticker": "AES", "name": "AES"},
  {"ticker": "IEX", "name": "IDEX"},
  {"ticker": "MKL", "name": "Markel"},
  {"ticker": "ROL", "name": "Rollins"},
  {"ticker": "VICI", "name": "VICI Properties"},
  {"ticker": "ALNY", "name": "Alnylam Pharmaceuticals"},
  {"ticker": "WPP", "name": "WPP"},
  {"ticker": "ATUS", "name": "Atlice USA"},
  {"ticker": "FTCH", "name": "Farfetch Limited"},
  {"ticker": "TYL", "name": "Tyler Technologies"},
  {"ticker": "XPO", "name": "XPO Logistics"},
  {"ticker": "CVE", "name": "Cenovus Energy"},
  {"ticker": "ELP", "name": "Paranaense de Energia"},
  {"ticker": "STE", "name": "STERIS"},
  {"ticker": "CAH", "name": "Cardinal Health"},
  {"ticker": "PKI", "name": "PerkinElmer"},
  {"ticker": "DISCA", "name": "Discovery"},
  {"ticker": "ZEN", "name": "Zendesk"},
  {"ticker": "PPD", "name": "PPD"},
  {"ticker": "HOLX", "name": "Hologic"},
  {"ticker": "PAGS", "name": "PagSeguro Digital"},
  {"ticker": "HBAN", "name": "Huntington Bancshares"},
  {"ticker": "AFRM", "name": "Affirm Holdings"},
  {"ticker": "ACGL", "name": "Arch Capital Group"},
  {"ticker": "TECH", "name": "Bio-Techne"},
  {"ticker": "NLOK", "name": "NortonLifeLock"},
  {"ticker": "BIP", "name": "Brookfield Infastructure Partners"},
  {"ticker": "DGX", "name": "Quest Diagnostics"},
  {"ticker": "SUZ", "name": "Suzano"},
  {"ticker": "NWSA", "name": "News Corp"},
  {"ticker": "VIPS", "name": "Vipshop Holdings"},
  {"ticker": "BSY", "name": "Bently Systems"},
  {"ticker": "CHKP", "name": "Check Point Software"},
  {"ticker": "MPWR", "name": "Monolithic Power Systems"},
  {"ticker": "PTC", "name": "PTC"},
  {"ticker": "WAB", "name": "Westinghouse Air Brake Technologies"},
  {"ticker": "WRK", "name": "Westrock"},
  {"ticker": "ENTG", "name": "Entegris"},
  {"ticker": "CG", "name": "Carlyle Group"},
  {"ticker": "TXT", "name": "Textron"},
  {"ticker": "LBTYA", "name": "Liberty Global"},
  {"ticker": "HWM", "name": "Howmet Aerospace"},
  {"ticker": "L", "name": "Loews"},
  {"ticker": "LBTYK", "name": "Liberty Global"},
  {"ticker": "WHR", "name": "Whirlpool"},
  {"ticker": "FMC", "name": "FMC Corp"},
  {"ticker": "DISCK", "name": "Discovery"},
  {"ticker": "WYNN", "name": "Wynn Resorts"},
  {"ticker": "DAC", "name": "Danaos Corp"},
  {"ticker": "KIRK", "name": "Kirkland's"},
  {"ticker": "AMTX", "name": "Aemetis Inc"},
  {"ticker": "BGFV", "name": "Big 5"},
  {"ticker": "GTIM", "name": "Good Times Rest"},
  {"ticker": "LOB", "name": "Live Oak Bansch"},
  {"ticker": "KEP", "name": "Korea Electric power"},
  {"ticker": "MHK", "name": "Mohawk Industries"},
  {"ticker": "CNP", "name": "CenterPoint Energy"},
  {"ticker": "MOH", "name": "Molina Healthcare"},
  {"ticker": "WIX", "name": "Wix.com"},
  {"ticker": "LSXMA", "name": "Liberty Media"},
  {"ticker": "DT", "name": "Dynatrace"},
  {"ticker": "GDRX", "name": "GoodRx"},
  {"ticker": "EMB", "name": "iShares JP Morgan USD Emerging Markets Bond ETF"},
  {"ticker": "AMJ", "name": "JPMorgan Ultra-Short Municipal Income ETF"},
  {"ticker": "JPST", "name": "JPMorgan Ultra-Short Income ETF"},
  {"ticker": "WRBY", "name": "Warby Parker"},
  {"ticker": "OLPX", "name": "Olaplex Holdings"},
  {"ticker": "MEKA", "name": "MELI Kaszek Pioneer"},
  {"ticker": "HCVI", "name": "Hennesy Capital Investment VI"},
  {"ticker": "AMPL", "name": "Amplitude"},
  {"ticker": "PRBM", "name": "Parabellum Acquisition"},
  {"ticker": "CWAN", "name": "Clearwater Analytics"},
  {"ticker": "SOVO", "name": "Sovos Brands"},
  {"ticker": "BRLT", "name": "Brilliant Earth Group"},
  {"ticker": "ARBK", "name": "Argo Blockchain"},
  {"ticker": "ESMT", "name": "EngageSmart"},
  {"ticker": "STER", "name": "Sterling Check"},
  {"ticker": "FRSH", "name": "Freshworks"},
  {"ticker": "TOST", "name": "Toast"},
  {"ticker": "TYRA", "name": "Tyra Biosciences"},
  {"ticker": "ONON", "name": "On Holding"},
  {"ticker": "DH", "name": "Definitive Healthcare"},
  {"ticker": "DICE", "name": "DICE Therapeutics"},
  {"ticker": "BROS", "name": "Dutch Bros"},
  {"ticker": "SRAD", "name": "Sportradar"},
  {"ticker": "SQL", "name": "SeqLL"},
  {"ticker": "RNXT", "name": "RenovoRx"},
  {"ticker": "DRMA", "name": "Dermata Therapeutics"},
  {"ticker": "DATS", "name": "DatChat"},
  {"ticker": "WEBR", "name": "Weber"},
  {"ticker": "DOLE", "name": "Dole"},
  {"ticker": "OMGA", "name": "Omega Therapeutics"},
  {"ticker": "COOK", "name": "Traeger"},
  {"ticker": "ICVX", "name": "Icosavax"},
]

export default data;