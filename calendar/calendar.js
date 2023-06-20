var dt=new Date();
function Render()
{
    var enddate=new Date(dt.getFullYear(),dt.getMonth()+1,0);
    var predate=new Date(dt.getFullYear(),dt.getMonth(),0);
    var day=predate.getDay();
    var date=new Date();
    var Months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];
 document.getElementById("monthname").innerHTML=Months[dt.getMonth()];
 console.log(dt.getMonth(),date.getMonth())
 if(dt.getMonth()==date.getMonth())
 {
    document.getElementById("total_date").innerHTML=dt.toDateString();
 }
 else
 {
    document.getElementById("total_date").innerHTML="";
 }


 var cells="";
 for(i=day+1;i>0;i--)
 {
    cells=cells+"<div class='prev_date'>"+ (predate.getDate()-i+1)+"</div>";  
 }
 for(i=1;i<=enddate.getDate();i++)
 {
    if(i== date.getDate() && dt.getMonth()==date.getMonth())
    {
        cells=cells+"<div class='today'>"+i+"</div>";
    }
    else
    {
        cells=cells+"<div>"+i+"</div>";
    }
   
 }
 document.getElementsByClassName("dates")[0].innerHTML=cells;

}

function mode(para)
{
    if(para=='prev')
    {
         dt.setMonth(dt.getMonth()-1);
    }
    else if(para=='next')
    {
        dt.setMonth(dt.getMonth()+1);
    }
    Render();
}
