

  //  DECLARE INNER HTML TAG


let elem = document.documentElement;
let body = document.body;
let head = document.querySelectorAll("head")[0];


  //  DOMCONTENTLOADED EVENT LISTENER


window.addEventListener("DOMContentLoaded", createInnerHTML);


  //  CREATE HEAD STYLES AND HOME EVENT LISTENER FUNCTIONS


function createInnerHTML() {
  
    //  HEAD STYLES
  
  document.title = "Zii Store - Home";

  let desc = "Jasa Top Up Game 100% Legal dan Terpercaya | © Zii 2024";
  let gap = (body.scrollHeight - window.innerHeight);
  let view = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
  let webIcons = "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0";
  
  head.insertAdjacentHTML("beforeend", `
    <meta charset="UTF-8">
    
    <meta name="author" content="Zii">
    <meta name="description" content="${desc}">
    <meta name="viewport" content="${view}">
    
    <meta property="og:title" content="${document.title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:image" content="https://p-tok1.pcloud.com/D4ZG7RFoaZ97FvFm7ZZZIrhNkkZ2ZZgAJZkZSlvkZ4RZOLZyzZgFWi0ZELOOWaLjxIQjDBQUx4NeBHkfPBPX/Web%20Logo%20landscape.jpg">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${window.location.href}">
    
    <link rel="icon" type="image/x-icon" href="https://p-tok1.pcloud.com/D4ZQezFoaZkJJvFm7ZZZurhNkkZ2ZZgAJZkZEBZlzZlFZZgFWi0Zm2EyHf4eiTymI52mL06klRRStVHy/Web%20Logo%20square.png">
    <link rel="stylesheet" href="${webIcons}">
  `);
  
    //  REQUIRED HTML STYLES
  
  closeBTN.classList.add("material-symbols-rounded");
  social.classList.add("material-symbols-rounded");
  search.enterKeyHint = "search";
  
    //  HOME EVENT LISTENER FUNCTIONS
  
  closeBTN.addEventListener("click", function() {
    if (headerText.textContent === "ZIISTORE") { history.go(); }
    else { localStorage.removeItem("gameData"); history.go(); }
  })
  
  headerText.addEventListener("click", function() {
    localStorage.removeItem("gameData"); history.go();
  })
  
  social.addEventListener("click", function() {
    window.open("https://wa.me/6282240345929");
  })
  
    //  DIRECT FUNCTIONS
  
  setTimeout(loadingOn, 75); checkPagesData();
}


  //  CHECKING INTERFACE DISPLAY FUNCTIONS


