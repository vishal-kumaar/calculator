function insert(num){
  document.getElementsByClassName("textview")[0].value += num;
}
  
function equals(){
  const textview = document.getElementsByClassName("textview")[0];
  textview.value = eval(textview.value);
}
  
function clean(){
  document.getElementsByClassName("textview")[0].value = "";
}
  
function back(){
  const textview = document.getElementsByClassName("textview")[0];
  textview.value = textview.value.substring(0, textview.value.length - 1);
}