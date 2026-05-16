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
  data: "4941490130665786|02/28|255|George Goldman|13594 E Onyx Ct|Scottsdale|AZ|85259|UNITED STATES|72.210.45.235|georgegoldman@sbcglobal.net|3302121075|",  
},  
{  
  id: "pv-2",  
  publicCardId: "red-pocket-usdt",  
  data: "5178057796033046|06/28|936|David Meekins|121 fm946 south|Oakhurst|Texas|77359|UNITED STATES|174.251.241.132|dmkns51@gmail.com|9363557863|",  
},  
{  
  id: "pv-3",  
  publicCardId: "red-pocket-usdt",  
  data: "4499958100739332|11/28|276|Lisa Bowling|11803 E  Track Rd|Moundville|Missouri|64771|UNITED STATES|130.51.167.242|dlfarms18@gmail.com|4176842379|",  
},  
{  
  id: "pv-4",  
  publicCardId: "red-pocket-usdt",  
  data: "4867960043913085|02/28|565|Donna Weber|5458 Riverbrook Dr|Columbus|OH|432215622|UNITED STATES|26001009b007169ad71cb288539c168|donnashipp395@gmail.com|6145427120|",  
},  
{  
  id: "pv-5",  
  publicCardId: "red-pocket-usdt",  
  data: "5178058627811311|10/27|853|Joedda McDonald|P.O. box 5135|Marysville|California|95901|UNITED STATES|260017006b30a1e02c3fd74e6b5c6079|joeddamcdonald@gmail.com|4156012599|",  
},  
{  
  id: "pv-6",  
  publicCardId: "red-pocket-usdt",  
 data: "5425395046052262|06/27|694|Sam Cavallari|98 Briar Ridge Lane|Lake Villa|Illinois|60046|UNITED STATES|260124541039c6066c2defffe737e87|scavallari123@gmail.com|8475313759|",  
},  
{  
  id: "pv-7",  
  publicCardId: "red-pocket-usdt",  
  data: "5178059744295495|05/28|018|Megan Martineau|6 Marcel Way|Hooksett|NH|03106|UNITED STATES|26001000b01033d0812bea12d4e3940|mmartineau417@gmail.com||",  
},  
{  
  id: "pv-8",  
  publicCardId: "red-pocket-usdt",  
  data: "5178006697008714|04/28|576|Deidre Skokan|3670 S WALAPAI dr|Flagstaff|AZ|86005|UNITED STATES|24.156.41.149|das465@nau.edu|8327660536|",  
},  
{  
  id: "pv-9",  
  publicCardId: "red-pocket-usdt",  
  data: "5480426717339449|01/29|219|Shirley Barsh|3000 Woodworth Place|Hazelcrest|Illinois|60430|UNITED STATES|26001700b2505cb0aa825f0b4b574ffe|barshsjk@aol.com|7085601129|",  
},  
{  
  id: "pv-10",  
  publicCardId: "red-pocket-usdt",  
  data: "5178057721947971|11/28|260|Dawn Burke|1417 Woodland Beach Rd.|Pasadena|MD|21122|UNITED STATES|71.244.236.11|dpburke123@msn.com|4103822520|",  
},

