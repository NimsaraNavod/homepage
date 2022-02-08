const getLinks = () => {
    return [{
            id: 1,
            title: "GitHub",
            url: "https://www.github.com",
            thumbnail: "assets/github-logo.svg",
        },
        {
            id: 2,
            title: "Reddit",
            url: "https://www.reddit.com",
            thumbnail: "assets/Reddit_Lockup_OnDark.png"
        },
        {
            id: 3,
            title: "Arch Wiki",
            url: "https://wiki.archlinux.org",
            thumbnail: "https://archlinux.org/static/logos/archlinux-logo-light-90dpi.d36c53534a2b.png"
        },
        {
            id: 4,
            title: "YouTube",
            url: "https://www.youtube.com",
            thumbnail: "https://www.youtube.com/img/desktop/yt_1200.png"
        },
        {
            id: 5,
            title: "MDN Docs",
            url: "",
            thumbnail: "assets/mdn-logo.svg"
        }, {
            id: 6,
            title: "Wikipedia",
            url: "https://en.wikipedia.org",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg"
        },
        {
            id: 7,
            title: "C++ Reference",
            url: "https://en.cppreference.com/w/",
            thumbnail: null
        }
    ]
}

const uName = "Nimsara" //User's Name here
const $USER = "nimz" //Value of the $USER variable
const colorSheetPath = `/home/${$USER}/.cache/wal/colors.css`
const BackgroundImageOverridePath = "" //`/home/${$USER}/bg.jpg` //Empty for system wallpaper 
const searchBarPlaceHolder = "Search the web or type a web address"