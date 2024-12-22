let listdata=document.getElementById('listdata');
listdata.addEventListener("click",function(){
    alert("Hello");
    let listdata1=document.getElementById('listdata1');
    let available1=document.getElementById('available1');
    let myvalue=window.getComputedStyle(listdata1);
    let datavalue=myvalue.display;
   console.log(datavalue);
   if(datavalue===`none`)
    {
        listdata1.style.display='flex';
        available1.style.display='none';
    }
});

let available=document.querySelector('#available');
available.addEventListener("click",function(){
    alert("Hello1")
    let listdata1=document.getElementById('listdata1');
    let available1=document.getElementById('available1');
    let myvalue=window.getComputedStyle(available1);
    let datavalue=myvalue.display;
    console.log(datavalue);
    if(datavalue===`none`)
    {
        listdata1.style.display='none';
        available1.style.display='flex';
    }
})