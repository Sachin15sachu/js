var counterElement=document.getElementById('sp1');
function increment()
{
    let pv=counterElement.textContent;
    let uv=parseInt(pv);
        uv +=1;//uv=uv+1
    if(uv>0)
    {
        
        counterElement.style.color='green';
    }
counterElement.textContent=uv;
}

function decrement()
{
    let pv=counterElement.textContent;

    let uv=parseInt(pv);
    uv -=1;
    if(uv<0)
    {
        counterElement.style.color='red';
    }
  counterElement.textContent=uv;  
}

function reset()
{
    let counterValue=0;
    counterElement.textContent=0;
    counterElement.style.color='black';
}