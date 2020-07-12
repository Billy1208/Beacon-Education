var getvalue = document.getElementById('level');
getvalue.addEventListener('change', function()
{

    if (this.value === "Elementary")
    {
        document.getElementById('y0').hidden = true;
        document.getElementById('y2').hidden = true;
        document.getElementById('y3').hidden = true;
        document.getElementById('subject').hidden = true;
        document.getElementById('y1').hidden = false;
        document.getElementById('sub1').hidden = false;
    }
    if (this.value === "Primary")
    {
        document.getElementById('y0').hidden = true;
        document.getElementById('y3').hidden = true;
        document.getElementById('y1').hidden = true;
        document.getElementById('subject').hidden = true;
        document.getElementById('y2').hidden = false;
        document.getElementById('sub1').hidden = false;
    }
    if (this.value === "High school")
    {
        document.getElementById('y0').hidden = true;
        document.getElementById('y2').hidden = true;
        document.getElementById('y1').hidden = true;
        document.getElementById('subject').hidden = true;
        document.getElementById('y3').hidden = false;
        document.getElementById('sub1').hidden = false;
    }
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}