const wordCategories = {
  Animals: [
    "elephant", "giraffe", "kangaroo", "dolphin", "penguin",
    "alligator", "raccoon", "hamster", "octopus", "butterfly", 
    "lion", "tiger", "bear", "giraffe","monkey", "kangaroo", "wolf", 
    "dog", "cat", "horse", "cow", "pig", "chicken", "sheep","duck", 
    "goose", "eagle", "owl", "penguin", "peacock", "fish", "dolphin", 
    "whale", "shark","crocodile", "alligator", "snake", "turtle", "tortoise",
    "frog", "chameleon", "bat", "fox","deer", "rabbit", "hamster", "llama",
    "camel", "hippopotamus", "gorilla", "chimpanzee","rhinoceros", "ostrich", 
    "kangaroo", "beaver", "cheetah", "panther" 
  ],

  Fruits: [
  "strawberry", "pineapple", "watermelon", "blueberry", "mango",
  "papaya", "cantaloupe", "tangerine", "raspberry", "pomegranate",
  "apple", "banana", "grapefruit", "kiwi", "peach",
  "plum", "apricot", "blackberry", "cranberry", "dragonfruit",
  "fig", "guava", "lychee", "passionfruit", "persimmon",
  "nectarine", "mulberry", "gooseberry", "jackfruit", "durian",
  "starfruit", "boysenberry", "currant", "kumquat", "mandarin",
  "date", "olive", "plantain", "breadfruit", "longan",
  "soursop", "jabuticaba", "rambutan", "pomelo", "tamarind",
  "huckleberry", "cloudberry", "elderberry", "miraclefruit", "salak",
  "sapodilla", "acerola", "feijoa", "melon", "grape",
  "coconut", "orange", "lime", "lemon"
],

  Colors: [
  "turquoise", "magenta", "emerald", "crimson", "lavender",
  "chartreuse", "indigo", "sapphire", "cerulean", "amber",
  "maroon", "scarlet", "burgundy", "ruby", "garnet",
  "violet", "plum", "orchid", "amethyst", "mulberry",
  "teal", "cyan", "aqua", "mint", "seafoam",
  "olive", "sage", "moss", "pear", "lime",
  "gold", "bronze", "copper", "pewter", "silver",
  "charcoal", "slate", "graphite", "ash", "smoke",
  "ivory", "cream", "beige", "tan", "sand",
  "peach", "rose", "salmon", "coral", "apricot",
  "mustard", "honey", "sunflower", "ochre", "mahogany"
],

  Countries: [
  "argentina", "portugal", "singapore", "australia", "germany",
  "switzerland", "tanzania", "norway", "colombia", "newzealand",
  "brazil", "canada", "mexico", "chile", "peru",
  "bolivia", "ecuador", "venezuela", "paraguay", "uruguay",
  "spain", "france", "italy", "belgium", "netherlands",
  "denmark", "sweden", "finland", "iceland", "ireland",
  "england", "scotland", "wales", "poland", "czechrepublic",
  "slovakia", "slovenia", "croatia", "serbia", "romania",
  "bulgaria", "greece", "turkey", "saudiarabia", "united arab emirates",
  "qatar", "egypt", "morocco", "kenya", "southafrica"
]
,
  Sports: [
  "basketball", "baseball", "volleyball", "badminton", "gymnastics",
  "snowboarding", "wrestling", "archery", "triathlon", "surfing",
  "soccer", "football", "hockey", "tennis", "golf",
  "rugby", "cricket", "lacrosse", "softball", "handball",
  "fencing", "karate", "taekwondo", "judo", "boxing",
  "kickboxing", "muaythai", "rowing", "canoeing", "kayaking",
  "sailing", "diving", "swimming", "waterpolo", "paddleboarding",
  "skateboarding", "bmx", "cycling", "mountainbiking", "rockclimbing",
  "track", "marathon", "shotput", "discus", "polevault",
  "equestrian", "bowling", "pickleball", "tabletennis", "dodgeball"
]
,
  Foods: [
  "spaghetti", "quesadilla", "sushi", "lasagna", "pancakes",
  "croissant", "casserole", "meatloaf", "tortellini", "brownies",
  "pizza", "hamburger", "hotdog", "tacos", "burrito",
  "enchiladas", "fajitas", "ramen", "udon", "pho",
  "friedrice", "noodles", "dumplings", "springrolls", "padthai",
  "steak", "barbecue", "ribs", "friedchicken", "meatballs",
  "mashedpotatoes", "macandcheese", "grilledcheese", "sandwich", "sub",
  "omelette", "scrambledeggs", "quiche", "waffles", "frenchtoast",
  "chili", "soup", "stew", "salad", "coleslaw",
  "cupcakes", "cookies", "cheesecake", "applepie", "donuts"
]
,
  Movies: [
  "gladiator", "inception", "interstellar", "godfather", "avatar",
  "titanic", "rocky", "goodfellas", "ratatouille", "braveheart",
  "matrix", "lotr", "starwars", "harrypotter", "jurassicpark",
  "forrestgump", "theshawshankredemption", "pulpfiction", "fightclub", "thedarkknight",
  "avengers", "ironman", "thor", "blackpanther", "spiderman",
  "wonderwoman", "aquaman", "joker", "deadpool", "guardiansofthegalaxy",
  "frozen", "moana", "tangled", "coco", "insideout",
  "toy", "buzzlightyear", "findingnemo", "findingdory", "up",
  "shrek", "monstersinc", "monstersuniversity", "cars", "ratchetandclank",
  "despicableme", "minions", "sing", "zootopia", "cinderella"
],
  MusicalInstruments:[
  "xylophone", "accordion", "saxophone", "harmonica", "ukulele",
  "trombone", "marimba", "banjo", "mandolin", "clarinet",
  "piano", "keyboard", "organ", "guitar", "bass",
  "violin", "cello", "doublebass", "flute", "piccolo",
  "oboe", "bassoon", "trumpet", "frenchhorn", "tuba",
  "drums", "bongo", "conga", "djembe", "tabla",
  "tambourine", "cowbell", "gong", "triangle", "castanets",
  "lyre", "lute", "harp", "sitar", "banhu",
  "erhu", "shamisen", "koto", "bagpipes", "didgeridoo",
  "melodica", "harmonium", "mandola", "dulcimer", "tambura"
]
,
  Professions: [
  "architect", "electrician", "firefighter", "librarian", "mechanic",
  "pharmacist", "engineer", "scientist", "paramedic", "astronaut",
  "teacher", "professor", "doctor", "nurse", "lawyer",
  "judge", "policeofficer", "detective", "chef", "baker",
  "farmer", "gardener", "pilot", "busdriver", "taxidriver",
  "soldier", "sailor", "carpenter", "plumber", "welder",
  "painter", "designer", "musician", "actor", "director",
  "writer", "journalist", "editor", "photographer", "dancer",
  "athlete", "coach", "manager", "executive", "secretary",
  "receptionist", "bartender", "waiter", "barista", "hairdresser"
]
,
  Transportation: [
  "motorcycle", "submarine", "helicopter", "airplane", "scooter",
  "spaceship", "bicycle", "sailboat", "limousine", "bulldozer",
  "car", "truck", "van", "tram", "train",
  "trolley", "bus", "minibus", "taxi", "rickshaw",
  "skateboard", "rollerblades", "hoverboard", "segway", "motorboat",
  "yacht", "ferry", "canoe", "kayak", "rowboat",
  "jet", "glider", "zeppelin", "blimp", "hotairballoon",
  "suborbital", "shuttle", "freighter", "cargo", "tank",
  "bulldozer", "excavator", "forklift", "crane", "snowmobile",
  "sled", "dogsled", "rickshaw", "bobsled", "hovercraft"
]
,
  Landmarks: [
  "eiffeltower", "stonehenge", "colosseum", "machupicchu", "bigben",
  "tajmahal", "pyramids", "mountfuji", "goldengate", "acropolis",
  "statueliberty", "leaningtowerofpisa", "christtheredeemer", "angkorwat", "petra",
  "sydneyopera", "buckinghampalace", "neuschwanstein", "chichenitza", "sagradafamilia",
  "uluru", "brandenburggate", "empirestate", "grandcanyon", "niagarafalls",
  "yosemitenationalpark", "banffnationalpark", "stonecastle", "montstmichel", "toweroflondon",
  "parthenon", "petrifiedforest", "mountainsaint", "lakecomo", "versaille",
  "forbiddencity", "templeofheaven", "machu", "inca", "galapagos",
  "everest", "kilimanjaro", "denali", "angelfalls", "haillan",
  "santorini", "brycecanyon", "glacierbay", "sequoianationalpark", "monumentvalley"
]
,
  Weather: [
  "hurricane", "tornado", "blizzard", "thunderstorm", "hailstorm",
  "heatwave", "drizzle", "downpour", "misty", "overcast",
  "snow", "sleet", "fog", "frost", "icestorm",
  "windstorm", "duststorm", "sandstorm", "monsoon", "cyclone",
  "typhoon", "thunder", "lightning", "rain", "showers",
  "cloudy", "sunny", "partly cloudy", "clear", "gust",
  "breeze", "gale", "squall", "chill", "coldwave",
  "warm front", "cold front", "dew", "flood", "tide",
  "whirlwind", "microburst", "hail", "drifting", "foggy",
  "muggy", "humid", "overheating", "stormy", "freezing"
]
,
  Space: [
  "asteroid", "galaxy", "supernova", "blackhole", "nebula",
  "stardust", "cosmos", "meteoroid", "orbit", "solstice",
  "planet", "moon", "star", "comet", "satellite",
  "spaceship", "rocket", "telescope", "eclipse", "gravity",
  "universe", "cluster", "constellation", "quasar", "pulsar",
  "meteor", "asteroidbelt", "extraterrestrial", "lightyear", "cosmic",
  "crater", "lunar", "solar", "astronaut", "spacewalk",
  "interstellar", "darkmatter", "nebular", "redgiant", "whitehole",
  "wormhole", "eventhorizon", "supergiant", "orbitals", "magnetosphere",
  "exoplanet", "ring", "aurora", "interplanetary", "celestial"
]
,
  Plants: [
  "sunflower", "bluebonnet", "dandelion", "marigold", "lavender",
  "hydrangea", "bamboo", "aloe", "cactus", "primrose",
  "rose", "tulip", "daffodil", "lilac", "peony",
  "orchid", "poppy", "hibiscus", "jasmine", "geranium",
  "freesia", "azalea", "camellia", "magnolia", "gardenia",
  "ivy", "fern", "moss", "sage", "thyme",
  "rosemary", "basil", "oregano", "mint", "chrysanthemum",
  "sunflower", "lotus", "lavatera", "snapdragon", "celandine",
  "anemone", "begonia", "nasturtium", "petunia", "zinnia",
  "calendula", "foxglove", "heather", "lupine", "wisteria"
]
,
  Superheroes: [
  "spiderman", "superman", "ironman", "blackwidow", "batman",
  "wolverine", "greenlantern", "aquaman", "daredevil", "hawkeye",
  "thor", "hulk", "flash", "wonderwoman", "cyclops",
  "professorx", "storm", "beast", "rogue", "gambit",
  "nightcrawler", "colossus", "scarletwitch", "vision", "antman",
  "wasp", "doctorstrange", "blackpanther", "captainamerica", "falcon",
  "winterSoldier", "shangchi", "spiderwoman", "supergirl", "batgirl",
  "greenarrow", "huntress", "robin", "martianmanhunter", "silverSurfer",
  "deadpool", "venom", "cable", "ghostrider", "captainmarvel",
  "namor", "hawkman", "moonknight", "bluebeetle", "plasticman"
]
,
  VideoGames: [
  "minecraft", "fortnite", "overwatch", "skyrim", "zelda",
  "halo", "doom", "pokemon", "starcraft", "roblox",
  "call of duty", "apex legends", "league of legends", "dota 2", "world of warcraft",
  "minecraft dungeons", "terraria", "stardew valley", "fifa", "madden",
  "grand theft auto", "red dead redemption", "witcher 3", "cyberpunk", "amongus",
  "fallguys", "subnautica", "ark", "rust", "valheim",
  "darksouls", "eldenring", "portal", "half-life", "bioshock",
  "residentevil", "silentHill", "metroid", "donkeykong", "supermario",
  "luigis mansion", "animalcrossing", "splatoon", "fireemblem", "xenoblade",
  "persona5", "monsterhunter", "fable", "kingdomhearts", "bloodborne"
]
,
  Adjectives: [
  "courageous", "mysterious", "brilliant", "awkward", "delightful",
  "fearless", "playful", "reckless", "whimsical", "vibrant",
  "graceful", "curious", "adventurous", "cheerful", "diligent",
  "elegant", "fascinating", "generous", "hilarious", "imaginative",
  "joyful", "kindhearted", "luminous", "magnificent", "noble",
  "optimistic", "passionate", "quiet", "radiant", "sincere",
  "thoughtful", "unique", "valiant", "witty", "youthful",
  "zealous", "ambitious", "bold", "charming", "determined",
  "energetic", "friendly", "gentle", "honest", "innovative",
  "jovial", "keen", "lively", "modest", "observant"
]
,
  MythicalCreatures: [
  "dragon", "phoenix", "unicorn", "centaur", "mermaid",
  "yeti", "griffin", "basilisk", "chimera", "kraken",
  "hydra", "minotaur", "sphinx", "faun", "pegasus",
  "gorgon", "werewolf", "vampire", "wendigo", "leviathan",
  "harpy", "djinn", "cupid", "selkie", "naga",
  "kitsune", "troll", "ogre", "sprite", "nymph",
  "dryad", "satyr", "loch ness monster", "cerberus", "imp",
  "banshee", "golem", "kobold", "chupacabra", "merrow",
  "roc", "griffon", "kelpie", "lamia", "manticore",
  "giant", "fairy", "hobbit", "elf", "dwarf"
]
,
  HouseholdItems:[
  "microwave", "bookshelf", "refrigerator", "toothbrush", "armchair",
  "curtains", "doormat", "flashlight", "notebook", "headphones",
  "table", "chair", "sofa", "couch", "lamp",
  "desk", "bed", "pillow", "blanket", "mattress",
  "fan", "heater", "airconditioner", "oven", "stove",
  "sink", "bathtub", "shower", "toilet", "mirror",
  "rug", "carpet", "clock", "vase", "pictureframe",
  "cabinet", "drawer", "cupboard", "wardrobe", "books",
  "plates", "cups", "glasses", "knife", "fork",
  "spoon", "pan", "pot", "trashcan", "basket"
]
,
  Verbs:[
  "whisper", "navigate", "celebrate", "investigate", "shuffle",
  "balance", "decorate", "assemble", "forecast", "explore",
  "run", "jump", "swim", "climb", "write",
  "read", "sing", "dance", "paint", "draw",
  "cook", "bake", "clean", "fix", "build",
  "travel", "teach", "learn", "play", "listen",
  "watch", "talk", "sleep", "dream", "imagine",
  "plan", "organize", "help", "repair", "search",
  "capture", "release", "throw", "catch", "push",
  "pull", "lift", "hide", "seek", "runaway"
]

};
