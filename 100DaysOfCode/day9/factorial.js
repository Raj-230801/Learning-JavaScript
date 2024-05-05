let num = prompt("Enter a number ");
let r=num
for(let i=0;i<num;i++){
    // for(let j=0;j<i;j++){
    if(r==0)break;
    if(r==num){result=r}
    r--;
    if (r>0)result=result*r;
    
}
alert(result)
