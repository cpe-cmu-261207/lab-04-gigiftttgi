const div = document.createElement('div')
div.className="content"
const ul = document.createElement('ul')
ul.className="classul"
const list = document.getElementById('input');

document.addEventListener("DOMContentLoaded", getsaveLocal);
document.addEventListener("DOMContentLoaded", getdoneLocal);

function Add()
{
  const li = document.createElement('li')
  li.className="newli"
  var nodelist = document.createTextNode(list.value)
  li.appendChild(nodelist)
  if(list.value === "")
  {
    alert("Empty!!! Please write something");
  }
  else
  {
    saveLocal(list.value)
    ul.appendChild(li);
    ul.insertBefore(li, ul.childNodes[0]);
  }
  div.appendChild(ul)
  document.body.appendChild(div)
  list.value = "";

  const delbut = document.createElement('span')
  delbut.innerText = "DELETE"
  delbut.className = "delete"
  li.appendChild(delbut);
  
  const donebut = document.createElement('span')
  const text1 = document.createTextNode("DONE");
  donebut.className = "done"
  donebut.appendChild(text1)
  li.appendChild(donebut)

  const dellist = document.getElementsByClassName("delete")
  for(var i=0;i<dellist.length;i++)
  {
    dellist[i].onclick = function(){
    const delbut = this.parentElement;
    const clnn = delbut.cloneNode(true);
    delbut.remove();
    deleteLocal(clnn)  
    } 
  }

  const donelist = document.getElementsByClassName("done")
  for(var i=0;i<dellist.length;i++)
  {
    donelist[i].onclick = function(){
    const donebut = this.parentNode;
    const cln = donebut.cloneNode(true);
    donebut.remove();
    cln.classList.remove('newli');
    cln.classList.toggle('doneli');
    ul.appendChild(cln);
    doneLocal(cln.childNodes[0].nodeValue)
    deleteLocal(cln)
    } 
  }
}

list.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    Add();
  return false;
  }
});


function saveLocal(list)
{
  let alllist;
  if(localStorage.getItem("alllist") === null)
    alllist = [];
  
  else
    alllist = JSON.parse(localStorage.getItem("alllist"))

  alllist.push(list)
  localStorage.setItem("alllist",JSON.stringify(alllist))
}

function getsaveLocal()
{
  let alllist;
  if(localStorage.getItem("alllist") === null)
    alllist = [];
  
  else
    alllist = JSON.parse(localStorage.getItem("alllist"))
    
    alllist.forEach(function(list){
    const li = document.createElement('li')
    li.className="newli"
    var nodelist = document.createTextNode(list)
    li.appendChild(nodelist)
    ul.appendChild(li);
    ul.insertBefore(li, ul.childNodes[0]);
    div.appendChild(ul)
    document.body.appendChild(div)

    const delbut = document.createElement('span')
    delbut.innerText = "DELETE"
    delbut.className = "delete"
    li.appendChild(delbut);
  
  const donebut = document.createElement('span')
  const text1 = document.createTextNode("DONE");
  donebut.className = "done"
  donebut.appendChild(text1)
  li.appendChild(donebut)

  const dellist = document.getElementsByClassName("delete")
  for(var i=0;i<dellist.length;i++)
  {
    dellist[i].onclick = function(){
      const delbut = this.parentElement;
      const clnn = delbut.cloneNode(true);
      delbut.remove();
      deleteLocal(clnn)  
    } 
  }

  const donelist = document.getElementsByClassName("done")
  for(var i=0;i<dellist.length;i++)
  {
    donelist[i].onclick = function(){
    const donebut = this.parentNode;
    const cln = donebut.cloneNode(true);
    donebut.remove();
    cln.classList.remove('newli');
    cln.classList.toggle('doneli');
    ul.appendChild(cln);
    deleteLocal(cln)
    doneLocal(cln.childNodes[0].nodeValue)
    } 
  }
  });
}

function deleteLocal(del){
  let alllist;
  if(localStorage.getItem("alllist") === null)
    alllist = [];
  
  else
    alllist = JSON.parse(localStorage.getItem("alllist"))

  const key = del.childNodes[0].nodeValue;
  alllist.splice(alllist.indexOf(key),1)
  localStorage.setItem("alllist", JSON.stringify(alllist))
}


function doneLocal(list)
{
  let  donelist;
  if(localStorage.getItem("donelist") === null)
    donelist = [];
  
  else
    donelist = JSON.parse(localStorage.getItem("donelist"))

    donelist.push(list)
  localStorage.setItem("donelist",JSON.stringify(donelist))
}

function getdoneLocal()
{
  let  donelist;
  if(localStorage.getItem("donelist") === null)
    donelist = [];
  
  else
    donelist = JSON.parse(localStorage.getItem("donelist"))

    donelist.forEach(function(list){
      const li = document.createElement('li')
      li.className="doneli"
      var nodelist = document.createTextNode(list)
      li.appendChild(nodelist)
      ul.appendChild(li);
      div.appendChild(ul)
      document.body.appendChild(div)
    });
}

//localStorage.clear()