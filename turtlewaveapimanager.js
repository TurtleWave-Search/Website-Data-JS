const queryString = window.location.search;
var url = window.location.href;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get("query");
const queryLower = query.toLowerCase();
const setSearchBar = urlParams.get("firstResult");
const platformoverride = urlParams.get("plat");
const bypassDirectResult = urlParams.get("bypassDirectResult");
const searchOnLink = urlParams.get("searchOnLink");
const mayMean = urlParams.get("maymean");
const botframeData = urlParams.get("botframe");
const resultembed = urlParams.get("resultem");
console.log("Query is " + query);

function isMobileDevice5151() {
  const ua = navigator.userAgent.toLowerCase();
  const ismobileagent = /android|iphone|ipad|ipod|mobile/.test(ua);
  const smallscreenthing = window.innerWidth <= 768;
  return ismobileagent || smallscreenthing;
}

if (!isMobileDevice5151()) {
    document.getElementById("summaryMobileButton")?.remove();
}
function stringToUnicodeCodes(str) {
   let encodedQuery = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!/[a-zA-Z0-9]/.test(char)) {
            encodedQuery += encodeURIComponent(char);
        } else {
            encodedQuery += char;
        }
    }
    return encodedQuery;
};

window.addEventListener('message', function(event) {
    if (event.data === 'ebayPage') {
        window.location.href = 'https://www.ebay.com/sch/i.html?_nkw=car';
    } else if (event.data === 'carsPage') {
              window.location.href = 'https://www.cars.com/shopping/';
    } else if (event.data.includes("https://www.ebay.com")) {
              window.location.href = event.data;
    }
});

var parsedQuery = query.replace(/"/, "");
document.getElementById("searchbar-results").value = parsedQuery;
document.getElementById("query").innerHTML =
  "Searched For: '" + parsedQuery + "'";

if (url == "/search") {
  window.location.href = "/search";
}

function removephrasefromstring(inputstring, phrasetoremove) {
    const escapedPhrase = phrasetoremove.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedPhrase, 'gi');
    return inputstring.replace(regex, '');
}
function mayMeanSet(keyword) {
  document.getElementById("realresultdisplay").textContent = `Did you mean: ${keyword}?`;
  document.getElementById("realresultlink").textContent = `Search for: ${keyword}`;
    document.getElementById("realresultlink").href = `/search?query=${stringToUnicodeCodes(keyword)}`;
};

function imagesearch() {
  window.location.href = "/images/results.html?query=" + query;
  }

if (mayMean) {
    mayMeanSet(mayMean);
}

        let engineChangeQuery = queryLower.replace("turtlewave updates", "").replace("on", "").replace("tw updates", "").replace("google play", "").replace("play.google.com", "").replace("play.google", "").replace("play google", "").replace("google appstore", "").replace("samgsung appstore", "").replace("android appstore", "").replace("turtlewave classic", "");