{  
  id: "pv-11",  
  publicCardId: "amazon-card",  
  data: "372503340724007|10/29|0325|Kathleen Jacobsen|po box 296|ville CT 06085 USA|Connecticut|06085|UNITED STATES|24.34.225.192|kmj162@gmail.com|18607066322|",  
},  
{  
  id: "pv-12",  
  publicCardId: "amazon-card",  
  data: "5463256946405187|10/27|806|Forresst Kipp|31 Kipp Ln|Athens|Pennsylvania|18810|UNITED STATES|20015b04bc51fd8914a2b68ca3758d|dnfkipp@gmail.com|5702472934|",  
},  
{  
  id: "pv-13",  
  publicCardId: "amazon-card",  
  data: "371718956482002|09/29|3684|Kathy Rumbaugh|145 Sussex Drive|State College|Pennsylvania|16801|UNITED STATES|260198a440085c015f2afe022837bb9|Kathy.Rumbaugh@gmail.com|8148830395|",  
},  
{  
  id: "pv-14",  
  publicCardId: "amazon-card",  
  data: "4003449179017460|10/29|930|Carolyn Burkhart|1038 Larkspur|New Braunfels|Texas|78130|UNITED STATES|2600170014d19c00c6b69f8b1ee73e|bonkab44@gmail.com|4322702885|",  
},  
{  
  id: "pv-15",  
  publicCardId: "amazon-card",  
  data: "371320345852001|09/29|3911|Linda Richardson|5861 Goodrich Toad|Clarence Center|NY|14032|UNITED STATES|67.241.164.215|lrichard731@aol.vom|7169304094|",  
},  
{  
  id: "pv-16",  
  publicCardId: "amazon-card",  
  data: "5178057784238854|02/26|184|Tanner Rutherford|1604 W 6th st|Muncie|Indiana|47302|UNITED STATES|26001015b03f54ce50f8afa3b158dafc|Tannerwayne1991@gmail.com|7656202231|",  
},  
{  
  id: "pv-17",  
  publicCardId: "amazon-card",  
  data: "4334770072163626|02/27|829|W Guinn|742 Grassy Hollow Road|Tazewell|TN|37879|UNITED STATES|174.212.106.235|tunnelratt54@yahoo.com|8655857792|",  
},  
{  
  id: "pv-18",  
  publicCardId: "amazon-card",  
  data: "5328398383668037|06/28|135|Lisa Brimacombe|9936 Kay Ridge|Yukon|Oklahoma|73099|UNITED STATES|26001700526049c098157747adfdfd|lisa.brimacombe@gmail.com|4053150547|",  
},  
{  
  id: "pv-19",  
  publicCardId: "amazon-card",  
  data: "377978816371001|07/29|0007|GuillermoF Pimentel|125 Abbey Hollow Dr|Apopka|FL|327122322|BOSNIA AND HERZEGOVINA|26039001a10039eb41cb8c9ede7ea82|gfpimentel@cfl.rr.com|4077829584|",  
},  
{  
  id: "pv-20",  
  publicCardId: "amazon-card",  
  data: "5178006925470819|11/29|372|Morticia Williams|1306 S Roxboro St|Durham|North Carolina|27707|UNITED STATES|97.129.170.13|tishwilliams71@yahoo.com|9193585301|",  
},

