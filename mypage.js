// Understanding Section
function showMore() {
    var text = document.getElementById("moreText");
    var button = document.getElementById("showButton");

    //This works when the text is not hidden//
    if (text.style.display == "none") {
        text.style.display = "block";
        button.innerHTML = "Show Less";
    } else {
        //This work when the text is hidden//
        text.style.display = "none";
        button.innerHTML = "Show More";
    }
}


