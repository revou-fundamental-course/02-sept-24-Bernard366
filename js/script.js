function Jumluas() {
      // Ambil nilai dari input
      var panjang = document.getElementById("panjang").value;
      var tinggi = document.getElementById("tinggi").value;
  
      // Hitung luas segitiga
      var luas = 0.5 * panjang * tinggi;
  
      // Tampilkan hasil
      document.getElementById("jawab").innerText =  "Jawab: \n" +
                                                    "Panjang Alas       = " + panjang + "\n" +
                                                    "Tinggi             = " + tinggi + "\n" +
                                                    "Luas Segitiga      = 1/2 x " + panjang + " x " + tinggi +"\n"+
                                                    "Hasilnya Adalah    = " + luas;
}

//document.getElementById('result').innerText = "di ketahui a =",x, " t =", y, "L = 1/2 x a x t", "L = 1/2 x ",x,"x ",y, "L = ",h ;
//document.getElementById('result').style.display = 'block';

  
function Jumkel() {
      // Ambil nilai dari input
      var sisi1 = document.getElementById("sisi1").value;
      var sisi2 = document.getElementById("sisi2").value;
      var sisi3 = document.getElementById("sisi3").value;
  
      // Hitung luas segitiga
      if(sisi1 <= 0 === sisi2 === sisi3 ){
            alert("Nilai tidak di ketahui!")
      }else{
      var keliling = sisi1 * sisi2 * sisi3;
  
      // Tampilkan hasil
      document.getElementById("jawab2").innerText =  "Jawab: \n" +
                                                    "Keliling Segitiga      = " + sisi1 + " x " + sisi2 + " x " + sisi3 +"\n"+
                                                    "Hasilnya Adalah    = " + keliling;
      }
}