{  
  id: "pv-21",  
  publicCardId: "meta-ads-card",  
  data: "379781448391001|04/27|5482|Shelia Tracy|504 South Hall St|Grangeville|ID|83530|UNITED STATES|73.137.138.235|sydney.tracy@yahoo.com|2089830589|",  
},  
{  
  id: "pv-22",  
  publicCardId: "meta-ads-card",  
  data: "5178059400464427|08/28|819|Shannah Greenlee|10468 Northlake Circle|Kemp|Texas|75143|UNITED STATES|47.223.157.239|Shagreen80@gmail.com|9033402826|",  
},  
{  
  id: "pv-23",  
  publicCardId: "meta-ads-card",  
  data: "5213331274491746|09/27|711|Barbara Gay|7842 holiday rd s|Jacksonville|Florida|32216|UNITED STATES|2601346b00b7f0b9488bb363445eae|barbaragay1942@gmail.com|9048947599|",  
},  
{  
  id: "pv-24",  
  publicCardId: "meta-ads-card",  
  data: "5156789719339326|01/27|600|Gerald Smith|1806 harlequin pl.|Allen|Texas|75002|UNITED STATES|97.99.243.102|Gcs8852@gmail.com|9727271658|",  
},  
{  
  id: "pv-25",  
  publicCardId: "meta-ads-card",  
  data: "5156768109162472|08/27|685|Cheryl Hubbard|7107 Navajo Trl|Solon|Ohio|44139|UNITED STATES|173.88.170.142|cherylhubbard@gmail.com|4403181593|",  
},  
{  
  id: "pv-26",  
  publicCardId: "meta-ads-card",  
  data: "379771992552009|05/27|3564|pamela haskin|400 s. bryn mawr avenue|Bryn Mawr|PA|19010|UNITED STATES|260040407e46c90039c5957162068071|newfe6@verizon.net|6105278178|",  
},  
{  
  id: "pv-27",  
  publicCardId: "meta-ads-card",  
  data: "5108750220101661|06/27|355|Janet Riesbeck|20 Carriage Hill drive|Windham|ME|04062|UNITED STATES|74.78.36.95|pjr1996@yahoo.com||",  
},  
{  
  id: "pv-28",  
  publicCardId: "meta-ads-card",  
  data: "5237820116343760|05/29|033|Sarah Chesney|23400 Kingsland Boulevard|Katy|TX|77494|UNITED STATES|73.166.85.250|sjches@email.wm.edu|5126369474|",  
},  
{  
  id: "pv-29",  
  publicCardId: "meta-ads-card",  
  data: "4037840069106902|01/29|101|Muharer Quadar|7209 West 103rd Street|Palos Hills|Illinois|60465|UNITED STATES|2601244450143a0c2f82df19caa97|Moequadar@yahoo.com|7087172684|",  
},  
{  
  id: "pv-30",  
  publicCardId: "meta-ads-card",  
  data: "5343480042018613|01/28|057|Jessica Wilson|6921 Welsh circle|Las Vegas|Nevada|89108|CANADA|26001011a0003b623dc47ff8ae755a4f|jesdolbaby@yahoo.com|7029035900|",  
},

{  
  id: "pv-31",  
  publicCardId: "tiktok-coins-card",  
  data: "4852464962052774|03/30|369|Jalen Green|109 Pollen Drive|La Plata|MD|20646|UNITED STATES|96.255.161.216|greenjalen32@gmail.com|2404353170|",  
},  
{  
  id: "pv-32",  
  publicCardId: "tiktok-coins-card",  
  data: "5444008153440140|10/28|150|Eric Roberts|910 Brett Dr Apt 99|Hinesville|Florida|31313|UNITED STATES|2607fb90e24aace8c965ed538b56b18c|eroberts130@gmail.com|7272384914|",  
},  
{  
  id: "pv-33",  
  publicCardId: "tiktok-coins-card",  
  data: "4610460149102535|10/29|478|Anthony Brown|133 Alma Lane|Whitewright|Texas|75491|UNITED STATES|24.100.43.147|browna@leonardisd.net||",  
},  
{  
  id: "pv-34",  
  publicCardId: "tiktok-coins-card",  
  data: "379293438642005|10/27|6284|Richard Errante|7189 Nw 80th Way|Tamarac|FL|33321|UNITED STATES|2600170082e0e300b87f93908f84dc34|rerrante@bellsouth.net|9546383439|",  
},  
{  
  id: "pv-35",  
  publicCardId: "tiktok-coins-card",  
  data: "371584564451031|01/28|1090|Kevin Koch|957 Sanctuary Ln|Maineville|Ohio|45039|UNITED STATES|65.186.21.6|Kevinjillkoch@gmail.com|5133281841|",  
},  
{  
  id: "pv-36",  
  publicCardId: "tiktok-coins-card",  
  data: "372718509733009|03/27|3851|Christine Smith|4409 Hedge Dr E|Lakeland|Florida|33812|UNITED STATES|26039000740218e7b9b15adf62be5c44|pestlady12@gmail.com|8635819922|",  
},  
{  
  id: "pv-37",  
  publicCardId: "tiktok-coins-card",  
  data: "4315037521264287|02/28|684|Richard Nieves|832 Litchfield Lane|Santa Barbara|CA|93109|UNITED STATES|24.254.81.104|nievesrichard374@gmail.com|8056360283|",  
},  
{  
  id: "pv-38",  
  publicCardId: "tiktok-coins-card",  
  data: "4742080043190583|06/28|605|Vicki Johns|45206 232nd st.|Madison|South Dakota|57042|UNITED STATES|26001014b1a61f7bd82ee5d9e9aa6e3|johnsvicki@yahoo.com|6052700899|",  
},  
{  
  id: "pv-39",  
  publicCardId: "tiktok-coins-card",  
  data: "4037840099270090|06/29|955|Elizabeth Jacuinde|152 O St Spc 50|Lincoln|California|95648|UNITED STATES|107.202.46.147|joseyelizabeth90@icloud.com|9163017993|",  
},  
{  
  id: "pv-40",  
  publicCardId: "tiktok-coins-card",  
  data: "4347697091516283|11/29|445|Miroslava Zaragoza|14280 Palmea Dr|Moreno Valley|California|92553|UNITED STATES|2607fb908f047749b4b1ac0c1e24934|Mirosmouse.mz@gmail.com|9514641327|",  
},

