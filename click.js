//declare samecolor() here
function samecolor(){
  let newcolor = "#000000";
  let divs = document.querySelectorAll("#samecolor div");
  for(let i=0;i<divs.length;i++){
    divs[i].style.backgroundColor = newcolor;
    divs[i].style.opacity = Math.random();
  }
}
//declare diffcolor() here
function diffcolor(){
  let color = "#990000";
  let complement = "#000099";
  let divs2 = document.querySelectorAll("#diffcolor div");
  for(let x=0;x<divs2.length;x++){
    if(x==0 || x==2 || x==4 || x==6 || x==8){
      divs2[x].style.backgroundColor = "#008732"
    }
    else{
      divs2[x].style.backgroundColor = "#FF78CD"
    }
  }
}
