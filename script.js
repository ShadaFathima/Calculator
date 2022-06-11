function btn_click(val){
    document.getElementById("screen").value+=val;
}
function clearDisplay(){
    document.getElementById("screen").value="";
}
function calculation(){
   var text = document.getElementById("screen").value;

   var result = eval(text)
   document.getElementById("screen").value= result;
}
function backSpace() {
    var ans = document.getElementById('screen').value
    document.getElementById('screen').value = ans.substring(0,ans.length-1);
}