{  
  id: "pv-41",  
  publicCardId: "midas-buy-card",  
  data: "4347695013595591|05/29|366|Nathan Maes|3677 Teller St Apt A|Wheat Ridge|CO|80033|UNITED STATES|26012851019910793160879a9fe611|maesnate.nm@gmail.com|7204740611|",  
},  
{  
  id: "pv-42",  
  publicCardId: "midas-buy-card",  
  data: "4139520105166253|09/29|003|Cary Lang|606 1|2 South Nash St|Hortonville|WI|UNITED STATES|cjlnash@yahoo.com|9207076863|UnitedStates|",  
},  
{  
  id: "pv-43",  
  publicCardId: "midas-buy-card",  
  data: "5178057939417650|11/28|339|Lissette Cabasquini|1123 Church Street|Lebanon|Pennsylvania|17046|UNITED STATES|166.199.100.26|lissettecabasquini@comcast.net|7176442611|",  
},  
{  
  id: "pv-44",  
  publicCardId: "midas-buy-card",  
  data: "4270815000819256|02/29|119|Judy Steger|5758 Farm to Market Road 1844|Gladewater|Texas|75647|UNITED STATES|199.168.80.5|doug.steger@yahoo.com|9037360825|",  
},  
{  
  id: "pv-45",  
  publicCardId: "midas-buy-card",  
  data: "5466388441014375|05/29|423|Kathleen Archer|8107 Townley Rd|Huntersville|NC|28078|UNITED STATES|260017002698a1034e31e09de2a3733|kathleenarcher1@gmail.com||",  
},  
{  
  id: "pv-46",  
  publicCardId: "midas-buy-card",  
  data: "372242019812005|06/27|4515|Sarah Dahl|3713 Clairmont Rd|Bismarck|ND|58503|UNITED STATES|172.103.15.131|sarahdahlmba@gmail.com|7012266844|",  
},  
{  
  id: "pv-47",  
  publicCardId: "midas-buy-card",  
  data: "5218702994692836|02/27|002|Jimmie Riley|916 east Lafayette ave|Jacksonville|IL|62650|UNITED STATES|2607fb9122c681d8ac39b712b3c19fd7|burnettmelissa548@gmail.com|2179533839|",  
},  
{  
  id: "pv-48",  
  publicCardId: "midas-buy-card",  
  data: "4254180443633891|02/28|374|Maria Vorel|3212 Woodland Lane|Alexandria|Virginia|223092235|UNITED STATES|71.191.186.117|mjvorel@gmail.com|7037805432|",  
},  
{  
  id: "pv-49",  
  publicCardId: "midas-buy-card",  
  data: "5425395005072988|06/29|522|GWEN TAYLOR|12827 Southbridge Road|Houston|TX|77047|UNITED STATES|107.115.5.134|gwenn.taylor@gmail.com|7137333611|",  
},  
{  
  id: "pv-50",  
  publicCardId: "midas-buy-card",  
  data: "5491128615234055|10/29|804|TOM THRASHER|109 Lucille dr sw|DECATUR|Alabama|35603|UNITED STATES|97.80.195.79|thrasherthomas@rocketmail.com|2565652099|",},  
{  
  id: "pv-51",  
  publicCardId: " multi-platform-card",  
  data: "4147400346003807|04/29|954|Gloria Cottman|521 walnut st|Felton|Delaware|19943|UNITED STATES|260114e101ff304431bca0a4d6e1da|cottman100@gmail.com|3023592430|",  
},  
{  
  id: "pv-52",  
  publicCardId: " multi-platform-card",  
  data: "373965890061016|05/29|1372|Kathleen Murrie|8152 Grimes Road|Russellville|Ohio|45168|UNITED STATES|2600387080348|dkgeblueroofkm@gmail.com||",  
},  
{  
  id: "pv-53",  
  publicCardId: " multi-platform-card",  
  data: "4147342080433412|01/28|376|Bettie Williams|2909 W Palmaire Ave|Phoenix|AZ|85051|UNITED STATES|68.106.55.59|plstscrub@yahoo.com|6235214821|",  
},  
{  
  id: "pv-54",  
  publicCardId: " multi-platform-card",  
  data: "4176010001837565|05/29|157|Elizabeth Guilas|7124 Cross Creek Circle|Dublin|CA|94568|DENMARK|24.10.58.210|Elizabethguilas24@yahoo.com|9254135814|",  
},  
{  
  id: "pv-55",  
  publicCardId: " multi-platform-card",  
  data: "5178058358091448|09/28|890|Deborah Strunk|741 Baltimore Rd|Valparaiso|IN|463858617|UNITED STATES|26001008a001d26206ac2668c7b83ac|jerrylstrunk@yahoo.com|2196295811|",  
},  
{  
  id: "pv-56",  
  publicCardId: " multi-platform-card",  
  data: "5243661605044515|08/29|623|Priskila Silaban|6975 Burlington Dr|Beaumont|TX|77706|UNITED STATES|99.2.44.22|kikiabigail@yahoo.co.id|3375290979|",  
},  
{  
  id: "pv-57",  
  publicCardId: " multi-platform-card",  
  data: "4147400352287575|06/29|191|Jimmy|janet Beacham|3611 Elveden Rd|New Bern|North Caro|UNITED STATES|jbeacham1@suddenlink.net|2526353351|UnitedStates|",  
},  
{  
  id: "pv-58",  
  publicCardId: " multi-platform-card",  
  data: "5346361206817288|07/28|108|Frances Sullivan|362 Clarion Road|Lawrenceville|GA|30043|UNITED STATES|172.126.34.175|boogie898@att.net|6783711776|",  
},  
{  
  id: "pv-59",  
  publicCardId: " multi-platform-card",  
  data: "4008992004826360|01/28|386|Glen Burgess|106 South Bayou Street|Mobile|Alabama|36602|UNITED STATES|26014c4810136b0f97f2036986c116e|glenaudi@yahoo.com|3049934491|",  
},  
{  
  id: "pv-60",  
  publicCardId: " multi-platform-card",  
  data: "4143980563689507|12/29|613|Janet oswalt|602 east locust st|Philipsburg|Pennsylvania|16686|UNITED STATES|73.64.108.92|janetoswalt69@gmail.com|8147802296|",  
},

