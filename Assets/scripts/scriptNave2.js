#pragma strict
var velocidad = 10.0;
function Start () {

}

function Update () {
	var movX : Vector3 = Input.GetAxis("Horizontal") * transform.right * Time.deltaTime * velocidad;
	var movY : Vector3 = Input.GetAxis("Vertical") * transform.up * Time.deltaTime * velocidad * (-1);
	transform.Translate(movX + movY);
}