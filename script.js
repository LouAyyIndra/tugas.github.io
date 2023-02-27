let nilai = prompt("masukan nilai : " ,0);
let hasil = "";

switch(true){
    case nilai >= 91 && nilai <=100:
        hasil = "A"
        break;
    case nilai >= 81 && nilai <=90:
        hasil = "B"
        break;
    case nilai >= 70 && nilai <=80:
        hasil = "C"
        break;
    case nilai >= 60 && nilai <=70:
        hasil = "D"
        break;
    case nilai >= 50 && nilai <=60:
        hasil = "E"
        break;
    case nilai >= 0 && nilai <=50:
        hasil = "F"
        default:
            document.write("tidak ada");
}
document.write(hasil);