{  
  id: "pv-61",  
  publicCardId: "usdt-compatible-card",  
  data: "5213071009924773|05/28|656|Amy Williams|10207 1|2 Lena Bower Rd|Marysville|Indiana|UNITED STATES|floremie77@gmail.com|8127252085|UnitedStates|",  
},  
{  
  id: "pv-62",  
  publicCardId: "usdt-compatible-card",  
  data: "5537320001001778|10/29|350|Valorie Cartrette|35 w Crusselle st|Macon|Georgia|31078|UNITED STATES|174.209.107.245|Vcc74@yahoo.com|6787029139|",  
},  
{  
  id: "pv-63",  
  publicCardId: "usdt-compatible-card",  
  data: "4147099775372293|03/28|275|Janet Greenberg|12123 Havenmist Drive|Tomball|Texas|77375|UNITED STATES|2600170016a0fbe0a955d560ee8a2cba|Rjmsb@sbcglobal.net|7137753741|",  
},  
{  
  id: "pv-64",  
  publicCardId: "usdt-compatible-card",  
  data: "4108810114455558|12/29|458|Regina Kearns|656 South Avenue|Bradford|Pennsylvania|16701|UNITED STATES|174.208.46.253|Gk4u2nv@hotmail.com|8143317292|",  
},  
{  
  id: "pv-65",  
  publicCardId: "usdt-compatible-card",  
  data: "4727768251053258|07/29|235|Enrico Quiniones|88 salmon way|Dutch Harbor|AK|99692|UNITED STATES|260559c84535d1050bb6f6bee75b5a|Ericqnns1@gmail.com|9073595685|",  
},  
{  
  id: "pv-66",  
  publicCardId: "usdt-compatible-card",  
  data: "372271299481009|04/29|5119|Annamaria SmithGallimore|859 N. HWY 25W|Williamsburg|KY|40769|UNITED STATES|192.188.130.10|anna.gallimore@ucumberlands.edu|6065158460|",  
},  
{  
  id: "pv-67",  
  publicCardId: "usdt-compatible-card",  
  data: "377211200285003|11/29|1614|Bibiana Stephen|154 Malloy Drive|East Quogue|NY|11942|UNITED STATES|69.119.246.29|bstephen5@optonline.net|6318710853|",  
},  
{  
  id: "pv-68",  
  publicCardId: "usdt-compatible-card",  
  data: "376758158923002|09/29|5823|Mohamad Elzein|11700 Chalmers St|Detroit|Michigan|48205|UNITED STATES|68.40.128.166|melzein62@hotmail.com|3137701962|",  
},  
{  
  id: "pv-69",  
  publicCardId: "usdt-compatible-card",  
  data: "4154177595105216|04/29|409|Brooke Dilworth|2124 Moores Mill Road|Auburn|Alabama|36830|UNITED STATES|99.191.234.115|brooke@diannes.com|3344449244|",  
},  
{  
  id: "pv-70",  
  publicCardId: "usdt-compatible-card",  
  data: "4347691115377145|11/28|422|Ana Rodriguez|133 Camelot way|Bolingbrook|Illinois|60440|UNITED STATES|76.150.153.205|Mayradom87@gmail.com|6308634341|",  
},

