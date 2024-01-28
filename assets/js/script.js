function openProduk(namaProduk) {
  var i;
  var x = document.getElementsByClassName("produk");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(namaProduk).style.display = "block";
}
