function Jumluas() {

      let panjang = document.getElementById("panjang").value;
      let tinggi = document.getElementById("tinggi").value;
      if(panjang <= 0 || tinggi <= 0){
      alert("Angka tidak boleh kosong atau kurang dari 1!");
      console.log("Masukkan angka terlebih dahulu!");
      }else{
      let luas = 0.5 * panjang * tinggi;  
      document.getElementById("jawab").innerText =  "Jawab: \n" +
                                                    "Luas Segitiga      = 1/2 x " + panjang + " x " + tinggi +"\n"+
                                                    "Hasilnya Adalah    = " + luas;
      console.log("Hasilnya adalah "+ luas);      
                                                }
}

  
function Jumkel() {
      let sisi1 = document.getElementById("sisi1").value;
      let sisi2 = document.getElementById("sisi2").value;
      let sisi3 = document.getElementById("sisi3").value;
  
      if (sisi1 === "" || sisi2 === "" || sisi3 === "" || parseInt(sisi1) <= 0 || parseInt(sisi2) <= 0 || parseInt(sisi3) <= 0) {
          alert("Angka tidak boleh kosong atau kurang dari 1!");
          console.log("Masukkan angka terlebih dahulu!");
      } else {
          sisi1 = parseInt(sisi1);
          sisi2 = parseInt(sisi2);
          sisi3 = parseInt(sisi3);
  
          let keliling = sisi1 + sisi2 + sisi3;
          document.getElementById("jawab2").innerText =  "Jawab: \n" +
                                                        "Keliling Segitiga      = " + sisi1 + " + " + sisi2 + " + " + sisi3 +"\n"+
                                                        "Hasilnya Adalah    = " + keliling;
          console.log("Hasilnya adalah "+ keliling);
      }
  }

function hapus(){

            document.getElementById("panjang").value = "";
            document.getElementById("tinggi").value = "";
            document.getElementById("jawab").innerText = "";
            console.log("Sudah dihapus")

      }


function hapus2(){
      
      document.getElementById("sisi1").value= "";
      document.getElementById("sisi2").value= "";
      document.getElementById("sisi3").value= "";
      document.getElementById("jawab2").innerText =  "";
      console.log("Sudah dihapus")

}

function Jumluasj() {
      let alas = document.getElementById("panjang_j").value;
      let tinggi = document.getElementById("tinggi_j").value;
  
      if(alas <= 0 || tinggi <= 0){
            alert("Angka tidak boleh kosong atau kurang dari 1!");
            console.log("Masukkan angka terlebih dahulu!");
            }else{
            let luas = alas * tinggi;  
            document.getElementById("jawabj").innerText = "Jawab: \n" +
                                                          "Luas Jajar Genjang = " + alas + " x " + tinggi +"\n"+
                                                          "Hasilnya Adalah    = " + luas;
            console.log("Hasilnya adalah "+ luas);      
                                                      }
  }


  function hapusj(){
      document.getElementById("panjang_j").value = "";
      document.getElementById("tinggi_j").value = "";
      document.getElementById("jawabj").innerText = "";
      console.log("Sudah dihapus")

}

function Jumkelj() {
      let sisi1 = document.getElementById("sisi_l").value;
      let sisi2 = document.getElementById("sisi_m").value;
  
      if(sisi1 === "" || sisi2 === "" || parseInt(sisi1) <= 0 || parseInt(sisi2) <= 0) {
            alert("Angka tidak boleh kosong atau kurang dari 1!");
            console.log("Masukkan angka terlebih dahulu!");
      }else{
            sisi1 = parseInt(sisi1);
            sisi2 = parseInt(sisi2);
            let keliling = 2 * (sisi1 + sisi2);  
            document.getElementById("jawab2j").innerText = "Jawab: \n" +
                                                          "Keliling Jajar Genjang = 2 x (" + sisi1 + " + " + sisi2 +")\n"+
                                                          "Hasilnya Adalah    = " + keliling;
            console.log("Hasilnya adalah "+ luas);      
                                                      }
  }


  function hapus2j(){
      document.getElementById("sisi_l").value = "";
      document.getElementById("sisi_m").value = "";
      console.log("Sudah dihapus")

}

function showSegitiga() {
      document.getElementById('segitiga').style.display = 'flex';  
      document.getElementById('jajar-genjang').style.display = 'none';  
  }
  
  function showJajarGenjang() {
      document.getElementById('segitiga').style.display = 'none'; 
      document.getElementById('jajar-genjang').style.display = 'flex';
  }
  