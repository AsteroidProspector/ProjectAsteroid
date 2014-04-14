#pragma strict
var velocidad : float = 10.5;

function Start () {

}

function Update () {
	var ejex : Vector3 = Input.GetAxis("Horizontal") * transform.right * Time.deltaTime * velocidad;
	var ejez : Vector3 = Input.GetAxis("Vertical") * transform.forward * Time.deltaTime * velocidad;
	transform.Translate(ejex + ejez);
}