//my cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e =>{
  cursor.setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 11)+"px;")
})


var time1 = '';
var time2 = setInterval(change, 2000)
function change(){
    if(time1 = 10){
        var cur = document.getElementById("cursor");
        var a = Math.round(Math.random()*260)
        var b = Math.round(Math.random()*260)
        var c = Math.round(Math.random()*260)
        cusColor = 'rgb('+ a +', '+b + ', '+ c +')';
        cur.style.backgroundColor = cusColor;
        // upward.style.boxShadow = '0 0 10px '+cusColor;   
    }
}

// Hi, My Name Is Abubakar Musa And I Am From Niger State Too, I Need A Website For Selling Of Shoes And And Bags . Please I Have A Questions
// .... Do U Think I Can Make Customers Online? Like With The Website You Are To Design For Me, Cause I Dont Want To Make Wast To My Funds





//click section

var items = document.getElementById("items");
    var boger1 = document.getElementById("boger1");
    var items2 = document.getElementById("items2");
    var boger2 = document.getElementById("bogger");
    var boddy = document.getElementById("lbody");
    function boger(){
if(items.style.top == '350px'){
    items.style.top = '30px';
    boddy.style.overflow = 'scroll';
}
else
{
    items.style.top = '350px';
    boddy.style.overflow = 'hidden';
}
}
function bogeer(){

    if(items.style.top == '350px'){
        items.style.top = '30px';
        boddy.style.overflow = 'scroll';
    }
    else
    {
        items.style.top = '350px';
    }
    
    }





document.getElementById("Labout").addEventListener('click', function(){

       document.getElementById("about").scrollIntoView({
        behavior:"smooth"
      })
})

document.getElementById("Lexpo").addEventListener('click', function(){

    document.getElementById("service").scrollIntoView({
     behavior:"smooth"
   })
})

document.getElementById("Lservice").addEventListener('click', function(){

    document.getElementById("service").scrollIntoView({
     behavior:"smooth"
   })
})

document.getElementById("LDemo").addEventListener('click', function(){

    document.getElementById("page").scrollIntoView({
     behavior:"smooth"
   })
})

document.getElementById("LPage").addEventListener('click', function(){

    document.getElementById("page").scrollIntoView({
     behavior:"smooth"
   })
})

document.getElementById("msg").addEventListener('click', function(){

    document.getElementById("lmsg").scrollIntoView({
     behavior:"smooth"
   })
})

document.getElementById("Lexpo2").addEventListener('click', function(){

    document.getElementById("expo").scrollIntoView({
     behavior:"smooth"
   })
})

function come(){
// creating element
    var list1 = document.createElement("li");
    var list2 = document.createElement("span");
    var list3 = document.createElement("li");
    var list4 = document.createElement("li");
    var list = document.createElement("ul");
    list4.style.color = cusColor;
// calling element
    var inpName = document.getElementById("inp1").value;
    var inpMail = document.getElementById("inp3").value;
    var inpMsg = document.getElementById("inp4").value;
// storing element
    var store1 = document.createTextNode("Full Name: " +inpName);
    var store3 = document.createTextNode("Email: " +inpMail );
    var store4 = document.createTextNode( inpMsg);
    var store2 = document.createTextNode("Comment");
    var MYUL = document.getElementById("MyUl");
list1.appendChild(store1);
list3.appendChild(store3);
list4.appendChild(store4);
list2.appendChild(store2);

list.appendChild(list1);
list.appendChild(list3);
list.appendChild(list2);
list.appendChild(list4);

if(inpName == ''){
    alert('please enter your valied Full Name');
}else{
if(inpMail == ''){
    alert('please enter your valied mail');
}else{
    if(inpMsg == ''){
        alert('please enter your Comment');
    }else{
MYUL.appendChild(list);
document.getElementById("inp3").value = "";
document.getElementById("inp1").value = "";
document.getElementById("inp4").value = "";
    }
}
}

}




function view(){
    var viewmore1 = document.getElementById("viewmore");
    var viewmore2 = document.getElementById("viewmore2");
    var show = document.getElementById("show");
    var show2 = document.getElementById("show2");
    if(viewmore1.innerHTML == 'View More..'){
        viewmore1.style.display = 'none';
        viewmore2.style.display = 'block';
        show.style.height = '400px';
    }
    else{
        // viewmore.innerHTML = 'View More';
        // show.style.height = '1px';
        // viewmore1.style.display = 'block';
        show.style.height = '1px';
        show2.style.height = '1px';
        viewmore1.innerHTML = 'View More..';
    }
}

function view2(){
    var viewmore1 = document.getElementById("viewmore");
    var viewmore2 = document.getElementById("viewmore2");
    var show = document.getElementById("show");
    var show2 = document.getElementById("show2");
    if(viewmore2.innerHTML == 'View More.'){
        viewmore1.innerHTML = 'View Less';
        show2.style.height = '400px';
        viewmore2.style.display = 'none';
        viewmore1.style.display = 'block';

    }
    else{
        // viewmore1.innerHTML = 'View More';
        show.style.height = '1px';
        show2.style.height = '1px';
    }
}


    upward = document.getElementById("up")
    upward.addEventListener('click', function(){
    // upward.style.display = 'none';
    var upbtn = document.getElementById("lbody"); 
    upward.style.boxShadow = '0 0 25px '+cusColor;   
    upbtn.scrollIntoView({
         behavior:"smooth"
       })
    })




