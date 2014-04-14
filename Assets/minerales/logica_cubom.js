#pragma strict
var swA:boolean = false;
var swS:boolean = false;
var swD:boolean = false;
var swW:boolean = false;
function Start () {

}

function Update () {
	if(Input.GetAxis("Mouse ScrollWheel") > 0) { 
		transform.Translate(0,5,0);
	} 
	 else if(Input.GetAxis("Mouse ScrollWheel") < 0){
	 	transform.Translate(0,-5,0);
	 }
	if(Input.GetKeyDown(KeyCode.A)){
		swA=true;
	}
	if(Input.GetKeyDown(KeyCode.S)){
		swS=true;
	}
	if(Input.GetKeyDown(KeyCode.D)){
		swD=true;
	}
	if(Input.GetKeyDown(KeyCode.W)){
		swW=true;
	}
	if(Input.GetKeyUp(KeyCode.A)){
		swA=false;
	}
	if(Input.GetKeyUp(KeyCode.S)){
		swS=false;
	}
	if(Input.GetKeyUp(KeyCode.D)){
		swD=false;
	}
	if(Input.GetKeyUp(KeyCode.W)){
		swW=false;
	}
	if(swW){
		transform.Translate(Vector3.forward*2);
	}
	if(swS){
		transform.Translate(Vector3.forward*-2);
	}
	if(swA){
		transform.Rotate(0,-3,0);
	}
	if(swD){
		transform.Rotate(0,3,0);
	}
	
}