var buttons =document.getElementsByClassName("button");
var display=document.getElementById("cal-space");
var operand1=0;
var operand2=null;
var operator =null;

for(var i=0;i<buttons.length;i++){
buttons[i].addEventListener('click',function(){
    var value= this.getAttribute('data-value');
    if(value =='C'){
        display.innerHTML=""
    }
    else if(value =='x^3'){
        var a=display.innerHTML;
        a=a*a*a;
        display.innerHTML=a;
    }
    else if(value =='cut'){
        var str=display.innerHTML;
        str = str.substring(0,str.length-1);
        display.innerHTML=str;
    }
    else if(value =='+/-'){
        var a=display.innerHTML;
        a=-a;
        display.innerHTML=a;
    }
    else if(value =='1/x'){
        var a=display.innerHTML;
        a=1/a;
        display.innerHTML=a;
    }
    else if(value =='x^2'){
        var a=display.innerHTML;
        a=a*a;
        display.innerHTML=a;
    }
    else if(value =='root2'){
        var a=display.innerHTML;
        a=Math.sqrt(a);
        display.innerHTML=a;
    }
    else if(value== '='){
        operand2=parseFloat(display.textContent);
        var ans= eval(display.innerHTML);
        display.innerHTML=ans;
    }
    else{
        display.innerHTML +=value;
    }
});
}