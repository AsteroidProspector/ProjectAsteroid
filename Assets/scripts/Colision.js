#pragma strict

var personaje : GameObject;
var cantidad : float = 0 ;
//var cantidadportiempo : float = 2;
static var sw2 : boolean = false;
var tiempo : float = 20;
var gui:GUIText;
var energyBar : GUIStyle ;
var bgImage : Texture2D; // background image that is 256 x 32
var fgImage : Texture2D; // foreground image that is 256 x 32

var tiempo2 : float;
var sw:boolean=true;
var distance : float;
function Start () {
	tiempo2 = tiempo;
	cantidad = Random.Range(5, 10);
}

personaje = GameObject.Find("RobotRecolector");
function Update () {
	distance = Vector3.Distance(personaje.transform.position, this.transform.position);
	if(distance < 20)
	{
		sw2 = true;
	}else{
		sw2 = false;
	}
	
	if(sw2){
		
		Screen.showCursor = false;
		if(sw)
		{
			tiempo -= 0.5;
			
			if(tiempo<=0)
			{
				sw=false;
				sw2 = false;
				Destroy(this.gameObject);
				if(transform.name.Equals("eucrite"))
					LogicaColision.cantEucrite += cantidad;
				if(transform.name.Equals("diogenite"))
					LogicaColision.cantDiogenite += cantidad;
				if(transform.name.Equals("howardite"))
					LogicaColision.cantHowardite += cantidad;
					
			}
		}
		
	}
}

function OnGUI () {
	// Create one Group to contain both images , the first two numbers define the on screen placement
	//GUI.BeginGroup (Rect (10,10,256,32));
	 
	// Draw the background image
	//GUI.Box (Rect (0,0,256,32), bgImage, energyBar);
	 
	// Create a second Group which will be clipped
	// We want to clip the image and not scale it, which is why we need the second Group
	//GUI.BeginGroup (Rect (0,0,(tiempo/tiempo2) * 256, 32));
	 
	// Draw the foreground image
	//GUI.Box (Rect (0,0,256,32), fgImage, energyBar);
	 
	// End both Groups
	//GUI.EndGroup ();
	//GUI.EndGroup ();
}