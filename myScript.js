//conditional statements
function myFunction()
{
    var x=document.forms["myForm"]["firstname"].value;
    if (isNaN(x)) 
    {
        document.write("Must input numbers");
        return false;
    }
    else{

    	document.write("Good Job");
    }
}
//array
var names = ["ammu", "reddy","Hey","hello"];
document.getElementById("demo").innerHTML = names;

function array() {
    names.push("Wowww");
      names.push("superb");
        names.push("lovely");
    document.getElementById("demo").innerHTML = names;
    names.pop();
    document.getElementById("demo").innerHTML = names;
}

