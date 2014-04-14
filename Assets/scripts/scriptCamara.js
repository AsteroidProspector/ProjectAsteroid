#pragma strict
var velocidad = 10.0;
var movimiento : boolean = false;

var rotarIzq : boolean = false;
var rotarDer : boolean = false;



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
	
	if(movimiento)//transform.Translate(Vector3.forward * 20 * Time.deltaTime);
		transform.Translate(0,0,velocidad * Time.deltaTime);
		
	if(Input.GetKeyDown(KeyCode.A))
		rotarIzq = true;
	if(Input.GetKeyUp(KeyCode.A))
		rotarIzq = false;
	
	if(Input.GetKeyDown(KeyCode.D))
		rotarDer = true;
	if(Input.GetKeyUp(KeyCode.D))
		rotarDer = false;
	if(rotarIzq);
		transform.RotateAround(Vector3.zero,Vector3.up,50 * Time.deltaTime);
		
	if(rotarDer);
		transform.RotateAround(Vector3.zero,Vector3.up,-50 * Time.deltaTime);
		
	
	
}