var now = new Date;
var month = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
var data = '<b>São Paulo</b>, ' + now.getDate() + ' de ' + month[now.getMonth()]  + ' de ' + now.getFullYear()
var pessoa = 'Seu Nome Aqui';
var marcadagua ="<br><br>CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO CERTIFICADO \
"
var button = document.querySelector('button');

document.getElementById("pessoa").innerHTML = pessoa;
document.getElementById("data").innerHTML = data;
document.getElementById("marcadagua").innerHTML = marcadagua;

button.onclick = function () {
    var pessoa = prompt('Digite o nome da pessoa: ');
    document.getElementById("pessoa").innerHTML = pessoa;
    var titulo = pessoa.replace(/ /g, "_");
    document.getElementById("titulo").innerHTML = titulo;
}
// Recebendo nome via parâmetro da url
const urlParams = new URLSearchParams(window.location.search);
var url_pessoa = urlParams.get('nome')

var lt = /</g, 
    gt = />/g, 
    ap = /'/g, 
    ic = /"/g;

if (url_pessoa) {
    url_pessoa = url_pessoa.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
    document.getElementById("pessoa").innerHTML = url_pessoa;
    var titulo = url_pessoa.replace(/ /g, "_");
    document.getElementById("titulo").innerHTML = titulo;
}
