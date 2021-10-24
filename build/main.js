window.onload = function () {
    var lsDark = window.localStorage.getItem("dark");
    if (lsDark === null) {
        var theme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        if (theme === "dark")
            document.querySelector("html").classList.add("dark");
        window.localStorage.setItem("dark", theme === "dark" ? "true" : "false");
    }
    else {
        if (lsDark === "true")
            document.querySelector("html").classList.add("dark");
    }
};
document.getElementById("dark-toggle").addEventListener("click", function (e) {
    var html = document.querySelector("html");
    html.classList.toggle("dark");
    window.localStorage.setItem("dark", html.classList.contains("dark") ? "true" : "false");
});
