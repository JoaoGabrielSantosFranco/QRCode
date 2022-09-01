function GerarQRCode() {
    var APIGoogle = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
    var Input = document.getElementById("Conteudo").value;
    var QrCode = APIGoogle + encodeURIComponent(Input);
    document.querySelector('#QRCode').src = QrCode;
}