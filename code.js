function RGBToHex() {
    var r= document.Form1.R.value;
    var g= document.Form1.G.value;
    var b= document.Form1.B.value;
     r = parseInt(r).toString(16);
     g = parseInt(g).toString(16);
     b = parseInt(b).toString(16);
   
     if (r.length == 1)
       r = "0" + r;
     if (g.length == 1)
       g = "0" + g;
     if (b.length == 1)
       b = "0" + b;
   
     alert("#" + r + g + b);
   }