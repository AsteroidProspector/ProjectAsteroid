#pragma strict
var velocidad : float = 20;
var movimiento : float = 5;
//var target : int = 20;
	
function Start () {

}

function Update () {
	transform.Translate(0, Time.deltaTime * velocidad, 0, Space.Self);	
	//transform.rotation = Quaternion.RotateTowards(
}