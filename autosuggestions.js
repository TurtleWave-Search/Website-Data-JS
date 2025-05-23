const ismobile = /Mobi|Android|phone/.test(navigator.userAgent);
let fontsizeforthing = "1vw";
function isElectron() {
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }
    return false;
}
if (window.location.href.includes(".netlify.app") || isElectron() === true) {
    document.addEventListener("DOMContentLoaded", function () {
        const ismobile = /Mobi|Android|phone/.test(navigator.userAgent);
        const searchbar1 = document.getElementById("searchbar");
        const searchbar2 = document.getElementById("searchbar-results");
        const input = document.getElementById("submit");
        // other mobile stuff to make suggestiondiv fit
        if (ismobile) {
            fontsizeforthing = "3vw";
        }
        // other mobile stuff to make suggestiondiv fit ENDS HAHA K-O
        const suggestionexample = document.getElementById("suggestionExample");
        const suggestionDiv = document.getElementById("suggestionDiv");
        const searchbar = document.getElementById("searchbar") || document.getElementById("searchbar-results");
        suggestionexample.style.display = "none";
        const suggestions = [
            "TurtleWave", "YouTube", "BayTurtleKing", "Bay Turtles", "Catholic",
            "Christian", "Kitten", "ChatGPT", "OpenAI", "TurtleWave Browser", "Microsoft",
            "Music", "TurtleWave Music", "McDonald's", "Spotify", "Superman",
            "Taylor Swift", "Metal", "Metallica", "What is TurtleWave", "What is a turtle",
            "What is a dog", "What is a cat", "What is Roblox", "Cat breeds",
            "Russia", "Russian Blue Cat", "America", "United Kingdom", "Canada", "United States",
            "Water", "Propel Water", "Orange Tabby Cat", "Tabby Cat", "Puppy", "Kitty",
            "JavaScript", "Python", "HTML", "Airbnb", "Minecraft", "Roblox", "Fortnite",
            "Epic Games", "Hulu", "Disney", "Netflix", "Stranger Things", "Stranger Things Experience",
            "HBO", "Poop deck", "Disney Plus", "Nickelodeon",
            "Google", "Bing", "TurtleWave Helpbot", "Save the turtles",
            "How to save the turtles", "Team Seas", "Discord", "Glitch.com",
            "Calculator", "Filebin", "Home Depot", "Aquariums", "Clearwater Marine Aquarium",
            "Share files", "Roku", "Bible", "Holy Bible", "Turtle", "Cats",
            "Yoo-hoo", "Solar Eclipse", "Zerg rush", "Kapwing", "Kapwing AI Video Generator",
            "Video Editor", "LG Smart TV", "LG", "HelloTech", "Canva", "Picsart", "Photo editor",
            "Is it Thursday?", "Coca-Cola", "Google Drive", "Google Voice", "How do I know if im blocked",
            "Farts", "Pokémon", "Lifetime", "Nirvana", "Turtle Beach Headsets", "Apple", "Samsung",
            "iPhones", "Samsung Galaxy", "Samsung Phones", "Nokia", "COVID-19", "Flu", "TurtleWave Health",
            "I feel sick", "I feel ill", "Stomachache", "Stomach Pain", "Stomach Cramp", "#TeamSeas",
            "Radio Garden", "Wolfram|Alpha", "Gmail", "The Cookie Rookie", "Yellow-Bellied Slider Turtles",
            "Sea Turtles", "Online Tools", "Useful Tools", "Random Word Generator", "Word Generator", "Wikipedia", "MediaWiki",
            "Virtual Piano", "Online Piano", "Piano", "Pizza", "Apple TV+", "Apple TV Plus", "How to get rid of Roku advertisements",
            "Roku advertisements", "Roku Smart TV", "Ping-pong", "Horse", "Babe the Pig", "Babe: Pig in the City", "Oreo Cookies", "Oreos",
            "Hydrox Cookies", "Costco Wholesale", "Deadpool", "The Pug in a Rug", "CatDog", "Hockey Hall of Fame", "Squire-Town", "Animals",
            "Wildlife", "Baseball", "Basketball", "Ice Hockey", "Hockey", "Street Hockey", "Food", "Shark", "Fire TV", "Fire Stick",
            "Fire TV Stick", "Amazon", "Amazon News", "Quizlet", "IXL Learning", "Wordle", "Daily Puzzle", "Instagram", "Twitter",
            "Social Media", "Weather", "Weather Forecast", "Forecast", "Today's weather", "Turtle Game", "Thanos Snap", "Thanos", "Marvel",
            "Superpowers", "Superheroes", "Captain Amercia", "Iron Man", "Spider-Man", "Cat House", "Cats.com", "Cat Narrow Eyes",
            "Cat Body Language", "Dog", "Kitten Rescue", "Cat Rescue", "Is Vaping Harmful", "Is Smoking Harmful", "Cigarettes", "Vaping",
            "Vapes", "Smoking", "How to quit tobacco", "3D Print", "3D Printing", "3D Printers", "ProtoLabs", "Instructables", "Tiktok",
            "TikTok ban", "CapCut", "Breaking News", "Today's News", "Latest News", "News", "Xfinity", "WhatsApp", "Facebook", "Messenger",
            "Yahoo!", "LinkedIn", "NAVER", "Baidu", "Superbowl", "NFL", "NHL", "Football", "Detect America", "Metal Detecting", "Makerworld",
            "Thingiverse", "EPIC! E-Books", "E-Books", "ShellSurfer", "Neal.Fun", "TurtleWave Graveyard", "Browser games", "TurtleWave Play",
            "Regular Show", "IMDb", "Is TurtleWave Search a virus?", "Fast food", "Healthy food", "Coins", "U.S. Mint", "PC shopping",
            "Console Gaming", "Xbox", "Playstation", "Star Wars", "Jokes", "Fun facts", "Best Buy"
        ];

        function autosuggestions() {
            const suggestionTable = document.getElementById("suggestionTable");
            if (!suggestionTable) {
                return;
            }
            suggestionTable.innerHTML = "";
            const currentValue = searchbar.value.toLowerCase().trim();

            const filteredSuggestions = suggestions.filter(suggestion =>
                suggestion.toLowerCase().startsWith(currentValue)
            );
            const maxsuggestions = Math.floor(window.innerHeight / 120);
            let numberofsuggestions = 0;
            if (filteredSuggestions.length === 0) {
                const noSuggestionElement = document.createElement("div");
                noSuggestionElement.style.display = "flex";
                noSuggestionElement.innerText = "No suggestions found.";
                suggestionTable.appendChild(noSuggestionElement);
            } else {
                filteredSuggestions.forEach((suggestion, index) => {
                    if (numberofsuggestions < maxsuggestions) {
                        numberofsuggestions++;
                        const newSuggestionElement = suggestionexample.cloneNode(true);
                        newSuggestionElement.removeAttribute("id");
                        newSuggestionElement.style.display = "flex";
                        newSuggestionElement.innerHTML = `<td colspan="1" style="text-align: top; justify-content:top;">
                                          <a style="width:100%; font-size:${fontsizeforthing}; text-align:top; align-items:top; justify-content:top;" 
                                             href="/search?query=${encodeURIComponent(suggestion)}">${suggestion}</a>
                                         </td>`;
                        suggestionTable.appendChild(newSuggestionElement);
                    }
                });
            }
            const suggestionDiv = document.getElementById("suggestionDiv");
            if (suggestionDiv && !window.location.href.includes("/search")) {
                const baseheight = 3.5;
                const maxheight = 50;
                suggestionDiv.style.height = `${Math.min(numberofsuggestions * baseheight, maxheight)}vh`;
            }
        }


        searchbar.addEventListener("input", function (event) {
            suggestionexample.style.display = "none";
            const currentValue = searchbar.value.trim();
            if (!suggestionDiv) {
                return;
            }
            if (currentValue === "") {
                suggestionDiv.style.display = "none";
            } else {
                suggestionDiv.style.display = "block";
                if (document.getElementById("searchbar") && !document.getElementById("searchbar-results")) {
                    document.getElementById('suggestionDiv').style.marginTop = "-52px";
                }
                autosuggestions();
            }
        });
    });
} else {
    console.log("Not on TurtleWave Browser, showing alert");
    alert("TurtleWave Auto Suggestion API only on TurtleWave Browser (The home of TurtleWave Search).");
}
