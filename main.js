console.log("ml5 version: ", ml5.version);

let video;
let classifier;


function setup() {
    video = createCapture(VIDEO);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/z1bAq0zGI/model.json', video, modelLoaded);

    document.querySelector("#result").innerHTML = "Loading...";
}

function modelLoaded() {
    console.log("Model Loaded");
    classifyVideo();
}

let result;
let fresult;

function classifyVideo() {
    result = document.querySelector("#result");
    // fresult = result.value;

    if(result.value === "without mask") {
        document.querySelector("#result").style.color = "red";
        console.log(speak());
    }
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log(results);
    document.querySelector("#result").innerHTML = results[0].label;
    classifyVideo();
}

function speak() {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = "Please wear a mask to ensure everyone's safety";
    speech.volume = 0.9;
    speech.rate = 9.1;
    speech.pitch = 1.5;
}