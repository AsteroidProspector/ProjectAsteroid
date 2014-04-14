#pragma strict

var font: Font;
var fontsize: float = 15.0f;
var descubierto: GUIText;
var dimension: GUIText;
var masa: GUIText;
var temperatura: GUIText;
var recursos: GUIText;
var nombre: GUIText;
var index: int;

function Start () {
	
	index = 7;
	index = PlayerPrefs.GetInt("indice");
	descubierto.fontSize = fontsize;
	dimension.fontSize = fontsize;
	masa.fontSize = fontsize;
	temperatura.fontSize = fontsize;
	recursos.fontSize = fontsize;
	nombre.fontSize = fontsize;
	
	descubierto.font = font;
	dimension.font = font;
	masa.font = font;
	temperatura.font = font;
	recursos.font = font;
	nombre.font = font;
}

function Update()
{
	switch(index){
		case 0:
			Ceres();
			break;
		case 1:
			Apophis();
			break;
		case 2:
			Pallas();
			break;
		case 3:
			Itokawa();
			break;
		case 4:
			Silvia();
			break;
		case 5:
			Gaspra();
			break;
		case 6:
			Eros();
			break;
		case 7:
			Vesta();
			break;
		case 8:
			Ida();
			break;
		case 9:
			Toutatis();
			break;
	}
}

function Ceres()
{
	nombre.text = "Nombre : Ceres ";
	descubierto.text = "Descubierto por : Giuseppe Piazzi";
	dimension.text = "Dimension : 487.3 ± 1.8 km";
	masa.text = "Masa : (9.43±0.07)×10^20 kg";
	temperatura.text = "Temperatura : -105.15 C";
	recursos.text = "recursos: \n \t -  Agua congelada en su interior \n \t - Cronstedita \n \t - Dolomita \n \t - Siderita";
}

function Apophis()
{
	nombre.text = "Nombre : 99942 Apophis ";
	descubierto.text = "Descubierto por : Roy A. Tucker, David J. Tholen, Fabrizio Bernardi";
	dimension.text = "Dimension : 325 ± 15 m";
	masa.text = "Masa : 4×10^10 kg";
	temperatura.text = "Temperatura : -3.15 C";
	recursos.text = "recursos: \n \t - Piroxeno(Calcio, Sodio, Manganeso, litio o Magnesio)";
}

function Pallas()
{
	nombre.text = "Nombre : 2 Pallas ";
	descubierto.text = "Descubierto por : Heinrich Wilhelm Olbers";
	dimension.text = "Dimensión : 544 km";
	masa.text = "Masa : (2.11±0.26)×10^20 ";
	temperatura.text = "Temperatura : -3.15 C";
	recursos.text = "recursos: \n \t - Piroxeno(Calcio, Sodio, Manganeso, litio o Magnesio)";
}

function Itokawa()
{
	nombre.text = "Nombre : 25143 Itokawa ";
	descubierto.text = "Descubierto por : Linear";
	dimension.text = "Dimensión : 535 × 294 × 209 m ";
	masa.text = "Masa : (3.51±0.105)×10^10 kg";
	temperatura.text = "Temperatura : -67.15 C";
	recursos.text = "recursos: \n \t - Silicato";
}

function Silvia()
{
	nombre.text = "Nombre : 87 Silvia ";
	descubierto.text = "Descubierto por : Norman Robert Pogson";
	dimension.text = "Dimensión : 286 km ";
	masa.text = "Masa : 1.478±0.006×10^19kg ";
	temperatura.text = "Temperatura : -122.15 C ";
	recursos.text = "recursos: \n \t - Sulfuro de hierro";
}

function Gaspra()
{
	nombre.text = "Nombre : 951 Gaspra ";
	descubierto.text = "Descubierto por : G. N. Neujmin ";
	dimension.text = "Dimensión : 18.2×10.5×8.9 km ";
	masa.text = "Masa : 2–3×10^16 kg ";
	temperatura.text = "Temperatura : -92.15 C ";
	recursos.text = "recursos: \n \t - Piroceno";
}

function Eros()
{
	nombre.text = "Nombre : Eros ";
	descubierto.text = "Descubierto por : Carl Gustav Witt ";
	dimension.text = "Dimensión : 34.4×11.2×11.2 km ";
	masa.text = "Masa : 6.69×10^15 kg ";
	temperatura.text = "Temperatura : -46.15 C ";
	recursos.text = "recursos: \n \t - Condrita \n \t - Aluminio";
}

function Vesta()
{
	nombre.text = "Nombre : 4 Vesta ";
	descubierto.text = "Descubierto por : Henrich WIlhelm Oibers ";
	dimension.text = "Dimensión : 525.4±0.2 km ";
	masa.text = "Masa : (2.59076±0.00001)×10^20 Kg ";
	temperatura.text = "Temperatura : -188 C Min ";
	recursos.text = "recursos: \n \t - Howardite \n \t - Eucrite \n \t - DioGenite";
}

function Ida()
{
	nombre.text = "Nombre : 243 Ida ";
	descubierto.text = "Descubierto por : Johann Palisa ";
	dimension.text = "Dimensión : 53.6 × 24.0 × 15.2 km ";
	masa.text = "Masa : 4.2 ± 0.6 ×10^16 kg ";
	temperatura.text = "Temperatura : -73 C ";
	recursos.text = "recursos: \n \t - Condrita \n \t - Piroxeno";
}

function Toutatis()
{
	nombre.text = "Nombre : Toutatis ";
	descubierto.text = "Descubierto por : Christian Pollas ";
	dimension.text = "Dimensión : 4.5×2.4×1.9 km ";
	masa.text = "Masa : 5.0×1013 kg ";
	temperatura.text = "Temperatura : -99.15 C ";
	recursos.text = "recursos: \n \t - Silicatos";
}

function OnGUI()
{
	
	
	GUI.backgroundColor = Color.blue;
	if(GUI.Button(Rect(70,400,200,50), "Back"))
	{
		
		Application.LoadLevel("espacio");
	}

	
	
}