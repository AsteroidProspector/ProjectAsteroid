#pragma strict


var velocidad : float = 20;
var animacion : Animator;

static var cantEucrite : float = 0;
static var cantDiogenite : float = 0;
static var cantHowardite : float = 0;

var guiP : GUIText ;
function Start () {
animacion = GetComponent("Animator");
}

function Update () {
	var ejex : Vector3 = Input.GetAxis("Horizontal") * transform.right * Time.deltaTime * velocidad;
	var ejez : Vector3 = Input.GetAxis("Vertical") * transform.forward * Time.deltaTime * velocidad;
	transform.Translate(ejez+ejex);
	
	/*if(Input.GetKeyDown(KeyCode.T)){
		 animacion.SetBool("vaTaladrear", true);
	}
	
	if(Input.GetKeyUp(KeyCode.T)){
		animacion.SetBool("vaTaladrear", false);
	}*/
	if(Colision.sw2){
		animacion.SetBool("vaTaladrear", true);
	}else{
		animacion.SetBool("vaTaladrear", false);
	}
	
	guiP.text = "Cantidad de Eucrite: " + cantEucrite +"\n"+
				"Cantidad de Diogenite: " + cantDiogenite +"\n"+
				"Cantidad de Howardite: " + cantHowardite +"\n";
	
	
}

function OnCollisionEnter(col: Collision){
	
	if(!col.transform.name.Equals("Vesta_terrain"))
	{
		//Debug.Log("Colisiona objeto");
		//Destroy(col.transform.gameObject);
		//Destroy(gameObject);
	}
	
	Debug.Log("asd");
	animacion.SetBool("vaTaladrear", true);
}