if (searchOnLink) {
    if (searchOnLink === "playgoogle") {
        window.location.href = "https://play.google.com/store/search?q=" + engineChangeQuery;
    } else if (searchOnLink === "twUpdates") {
        window.location.href = "https://turtlewave-updates.glitch.me/#:~:text=" + engineChangeQuery;
    } else if (searchOnLink === "twClassic") {
        window.location.href = "https://turtlewave-browser-classic.glitch.me/search.html?query=" + engineChangeQuery;
    } else if (searchOnLink === "google") {
        window.location.href = "https://www.google.com/search?q=" + engineChangeQuery;
    }
}

      if (query.toLowerCase().includes("classic turtlewave") || query.toLowerCase().includes("turtlewave classic") || query.toLowerCase().includes("turtlewave 2023") || query.toLowerCase().includes("2023 turtlewave")) {
window.location.href = "https://turtlewave-browser-classic.glitch.me/newdata/search.html?query=" + query;
};
 if (document.getElementById("botFrame")) {
  const isInstalledPWA = window.matchMedia("(display-mode: standalone)").matches;
    if (isInstalledPWA) {
    document.getElementById("botFrame").src = "/beta/helpbot/helper2.html";
    } else {
        document.getElementById("botFrame").src = "/beta/helpbot/ultra.html";
    }
    document.getElementById("botFrame").style = "border-radius:25px; border:none; background-color:gray; width:35vw; height:400px;";
if (queryLower.includes("news")) {
    document.getElementById("botFrame").src = "https://news.com";
} else if (queryLower.includes("piano")) {
    document.getElementById("botFrame").src = "https://4four.io/embed/piano";
    document.getElementById("botFrame").style = "border-radius:25px; border:none; background-color:gray; width:800px; height:375px;";
} else if (queryLower.includes("trending music") || queryLower.includes("trending songs") || queryLower.includes("popular songs") || queryLower.includes("popular music")) {
    document.getElementById("botFrame").src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M";
    document.getElementById("botFrame").style = "border-radius:25px; border:none; background-color:gray; width:70%; height:400px;";
} else if (queryLower.includes("fun fact") || queryLower.includes("feeling curious")) {
    document.getElementById("botFrame").src = "https://turtwave.netlify.app/embed/funfact.html";
    document.getElementById("botFrame").style = "border-radius:25px; border:none; background-color:gray; width:800px; height:375px;";
} else if (queryLower.includes("flip coin") || queryLower.includes("flip a coin") || queryLower.includes("heads or tails") || queryLower.includes("tails or heads")) {
    document.getElementById("botFrame").src = "https://turtwave.netlify.app/embed/flipcoin.html";
} else if (queryLower.includes("color chooser") || queryLower.includes("color maker") || queryLower.includes("hex color") || queryLower.includes("color finder")) {
    document.getElementById("botFrame").src = "https://turtwave.netlify.app/embed/colorthing.html";
} else if (queryLower.includes("isitthursday") || queryLower.includes("is it thursday") || queryLower.includes("is today thursday") || queryLower.includes("is it thursday today")) {
    document.getElementById("botFrame").src = "https://isitthursday.org";
} else if (queryLower.includes("pingpong") || queryLower.includes("ping pong") || queryLower.includes("ping-pong") || queryLower.includes("ping_pong")) {
    document.getElementById("botFrame").src = "https://turtwave.netlify.app/embed/pingpong.html";
    document.getElementById("botFrame").style = "border-radius:25px; border:none; background-color:gray; width:70%; height:400px;";
} else if (queryLower === "calculator" || queryLower === "caculator") {
    document.getElementById("botFrame").src = "https://turtwave.netlify.app/basic-calculator/";
}  else if (queryLower === "tell me a joke" || queryLower === "jokes") {
    document.getElementById("botFrame").src = "https://turtwave.netlify.app/embed/joke.html";
} else if (queryLower === "sandbox") {
    document.getElementById("botFrame").src = "https://storing-assets.glitch.me/tw-play/sandbox.html";
} else if (queryLower === "marco polo twave") {
    document.getElementById("botFrame").src = "https://turtwave.netlify.app/presentation.html";
} else if (queryLower === "easter.egg.turtle") {
    document.getElementById("botFrame").src = "https://turtlewave-updates.glitch.me/eastereggs.html";
} else if (queryLower.includes("pronounc") || queryLower.includes("how to say")) {
    document.getElementById("botFrame").src = "https://turtwave.netlify.app/embed/pronounce.html";
} else {
    if (document.getElementById("secret-button").textContent.trim() !== "Easter egg")
    document.getElementById("botFrame").remove();
    document.getElementById("BotFrameHideButton").remove();
}

 };

if (query.toLowerCase().includes("s!google")) {
    const searchQuery = query.replace("s!google", "").trim();
    const encodedQuery = encodeURIComponent(searchQuery);
    window.location.href = `https://google.com/search?q=${encodedQuery}`;
}


if (!query.toLowerCase().includes("tutorial") && !query.toLowerCase().includes("video") && !query.toLowerCase().includes("youtube") && !query.toLowerCase().includes("how to")) {
if (document.getElementById("searchDiv")) {
  document.getElementById("searchDiv").remove();
    document.getElementById("shoppingParagraphForSpace2").remove();
};
};

if (!query.toLowerCase().includes("amazon") && !query.toLowerCase().includes("shop") && !query.toLowerCase().includes("oculus") && !query.toLowerCase().includes("drink") && !query.toLowerCase().includes("headset") && !query.toLowerCase().includes("head-set") && !query.toLowerCase().includes("head set") && !query.toLowerCase().includes("treat") && !query.toLowerCase().includes("cheap") && !query.toLowerCase().includes("expensive") && !query.toLowerCase().includes("ebay") && ! query.toLowerCase().includes("etsy") && ! query.toLowerCase().includes("toy") && ! query.toLowerCase().includes("$") && ! query.toLowerCase().includes("dollars")) {
if (document.getElementById("shoppingDiv")) {
  document.getElementById("shoppingDiv").remove();
    document.getElementById("shoppingParagraphForSpace").remove();
};
};


if (query.toLowerCase() == "contact turtlewave") {
    window.location.href = "/contact-us/";
}

