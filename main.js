var modelo = ml5.imageClassifier("https:teachablemachine.withgoogle.com/models/6nK555Qtf/model.json", listo);

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camara")

function take(){
    Webcam.snap(function (data_uri){
        document.getElementById("resultado").innerHTML = "<img id='foto' src='" + data_uri + "'>"
    })
}

function listo(){
    console.log("Ya estoy listo")
}

function idt(){
    var imagen = document.getElementById("foto");
    modelo.classify(imagen, rb)
}

function rb(error, resultado){
    if (!error){
        console.log(resultado);
        document.getElementById("dog").innerHTML = "Raza: " + resultado[0].label;
        document.getElementById("pre").innerHTML = "Prescision:" + Math.round(resultado[0].confidence*100) + "%";
    }
}