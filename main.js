console.log("ml5 version: ", ml5.version);

let video;
let classifier;
let resultsP;

function setup() {
    video = createCapture(VIDEO);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/z1bAq0zGI/model.json', video, modelLoaded);

    resultsP = createP("Loading...");
}

function modelLoaded() {
    console.log("Model Loaded");
    classifyVideo();
}

function classifyVideo() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log(results)
    resultsP.html(results[0].label);
    classifyVideo();
}
