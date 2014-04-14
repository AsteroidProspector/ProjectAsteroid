#pragma strict

var nave: Transform;
var velocidad: float = 15.0f;
var PosicionOpcion: float;

function Start () {
	PosicionOpcion = (Screen.height/2)-45;
}

function Update () {
	nave.transform.Rotate(Vector3.up, Time.deltaTime * velocidad);
}

function OnGUI(){
	if(GUI.Button(Rect(50,PosicionOpcion,150,40), "Play")){
		Application.LoadLevel("despeje");
		print("Comenzar");
	}
	if(GUI.Button(Rect(50,PosicionOpcion +50,150,40), "Credits")){
		print("Comenzar");
	}
	if(GUI.Button(Rect(50,PosicionOpcion+100,150,40), "Exit")){
		Application.Quit();
	}
}