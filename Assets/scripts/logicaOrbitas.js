#pragma strict

var velocidad : float = 0.1;
var a : float = 200.0;
var b : float = 150.0;

var factorDireccionX :int = -1;
var factorDireccionZ :int = 1;	

var X : float;
var Z : float;
//es la variable q nos determina si se incrementa en X o Z, si es true recorre en X, y si es false recorre en Z
var direccionVelocidad = false;
//foco de la elipse
var foco: float;
function Start () {
	transform.position.x = a;
	transform.position.z = 0;
	foco = Mathf.Sqrt(a*a-b*b);
}

function Update () {
	transform.Rotate(0,1,0);
	//para recorrer en X
	if(direccionVelocidad)
	{
		X = transform.position.x + velocidad * factorDireccionX;		
		transform.position.x = X;
		transform.position.z = Mathf.Sqrt(1-Mathf.Pow(X/a,2)) * b * factorDireccionZ * -1;
		
		//verificamos e cambio de direccion de velocidad controlando si X pasa el valor del foco
		if(X < -foco)
			direccionVelocidad = false;
		if(X > foco)
			direccionVelocidad = false;
		//Debug.Log("x");
	}
	//para recorrer en Z
	else
	{
		//Debug.Log("Z "+ X+" "+Z);
		Z = transform.position.z + velocidad*factorDireccionZ;
		X = Mathf.Sqrt(1-Mathf.Pow(Z/b,2)) * a * factorDireccionZ ;
		//verificamos si X llega a obtener un valor no valido en la ecuacion de la elipse al lado -
		if(Mathf.Abs(Z) < velocidad && X < 0)
		{
			//Debug.Log("Cambio de direccion -a " + X+" "+Z);
			factorDireccionX = 1;
			X = -a;
		}
		//verificamos si X llega a obtener un valor no valido en la ecuacion de la elipse al lado +
		if(Mathf.Abs(Z)<velocidad && X > 0)
		{
			//Debug.Log("Cambio de direccion a");
			factorDireccionX = -1;
			X = a;
		}
		transform.position.z = Z;
		transform.position.x = X;
		
		//verificamos e cambio de direccion de velocidad controlando si X pasa el valor del foco
		if(X < foco && factorDireccionZ == 1)
		{
			direccionVelocidad = true;
			factorDireccionZ = -1;
			//Debug.Log("cambio de direccion 1");
		}
		else
		{
			if(X > -foco && factorDireccionZ == -1)
			{
				direccionVelocidad = true;
				factorDireccionZ = 1;
			//	Debug.Log("cambio de direccion 2");
			}
		}
		
	}
}