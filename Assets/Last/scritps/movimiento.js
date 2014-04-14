#pragma strict

function Start () {

}

function Update () {
if(Input.GetKeyDown(KeyCode.A)){
	transform.Translate(-1,0,0);
}
if(Input.GetKeyDown(KeyCode.D)){
	transform.Translate(1,0,0);
}
if(Input.GetKeyDown(KeyCode.W)){
	transform.Translate(0,0,1);
}
if(Input.GetKeyDown(KeyCode.S)){
	transform.Translate(0,0,-1);
}
}