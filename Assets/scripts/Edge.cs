using UnityEngine;
using System.Collections;

public class Edge : MonoBehaviour {

	//Constructor
	public Edge(Vertex from, Vertex to, int weight)
	{
		FromVertex = from;
		ToVertex = to;
		Weight = weight;
	}
	//Property
	public Vertex FromVertex { get; private set; }
	public Vertex ToVertex { get; private set; }
	public int Weight { get; private set; }
}
