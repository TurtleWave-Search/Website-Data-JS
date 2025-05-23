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

document.addEventListener("DOMContentLoaded", function () {
    const searchbar1 = document.getElementById("searchbar");
    const searchbar2 = document.getElementById("searchbar-results");
    const input = document.getElementById("submit");

    if (ismobile) {
        fontsizeforthing = "3vw";
    }

    const suggestionexample = document.getElementById("suggestionExample");
    const suggestionDiv = document.getElementById("suggestionDiv");
    const searchbar = searchbar1 || searchbar2;
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
        if (!suggestionTable) return;

        suggestionTable.innerHTML = ""; // Clear old suggestions
        const currentValue = searchbar.value.toLowerCase().trim();
        if (!currentValue) return;

        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().startsWith(currentValue)
        );

        const maxSuggestions = Math.floor(window.innerHeight / 120);
        let numberOfSuggestions = 0;

        for (let suggestion of filteredSuggestions) {
            if (numberOfSuggestions >= maxSuggestions) break;

            const row = document.createElement("div");
            row.className = "suggestionRow";
            row.textContent = suggestion;
            row.style.fontSize = fontsizeforthing;
            row.addEventListener("click", () => {
                searchbar.value = suggestion;
                suggestionTable.innerHTML = "";
            });
            suggestionTable.appendChild(row);
            numberOfSuggestions++;
        }
    }
    searchbar.addEventListener("input", autosuggestions);
});