{  
  id: "pv-71",  
  publicCardId: "redpocket-card",  
  data: "5178059208245549|01/29|739|Cheryl White|1035 Camphor Street|Manteca|CA|95337|UNITED STATES|67.218.119.165|taxmofin2@gmail.com|2092306162|",  
},  
{  
  id: "pv-72",  
  publicCardId: "redpocket-card",  
  data: "5108050224827514|03/28|403|Joe Ellis|1736Edgewood Hill Circle|Hagerstown|Maryland|21740|UNITED STATES|24.170.225.96|tattoo1968joe@gmail.com|2405139463|",  
},  
{  
  id: "pv-73",  
  publicCardId: "redpocket-card",  
  data: "372515000533676|03/29|7263|Jenifer Lewis|331 Seiler rd|Portsmouth|Ohio|45662|UNITED STATES|26003870809bd|jenifercarver30@gmail.com|7403526725|",  
},  
{  
  id: "pv-74",  
  publicCardId: "redpocket-card",  
  data: "371701668779006|12/29|0315|D Fenster|166 Bunn Drive|Princeton|NJ|08540|UNITED STATES|173.71.126.176|dfenster@comcast.net|6099243711|",  
},  
{  
  id: "pv-75",  
  publicCardId: "redpocket-card",  
  data: "5186983000528598|01/28|581|Christiane ZablitLorts|6631 41st Street Cir E  Fl Sarasota|Sarasota|FL|34243|UNITED STATES|97.106.44.150|christiane56@hotmail.com|9415394715|",  
},  
{  
  id: "pv-76",  
  publicCardId: "redpocket-card",  
  data: "4011540108276720|01/28|405|Aubrey Raisor|1506 Lee Rd|Saint Johns|FL|32259|UNITED STATES|26001006b1369108210e6ba5d0af781a|aubreyraisor@yahoo.com|9042172713|",  
},  
{  
  id: "pv-77",  
  publicCardId: "redpocket-card",  
  data: "5537320057934385|09/29|425|Traci Dean|1241 banks academy Rd|Carnesville|Georgia|30521|UNITED STATES|50.96.91.53|Tracileann3@gmail.com|7064504424|",  
},  
{  
  id: "pv-78",  
  publicCardId: "redpocket-card",  
  data: "4707930532563125|11/29|278|Linda Lupkovich|115 Old Short Hills Rd|West Orange|NJ|070521024|UNITED STATES|2607fb9113be93e0b116a331f3d3c113|lindahamzie1@gmail.com|9734154983|",  
},  
{  
  id: "pv-79",  
  publicCardId: "redpocket-card",  
  data: "379812030871009|06/29|3693|Bonnie Norman|117 LARCHMONT DR|Savannah|GA|31419|UNITED STATES|260190243032680d89d8661e4d4926e|holding39bn@aol.com|9124410723|",  
},  
{  
  id: "pv-80",  
  publicCardId: "redpocket-card",  
  data: "5156767862815839|09/29|224|Russell Puckhaber|46 Sprucetop Drive|Mahopac|New York|10541|UNITED STATES|71.125.46.146|rpuck55@yahoo.com|9149808711|",  
},

