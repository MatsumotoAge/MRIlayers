var pics1_src = new Array("img/MRIsA10010.jpg","img/MRIsA10011.jpg","img/MRIsA10012.jpg","img/MRIsA10013.jpg","img/MRIsA10014.jpg","img/MRIsA10015.jpg","img/MRIsA10016.jpg","img/MRIsA10017.jpg","img/MRIsA10018.jpg","img/MRIsA10019.jpg","img/MRIsA10020.jpg","img/MRIsA10021.jpg","img/MRIsA10022.jpg","img/MRIsA10023.jpg","img/MRIsA10024.jpg","img/MRIsA10025.jpg","img/MRIsA10026.jpg","img/MRIsA10027.jpg","img/MRIsA10028.jpg","img/MRIsA10029.jpg","img/MRIsA10030.jpg","img/MRIsA10031.jpg","img/MRIsA10032.jpg","img/MRIsA10033.jpg","img/MRIsA10034.jpg","img/MRIsA10035.jpg","img/MRIsA10036.jpg","img/MRIsA10037.jpg","img/MRIsA10038.jpg","img/MRIsA10039.jpg","img/MRIsA10040.jpg","img/MRIsA10041.jpg","img/MRIsA10042.jpg","img/MRIsA10043.jpg","img/MRIsA10044.jpg","img/MRIsA10045.jpg","img/MRIsA10046.jpg","img/MRIsA10047.jpg","img/MRIsA10048.jpg","img/MRIsA10049.jpg","img/MRIsA10050.jpg","img/MRIsA10051.jpg","img/MRIsA10052.jpg","img/MRIsA10053.jpg","img/MRIsA10054.jpg","img/MRIsA10055.jpg","img/MRIsA10056.jpg");
var num1 = 0;

var pics2_src = new Array("../img/MRIsB10000.jpg","../img/MRIsB10001.jpg","../img/MRIsB10002.jpg","../img/MRIsB10003.jpg","../img/MRIsB10004.jpg","../img/MRIsB10005.jpg","../img/MRIsB10006.jpg","../img/MRIsB10007.jpg","../img/MRIsB10008.jpg","../img/MRIsB10009.jpg","../img/MRIsB10010.jpg","../img/MRIsB10011.jpg","../img/MRIsB10012.jpg","../img/MRIsB10013.jpg","../img/MRIsB10014.jpg","../img/MRIsB10015.jpg","../img/MRIsB10016.jpg","../img/MRIsB10017.jpg","../img/MRIsB10018.jpg","../img/MRIsB10019.jpg","../img/MRIsB10020.jpg","../img/MRIsB10021.jpg","../img/MRIsB10022.jpg","../img/MRIsB10023.jpg","../img/MRIsB10024.jpg","../img/MRIsB10025.jpg","../img/MRIsB10026.jpg","../img/MRIsB10027.jpg","../img/MRIsB10028.jpg","../img/MRIsB10029.jpg","../img/MRIsB10030.jpg","../img/MRIsB10031.jpg","../img/MRIsB10032.jpg","../img/MRIsB10033.jpg","../img/MRIsB10034.jpg","../img/MRIsB10035.jpg","../img/MRIsB10036.jpg","../img/MRIsB10037.jpg","../img/MRIsB10038.jpg");
var num2 = 0;

//-----------------------------
function slideshowRight(){
  if (num1 == 44){
    num1 = 0;
  }
  else{
    num1++;
  }
  document.getElementById("mypic1").src=pics1_src[num1];
}
function slideshowLeft(){
  if (num1 == 0){
    num1 = 44;
  }
  else{
    num1--;
  }
  document.getElementById("mypic1").src=pics1_src[num1];
}

//--------------------------------------
function slideshowRight2(){
  if (num2 == 37){
    num2 = 0;
  }
  else{
    num2++;
  }
  document.getElementById("mypic2").src=pics2_src[num2];
}
function slideshowLeft2(){
  if (num2 == 0){
    num2 = 37;
  }
  else{
    num2--;
  }
  document.getElementById("mypic2").src=pics2_src[num2];
}


