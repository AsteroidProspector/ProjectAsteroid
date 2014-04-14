#pragma strict

//variables de mi asteroide seleccionado
var puntoX:float;
var puntoY:float;
var puntoZ:float;


var wasClicked : boolean;
var yo:GameObject;//nave q estara en movimiento en el escenario
var transform1: Transform;

function Start () {

}

function Update () {
	puntoX=transform.position.x;
	puntoY=transform.position.y;
	puntoZ=transform.position.z;

	transform1=yo.GetComponent(Transform);
	if(wasClicked)
	{
		//Debug.Log("aaaaaaaaa");
		calculaDistancias();
	}
	

}

    function OnMouseDown() {
    wasClicked = true;
    Activate();
    //calculaDistancias();
    }
     
    function OnMouseUp() {
    wasClicked = false;
    Deactivate();
    }
     
    function OnMouseEnter() {
    if (wasClicked) {
    Activate();
    //calculaDistancias();
    }
    }
     
     
    function OnMouseExit() {
    Deactivate();
    }
     
    function Activate() {
    renderer.material.color = Color.red;
    Debug.Log("activo");
    calculaDistancias();
    }
    
    function Deactivate() {
    renderer.material.color = Color.white;
    Debug.Log("inactivo");
    }
    
    
    function calculaDistancias(){
		var x1:float;
		x1=transform1.position.x;
		var y1:float;
		y1=transform1.position.y;
		var z1:float;
		z1=transform1.position.z;
		Debug.Log(" distancia "+Mathf.Pow(Mathf.Pow((puntoX-x1),2)+Mathf.Pow((puntoY-y1),2)+Mathf.Pow((puntoZ-z1),2),0.5));
	}
