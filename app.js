var btn = document.querySelector("#btn")
var txt = document.querySelector("#text-input")
var outputDiv = document.querySelector("#display")


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