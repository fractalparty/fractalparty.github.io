<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Chud Chat</title>

<style>
body{
font-family:'Comic Sans';
background:#f2f2f2;
margin:0;
padding:10px;
}

#chat{
height:300px;
overflow-y:auto;
background:white;
border:1px solid #ccc;
padding:10px;
margin-bottom:10px;
}

.message{
margin:5px 0;
}

.controls{
margin-bottom:10px;
}
</style>
</head>

<body>

<div class="controls">
Name:
<input id="name" placeholder="Your name">

Color:
<input type="color" id="color" value="#000000">
</div>

<div id="chat"></div>

<input id="msg" placeholder="Type message..." style="width:70%">
<button onclick="send()">Send</button>

<script>

const channel = new BroadcastChannel("site-chat");

function send(){

const name = document.getElementById("name").value || "Anonymous";
const color = document.getElementById("color").value;
const text = document.getElementById("msg").value;

const message = {name,color,text};

channel.postMessage(message);
addMessage(message);

document.getElementById("msg").value="";
}

channel.onmessage = (event)=>{
addMessage(event.data);
};

function addMessage(m){

const div=document.createElement("div");
div.className="message";

div.innerHTML =
"<span style='color:"+m.color+";font-weight:bold'>"+
m.name+
"</span>: "+m.text;

document.getElementById("chat").appendChild(div);

}

</script>

</body>
</html>