{  
  id: "pv-81",  
  publicCardId: "daraz-card",  
  data: "5415280385367335|03/29|935|Roy Yamasaki|95775 Paikauhale Street|Mililani|HI|96789|UNITED STATES|72.234.50.75|rsyama123@gmail.com|8084299406|",  
},  
{  
  id: "pv-82",  
  publicCardId: "daraz-card",  
  data: "5178058821020602|06/28|714|Yvonne Hayes|11414 West Cambridge Avenue|Avondale|Arizona|85392|UNITED STATES|260088003119c300ac3fcba0fa38b29a|yvonne.hayes62@gmail.com||",  
},  
{  
  id: "pv-83",  
  publicCardId: "daraz-card",  
  data: "5156769476293387|10/28|491|Sonia Rodrguez|1307 W Nassau St|Tampa|Florida|33607|UNITED STATES|47.200.206.58|soniabalton1971@gmail.com|8135701624|",  
},  
{  
  id: "pv-84",  
  publicCardId: "daraz-card",  
  data: "4809901027657703|02/29|537|Cathy Doring|1313 55th Avenue North|St. Petersburg|FL|33703|UNITED STATES|46.222.231.109|catdoring@aol.com|7278677458|",  
},  
{  
  id: "pv-85",  
  publicCardId: "daraz-card",  
  data: "4388576107497540|05/29|400|Arthur Haralampopoulos|1102 Spahn Drive|Waunakee|Wisconsin|53597|UNITED STATES|26012432302cce0644da022452e41a3|gahara@aol.com|7736123351|",  
},  
{  
  id: "pv-86",  
  publicCardId: "daraz-card",  
  data: "379790984731009|03/28|7587|Wade Littlefield|5409 Overseas Hwy|Marathon|FL|33050|UNITED STATES|12.13.164.66|wl2355@outlook.com|3055877465|",  
},  
{  
  id: "pv-87",  
  publicCardId: "daraz-card",  
  data: "5379931102286703|05/28|947|cathy gorczyca|60 Della Dr|Buffalo|NY|142183205|UNITED STATES|26037080bd03699a95f48cb1ae769d92|cathysgorczyca@gmail.com||",  
},  
{  
  id: "pv-88",  
  publicCardId: "daraz-card",  
  data: "373778705352086|11/30|2792|MARIA MONTELONGO|10141 W Lehigh Ave|Lakewood|Colorado|80235|UNITED STATES|97.122.194.37|mlmmontelo@msn.co|7202449259|",  
},  
{  
  id: "pv-89",  
  publicCardId: "daraz-card",  
  data: "5171487852485599|03/29|006|Ron Green|671 Kylee Ave|Mesquite|Nevada|89027|UNITED STATES|69.129.148.194|rongreen948@gmail.com|7015707354|",  
},  
{  
  id: "pv-90",  
  publicCardId: "daraz-card",  
  data: "379566843183008|12/29|9549|Tc Ryan|1851 County Road 208|Florence|TX|76527|UNITED STATES|174.197.1.87|tcryan6822@gmail.com|5128184503|",  
},

