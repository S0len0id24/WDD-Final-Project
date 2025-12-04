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



function validateForm() {

    // Name variable to radio buttons (with checked or not)
    var cause1 = document.getElementById("cause1").checked;
    var cause2 = document.getElementById("cause2").checked;
    var cause3 = document.getElementById("cause3").checked;
    var cause4 = document.getElementById("cause4").checked;

    // Get textarea value by giving variable
    var feedback = document.getElementById("feedback").value;

    // If there is no radio button selected , the alert comes out
    if (!cause1 & !cause2 & !cause3 & !cause4) {
        alert("Please choose one cause of climate change.");
        return false; // STOP submitting
    }

    // If textarea empty
    if (feedback.trim() == "") {
        alert("Please write your ideas or suggestions.");
        return false; // STOP submitting
    }

    //This part says true after choosing radio buttons and filling ideas in textarea
    alert("Thank you for your feedback!");
    return true; //it approves submitting
}