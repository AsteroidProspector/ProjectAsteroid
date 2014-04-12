#pragma strict
//var de movimiento horizontal
var rotacionIzquierda = false;
var rotacionDerecha = false;
var restablecerRotacionIzqDer = false;
var restablecerRotacionDerIzq = false;

//var de movimiento vertical
var rotacionArriba = false;
var rotacionAbajo = false;
var restablecerRotacionAbajoArriba = false;
var restablecerRotacionArribaAbajo = false;
function Start () {

}

function Update () {
	//movimiento horizontal
	if(Input.GetKeyDown(KeyCode.A))
	{
		rotacionIzquierda = true;
	}
	if(Input.GetKeyUp(KeyCode.A))
	{
		rotacionIzquierda = false;
		restablecerRotacionIzqDer = true;
	}
	if(Input.GetKeyDown(KeyCode.D))
	{
		rotacionDerecha = true;
	}
	if(Input.GetKeyUp(KeyCode.D))
	{
		rotacionDerecha = false;
		restablecerRotacionDerIzq = true;
	}
	if(transform.rotation.z > 0.2)
		rotacionIzquierda = false;
	if(transform.rotation.z < -0.2)
		rotacionDerecha = false;
	if(rotacionIzquierda)
		transform.Rotate(0,0,1);
	if(rotacionDerecha)
		transform.Rotate(0,0,-1);
	if(restablecerRotacionIzqDer)
	{
		//verificamos si sigue fuera de lugar
		if(transform.rotation.z > 0)		
			transform.Rotate(0,0,-1);							
		else
			restablecerRotacionIzqDer = false;
	}
	if(restablecerRotacionDerIzq)
	{
		//verificamos si sigue fuera de lugar
		if(transform.rotation.z < 0)		
			transform.Rotate(0,0,1);							
		else
			restablecerRotacionDerIzq = false;
	}
	//------
	
	//movimiento vertical
	if(Input.GetKeyDown(KeyCode.S))
	{
		rotacionArriba = true;
	}
	if(Input.GetKeyUp(KeyCode.S))
	{
		rotacionArriba = false;
		restablecerRotacionArribaAbajo = true;
	}
	if(Input.GetKeyDown(KeyCode.W))
	{
		rotacionAbajo = true;
	}
	if(Input.GetKeyUp(KeyCode.W))
	{
		rotacionAbajo = false;
		restablecerRotacionAbajoArriba = true;
	}
	if(transform.rotation.x > 0.2)
		rotacionAbajo = false;
	if(transform.rotation.x < -0.2)
		rotacionArriba = false;
	if(rotacionAbajo)
		transform.Rotate(1,0,0);
	if(rotacionArriba)
		transform.Rotate(-1,0,-0);
	if(restablecerRotacionAbajoArriba)
	{
		//verificamos si sigue fuera de lugar
		if(transform.rotation.x > 0)		
			transform.Rotate(-1,0,0);							
		else
			restablecerRotacionAbajoArriba = false;
	}
	if(restablecerRotacionArribaAbajo)
	{
		//verificamos si sigue fuera de lugar
		if(transform.rotation.x < 0)		
			transform.Rotate(1,0,0);							
		else
			restablecerRotacionArribaAbajo = false;
	}
	
	transform.rotation.y=0;
}