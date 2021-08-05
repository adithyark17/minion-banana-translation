var btn = document.querySelector("#btn")
var txt = document.querySelector("#txt-input")
var output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL (text) {
    return serverURL + "?"+ "text=" + text;
}

function errorHandler(error){
    console.log (" Error occured", error);
    alert("Something wrong with server, Try again later");

}



function clickEventHandler(){
    var input = txt.value;

    fetch(getTranslationURL(input))
        .then (response => response.json)
        .then (json => {
            outputDiv.innerText = json.contents.translated;
        })
        .catch(errorHandler)
}

btn.addEventListener("click",clickEventHandler)