/**Array is a collection of variables and values
 * 
 */
function func(){
	var v1=9;//primitive type so it is fast
	var v2=new Number();//object type means it holds a reference to a variable not directly the value
	
	var crs_nm=[3,7,2,7,9,9];
document.getElementById("head1").innerHTML="Hello";
document.getElementById("head1").innerHTML=crs_nm;
var _new=crs_nm;
document.getElementById("head2").innerHTML=crs_nm;

var x=crs_nm.sort();
document.getElementById("head3").innerHTML=x;
}
function add_own_component()
{
	var btn;
	btn = document.createElement("button");
	document.body.appendChild(btn);
	btn.innerHTML="Click Me";
	btn.onclick=function()
	{
		alert("Hello to scripting language");
	}
}
function add_to_select()
{
	var ar1=["MCA","B.TECH","MTECH","BCS","MNA","MBA"];	
	var sel=document.getElementById("sel1");
	var opt=document.createElement("option");
	opt.text=ar1[0];
	sel.add(opt);
	
	for(i=1;i<ar1.length;i++)
	{
	var opt=document.createElement("option");
	opt.text=ar1[i];
	sel.add(opt);
	}
}












