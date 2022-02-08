const clock = document.getElementById("clock");
const quickLinks = document.getElementById("quick-links");
const greeting = document.getElementById("greeting");
const searchBar = document.getElementById("search-bar")
const searchForm = document.getElementById("search")

const setClock = () => {
    clock.textContent = `${new Date().toLocaleTimeString()}`;
    setInterval(() => clock.textContent = new Date().toLocaleTimeString(), 1000);
}

const setGreeting = () => {
    const hourOfDay = new Date().getHours();
    let timeSlot = "Day";

    if (hourOfDay > 17)
        timeSlot = "Evening";
    if (hourOfDay > 12 && hourOfDay < 17)
        timeSlot = "Afternoon";
    if (hourOfDay < 12)
        timeSlot = "Morning";

    greeting.innerHTML = `Good ${timeSlot}, ${uName}!`
}

const setLinks = () => {
        const links = getLinks();

        links.forEach(link => {
                    let div = document.createElement("div")
                    div.classList.add('link-item', '_center');
                    div.addEventListener('click', () => window.location.href = link.url)
                    div.innerHTML = `
            ${link.thumbnail ? `<img class="link-thumb"src=${link.thumbnail} alt="${link.title}" />` : ""}
            <a class="link-anchor" href=${link.url}>${link.title}<a/>`;
        quickLinks.appendChild(div);
    })
}
const setURL = () => {
    const searchTerm = new String(searchBar.value).split(' ').join('+');
    searchForm.classList.add("clicked");
    isValidURL = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(searchBar.value);
    isProtocolSpecified = new RegExp(/^(?:(ht|f)tp(s?)\:\/\/).+/i).test(searchBar.value) && isValidURL;
    let URL = (isValidURL ? ( isProtocolSpecified ? searchBar.value : `https://${searchBar.value}` ) : `https://www.duckduckgo.com/?q=${searchTerm}`);
    window.location = URL;
}

const setStyleSheets = () => {
    const mainSheet = document.createElement("link");
    mainSheet.type = "text/css"
    mainSheet.rel = "stylesheet"
    mainSheet.href = "./css/style-main.css"

    const colorSheet = document.createElement("link");
    colorSheet.type = "text/css"
    colorSheet.rel = "stylesheet"
    colorSheet.href = colorSheetPath
    document.getElementsByTagName("head")[0].appendChild(mainSheet)
    document.getElementsByTagName("head")[0].appendChild(colorSheet)
}

const setBackground = () => {
    document.getElementsByTagName("body")[0].style.backgroundImage = BackgroundImageOverridePath ? `url(${BackgroundImageOverridePath})` : "var(--wallpaper)"
}

const fetchThumbnailsFromLinks = () => {
    //TODO: implement this;
}

const main = () => {
    setStyleSheets();
    searchBar.placeholder = searchBarPlaceHolder
    setClock();
    setGreeting();
    setLinks();
    setBackground();
    fetchThumbnailsFromLinks();
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        setURL();
    })

}

main();