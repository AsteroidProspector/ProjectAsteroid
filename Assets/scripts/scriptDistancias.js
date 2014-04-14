#pragma strict

var mercurio : GameObject;
var venus : GameObject;
var tierra : GameObject;
var marte : GameObject;
var jupiter : GameObject;
var saturno : GameObject;
var urano : GameObject;
var neptuno : GameObject;

var vesta : GameObject;


var sol: GameObject;

var gui : GUIText;


var PosicionOpcion: float;

var distMercurio : float ;
	var distVenus : float ;
	var distTierra : float;
	var distMarte : float ;
	var distJupiter : float;
	var distSaturno : float;
	var distUrano : float ;
	var distNeptuno : float;
	var distSol : float;
	var distVesta: float;
	
	var swSol: boolean = false;
	var swVesta: boolean = false;

function Start () {
	PosicionOpcion = (Screen.height/2)-45;
}

function Update () {
	var transformMercurio : Transform = mercurio.GetComponent("Transform");
	var posMercurio:Vector3 = transformMercurio.position;
	var transformVenus : Transform = venus.GetComponent("Transform");
	var posVenus:Vector3 = transformVenus.position;
	var transformTierra : Transform = tierra.GetComponent("Transform");
	var posTierra:Vector3 = transformTierra.position;
	var transformMarte : Transform = marte.GetComponent("Transform");
	var posMarte:Vector3 = transformMarte.position;
	var transformJupiter : Transform = jupiter.GetComponent("Transform");
	var posJupiter:Vector3 = transformJupiter.position;
	var transformSaturno : Transform = saturno.GetComponent("Transform");
	var posSaturno:Vector3 = transformSaturno.position;
	var transformUrano : Transform = urano.GetComponent("Transform");
	var posUrano:Vector3 = transformUrano.position;
	var transformNeptuno : Transform = neptuno.GetComponent("Transform");
	var posNeptuno:Vector3 = transformNeptuno.position;	
	var transformSol : Transform = sol.GetComponent("Transform");
	var posSol:Vector3 = transformSol.position;
	
	//asteroides
	var transformVesta : Transform = vesta.GetComponent("Transform");
	var posVesta:Vector3 = transformVesta.position;
	
	var distMercurio : float = posMercurio.Distance(posMercurio,transform.position) * 1000;
	var distVenus : float = posVenus.Distance(posVenus,transform.position) * 1000;
	var distTierra : float = posTierra.Distance(posTierra,transform.position) * 1000;
	var distMarte : float = posMarte.Distance(posMarte,transform.position) * 1000;
	var distJupiter : float = posJupiter.Distance(posJupiter,transform.position) * 1000;
	var distSaturno : float = posSaturno.Distance(posSaturno,transform.position) * 1000;
	var distUrano : float = posUrano.Distance(posUrano,transform.position) * 1000;
	var distNeptuno : float = posNeptuno.Distance(posNeptuno,transform.position) * 1000;
	var distSol : float = posSol.Distance(posSol,transform.position);
	var distVesta : float = posVesta.Distance(posVesta,transform.position);
	
	
	gui.text =	"Distancia al Sol: "+distSol +"\n" +
				"Distancia a Mercurio: "+distMercurio +"\n" +
				"Distancia a Venus: "+distVenus +"\n" +
				"Distancia a Tierra: "+distTierra +"\n" +
				"Distancia a Marte: "+distMarte +"\n" +
				"Distancia a Jupiter: "+distMarte +"\n" +
				"Distancia a Saturno: "+distSaturno +"\n" +
				"Distancia a Urano: "+distUrano +"\n" +
				"Distancia a Neptuno: "+distNeptuno +"\n" +
				"Distancia a Vesta: "+distVesta +"\n";
				
	//if(ditVesta < 50)
	//{
		
	//}
	if(distSol < 200)
		swSol = true;
	if(distVesta < 160)
		swVesta = true;
	
}

function OnGUI()
{
	if(swVesta)
	{
		var pos : Vector3 = transform.position;		
		GUI.backgroundColor = Color.blue;
		if(GUI.Button(Rect(30,200,200,50), "Aterrizar a vesta"))
		{
			
			Application.LoadLevel("vesta");
		}
		if(GUI.Button(Rect(30,260,200,50), "Informacion de vesta"))
		{
			PlayerPrefs.SetInt("indice",7);
			Application.LoadLevel("informacion");
		}
		
	}
}