if (query.toLowerCase() == "doomsday") {
    window.location.href = "/rare-errors/error666/the-end-is-near/run/";
}

                      if (query.toLowerCase().includes("cars")) {
                          if (document.getElementById("botFrame")) {
        document.getElementById("botFrame").src = "https://turtlewave-quicksearch.glitch.me/embeds/helpbot-car.html";
  }
}

  if (query.toLowerCase().includes("suicide") || query.toLowerCase().includes("want to die") || query.toLowerCase().includes("wanna die") || query.toLowerCase().includes("wants to die") || query.toLowerCase().includes("suicidal")) {
     if (document.getElementById("botFrame")) {
      document.getElementById("botFrame").src = "https://turtwave.netlify.app/embed/helpwiththoughts.html";
  document.getElementById("botFrame").style = "border-radius:25px; border:none; background-color:gray; width:600px; height:400px;";
          document.getElementById("BotFrameHideButton").disabled = true;
        document.getElementById("BotFrameHideButton").style = "width:600px; border-radius:15px;";
               document.getElementById("BotFrameHideButton").textContent = "You're not alone";
     } else {
       window.location.href = "https://turtwave.netlify.app/embed/helpwiththoughts.html";
     }
};
const API_KEY = `vzU7eHNhjV1wG5qND2SqOAUfH3AMwesMO63SWeEejf8vewXgqtx0SXxn`;
if (setSearchBar) {
  console.log("First result found, not removing div");
  const linkToGoToRealSearch = document.getElementById("realresultlink");
    const realResultsDisplay = document.getElementById("realresultdisplay");
      const realResultsDiv = document.getElementById("realresultdiv");
  const searchbar = document.getElementById("searchbar-results");
  searchbar.value = setSearchBar;
  if (!document.getElementById("botFrame")) {
        linkToGoToRealSearch.href = "/search.html?bypassDirectResult=true&botframe=hide&query=" + setSearchBar;
  } else {
        linkToGoToRealSearch.href = "/search.html?bypassDirectResult=true&query=" + setSearchBar;
  };
    realResultsDisplay.textContent = "Showing results for: " + query;
} else {
  if (!mayMean)
 {
    document.getElementById("realresultdiv").remove();
 }      
};