// odering
const openner = document.getElementById("odering");
var bbody = document.getElementById("lbody"); 
function oder(){
    loading.style.display = 'none';
if (openner.style.top == '-1200px') {
    openner.style.top = '30px';
    bbody.style.overflowY = 'hidden';
    document.getElementById("up").style.display = 'none'
}else
{
    openner.style.top = '-1200px';
    bbody.style.overflowY = 'scroll';
    document.getElementById("up").style.display = 'block'
    document.getElementById("firstname").value = '';
    document.getElementById("secondname").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("mail").value = '';
    document.getElementById("odertype").value = '';
}
    }

    
    var oderFor = document.getElementById("oderfor");
    var oderinput = document.getElementById("odertype");



            document.getElementById("oder1").onclick = function(){
    oderFor.innerHTML = "Learning Programming";
    oderinput.value ="Learning Programming";
    }

                document.getElementById("oder2").onclick = function(){
    oderFor.innerHTML = "WEB Development";
    oderinput.value = "Web Development";
    }
    
    document.getElementById("oder3").onclick = function(){
        oderFor.innerHTML = "Graphics Design";
        oderinput.value = "Graphics Design";
        }

                    document.getElementById("oder4").onclick = function(){
    oderFor.innerHTML = "UI/UX Design";
     oderinput.value  = "UI/UX Design";
    }

                        document.getElementById("oder5").onclick = function(){
    oderFor.innerHTML = "File Uploading";
    oderinput.value = "File Uploading";
    }
    
        document.getElementById("oder6").onclick = function(){
    oderFor.innerHTML = "Site Control";
    oderinput.value = "Site Control";
    }
    

    var loading = document.getElementById("loader");


    function complete(){



if(document.getElementById("firstname").value == "")
{
    alert("please fill in your first name");
}
else{

    if(document.getElementById("secondname").value == "")
{
    alert("please fill in your second name");
}
else{
    if(document.getElementById("contact").value == "")
{
    alert("please fill in your contact");
}
else{
    if(document.getElementById("mail").value == "")
{
    alert("please fill in your E-Mail");
}
else{
    if(document.getElementById("odertype").value == "")
{
    alert("please fill in your oder");
}
else{


    loading.style.display = 'block';





        var time = '';
        var timer = setTimeout(frame, 10000);
        function frame(){
            if(time <= 10){
                openner.style.top = '-1200px';
                bbody.style.overflowY = 'scroll';
    // creating elment
    var list01 = document.createElement("li");
    var list02 = document.createElement("li");
    var list03 = document.createElement("li");
    var list04 = document.createElement("li");
    var list05 = document.createElement("li");
    var list06 = document.createElement("button");

    var list001 = document.createElement("ul");
    var list002 = document.createElement("ul");
    var list003 = document.createElement("ul");
    var list004 = document.createElement("ul");
    var list005 = document.createElement("ul");
    var list006 = document.createElement("ul");


    var mylist = document.createElement("ul");
// adding function to added btn

    list006.onclick = function(){
                        mylist.style.opacity = '10%';
                        mylist.style.transition = '.5s';
                    }
// // calling element
    var name1 = document.getElementById("firstname").value;
    var name2 = document.getElementById("secondname").value;
    var name3 = document.getElementById("contact").value;
    var name4 = document.getElementById("mail").value;
    var name5 = document.getElementById("odertype").value;
// storing called element 
    var store01 = document.createTextNode(name1);
    var store02 = document.createTextNode(name2);
    var store03 = document.createTextNode(name3);
    var store04 = document.createTextNode(name4);
    var store05 = document.createTextNode(name5);
    store06 = document.createTextNode("WORK RECIEVED");
// asigning store value to created element 
    list01.appendChild(store01);
    list02.appendChild(store02);
    list03.appendChild(store03);
    list04.appendChild(store04);
    list05.appendChild(store05);
    list06.appendChild(store06);

    list001.appendChild(list01);
    list002.appendChild(list02);
    list003.appendChild(list03);
    list004.appendChild(list04);
    list005.appendChild(list05);
    list006.appendChild(list06);

    mylist.appendChild(list001)
    mylist.appendChild(list002)
    mylist.appendChild(list003)
    mylist.appendChild(list004)
    mylist.appendChild(list005)
    mylist.appendChild(list006)
// making it's visibility
    var entering = document.getElementById("ul");
    entering.appendChild(mylist);

    document.getElementById("firstname").value = '';
    document.getElementById("secondname").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("mail").value = '';
    document.getElementById("odertype").value = '';

    document.getElementById("up").style.display = 'block';


            }else{
                loading.style.display = 'none';

            }
        }

    }

}
}
}
}
}




// user
var usr = {
    "em": "admin",
    "psw": "pass"
}

function openOder(){

    if(items.style.top == '350px'){
        items.style.top = '30px';
        boddy.style.overflow = 'scroll';
    }
    else
    {
        items.style.top = '350px';
    }
    
var usinp1 = document.getElementById("inp1").value;
var usinp2 = document.getElementById("inp3").value;

if(usinp1 == usr.em){

if(usinp2 == usr.psw){
var oders = document.getElementById("oders");
oders.style.display = "block"
document.getElementById("inp1").value = '';
document.getElementById("inp3").value = '';
var holder = document.getElementById("hole-container")
holder.style.display = "none";
}
else{
false
}
}
else{
    false
}

}

function endOder(){
document.getElementById("oders").style.display = "none";
document.getElementById("hole-container").style.display = "block"
}



function viewoder(){
var usinp1 = document.getElementById("inp1").value;
var usinp2 = document.getElementById("inp3").value;
if(usinp1 == "")
{
    false
}
else{
    if(usinp2 == "")
    {
        false
    }
    else{
        usr.em = usinp1
        usr.psw = usinp2
    }
}
}

