
let a;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(()=>{
a = new Date();
date=a.toLocaleDateString(undefined,options);
time= a.getHours() + ":"+ a.getMinutes() + ":"+ a.getSeconds();

document.getElementById('time').innerHTML=time + "<br>on " + date;
},1000);


// const browse=document.getElementsById('ankit');
// browse.addEventListener('click', saurav);

function saurav(){
    var n = new Date();
document.write("cs-CZ: " + n.toLocaleString("cs-CZ") + "<br>");
document.write("da-DK: " + n.toLocaleString("da-DK") + "<br>");
document.write("de-AT: " + n.toLocaleString("de-AT") + "<br>");
document.write("de-CH: " + n.toLocaleString("de-CH") + "<br>");
document.write("de-DE: " + n.toLocaleString("de-DE") + "<br>");
document.write("el-GR: " + n.toLocaleString("el-GR") + "<br>");
document.write("en-AU: " + n.toLocaleString("en-AU") + "<br>");
document.write("en-CA: " + n.toLocaleString("en-CA") + "<br>");
document.write("en-GB: " + n.toLocaleString("en-GB") + "<br>");
document.write("en-IE: " + n.toLocaleString("en-IE") + "<br>");
document.write("en-IN: " + n.toLocaleString("en-IN") + "<br>");
document.write("en-NZ: " + n.toLocaleString("en-NZ") + "<br>");
document.write("en-US: " + n.toLocaleString("en-US") + "<br>");
document.write("en-ZA: " + n.toLocaleString("en-ZA") + "<br>");
document.write("es-AR: " + n.toLocaleString("es-AR") + "<br>");
document.write("es-CL: " + n.toLocaleString("es-CL") + "<br>");
document.write("es-CO: " + n.toLocaleString("es-CO") + "<br>");
document.write("es-ES: " + n.toLocaleString("es-ES") + "<br>");
document.write("es-MX: " + n.toLocaleString("es-MX") + "<br>");
document.write("es-US: " + n.toLocaleString("es-US") + "<br>");
document.write("fi-FI: " + n.toLocaleString("fi-FI") + "<br>");
document.write("fr-BE: " + n.toLocaleString("fr-BE") + "<br>");
document.write("fr-CA: " + n.toLocaleString("fr-CA") + "<br>");
document.write("fr-CH: " + n.toLocaleString("fr-CH") + "<br>");
document.write("fr-FR: " + n.toLocaleString("fr-FR") + "<br>");
document.write("he-IL: " + n.toLocaleString("he-IL") + "<br>");
document.write("hi-IN: " + n.toLocaleString("hi-IN") + "<br>");
document.write("hu-HU: " + n.toLocaleString("hu-HU") + "<br>");
document.write("id-ID: " + n.toLocaleString("id-ID") + "<br>");
document.write("it-CH: " + n.toLocaleString("it-CH") + "<br>");
document.write("it-IT: " + n.toLocaleString("it-IT") + "<br>");
document.write("ja-JP: " + n.toLocaleString("ja-JP") + "<br>");
document.write("ko-KR: " + n.toLocaleString("ko-KR") + "<br>");
document.write("nl-BE: " + n.toLocaleString("nl-BE") + "<br>");
document.write("nl-NL: " + n.toLocaleString("nl-NL") + "<br>");
document.write("no-NO: " + n.toLocaleString("no-NO") + "<br>");
document.write("pl-PL: " + n.toLocaleString("pl-PL") + "<br>");
document.write("pt-BR: " + n.toLocaleString("pt-BR") + "<br>");
document.write("pt-PT: " + n.toLocaleString("pt-PT") + "<br>");
document.write("ro-RO: " + n.toLocaleString("ro-RO") + "<br>");
document.write("ru-RU: " + n.toLocaleString("ru-RU") + "<br>");
document.write("sk-SK: " + n.toLocaleString("sk-SK") + "<br>");
document.write("sv-SE: " + n.toLocaleString("sv-SE") + "<br>");
document.write("ta-IN: " + n.toLocaleString("ta-IN") + "<br>");
document.write("ta-LK: " + n.toLocaleString("ta-LK") + "<br>");
document.write("th-TH: " + n.toLocaleString("th-TH") + "<br>");
document.write("tr-TR: " + n.toLocaleString("tr-TR") + "<br>");
document.write("zh-CN: " + n.toLocaleString("zh-CN") + "<br>");
document.write("zh-HK: " + n.toLocaleString("zh-HK") + "<br>");
document.write("zh-TW: " + n.toLocaleString("zh-TW") + "<br>");
}