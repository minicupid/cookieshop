var footer = document.querySelector(".footer");
var crunch = document.getElementById("crunch");
var music = document.getElementById("music");
var menu = document.querySelector(".menu");
var purchase = document.querySelector(".purchase");
var thankyou = purchase.querySelector(".thankyou");
var cookieImage = purchase.querySelector(".cookieDisplay img");
var returnButton = purchase.querySelector(".return");

var consumed = [];
var musicplaying = false;

returnButton.style.display = "none";

var display = true;
var displayedCookie = "";
var bites = 0;

window.onload = function() {
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
  });
}

document.addEventListener('click', function() {
    if (!musicplaying) {
        music.play();
        musicplaying = true;
    }
});

// hide and show footer ===================================================== 

function hideShow() {
  if (display) {
    footer.style.display = "none";
    boop.play();
  }
  else {
    footer.style.display = "block";
  }
  display = !display;
}

// item click listener -> bite cookie =============================================

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", function() {
      const name = this.querySelector(".name").textContent.trim(); // get cookie
      showPurchase(name); // show purchase div w selected cookie
  });
});

// bite cookie function =====================================================

cookieImage.addEventListener("click", biteCookie);

function biteCookie() {
    if (!displayedCookie) return;
    
    bites++;
    new Audio(crunch.src).play();
    
    if (bites === 1) {
        cookieImage.src = `assets/${displayedCookie}2.png`;
    } else if (bites === 2) {
        cookieImage.src = `assets/${displayedCookie}3.png`;
    } else if (bites === 3) {
        consumed.push(displayedCookie);
        
        cookieImage.style.display = "none";
        bites = 0;
        displayedCookie = "";
        returnButton.style.display = "block";
        thankyou.style.display = "none";

    } else {
        returnButton.style.display = "none";
    }
}

function showPurchase(selectedCookie) {
    menu.style.display = "none";
    purchase.style.display = "block";
    thankyou.style.display = "block";
    thankyou.textContent = `thanks for purchasing. enjoy your ${selectedCookie}!`;
    
    // new log for each cookie

    bites = 0;
    cookieImage.style.display = "block";
    
    if (selectedCookie === "choco chip") {
        cookieImage.src = "assets/choco.png";
        displayedCookie = "choco";
    } else if (selectedCookie === "sugar frost") {
        cookieImage.src = "assets/sugar.png";
        displayedCookie = "sugar";
    } else if (selectedCookie === "oatmeal crunch") {
        cookieImage.src = "assets/oatmeal.png";
        displayedCookie = "oatmeal";
    }

}

// consumed cookies (wip) =====================================================

function showConsumed() {
  console.log("cookies consumed:", consumed);
}

document.querySelector(".receiptbutton").addEventListener("click", function() {
  showConsumed();
});

// return message =====================================================

returnButton.addEventListener("click", function() {
    menu.style.display = "block";
    purchase.style.display = "none";
    returnButton.style.display = "none";
});