function checkPagesData() {
  
    //  CHECKING DATA AVAILABILITY
  
  let data = localStorage.getItem("gameData");
  if (data) { topupInterface(); } else { homeInterface(); }
  

    //  HOME INTERFACE FUNCTION
  
  
  function homeInterface() {
    
      //  HOME HTML STYLES
    
    document.title = "Zii Store - Home"; contents.style.display = "flex";
    topups.style.display = "none"; confirms.style.display = "none";
    
      //  CREATE GAMES LIST AT HOME INTERFACE
    
    for (let i = 0; i < gDataKeys.length; i++) {
      let con = document.createElement("div");
      let pot = document.createElement("img");
      let obj = document.createElement("p");
      
      con.classList.add("game");
      pot.classList.add("icnP");
      obj.classList.add("name");
      
      pot.src = gDataVals[i].Details.AppImages.Potrait
      obj.textContent = gDataKeys[i];
      
      list.append(con); con.append(pot); con.append(obj);
    }
    
      //  ADDING DYNAMIC ACTION AND SEARCH SPECIFIC GAME
    
    let con = list.querySelectorAll(".game");
    let pot = list.querySelectorAll(".icnP");
    let obj = list.querySelectorAll(".name");
    
    for (let i = 0; i < con.length; i++) {
      con[i].addEventListener("mouseenter", function() {
        con[i].style.boxShadow = "0px 0px 0px 1.5px var(--colorSolid)";
        pot[i].style.scale = "1.1"; obj[i].style.height = "3.25em";
      })
      
      con[i].addEventListener("mouseout", function() {
        con[i].style.boxShadow = "0px 0px 0px 1.5px var(--textColor)";
        pot[i].style.scale = "1"; obj[i].style.height = "0em";
      })
      
      con[i].addEventListener("click", function() {
        localStorage.setItem("gameData", con[i].textContent);
        setTimeout(function() { history.go(); }, 50);
      })
      
      search.addEventListener("keydown", function(event) {
        let val = this.value.toLowerCase();
        let sub = con[i].textContent.toLowerCase();
        
        if (event.key === "Enter") {
          if (sub.includes(val)) { con[i].style.display = "flex"; }
          else { con[i].style.display = "none"; }
        }
      })
    }
    
      //  CHECKING IMAGE AVAILABILITY
    
    let allIMG = list.querySelectorAll("img");
    let index = 0; let imgLength = allIMG.length;
    
    allIMG.forEach((img) => {
      img.onload = function() {
        if (img.complete) {
          index++; if (index === imgLength) { setTimeout(loadingOff, 750); }
        }
      }
      
      img.onerror = function() {
        setTimeout(function() { img.src = img.src}, 5000);
      }
    })
  }
  
  
    //  TOPUP INTERFACE FUNCTION
  
  
  function topupInterface() {
    
      //  DECLARE MANY TYPES OF GAME DATA
    
    let landscape = gamesData[data].Details.AppImages.Landscape;
    let topupType = gamesData[data].Details.TopupType;
    let gameCodes = gamesData[data].Details.GameCodes;
    
    let userTest = gamesData[data].IDs.User.Test;
    let userType = gamesData[data].IDs.User.Type;
    let userMinNum = gamesData[data].IDs.User.minNum;
    
    let serverList = gamesData[data].IDs.Server.List;
    let serverType = gamesData[data].IDs.Server.Type;
    let serverMinNum = gamesData[data].IDs.Server.minNum;
    
    let mainProduct = Object.keys(gamesData[data].Products.Main);
    let mainPrice = Object.values(gamesData[data].Products.Main);
    let secondProduct = Object.keys(gamesData[data].Products.Second);
    let secondPrice = Object.values(gamesData[data].Products.Second);
    let thirdProduct = Object.keys(gamesData[data].Products.Third);
    let thirdPrice = Object.values(gamesData[data].Products.Third);
    
      //  TOPUPS HTML STYLES
    
    document.title = `Zii Store - ${data}`; icnL.src = landscape;
    headerText.textContent = data; contents.style.display = "none";
    topups.style.display = "flex"; confirms.style.display = "flex";
    
      //  SET UP THE INPUT TYPE FOR EACH GAME
    
    if (serverType === false) {
      singleID.style.display = "flex"; doubleID.style.display = "none";
      serverID.style.display = "none"; optionID.style.display = "none";
      
      setInputType(singleID);
    } else if (serverType === "Input") {
      singleID.style.display = "none"; doubleID.style.display = "flex";
      serverID.style.display = "flex"; optionID.style.display = "none";
      
      setInputType(doubleID); setInputType(serverID);
    } else if (serverType === "Option") {
      singleID.style.display = "none"; doubleID.style.display = "flex";
      serverID.style.display = "none"; optionID.style.display = "flex";
      
      for (let i = 0; i < serverList.length; i++) {
        let sL = document.createElement("option");
        
        sL.classList.add("optionID"); sL.textContent = serverList[i];
        sL.value = serverList[i]; optionID.append(sL);
      }
      
      optionID.addEventListener("change", function() {
        this.style.boxShadow = "0 0 0 .5px var(--colorSolid) inset";
        this.style.color = "var(--colorSolid)";
      })
      
      setInputType(doubleID);
    }
    
      //  LOAD SAVED GAMES DATA ID
    
    let savedDataIDs = localStorage.getItem(`${data}-ID`); let lock = [];
    if (savedDataIDs) {
      lock = savedDataIDs.split(",");
      singleID.value = lock[0]; doubleID.value = lock[1];
      serverID.value = lock[2]; optionID.value = lock[3];
      
      if (optionID.value !== "Non-Displayed Server Option") {
        optionID.style.boxShadow = "0 0 0 .5px var(--colorSolid) inset";
        optionID.style.color = "var(--colorSolid)";
      }
    }
    
      //  DEFINE IF THE GAME HAS USERNAME TEST
    
    if (userTest === true) {
      checkID.style.backgroundColor = "var(--backgroundBright)";
      checkID.style.boxShadow = "0px 0px 0px .5px var(--borders) inset";
      checkID.style.color = "var(--textColor)";
      
      checkID.addEventListener("click", function() {
        if (singleID.style.display === "flex") {
          if (singleID.value.length <= userMinNum) {
            alert("PASTIKAN DATA ID SUDAH BENAR!!!");
          }
          else { window[gameCodes](); saveDataID(); }
        }
        else if (doubleID.style.display === "flex" &&
                 serverID.style.display === "flex") {
          if (doubleID.value.length <= userMinNum ||
              serverID.value.length <= serverMinNum) {
            alert("PASTIKAN DATA ID SUDAH BENAR!!!");
          }
          else { window[gameCodes](); saveDataID(); }
        }
        else if (doubleID.style.display === "flex" &&
                 optionID.style.display === "flex") {
          if (doubleID.value.length <= userMinNum ||
              optionID.value === "Non-Displayed Server Option") {
            alert("PASTIKAN DATA ID SUDAH BENAR!!!");
          } else if (doubleID.value.length > userMinNum &&
                     optionID.value !== "Non-Displayed Server Option") {
            window[gameCodes](); saveDataID();
          }
        }
      })
    } else {
      checkID.style.backgroundColor = "var(--borders)";
      checkID.style.boxShadow = "0px 0px 0px .5px var(--borders) inset";
      checkID.style.color = "var(--backgroundBright)";
    }
    
      //  CREATE PRODUCTS LIST AT TOPUPS INTERFACE
    
    if (mainProduct.length !== 0) {
      let textA = document.createElement("p")
      textA.classList.add("productType");
      textA.textContent = "Topup " + topupType[0]; products.append(textA);
      
      for (let i = 0; i < mainProduct.length; i++) {
        let proA = document.createElement("p");
        proA.classList.add("products");
        proA.textContent = mainProduct[i]; products.append(proA);
      }
      
      if (secondProduct.length !== 0) {
        let textB = document.createElement("p")
        textB.classList.add("productType");
        textB.textContent = "Topup " + topupType[1]; products.append(textB);
        
        for (let i = 0; i < secondProduct.length; i++) {
          let proB = document.createElement("p");
          proB.classList.add("products");
          proB.textContent = secondProduct[i]; products.append(proB);
        }
      }
      
      if (thirdProduct.length !== 0) {
        let textC = document.createElement("p")
        textC.classList.add("productType");
        textC.textContent = topupType[2]; products.append(textC);
        
        for (let i = 0; i < thirdProduct.length; i++) {
          let proC = document.createElement("p");
          proC.classList.add("products");
          proC.textContent = thirdProduct[i]; products.append(proC);
        }
      }
      
        //  DYNAMIC BUY BUTTON ACTION FUNCTION
      
      buyBTN.addEventListener("click", function() {
        let mono = "%60%60%60";
        let plus = proObj.textContent.replace(/[+]/g, "%2B");
        
        if (singleID.style.display === "flex") {
          if (singleID.value.length <= userMinNum ||
              proObj.textContent === "Pilih Produk Terlebih Dahulu") {
            alert("HARAP INPUT DATA ID DAN PILIH NOMINAL TOPUP!!!");
          } else {
            window.open(`https://wa.me/6282240345929?text=${mono}GAME: ${data}%0ADATA: ${singleID.value}%0AUSERNAME: ${username.textContent}%0A%0A${plus}%0A${proPrc.textContent}${mono}`);
            
            saveDataID();
          }
        }
        else if (doubleID.style.display === "flex" &&
                 serverID.style.display === "flex") {
          if (doubleID.value.length <= userMinNum ||
              serverID.value.length <= serverMinNum ||
              proObj.textContent === "Pilih Produk Terlebih Dahulu") {
            alert("HARAP INPUT DATA ID DAN PILIH NOMINAL TOPUP!!!");
          } else {
            window.open(`https://wa.me/6282240345929?text=${mono}GAME: ${data}%0ADATA: ${doubleID.value} | ${serverID.value}%0AUSERNAME: ${username.textContent}%0A%0A${plus}%0A${proPrc.textContent}${mono}`);
            
            saveDataID();
          }
        }
        else if (doubleID.style.display === "flex" &&
                 optionID.style.display === "flex") {
          if (doubleID.value.length <= userMinNum ||
              optionID.value === "Non-Displayed Server Option" ||
              proObj.textContent === "Pilih Produk Terlebih Dahulu") {
            alert("HARAP INPUT DATA ID DAN PILIH NOMINAL TOPUP!!!");
          } else {
            window.open(`https://wa.me/6282240345929?text=${mono}GAME: ${data}%0ADATA: ${doubleID.value} | ${optionID.value}%0AUSERNAME: ${username.textContent}%0A%0A${plus}%0A${proPrc.textContent}${mono}`);
            
            saveDataID();
          }
        }
      })
      
        // ADDING PRODUCTS DYNAMIC ACTION AND SHOW IT PRICES
      
      let allProducts = document.querySelectorAll(".products");
      allProducts.forEach((pro) => {
        let allPrc = [... mainPrice, ...secondPrice, ... thirdPrice];
        
        pro.addEventListener("click", function() {
          for (let i = 0; i < allProducts.length; i++) {
            let aP = allProducts; let fixedPrc = allPrc[i] + 2000;
            
            aP[i].style.color = "var(--textColor)";
            aP[i].style.borderRadius = "2.5px";
            aP[i].style.boxShadow = "0px 0px 0px 1px var(--textColor)";
            aP[i].setAttribute("prices", fixedPrc.toLocaleString("id-ID"));
          }
          
          pro.style.color = "var(--colorSolid)";
          pro.style.borderRadius = "25px";
          pro.style.boxShadow = "0px 0px 0px 1px var(--colorSolid)";
          
          proObj.textContent = pro.textContent;
          proPrc.textContent = "Rp " +  pro.getAttribute("prices");
        })
      })
    }
    
    function setInputType(inp) {
      if (userType === "Number" || serverType === "Number") {
        inp.addEventListener("input", function() {
          inp.value = inp.value.replace(/[\D]/g, "");
        })
      } else if (userType === "Mixed" || serverType === "Mixed") {
        inp.addEventListener("input", function() {
          inp.value = inp.value.replace(/[^A-z0-9#-]/g, "");
          inp.value = inp.value.replace(/[|``^]/g, "");
        })
      } else {
        inp.addEventListener("input", function() { inp.value = inp.value; })
      }
    }
    
    function saveDataID() {
      let savePattern = `${singleID.value},${doubleID.value},${serverID.value},${optionID.value}`;
      localStorage.setItem(`${data}-ID`, savePattern);
    }
    
      //  CHECKING IMAGE AVAILABILITY
    
    let allIMG = topups.querySelectorAll("img");
    let index = 0; let imgLength = allIMG.length;
    
    allIMG.forEach((img) => {
      img.onload = function() {
        if (img.complete) {
          index++; if (index === imgLength) { setTimeout(loadingOff, 750); }
        }
      }
      
      img.onerror = function() {
        setTimeout(function() { img.src = img.src}, 5000);
      }
    })
  }
}


  //  OTHER FUNCTIONS


function loadingOn() {
  loading.style.opacity = "1"; loading.style.visibility = "visible";
  elem.style.setProperty("--animationState", "running");
}

function loadingOff() {
  loading.style.opacity = "0"; loading.style.visibility = "hidden";
  elem.style.setProperty("--animationState", "paused");
}
