img_id="";
function start()
{
    Webcam.set({
        width : 350,
        height : 300,
        image_format : 'png',
        png_quality : 90
    });
    
     camera = document.getElementById("camera");
    
    Webcam.attach( '#camera ');

setTimeout(function()
{
    img_id = "selfie_1";
    take_snapshot();
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}, 5000);

setTimeout(function()
{
    img_id = "selfie_2";
    take_snapshot();
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 10 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}, 10000);

setTimeout(function()
{
    img_id = "selfie_3";
    take_snapshot();
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 15 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}, 15000);

}

function take_snapshot()
{
    console.log(img_id);
    Webcam.snap(function(data_uri)
    {
        if(img_id=="selfie_1")
        {
            document.getElementById("result1").innerHTML =  '<img id="selfie1" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie_2")
        {
            document.getElementById("result2").innerHTML =  '<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie_3")
        {
            document.getElementById("result3").innerHTML =  '<img id="selfie3" src="'+data_uri+'"/>';
        }
    })
}