if (bypassDirectResult === "true") {
  console.log("Bypassing first result url params.");
} else {
    if (queryLower === "phone") {
        window.location.pathname = "/search";
        window.location.search = "?query=phones&firstResult=" + encodeURIComponent(query);
    } else if (query === "national geographic" || queryLower === "natural geographic") {
        window.location.pathname = "/search";
        window.location.search = "?query=National%20Geographic&firstResult=" + encodeURIComponent(query);
    } else if (queryLower === "recursion") {
        window.location.pathname = "/search";
        window.location.search = "?query=recursion&bypassDirectResult=true&maymean=Recursion";
    } else if (queryLower === "merv griffin") {
        window.location.pathname = "/search";
        window.location.search = "?query=Merv%20Griffin&bypassDirectResult=true&maymean=Who%20was%20Merv%20Griffin";
    } else if (queryLower === "coke") {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&bypassDirectResult=true&maymean=Coca%20Cola";
    } else if (queryLower === "pokemon") {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&bypassDirectResult=true&maymean=Pokémon&apiKeyword=Pokémon";
    } else if (queryLower === "tigers") {
        window.location.pathname = "/search";
        window.location.search = "?query=tiger";
    } else if (queryLower === "turtles") {
        window.location.pathname = "/search";
        window.location.search = "?query=turtles&apiKeyword=turtle&bypassDirectResult=true";
    } else if (queryLower === "mcdonalds") {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&apiKeyword=McDonald%27s&bypassDirectResult=true";
    } else if (queryLower === "nickeloden" || queryLower === "nickelodeon") {
        window.location.pathname = "/search";
        window.location.search = "?query=nickelodeon&firstResult=" + encodeURIComponent(query) + "&apiKeyword=nickelodeon&bypassDirectResult=true";
    } else if (queryLower.includes("youtube")) {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&apiKeyword=YouTube&bypassDirectResult=true";
    } else if (queryLower.includes("yoohoo")) {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&apiKeyword=Yoo-hoo&bypassDirectResult=true";
    } else if (queryLower.includes("dr. pepper") || queryLower.includes("dr pepper")) {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&apiKeyword=Dr%20Pepper&bypassDirectResult=true";
    } else if (["yoohoo", "youhoo", "you-hoo", "you hoo", "yoo hoo"].includes(queryLower)) {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&apiKeyword=Yoo-hoo&bypassDirectResult=true&maymean=Yoo-hoo";
    } else if (["us", "usa", "u.s.", "u.s", "u.s.a.", "u.s.a", "amercia", "america"].includes(queryLower)) {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&apiKeyword=United%20States&bypassDirectResult=true&maymean=United%20States";
    } else if (["oreo cookies", "oreos", "cookies oreo", "sandwich cookies", "cookies from oreo", "oreo.com"].includes(queryLower) || queryLower.startsWith("double stuf")) {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&apiKeyword=Oreo&bypassDirectResult=true&maymean=Oreo";
    } else if (["hydrox", "cookies hydrox", "cookies from hydrox"].includes(queryLower)) {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&apiKeyword=Hydrox&bypassDirectResult=true&maymean=Hydrox%20Cookies";
    } else if (queryLower.includes("hydrox cookies")) {
        window.location.pathname = "/search";
        window.location.search = "?query=" + encodeURIComponent(query) + "&apiKeyword=Hydrox&bypassDirectResult=true";
    }

                    if (query.toLowerCase().includes("google")) {
    window.location.href = "/search?query=" + query + "&bypassDirectResult=true&apiKeyword=Google";
};
                      if (query.toLowerCase().includes("cars")) {
    window.location.href = "/search?query=cars&bypassDirectResult=true&apiKeyword=car";
                          if (document.getElementById("botFrame")) {
        document.getElementById("botFrame").src = "https://turtlewave-quicksearch.glitch.me/embeds/helpbot-car.html";
  document.getElementById("botFrame").style = "border-radius:25px; border:none; background-color:gray; width:500px; height:375px;";
  }
}
if (isMobileDevice5151()) {
    const botFrame = document.getElementById("botFrame");
    const botFrameHideButton = document.getElementById("BotFrameHideButton");
    if (botFrame) {
        botFrame.style.width = "100vw";
        botFrame.style.borderRadius = "0"; 
    }
    if (botFrameHideButton) {
        botFrameHideButton.style.width = "100vw"; 
        botFrameHideButton.style.borderRadius = "0";
    }
}
  if (query.toLowerCase().includes("what is") || query.toLowerCase().includes("who was") || query.toLowerCase().includes("meaning of") || query.toLowerCase().includes("of") || query.toLowerCase().includes("what does") || query.toLowerCase().includes("what is the") || query.toLowerCase().includes("meaning of") || query.toLowerCase().includes("what is a")  || query.toLowerCase().includes("what was") || query.toLowerCase().includes("who is") || query.toLowerCase().includes("who were") || query.toLowerCase().includes("what were") || query.toLowerCase().includes("what are")) {
  var newapikeyword = query.toLowerCase();
    if (newapikeyword.includes("what are ") || newapikeyword.includes("what were ")) {
              if (newapikeyword.endsWith("s") && !newapikeyword.endsWith("ss")) {
 newapikeyword = newapikeyword.substring(0, newapikeyword.length - 1);
    }
    newapikeyword = removephrasefromstring(newapikeyword, "what are ");
    newapikeyword = removephrasefromstring(newapikeyword, "what were ");
}
    newapikeyword = removephrasefromstring(newapikeyword, "definition of ");
   newapikeyword = removephrasefromstring(query, "what are ");
          newapikeyword = removephrasefromstring(newapikeyword, "what was ");
              newapikeyword = removephrasefromstring(newapikeyword, "what does ");
              newapikeyword = removephrasefromstring(newapikeyword, "meaning of ");
    newapikeyword = removephrasefromstring(newapikeyword, "who is ");
        newapikeyword = removephrasefromstring(newapikeyword, "who was ");
          newapikeyword = removephrasefromstring(newapikeyword, "who were the");
      newapikeyword = removephrasefromstring(newapikeyword, "who were ");
                      newapikeyword = removephrasefromstring(newapikeyword, "what is a ");
                      newapikeyword = removephrasefromstring(newapikeyword, "what is ");
       if (query !== newapikeyword) {
              window.location.href = "/search?bypassDirectResult=true&firstResult=" + stringToUnicodeCodes(query) + "&query=" + newapikeyword +"&apiKeyword=" + stringToUnicodeCodes(newapikeyword);
       }
       }
};
const searchpagebar = document.getElementById("searchbar-results");
if (resultembed && searchpagebar) {
  const searchbutton = document.getElementById("submit");
    const querytext = document.getElementById("query");
    const vcsearch = document.getElementById("voicesearchimage");
      const wikisummary = document.getElementById("summary");
  searchbutton.remove();
      querytext.remove();
    vcsearch.remove();
  searchpagebar.remove();
  wikisummary.style = "filter: blur(3px);  user-select: none;";
}
if (query.toLowerCase().includes("weather") || query.toLowerCase().includes("will it rain") || query.toLowerCase().includes("will it storm")) {
  if (document.getElementById("botFrame")) {
   document.getElementById("BotFrameHideButton").style = "width:40%; border-radius:25px;";
   document.getElementById("botFrame").src = "/beta/weatherIframe/";
  } else {
    window.location.href = "https://turtwave.netlify.app/apps/turtlewave/weather/index.html?home=" + window.location.href;
  };
}
if (platformoverride) {
    const installbuttontooverride = document.getElementById("install-button");
    if (installbuttontooverride) {
        installbuttontooverride.style.display = "none";
    }
}
