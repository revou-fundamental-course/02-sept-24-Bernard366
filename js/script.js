function Jumluas() {

      let panjang = document.getElementById("panjang").value;
      let tinggi = document.getElementById("tinggi").value;
      if(panjang <= 0 || tinggi <= 0){
      alert("Angka tidak boleh kosong atau kurang dari 1!")
      }else{
      let luas = 0.5 * panjang * tinggi;  
      document.getElementById("jawab").innerText =  "Jawab: \n" +
                                                    "Luas Segitiga      = 1/2 x " + panjang + " x " + tinggi +"\n"+
                                                    "Hasilnya Adalah    = " + luas;
                                                }
}

  
function Jumkel() {

      let sisi1 = parseInt(document.getElementById("sisi1").value);
      let sisi2 = parseInt(document.getElementById("sisi2").value);
      let sisi3 = parseInt(document.getElementById("sisi3").value);
  
      if(sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0 ){
            alert("Angka tidak boleh kosong atau kurang dari 1!")
      }else{
      let keliling = sisi1 + sisi2 + sisi3;
      document.getElementById("jawab2").innerText =  "Jawab: \n" +
                                                    "Keliling Segitiga      = " + sisi1 + " + " + sisi2 + " + " + sisi3 +"\n"+
                                                    "Hasilnya Adalah    = " + keliling;
      }
}

function hapus(){

            document.getElementById("panjang").value = "";
            document.getElementById("tinggi").value = "";
            document.getElementById("jawab").innerText = "";
}


function hapus2(){
      
      document.getElementById("sisi1").value= "";
      document.getElementById("sisi2").value= "";
      document.getElementById("sisi3").value= "";
      document.getElementById("jawab2").innerText =  "";
}