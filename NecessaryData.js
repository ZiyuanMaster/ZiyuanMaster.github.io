

  //  DECLARE DATA OVER GAMES


let gamesData = {
  "Blood Strike": {
    "Details": {
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
  
  "Genshin Impact": {
    "Details": {
      "AppImages": {
        "Landscape": "",
        "Potrait": ""
      },
      "Developer": "COGNOSPHERE PTE. LTD.",
      "GameCodes": "gi",
      "PackageID": "com.miHoYo.GenshinImpact",
      "TopupType": ["Genesis Crystal", false, "Subscriptions and Packages"]
    },
    
    "Products": {
      "Main": {
        "60 Crystals (60+0)": 12500,
        "330 Crystals (300+30)": 62500,
        "1090 Crystals (980+110)": 189500,
        "2240 Crystals (1980+260)": 410500,
        "3880 Crystals (3280+600)": 631500,
        "8080 Crystals (6480+1600)": 1263500
      },
      
      "Second": false,
      
      "Third": {
        "Blessing of the Welkin' Moon 1x": 62500,
        "Blessing of the Welkin' Moon 2x": 125500,
        "Blessing of the Welkin' Moon 3x": 188500,
        "Blessing of the Welkin' Moon 4x": 251500,
        "Blessing of the Welkin' Moon 5x": 314500
      }
    },
    
    "IDs": {
      "User": {
        "Test": true,
        "Type": "Number",
        "minNum": 7
      },
      
      "Server": {
        "List": ["America", "Asia", "Europe", "TW, HK, MO"],
        "Type": "Option",
        "minNum": false
      }
    }
  },
  
  "Love and Deepspace": {
    "Details": {
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
        "3280 Crystals + 720 Diamonds": 719500,
        "6480 Crystals + 1600 Diamonds": 1530500
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
        "List": ["America", "Asia", "Europe"],
        "Type": "Option",
        "minNum": false
      }
    }
  },
  
  "Mobile Legends": {
    "Details": {
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
        "112 Diamonds (102+10)": 31500,
        "172 Diamonds (156+16)": 46500,
        "222 Diamonds (200+22)": 60500,
        "344 Diamonds (310+34)": 95500,
        "429 Diamonds (383+46)": 116500,
        "568 Diamonds (519+49)": 148500,
        "706 Diamonds (625+81)": 180500,
        "878 Diamonds (781+97)": 225500,
        "963 Diamonds (859+104)": 247500,
        "1220 Diamonds (1093+127)": 322500,
        "1412 Diamonds (1250+162)": 357500,
        "2195 Diamonds (1860+335)": 537500,
        "2901 Diamonds (2485+416)": 740500,
        "3688 Diamonds (3099+589)": 925500
      },
      
      "Second": false,
      
      "Third": {
        "Weekly Diamond Pass 1x": 28500,
        "Weekly Diamond Pass 2x": 56500,
        "Weekly Diamond Pass 3x": 85500,
        "Weekly Diamond Pass 4x": 113500,
        "Weekly Diamond Pass 5x": 142500
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

function gi() {
  let fixVal = "";
  if (optionID.value === "America") { fixVal = "os_usa"; }
  else if (optionID.value === "Asia") { fixVal = "os_asia"; }
  else if (optionID.value === "Europe") { fixVal = "os_euro"; }
  else if (optionID.value === "TW, HK, MO") { fixVal = "os_cht"; }
  
  eliteDiasMihoyo();
  
  let data = JSON.stringify({
    "game": "genshin",
    "userid": `${doubleID.value}`,
    "serverid": `${fixVal}`
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

function eliteDiasMihoyo() {
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
        username.textContent = res.fullname;
        username.style.color = "rgb(75, 225, 75)";
      } else {
        username.textContent = "Invalid ID";
        username.style.color = "rgb(250, 75, 75)";
      }
    }
  };
}
