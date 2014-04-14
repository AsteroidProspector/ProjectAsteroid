#pragma strict

var velocidad : float = 1;
var a : float = 200.0;
var b : float = 150.0;
var factorDireccionX :int = -1;

var sw : boolean = false;
function Start () {
	transform.position.x = a;
	transform.position.z = 0;
}

function Update () {
	var X : float = transform.position.x + velocidad*factorDireccionX;
	if(X < -a)
	{
		factorDireccionX = 1;
		X = -a;
	}
	if(X > a)
	{
		factorDireccionX = -1;
		X = a;
	}
	transform.position.x = X;
	transform.position.z = Mathf.Sqrt(1-Mathf.Pow(X/a,2)) * b * factorDireccionX * -1;
	
}