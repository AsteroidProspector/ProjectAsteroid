using UnityEngine;
using System.Collections;

public class Vertex : MonoBehaviour {

	//Constructor
	public Vertex(string label)
	{
		
		VertexLabel = label;
	}
	
	//Property
	public string VertexLabel { get; private set; }
}
