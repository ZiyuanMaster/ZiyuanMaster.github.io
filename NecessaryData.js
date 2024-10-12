

  //  DECLARE DATA OVER GAMES


let gamesData = {
  "Blood Strike": {
    "Details": {
      "AppAccess": {
        "Landscape": "D4ZwsYFoaZPjmvFm7ZZZxHbNkkZ2ZZgAJZkZ4WfHZG4ZDHZZEJWi0Zbv0m2npLiF0jlcCoiG9fLQ4OeEbk/",
        "Potrait": "D4ZLM4FoaZalRvFm7ZZZ9bbNkkZ2ZZgAJZkZDWY5ZoLZapZRQZgFWi0ZD0C8WVvAXuza9xULLl0uOS3uM8Hk/"
      },
      "AppImages": {
        "Landscape": "",
        "Potrait": ""
      },
      "Developer": "NetEase Games",
      "GameCodes": "bs",
      "PackageID": "com.netease.newspike",
      "TopupType": ["Gold", false, "Subscriptions and Packages"]
    },
    
    "Products": {
      "Main": {
        "100 Golds": 12500,
        "300 Golds": 38500,
        "500 Golds": 63500,
        "1000 Golds": 126500,
        "2000 Golds": 252500,
        "5000 Golds": 630500
      },
      
      "Second": false,
      
      "Third": {
        "Strike Pass Elite": 50500,
        "Strike Pass Elite Plus": 113500
      }
    },
    
    "IDs": {
      "User": {
        "Test": true,
        "Type": "Number",
        "minNum": 10
      },
      
      "Server": {
        "List": false,
        "Type": false,
        "minNum": false
      }
    }
  },
  
  "Love and Deepspace": {
    "Details": {
      "AppAccess": {
        "Landscape": "cBZG2uFoaZMJ1vFm7ZZZGbbNkkZ2ZZgAJZkZU6F8Za4Z8QZy4Z4QZdRZm4Zp4Zx4ZcpZiJZNJZJHZQHZpLZgFWi0Z5iwGVcy5cAkLW6r5PLEe1HmkH2JV/",
        "Potrait": "D4ZI7mFoaZS2bvFm7ZZZLhbNkkZ2ZZgAJZkZyly5ZDYZ58ZMRZgFWi0Zf1R0DjCW5PHQ5JnmiRIzFSbWtyty/"
      },
      "AppImages": {
        "Landscape": "",
        "Potrait": ""
      },
      "Developer": "InFold Pte. Ltd.",
      "GameCodes": "lds",
      "PackageID": "com.papegames.lysk.en",
      "TopupType": ["Crystal", false, "Subscriptions and Packages"]
    },
    
    "Products": {
      "Main": {
        "60 Crystals + 0 Diamonds": 17500,
        "300 Crystals + 30 Diamonds": 80500,
        "450 Crystals + 90 Diamonds": 107500,
        "980 Crystals + 150 Diamonds": 224500,
        "1980 Crystals + 360 Diamonds": 449500,
        "3280 Crystals + 720 Diamonds": 719500
      },
      
      "Second": false,
      
      "Third": {
        "Aurum Pass": 80500,
        "Companionship Pack": 269500
      }
    },
    
    "IDs": {
      "User": {
        "Test": true,
        "Type": "Number",
        "minNum": 9
      },
      
      "Server": {
        "List": ["Amerika", "Asia", "Europe"],
        "Type": "Option",
        "minNum": false
      }
    }
  },
  
  "Mobile Legends": {
    "Details": {
      "AppAccess": {
        "Landscape": "cBZKamFoaZXRSvFm7ZZZDhbNkkZ2ZZgAJZkZfFy8ZA4ZNJZVzZHYZhHZ28Z0YZ44ZVJZJHZt4ZIHZP4Zb4ZgFWi0ZFWiev5XF9t4Il2iD8dYkPuB5sdxk/",
        "Potrait": "D4ZjxQFoaZpEQvFm7ZZZqhbNkkZ2ZZgAJZkZ7AV5ZtRZ5LZt4ZgFWi0Z1Gs7Bc58hGhr6FQtYhKB0JhsvYxV/"
      },
      "AppImages": {
        "Landscape": "",
        "Potrait": ""
      },
      "Developer": "Moonton",
      "GameCodes": "mlbb",
      "PackageID": "com.mobile.legends",
      "TopupType": ["Diamond", false, "Subscriptions and Packages"]
    },
    
    "Products": {
      "Main": {
        "112 Diamonds (101+11)": 30500,
        "172 Diamonds (156+16)": 44500,
        "222 Diamonds (200+22)": 59500,
        "344 Diamonds (312+32)": 89500,
        "429 Diamonds (390+39)": 111500,
        "568 Diamonds (503+65)": 146500,
        "706 Diamonds (625+81)": 178500,
        "878 Diamonds (781+97)": 223500,
        "963 Diamonds (859+104)": 245500,
        "1220 Diamonds (1093+127)": 312500,
        "1412 Diamonds (1250+162)": 357500,
        "2195 Diamonds (1860+335)": 536500,
        "2901 Diamonds (2485+416)": 714500,
        "3688 Diamonds (3099+589)": 893500
      },
      
      "Second": false,
      
      "Third": {
        "Weekly Diamond Pass 1x": 27500,
        "Weekly Diamond Pass 2x": 54500,
        "Weekly Diamond Pass 3x": 82500,
        "Weekly Diamond Pass 4x": 109500,
        "Weekly Diamond Pass 5x": 137500
      }
    },
    
    "IDs": {
      "User": {
        "Test": true,
        "Type": "Number",
        "minNum": 7
      },
      
      "Server": {
        "List": "Number",
        "Type": "Input",
        "minNum": 2
      }
    }
  }
}

let gDataKeys = Object.keys(gamesData);
let gDataVals = Object.values(gamesData);

for (let obj in gamesData) {
  let imgL = `Images/${obj} landscape.jpg`;
  let imgP = `Images/${obj} potrait.jpg`;
  
  gamesData[obj].Details.AppImages.Landscape = imgL;
  gamesData[obj].Details.AppImages.Potrait = imgP;
}


  //  MAKE AN API REQUEST TO CHECKING IN-GAME USERNAME


let userAgent = navigator.userAgent;
let xhr = new XMLHttpRequest();

  //  DECLARE API URL(S)

let eliteDiasAPI = "https://api.elitedias.com/checkid";

  //  CREATE API DATA TO BE SEND

function bs() {
  eliteDias();
  let data = JSON.stringify({
    "game": "bloodstrike",
    "userid": `${singleID.value}`
  })
  xhr.send(data);
}

function lds() {
  eliteDias();
  let data = JSON.stringify({
    "game": "lds",
    "userid": `${doubleID.value}`,
    "serverid": `${optionID.value}`
  })
  xhr.send(data);
}

function mlbb() {
  eliteDias();
  let data = JSON.stringify({
    "game": "mlbb_global",
    "userid": `${doubleID.value}`,
    "serverid": `${serverID.value}`
  })
  xhr.send(data);
}


  //  CREATE HEADERS AND RESULT RESPONSES TO SUPPORT API REQUEST

function eliteDias() {
  xhr.open('POST', eliteDiasAPI, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("User-Agent", userAgent);
  
  username.textContent = "please wait...";
  username.style.color = "var(--borders)";
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let res = JSON.parse(this.responseText);
      
      if (res.valid === "valid") {
        username.textContent = res.name;
        username.style.color = "rgb(75, 225, 75)";
      } else {
        username.textContent = "Invalid ID";
        username.style.color = "rgb(250, 75, 75)";
      }
    }
  };
}