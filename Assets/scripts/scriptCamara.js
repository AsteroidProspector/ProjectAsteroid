#pragma strict
var velocidad = 10.0;
var movimiento : boolean = false;
function Start () {

}

function Update () {
	var movX : Vector3 = Input.GetAxis("Horizontal") * transform.right * Time.deltaTime * velocidad;
	var movY : Vector3 = Input.GetAxis("Vertical") * transform.up * Time.deltaTime * velocidad * (-1);
	transform.Translate(movX + movY);
	
	
	if(Input.GetKeyDown(KeyCode.Space))
		movimiento = true;
		
	if(Input.GetKeyUp(KeyCode.Space))	
		movimiento = false;
	
	if(movimiento)
		transform.Translate(0,0,velocidad * Time.deltaTime);
		
	
	
}