players_array=[]

function submit(){
    var name_1=document.getElementById("name1").value 
    var name_2=document.getElementById("name2").value
    var name_3=document.getElementById("name3").value
    var name_4=document.getElementById("name4").value
    var name_5=document.getElementById("name5").value
    var name_6=document.getElementById("name6").value

    players_array.push(name_1);
    players_array.push(name_2);
    players_array.push(name_3);
    players_array.push(name_4);
    players_array.push(name_5);
    players_array.push(name_6);

    document.getElementById("names").innerHTML=players_array

    document.getElementById("sub").style.display="none"
    document.getElementById("sort").style.display="inline-block"
}
function sorting(){
    players_array.sort()
    document.getElementById("names").innerHTML=players_array
}