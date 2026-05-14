// cards.ts

// =========================
// PUBLIC MARKETPLACE CARD
// =========================
export type VirtualCard = {
  id: string;

  // PUBLIC INFO
  name: string;
  type: string;
  price: number;

  image: string;

  previewBalance: number;

  // SAFE DISPLAY
  last4: string;
};

// =========================
// PRIVATE REAL CARD
// =========================

export type PrivateVirtualCard = {
  id: string;

  // LINK TO PUBLIC CARD
  publicCardId: string;

  // REAL DATA
  data: string;
};

// =========================
// PUBLIC CARDS
// (VISIBLE ON WEBSITE)
// =========================
export const NEWCARDS: VirtualCard[] = [
  {
    id: "red-pocket-usdt",
    name: "Virtual Credit Card ( Red Pocket - USDT Compatible )",
    type: "VISA",
    price: 50,
    image: "/cards/red-pocket-usdt.png",
    previewBalance: 2130,
    last4: "4428",
  },
  {
    id: "amazon-card",
    name: "Virtual Credit Card ( Amazon )",
    type: "MASTERCARD",
    price: 25,
    image: "/cards/amazon-card.png",
    previewBalance: 1350,
    last4: "2030",
  },
  {
    id: "meta-ads-card",
    name: "Virtual Credit Card ( Meta Ads Compatible )",
    type: "VISA",
    price: 20,
    image: "/cards/meta-ads-card.png",
    previewBalance: 250,
    last4: "4727",
  },
  {
    id: "tiktok-coins-card",
    name: "Virtual Credit Card ( TikTok Coins Compatible )",
    type: "MASTERCARD",
    price: 20,
    image: "/cards/tiktok-card.png",
    previewBalance: 780,
    last4: "6323",
  },
  {
    id: "midas-buy-card",
    name: "Virtual Credit Card ( Midas-Buy )",
    type: "MASTERCARD",
    price: 30,
    image: "/cards/midas-buy-card.png",
    previewBalance: 1200,
    last4: "0416",
  },
  {
    id: "multi-platform-card",
    name: "Virtual Credit Card ( Multi-Platform Use )",
    type: "VISA",
    price: 24,
    image: "/cards/multi-platform-card.png",
    previewBalance: 980,
    last4: "1260",
  },
  {
    id: "usdt-compatible-card",
    name: "Virtual Credit Card ( USDT Compatible )",
    type: "AMEX",
    price: 30,
    image: "/cards/usdt-card.png",
    previewBalance: 1120,
    last4: "1004",
  },
  {
    id: "redpocket-card",
    name: "Virtual Credit Card ( RedPocket )",
    type: "MASTERCARD",
    price: 30,
    image: "/cards/redpocket-card.png",
    previewBalance: 1350,
    last4: "7718",
  },
  {
    id: "daraz-card",
    name: "Virtual Credit Card ( Daraz )",
    type: "VISA",
    price: 30,
    image: "/cards/daraz-card.png",
    previewBalance: 1203,
    last4: "8789",
  },
  {
    id: "subscription-card",
    name: "Virtual Credit Card ( Subscription Based )",
    type: "VISA",
    price: 25,
    image: "/cards/subscription-card.png",
    previewBalance: 1100,
    last4: "0830",
  },
];

