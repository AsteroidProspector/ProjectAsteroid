 #pragma strict
var velocidad : float = 20;
var sw: boolean = true;

function Start () {
	//sw = false;
}


function Update () {
	//transform.Translate(Vector3.up, Vector3.zero, Time.deltaTime * 20);
	//if(sw){
		transform.Translate(0, Time.deltaTime * velocidad, 0, Space.World);
	//}
	
	if(transform.position.y > 300)
		Application.LoadLevel("espacio");
}

function OnTriggerEnter (other : Collider) {
		//Destroy(other.gameObject);
		if(other.gameObject.tag == "Player"){
			sw = true;	
			print("Colisiona");
		}
		else{
		print("No coliosiona");
		}
}
