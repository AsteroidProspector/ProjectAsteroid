#pragma strict

function Start () {

}

function Update () {	
	transform.RotateAround (Vector3.zero, Vector3.up, 20 * Time.deltaTime);
}

//function RotateAround (point : Vector3, axis : Vector3, angle : float) : void 