// =========================
// PRIVATE HIDDEN CARDS
// =========================
export const PRIVATE_CARDS: PrivateVirtualCard[] = [
  // PV21 - PV30 → red-pocket-usdt
  {
    id: "pv-1",
    publicCardId: "red-pocket-usdt",
    data: "5447686177664428|01/25|809|Marinel Bernal|9411 Evergreen Place|Davie|FL|33324|UNITED STATES|2600170038303ed0e949d645cccfee37|marinelbanez@hotmail.com|9546638362|",
  },
  {
    id: "pv-2",
    publicCardId: "red-pocket-usdt",
    data: "377253675382030|06/25|9478|Cesar Jaquez|12009 143rd street|Jamaica|NY|11436|UNITED STATES|24.90.121.93|cejess0522@gmail.com|3477824237|",
  },
  {
    id: "pv-3",
    publicCardId: "red-pocket-usdt",
    data: "4400668323484727|11/24|485|Anke Berg|6816 County Road 604|Alvarado|TX|76009|UNITED STATES|107.120.35.117|berg.anke1@gmail.com|8175013339|",
  },
  {
    id: "pv-4",
    publicCardId: "red-pocket-usdt",
    data: "5143772462746323|10/26|592|Anne Hunt|228 Northline rd|Teague|TX|75860|UNITED STATES|2600387180337|theedgedanceco@gmail.com|9033905212|",
  },
  {
    id: "pv-5",
    publicCardId: "red-pocket-usdt",
    data: "5338960813930416|10/25|546|Kirsten Borman Dougherty|4901 Rutland Place|Alexandria|VA|22304|UNITED KINGDOM|76.21.187.27|keborman@gmail.com|7038223814|",
  },
  {
    id: "pv-6",
    publicCardId: "red-pocket-usdt",
    data: "4037840107781260|05/27|419|Michaela Henderson|16215 Dundee Road|Cypress|TX|77429|UNITED STATES|107.136.176.113|czmik@yahoo.com|8324038488|",
  },
  {
    id: "pv-7",
    publicCardId: "red-pocket-usdt",
    data: "379567693721004|11/25|8189|Karen Klingemann|3505 Masthead Drive|Denton|TX|76210|UNITED STATES|47.24.115.49|karenklingemann@yahoo.com|7603177955|",
  },
  {
    id: "pv-8",
    publicCardId: "red-pocket-usdt",
    data: "5447686019947718|01/25|630|Dryver Torres|146 high st 7|San Diego|CA|01938|UNITED STATES|70.181.231.47|dryvetorre@gmail.com|7817207998|",
  },
  {
    id: "pv-9",
    publicCardId: "red-pocket-usdt",
    data: "5534690297878789|05/27|710|Brenda Saiz|2017 Palomas Drive Northeast|Albuquerque|NM|87110|UNITED STATES|98.60.76.123|legalbs@gmail.com|5054002394|",
  },
  {
    id: "pv-10",
    publicCardId: "red-pocket-usdt",
    data: "4060320366960830|12/27|339|Sawsan Abbasi|9146 Stratford Ln|Palos Hills|IL|60465|UNITED STATES|108.89.20.36|abbasi237@yahoo.com|7083020005|",
  },



  // PV21 - PV30 → amazon-card
  {
    id: "pv-11",
    publicCardId: "amazon-card",
    data: "4000222570910325|06/26|105|Dorsheika Jamison|8505 Waters Avenue Apt 66|Savannah|Georgia|31406|UNITED STATES|172.59.64.50|dljamison1@gmail.com|19129963804|",
  },
  {
    id: "pv-12",
    publicCardId: "amazon-card",
    data: "4355778575053453|05/26|748|Debra Smith|1421 West Bryson St|Independence|Missouri|64052|UNITED STATES|2600387c55186|debismith31059@gmail.com|18162692217|",
  },
  {
    id: "pv-13",
    publicCardId: "amazon-card",
    data: "5447686173873585|02/25|573|Anne McLoughlin|1216 Zuma ave|Metairie|LA|70003|UNITED STATES|98.163.193.18|annemcloukhlin43@icloud.com|5047333994|",
  },
  {
    id: "pv-14",
    publicCardId: "amazon-card",
    data: "379575926381009|07/24|6034|Margaret Koslosky|707 W Beach Blvd|Long Beach|MS|39560|UNITED STATES|159.118.104.91|margaretkoslosky@aol.com|5049140255|",
  },
  {
    id: "pv-15",
    publicCardId: "amazon-card",
    data: "371588841561017|11/24|3355|Nancy Wortmann|108 Hilltop dr|Peachtreecity|GA|30269|UNITED STATES|71.56.15.60|nrwortmann@bellsouth.net|7704878555|",
  },
  {
    id: "pv-16",
    publicCardId: "amazon-card",
    data: "5447685793994094|02/25|632|Brendon Reynolds|156 Titleist Ct|Raeford|NC|28376|UNITED STATES|65.191.77.163|beezWb03@yahoo.com|9106108590|",
  },
  {
    id: "pv-17",
    publicCardId: "amazon-card",
    data: "5156768897128321|04/27|679|Linda Burney|106 South Owen Street|Elizabethtown|NC|28337|UNITED STATES|2607fb907516d111603a517dff6b3946|linda.burney@gmail.com|9109917324|",
  },
  {
    id: "pv-18",
    publicCardId: "amazon-card",
    data: "4147400381027653|02/28|887|Julia Heckathorn|4094 Whitewood Dr|Nokesville|VA|20181|UNITED STATES|73.251.211.37|juliagreen414@gmail.com|5712923094|",
  },
  {
    id: "pv-19",
    publicCardId: "amazon-card",
    data: "373965009475016|05/26|9324|Andrea Weiss|8830 Sleepy Hollow Lane|Potomac|MD|20854|UNITED STATES|96.8.19.227|weissandi@gmail.com|2022625008|",
  },
  {
    id: "pv-20",
    publicCardId: "amazon-card",
    data: "4342562415174786|05/25|161|Fatima Diaz|2015 Goodall Avenue|Duarte|CA|91010|UNITED STATES|172.56.16.195|fatimalisbethdiaz@gmail.com|6264999131|",
  },


  // PV21 - PV30 → meta-ads-card
  {
    id: "pv-21",
    publicCardId: "meta-ads-card",
    data: "5447686190227336|10/24|723|Tim Miller|7370 Ward Rd|MILLINGTON|TN|38053|UNITED STATES|12.200.14.90|tmiller@jimkeras.com|9013511604|",
  },
  {
    id: "pv-22",
    publicCardId: "meta-ads-card",
    data: "6011002559634779|10/26|592|Kathryn Schmenk|29290 Redcliff rd|Walbridge|OH|43465|UNITED STATES|172.1.31.92|kmschmenk@gmail.com|17879963029|",
  },
  {
    id: "pv-23",
    publicCardId: "meta-ads-card",
    data: "6011006174783176|01/27|761|Ashlie Scott|605 Whitman Avenue|Georgetown|TX|78626|UNITED STATES|47.221.136.58|ladybug2006@gmail.com|3104315908|",
  },
  {
    id: "pv-24",
    publicCardId: "meta-ads-card",
    data: "371302113293006|07/27|7182|Rosa Harding|2009 Coryton Ln|Winchester|MA|40061|UNITED STATES|24.147.88.82|rhar@outlook.com|9786087945|",
  },
  {
    id: "pv-25",
    publicCardId: "meta-ads-card",
    data: "5447685914813348|10/24|744|Jane Lane|492 Sweetwater. Dr. Rotonda west fl. 33947|Placida|FL|33947|UNITED STATES|71.215.30.42|Jbucks5559@sbcglobal.net|7407941049|",
  },
  {
    id: "pv-26",
    publicCardId: "meta-ads-card",
    data: "4147202465010971|10/25|022|Charles Britton|158 Cloverdale Circle|Tinton Falls|New Jersey|07724|UNITED STATES|73.150.111.108|sbritton9@comcast.net|7322331583|",
  },
  {
    id: "pv-27",
    publicCardId: "meta-ads-card",
    data: "376786045386000|07/27|1025|Brandon Tobon|10777 S Preserve Way Apt 202|Miami|FL|02149|UNITED STATES|134.56.223.190|brato@cox.net|3474299105|",
  },
  {
    id: "pv-28",
    publicCardId: "meta-ads-card",
    data: "4447962325060774|08/25|265|Janice Zeman|4914 NW Discovery Ridge Ct|Silverdale|WA|98383|UNITED STATES|24.113.200.237|janicezeman@yahoo.com|2536511612|",
  },
  {
    id: "pv-29",
    publicCardId: "meta-ads-card",
    data: "5291158255306410|03/26|595|John Poulton|99 Confianza Street|White Rock|NM|87547|UNITED STATES|76.113.57.48|jpoultonjr@gmail.com|5406648279|",
  },
  {
    id: "pv-30",
    publicCardId: "meta-ads-card",
    data: "5447686061410953|02/25|070|Heather Creevan|2352 County Road B|crete|NE|68333|UNITED STATES|204.96.188.30|hcreevgn@nrcne.org|4026012972|",
  },

  // PV31 - PV40 → tiktok-coins-card
  {
    id: "pv-31",
    publicCardId: "tiktok-coins-card",
    data: "6011003562341758|09/26|243|Teresa McCollister|5810 Paddlefish Ct|Waldorf|MD|20603|UNITED STATES|173.73.64.194|teresamc@aol.com|3018485391|",
  },
  {
    id: "pv-32",
    publicCardId: "tiktok-coins-card",
    data: "4400661815941551|07/26|397|Georgia Martin|2819 Hamby Circle|Chattanooga|TN|37421|UNITED STATES|66.85.230.187|ga92044@epbfi.com|4235586154|",
  },
  {
    id: "pv-33",
    publicCardId: "tiktok-coins-card",
    data: "4037660039207345|04/26|372|Shelly Steele|3783 Friendsville Road|Wooster|OH|44691|UNITED STATES|24.140.129.205|steeles2597@gmail.com|3308453455|",
  },
  {
    id: "pv-34",
    publicCardId: "tiktok-coins-card",
    data: "4121383114845619|06/25|991|Kathleen Towle|165 Ravines Lane|Spartanburg|SC|29301|UNITED STATES|66.191.201.234|kaytowle123@yahoo.com|9373082925|",
  },
  {
    id: "pv-35",
    publicCardId: "tiktok-coins-card",
    data: "5305892001305284|01/25|692|Barbara Hartley|8234 NW County Rd 1390|Blooming Grove|TX|76626|UNITED STATES|98.97.84.255|barbarahartley123@gmail.com|2543003528|",
  },
  {
    id: "pv-36",
    publicCardId: "tiktok-coins-card",
    data: "4388576161694701|12/27|448|Scott Mitchell|15 Silversmith Lane|Redding|CT|06896|UNITED STATES|24.146.249.214|smitchell50@yahoo.com|8189173234|",
  },
  {
    id: "pv-37",
    publicCardId: "tiktok-coins-card",
    data: "5230810070902864|10/24|939|Kelli Bayerle|534 Frankfort Way|Waverly|MN|55390|UNITED STATES|98.61.25.89|wisdomlesschild@gmail.com|2182518445|",
  },
  {
    id: "pv-38",
    publicCardId: "tiktok-coins-card",
    data: "6011000547235667|02/25|765|Karen Barwiler|404 April Ln|Adrian|MI|49221|UNITED STATES|76.112.97.235|kbarwiler@gmail.com|5172701447|",
  },
  {
    id: "pv-39",
    publicCardId: "tiktok-coins-card",
    data: "4346230007044769|09/26|491|Amy Gutierrez|1225 Carter Dr|Oklahoma City|OK|73129|UNITED STATES|24.253.222.199|amygtz1225@gmail.com|4055682592|",
  },
  {
    id: "pv-40",
    publicCardId: "tiktok-coins-card",
    data: "4388648322131152|04/26|330|Clifton Sawyer|103 Avon Ct|Slidell|LA|70461|UNITED STATES|23.114.236.215|cliftonpsawyer@yahoo.com|9855028543|",
  },


  // PV41 - PV50 → midas-buy-card
  {
    id: "pv-41",
    publicCardId: "midas-buy-card",
    data: "5156769826430960|08/26|161|Clara Melgar|214 highcroft circle|Benson|NC|27504|UNITED STATES|174.99.85.112|clara1977@hotmail.es|19195238505|",
  },
  {
    id: "pv-42",
    publicCardId: "midas-buy-card",
    data: "377256766311016|05/25|1098|Amy Dailey|2515 Keller Road|Long Lake|MN|55356|UNITED STATES|163.116.133.71|amydailey@mchsi.com|6123081222|",
  },
  {
    id: "pv-43",
    publicCardId: "midas-buy-card",
    data: "5447686145109902|02/25|395|Angela Schmitt|6909 Franklin Boulevard|Cleveland|OH|44102|UNITED STATES|260360115058f00d95b48895a4f447|schmitt.8n@gmail.com|6144993239|",
  },
  {
    id: "pv-44",
    publicCardId: "midas-buy-card",
    data: "4217835039256623|09/26|738|Lawana W|116 e and s drive|Braxton|MS|39044|UNITED STATES|166.196.65.22|wlawana86@gmail.com|7694282896|",
  },
  {
    id: "pv-45",
    publicCardId: "midas-buy-card",
    data: "5156768459128487|10/26|649|Branda Morales|1305 Montcrest Way|Amarillo|TX|79124|UNITED STATES|50.24.213.69|Brandadanae@gmail.com|8065174227|",
  },
  {
    id: "pv-46",
    publicCardId: "midas-buy-card",
    data: "4086350340755220|12/24|215|Christian Malaga|4901 Erie rd|Parrish|FL|34219|CANADA|67.83.54.152|Malaga.christian5165@gmail.com|9413049200|",
  },
  {
    id: "pv-47",
    publicCardId: "midas-buy-card",
    data: "4387680096680479|07/25|713|Joy Martin|2235 North Nc Highway 87 Lot 59|Elon|NC|27244|UNITED STATES|75.177.41.225|joym1557@yahoo.com|3364561882|",
  },
  {
    id: "pv-48",
    publicCardId: "midas-buy-card",
    data: "4100390481503999|03/25|487|Kathy Kennedy|5620 Flagler Dr|Centreville|VA|20120|UNITED STATES|71.163.43.32|kathy53851@aol.com|7038012034|",
  },
  {
    id: "pv-49",
    publicCardId: "midas-buy-card",
    data: "4465400404930663|03/26|738|Jose Jauregui|13503 Alanwood Road|Avocado Heights|CA|91746|UNITED STATES|Cyclops.joe626@gmail.com|6262176687|",
  },
  {
    id: "pv-50",
    publicCardId: "midas-buy-card",
    data: "4100390194271876|09/25|582|Gavin McNiffe|2134 N Bissell St|Chicago|IL|60614|UNITED STATES|172.58.141.148|gav.mcniffe@gmail.com|3127096374|",
  },


  // PV51 - PV60 → multi-platform-card
  {
    id: "pv-51",
    publicCardId: "multi-platform-card",
    data: "377972691921006|11/24|2809|Janet Roos|809 North 96th Street Ste. 1|Omaha|NE|68114|BOSNIA AND HERZEGOVINA|184.189.175.58|janr89@yahoo.com|4023120542|",
  },
  {
    id: "pv-52",
    publicCardId: "multi-platform-card",
    data: "371756159707007|10/26|7741|Maria Ropic|10 Freemont Ct|Thomasville|NC|27360|UNITED STATES|2603608160f081f05c5ae3c6ec1c3591|Terryropic@gmail.com|7049428553|",
  },
  {
    id: "pv-53",
    publicCardId: "multi-platform-card",
    data: "4400665929913471|04/26|707|Cheri Sullivan|6212 Dedham Lane|Austin|TX|78739|UNITED STATES|136.49.75.141|cherih@stedwards.edu|5126362238|",
  },
  {
    id: "pv-54",
    publicCardId: "multi-platform-card",
    data: "372729501941003|05/26|6311|James Brand|976 Boxwood Dr|Crystal Lake|IL|60014|UNITED STATES|98.228.154.183|jimmyb@expertroofinginc.com|8479978878|",
  },
  {
    id: "pv-55",
    publicCardId: "multi-platform-card",
    data: "4900701111139990|10/25|230|Milanie Kaiser|5321 N Lincoln Ave Apt 2c|Chicago|IL|60625|UNITED STATES|73.208.135.139|melanie32969@yahoo.com|7738070788|",
  },
  {
    id: "pv-56",
    publicCardId: "multi-platform-card",
    data: "5156768058882609|03/26|112|Rosa Owens|1975 Akron|Aurora|CO|80010|UNITED STATES|73.14.83.196|clayowens5784@gmail.com|7204993659|",
  },
  {
    id: "pv-57",
    publicCardId: "multi-platform-card",
    data: "4266841798252811|12/28|428|Adrian Braun|11069 Earl Road|Michigan City|IN|46360|UNITED STATES|174.208.225.207|minute.slayer@gmail.com|12196151179|",
  },
  {
    id: "pv-58",
    publicCardId: "multi-platform-card",
    data: "4031630893734524|03/29|014|Willie Joyner|1021 e 1st|Muncie|IN|47303|UNITED STATES|172.56.253.223|joynerboi2015@gmail.com|17656161807|",
  },
  {
    id: "pv-59",
    publicCardId: "multi-platform-card",
    data: "4232232072415160|07/26|674|Carlese Gainey|18290 Eureka Dr|Blythe|CA|92225|UNITED STATES|47.216.243.79|moonliiight786@gmail.com|4423067484|",
  },
  {
    id: "pv-60",
    publicCardId: "multi-platform-card",
    data: "4815820384839526|11/28|661|HANS Orinda Motors|63 Orinda way|Orinda|CA|94563|UNITED STATES|24.7.5.222|hans4599@gmail.com|14157134599|",
  },


  // PV61 - PV70 → usdt-compatible-card
  {
    id: "pv-61",
    publicCardId: "usdt-compatible-card",
    data: "4031630835271395|01/29|347|Lacey Ciechanowicz|1613 thorndale street|Indianapolis|IN|46214|UNITED STATES|69.230.91.66|laceyleeciechanowicz@gmail.com|13177773248|",
  },
  {
    id: "pv-62",
    publicCardId: "usdt-compatible-card",
    data: "4430473040314461|03/27|577|William Evans|2304 Plymouth colony Dr NE|Atlanta|GA|30345|UNITED STATES|172.56.70.99|williamkevans1964@gmail.com|7068816954|",
  },
  {
    id: "pv-63",
    publicCardId: "usdt-compatible-card",
    data: "6011008430411048|09/27|617|Chris Huey|7325 e 59th pl|Tulsa|OK|74145|UNITED STATES|174.202.163.124|armytulsainfantry@yahoo.cm|9188090011|",
  },
  {
    id: "pv-64",
    publicCardId: "usdt-compatible-card",
    data: "4447962610469797|04/26|837|Isme Ramirez|1135 E. Westwood Dr.|Casa Grande|AZ|85122|UNITED STATES|174.72.19.160|ismeramirez06@gmail.com|4809309446|",
  },
  {
    id: "pv-65",
    publicCardId: "usdt-compatible-card",
    data: "4879170037331346|08/28|069|Amber McKee|225 Raymond circle dr|Mccrory|AR|72101|FRANCE|97.114.54.19|twinkienicole1106@gmail.com|8705197690|",
  },
  {
    id: "pv-66",
    publicCardId: "usdt-compatible-card",
    data: "4033060025774321|11/28|813|Jose Albarracin|3707 W 68th ave|Westminster|CO|80030|UNITED STATES|98.50.108.54|joseyoelrojasalbarracin@gmail.com|7203146999|",
  },
  {
    id: "pv-67",
    publicCardId: "usdt-compatible-card",
    data: "4031631219506380|09/28|763|Jennifer Pifer|8686 East Road|Redwood Valley|CA|95470|UNITED STATES|174.249.147.160|lilred7074203191@gmail.com|17075130768|",
  },
  {
    id: "pv-68",
    publicCardId: "usdt-compatible-card",
    data: "5143773145939509|01/29|691|Madisson Quinn|3117 Jarvis st|San Diego|CA|92106|UNITED STATES|174.78.10.102|madissonmmquinn@gmail.com|16198975745|",
  },
  {
    id: "pv-69",
    publicCardId: "usdt-compatible-card",
    data: "5175462403415060|07/28|710|Christina Worthman|238 S Summit st|Indianapolis|IN|46201|UNITED STATES|50.90.23.31|Chicosugarmarley@gmail.com|3179546756|",
  },
  {
    id: "pv-70",
    publicCardId: "usdt-compatible-card",
    data: "4031630570587617|11/28|880|Joseph Montanez|4175 choteau circle|Rancho Cordova|CA|95742|UNITED STATES|76.149.10.208|jrjosephmontanez1977@outlook.com|12792515619|",
  },


  // PV71 - PV80 → redpocket-card
  {
    id: "pv-71",
    publicCardId: "redpocket-card",
    data: "4046090095166244|11/28|911|Jose Albarracin|3707 W 68th ave|Westminster|CO|80030|UNITED STATES|98.50.108.54|joseyoelrojasalbarracin@gmail.com|7203146999|",
  },
  {
    id: "pv-72",
    publicCardId: "redpocket-card",
    data: "4060687047909711|09/27|879|Sophie Aragon|732 potrero way|Salinas|CA|93907|UNITED STATES|174.249.151.3|animelife6721@gmail.com|8312080114|",
  },
  {
    id: "pv-73",
    publicCardId: "redpocket-card",
    data: "4815820351453665|08/27|298|Swarnjeet Kaur|4641 La mirada Avenue|Los Angeles|CA|90029|UNITED STATES|76.33.133.17|swarnjeetk408@gmail.com|6268798164|",
  },
  {
    id: "pv-74",
    publicCardId: "redpocket-card",
    data: "4217833096934141|01/25|519|Codey Wise|7150 W Colfax|Lakewood|CO|80214|UNITED STATES|209.181.64.95|clow303@gmail.com|7206541074|",
  },
  {
    id: "pv-75",
    publicCardId: "redpocket-card",
    data: "4355443657825282|07/27|558|Tholen Edwards|176 Lester Rd NE Baconton GA USA|Baconton|GA|317160312|UNITED STATES|174.206.168.110|yorkelizabeth8908@gmail.com|2293642776|",
  },
  {
    id: "pv-76",
    publicCardId: "redpocket-card",
    data: "4400664277024304|05/27|055|Esperanza Catipunan|7700 e speedway boulevard|Tucson|AZ|85710|UNITED STATES|70.162.75.231|sweetiejen75@gmail.com|5202701479|",
  },
  {
    id: "pv-77",
    publicCardId: "redpocket-card",
    data: "379842339512004|10/27|7671|James Payne|135 Mclellan Place|Bloomingdale|GA|31302|UNITED STATES|174.249.176.138|bentnailwiz@gmail.com|19126593312|",
  },
  {
    id: "pv-78",
    publicCardId: "redpocket-card",
    data: "4264980003019441|06/25|093|Kelly Johnson|7111 Galaxy Brook|San Antonio|TX|78252|UNITED STATES|38.68.63.254|kjohnson7989@gmail.com|18052074950|",
  },
  {
    id: "pv-79",
    publicCardId: "redpocket-card",
    data: "4447962406078596|08/24|743|Lisa Scarborough|806 Flagler Ave|Edgewater|FL|32132|UNITED STATES|75.206.42.21|lisascarborough00@gmail.com|3863330908|",
  },
  {
    id: "pv-80",
    publicCardId: "redpocket-card",
    data: "4430473082719296|09/26|514|Alexa Rocha|2426 Elko Road|Elko|GA|31025|UNITED STATES|166.198.157.57|alexarocha2007@gmail.com|7654696851|",
  },


  // PV81 - PV90 → daraz-card
  {
    id: "pv-81",
    publicCardId: "daraz-card",
    data: "6011011982194038|07/28|403|Aaron Kuhr|153 Calle Vista|Camarillo|CA|93010|UNITED STATES|47.144.0.150|aaronjk43@outlook.com|8053173757|",
  },
  {
    id: "pv-82",
    publicCardId: "daraz-card",
    data: "5396890005048249|07/28|859|Brandon Davis|4831 Warm Springs Rd|Columbus|GA|31909|UNITED STATES|12.133.71.130|Branfrog26@gmail.com|7064051834|",
  },
  {
    id: "pv-83",
    publicCardId: "daraz-card",
    data: "4031631255627587|03/29|359|Heather Tyson|1104 Seiler ave|Savannah|GA|31404|UNITED STATES|67.174.166.237|heathertyson2014@gmail.com|9123288836|",
  },
  {
    id: "pv-84",
    publicCardId: "daraz-card",
    data: "4112380070712750|11/26|732|Sonia Rohr|909 East 24th Ave.|Hutchinson|KS|67502|UNITED STATES|174.213.210.81|rohrsonia06@gmail.com|6208999027|",
  },
  {
    id: "pv-85",
    publicCardId: "daraz-card",
    data: "4020870120384510|02/28|603|Yajaira Nieto|26989 Lost Woods Circle|Bonita Springs|FL|34135|UNITED STATES|70.166.124.242|heron180@aol.com|2394404237|",
  },
  {
    id: "pv-86",
    publicCardId: "daraz-card",
    data: "4039059140807655|03/28|940|LaVonda Wallace|527 Broadway|Quincy|IL|62301|UNITED STATES|166.181.84.161|lavondawallace54@gmail.com|2172096292|",
  },
  {
    id: "pv-87",
    publicCardId: "daraz-card",
    data: "4447962384097212|02/25|621|Denise Wunschel|101 W Evergreen Dr|Lake City|IA|51449|UNITED STATES|67.208.51.119|denisewunschel@yahoo.com|7122919111|",
  },
  {
    id: "pv-88",
    publicCardId: "daraz-card",
    data: "4640182056345238|12/27|897|Rob Schreck|1420 Marshall Farm St|Wake Forest|NC|27587|UNITED STATES|64.99.144.88|golftripp@gmail.com|6194605565|",
  },
  {
    id: "pv-89",
    publicCardId: "daraz-card",
    data: "4232231144729178|06/27|171|Stephen Munch|1231 Monterey boulevard|Euless|TX|76040|UNITED STATES|166.199.246.73|mattmunch12@gmail.com|16194199405|",
  },
  {
    id: "pv-90",
    publicCardId: "daraz-card",
    data: "379760544652029|12/26|5094|Melinda Mathes|2633 Telegraph Ave|Oakland|CA|94612|UNITED STATES|170.39.168.84|bodygeekmovement@gmail.com|3092212633|",
  },


  // PV91 - PV100 → subscription-card
  {
    id: "pv-91",
    publicCardId: "subscription-card",
    data: "5311061156020518|07/27|767|Teneka Minix|249 W 118th St|Los Angeles|CA|90061|UNITED STATES|166.199.113.32|Cookierobinson74@gmail.com|2133522403|",
  },
  {
    id: "pv-92",
    publicCardId: "subscription-card",
    data: "5108050284880981|02/28|338|Tammy Swink|1613 n meridian ave|Wichita|KS|67203|UNITED STATES|174.250.211.27|tjtangels24@gmail.com|3163588007|",
  },
  {
    id: "pv-93",
    publicCardId: "subscription-card",
    data: "4031630301155007|01/29|499|Guilbert Charles|157 Lawton place drive|Sylvania|GA|30467|UNITED STATES|174.254.32.175|charlesguilbert12@gmail.com|9124252263|",
  },
  {
    id: "pv-94",
    publicCardId: "subscription-card",
    data: "4046090019671360|03/29|476|Ariana Castellanos|518 Ethruschavenid|Peoria|IL|61603|UNITED STATES|71.201.218.221|arianacastellanos277@gmail.com|3099665537|",
  },
  {
    id: "pv-95",
    publicCardId: "subscription-card",
    data: "4031630455235761|01/29|808|Julian Chu|302 Roosevelt Way|San Francisco|CA|94114|UNITED STATES|73.15.27.57|chujulian55@gmail.com|4152905918|",
  },
  {
    id: "pv-96",
    publicCardId: "subscription-card",
    data: "377939534992007|11/28|4521|Greater Calumet Area USBC|900 North Broad Street|Griffith|IN|46319|UNITED STATES|174.239.121.20|gcaba8133@yahoo.com|2192869686|",
  },
  {
    id: "pv-97",
    publicCardId: "subscription-card",
    data: "4400661814152523|05/28|821|Pedro Miranda|769 center lane|Santa Paula|CA|93060|UNITED STATES|107.115.41.73|kevinhaynes82@yahoo.com|8057940987|",
  },
  {
    id: "pv-98",
    publicCardId: "subscription-card",
    data: "4169941322769179|09/27|948|Destiny Cole|505 church st|Royal|IA|51357|UNITED STATES|207.177.124.234|ilovwolfvs356@gmail.com|7122400968|",
  },
  {
    id: "pv-99",
    publicCardId: "subscription-card",
    data: "4060320366034966|08/27|267|Katherine Fager|7950 W 167th Street|Tinley Park|IL|60477|UNITED STATES|67.173.36.241|classicrockjunkie@ymail.com|2199519189|",
  },
  {
    id: "pv-100",
    publicCardId: "subscription-card",
    data: "4031630452787590|04/29|300|Kari Ryder|1402 s ida st|Wichita|KS|67211|UNITED STATES|68.102.60.103|ryder.kari12@gmail.com|3165505848|",
  },

];