#pragma strict

var retardo : float=2;
var t : float;
function Start () {
	
}

function Update () {
	//if(Time.time > t)
	
}

function OnCollisionEnter (coll : Collision)
{
	Application.LoadLevel("gameover");
	Debug.Log("perdiste");
	
}