#pragma strict
import Mathf;

function Start () {
	
}
var x:float;
var z:float;
var a:float;
var b:float;
x = 0;
a = 0.5;
b = 0.5;
function Update () {
	//	x =  Mathf.Sqrt(( 1 - (Mathf.Pow(0,20,2)/ Mathf.Pow(30,2)))* (3*3));
	transform.RotateAround(Vector3.one,Vector3.up, 10 * Time.deltaTime);

	Debug.Log(Vector3.up.x+" "+Vector3.up.y+" "+Vector3.up.z);
	//if(x < a){
	//	z = Mathf.Sqrt((a*a - x*x));
	//	x = x + 0.0000001;
	//	Debug.Log(x.ToString());
	//	transform.Translate(x,0,0);
	//}
}