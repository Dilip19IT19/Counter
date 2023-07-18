
let str="0";
for(let i=0;i<document.querySelectorAll(".btn").length;i++)
{
  
  document.querySelectorAll(".btn")[i].addEventListener("click",function()
  {
    if(document.querySelectorAll(".btn")[i].textContent==="Increase")
    {
      str=(parseInt(str)+1)+"";
      
      document.querySelector('input').value=str;
      if(parseInt(document.querySelector('input').value)>0)
      {
        document.querySelector('input[value]').style.color="green";
      }
      
    }
    else if(document.querySelectorAll(".btn")[i].textContent==="Decrease")
    {
      str=(parseInt(str)-1)+"";
      document.querySelector('input').value=str;
      if(parseInt(document.querySelector('input').value)<0)
      {
        document.querySelector('input[value]').style.color="red";
      }
    }
    else
    {
      str="0";
      document.querySelector('input').value=str;
      if(parseInt(document.querySelector('input').value)===0)
      {
        document.querySelector('input[value]').style.color="black";
      }
    }

  })
}