{  
  id: "pv-91",  
  publicCardId: "subscription-card",  
  data: "373235898493003|06/28|1158|Eva Bickham|2955 CR 3144E|Mount Enterprise|TX|75681|UNITED STATES|64.127.175.95|rebickham@eastex.net||",  
},  
{  
  id: "pv-92",  
  publicCardId: "subscription-card",  
  data: "4447962582927491|03/27|309|Robin IRELAND|29190 State Route 3|Black River|New York|13612|UNITED STATES|260370817941ae54f17b28b0c084ebd6|Auntrld@aol.com|US3157757887|",  
},  
{  
  id: "pv-93",  
  publicCardId: "subscription-card",  
  data: "4190023000225957|10/28|839|Paul Brihn|2326 243rd ave.|Cushing|Wisconsin|54006|UNITED STATES|2603b050398903d0feb5314843346|pvlcbrihn@aol.com|6517881854|",  
},  
{  
  id: "pv-94",  
  publicCardId: "subscription-card",  
  data: "4100640014824084|07/28|709|Denice Prothro|6157 River Rd|Shreveport|LA|71105|UNITED STATES|99.147.117.65|dprothro9236@gmail.com|3186177857|",  
},  
{  
  id: "pv-95",  
  publicCardId: "subscription-card",  
  data: "5232220003351023|07/29|394|Irma Keys|2372 Starling Lane|Opelousas|Louisiana|70570|UNITED STATES|166.199.116.23|Irmakeys@yahoo.com|3372980330|",  
},  
{  
  id: "pv-96",  
  publicCardId: "subscription-card",  
  data: "5115162604113992|01/28|136|Ajah Ector|3780 Towne Crossing|Kennesaw|GA|30144|UNITED STATES|67.191.229.88|Ahjahlove100@gmail.com|4049102437|",  
},  
{  
  id: "pv-97",  
  publicCardId: "subscription-card",  
  data: "5189410086615302|12/28|461|Lia Franzese|20111 Dovekie Ln|Indian Land|South Carolina|29707|UNITED STATES|26036081605c884a43338a3f04b3cc7|lia95ciao@yahoo.com|8474312170|",  
},  
{  
  id: "pv-98",  
  publicCardId: "subscription-card",  
  data: "379753274342002|09/27|245|Grecia Ameneiro|82 West 32nd Street|Hialeah|Florida|33012|UNITED STATES|26015894102341ec5c46361c391746f|cuqui730@bellsouth.net|3057751656|",  
},  
{  
  id: "pv-99",  
  publicCardId: "subscription-card",  
  data: "4744730111467499|03/28|393|Cenie Smith|201 Valley Oak Ct|Holly Springs|NC|27540|UNITED STATES|174.109.165.211|ceniesmith@icloud.com|7042363756|",  
},  
{  
  id: "pv-100",  
  publicCardId: "subscription-card",  
  data: "4270829083135639|04/28|712|Katie Peterson|115 Stillwater Dr|St simons island|Georgia|31522|UNITED STATES|2600387c6e177|Mikekatie.peterson@comcast.net|3603880542|",  
},

];