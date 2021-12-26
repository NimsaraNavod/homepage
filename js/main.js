/*
TODO: Search functionality
*/
const clock = document.getElementById("clock");
const quickLinks = document.getElementById("quick-links");
const greeting = document.getElementById("greeting");
const searchBar = document.getElementById("search-bar")
const searchForm = document.getElementById("search")

const setClock = () => {
    clock.textContent = new Date().toLocaleTimeString()
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
        div.classList.add('link-item', '_center')
        div.innerHTML = `
            ${link.thumbnail ? `<img src=${link.thumbnail} alt="Thumbnail" />` : ""}
            <a href=${link.url}>${link.title}<a/>`;
        quickLinks.appendChild(div);
    })
}
const setURL = () => {
    const searchTerm = new String(searchBar.value);
    // console.log(/^(ftp|http|https):\/\/$/.test(searchTerm))
    window.location = searchTerm;
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

const main = () => {
    setStyleSheets();
    searchBar.placeholder = searchBarPlaceHolder
    setClock();
    setGreeting();
    setLinks();
    setBackground();
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        setURL();
    })

}

main();