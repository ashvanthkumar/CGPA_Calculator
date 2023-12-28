let addbtn=document.querySelector(".add");
let calbtn = document.querySelector(".cal");

let c=0;

let tot=0;
let ctot=0;

function addd()
{
    //console.log("clicked");

    let table=document.querySelector("table tbody");
    let row=document.createElement("tr");
    row.innerHTML=`<td><input type="text" placeholder="Enter course the name"></td>
    <td>
        <select>
            <option value="10">O</option>
            <option value="9">A+</option>
            <option value="8">A</option>
            <option value="7">B+</option>
            <option value="6">B</option>
            <option value="5">C</option>
            <option value="4">D</option>
            <option value="3">E</option>
        </select>
    </td>
    <td><input type="number" placeholder="Type" class="crdt"></td>
    <td><p class="g"></p></td>
    <td><p class="pf"></p></td>`;
   
    table.appendChild(row);
    
    let grd=document.querySelectorAll("select");
    let crd=document.querySelectorAll(".crdt");
    console.log(grd[c].value+" "+crd[c].value);
    let rest=grd[c].value * crd[c].value;
    document.querySelectorAll(".g")[c].innerHTML=rest;

    tot+=rest;
    ctot+=Number(crd[c].value);

    if(grd[c].value >= 5)
    {
        document.querySelectorAll(".pf")[c].innerHTML="PASS";
    }
    else{
        document.querySelectorAll(".pf")[c].innerHTML="FAIL";
    } 
    c++;
    
    
}

function calculate()
{

    let grd=document.querySelectorAll("select");
    let crd=document.querySelectorAll(".crdt");

    //console.log(grd[c].value+" "+crd[c].value);
    let rest=grd[c].value * crd[c].value;
    document.querySelectorAll(".g")[c].innerHTML=rest;

    tot+=rest;
    ctot+=Number(crd[c].value);
    
    if(grd[c].value >= 5)
    {
        document.querySelectorAll(".pf")[c].innerHTML="PASS";
    }
    else{
        document.querySelectorAll(".pf")[c].innerHTML="FAIL";
    } 
    console.log(tot+" "+ctot);

    document.querySelector(".k").innerHTML="Total CGPA :- "
    document.querySelector(".r").innerHTML=(tot/ctot).toFixed(3);
    
}