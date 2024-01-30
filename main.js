Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality: 90
}) ;
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image_snapshot" src="'+data_uri+'" >';
    });
}

console.log("machine learning version-ml5 = ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9goEa2gKU/model.json",model_loaded);

function model_loaded(){
    console.log("Model is successfully loaded");
}

function check(){
    var img=document.getElementById("image_snapshot");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);


    }
}