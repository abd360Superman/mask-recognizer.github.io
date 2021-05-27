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

function classifyVideo() {
    if(document.querySelector("#result").value === "without mask") {
        document.querySelector("#result").style.color = "red";
        console.log(speak());
    }
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log(results);
    document.querySelector("#result").innerHTML = results[0].label;
    setTimeout(classifyVideo(), 2000);
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Alert! Without Mask!";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}