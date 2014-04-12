using UnityEngine;
using System.Collections;

public class test : MonoBehaviour {

	// Use this for initialization
	void Start () {
		// Direct Graph
		Graph G = new Graph(true);
		Vertex u = new Vertex("u");
		Vertex v = new Vertex("v");
		Vertex w = new Vertex("w");
		Vertex x = new Vertex("x");
		Vertex y = new Vertex("y");
		Vertex z = new Vertex("z");
		// Add vertexes
		G.AddVertex(u);
		G.AddVertex(v);
		G.AddVertex(w);
		G.AddVertex(x);
		G.AddVertex(y);
		G.AddVertex(z);
		// Add edges
		G.AddEdge(u, v, 3);
		G.AddEdge(u, x, 3);
		G.AddEdge(v, y, 3);
		G.AddEdge(w, y, 3);
		G.AddEdge(w, z, 3);
		G.AddEdge(x, v, 3);
		G.AddEdge(y, x, 3);
		G.AddEdge(z, z, 3);
		//Depth Search First
		G.DepthSearchFirst();
		
		
		//Undirect Graph
		Graph UG = new Graph(false);
		Vertex ur = new Vertex("r");
		Vertex us = new Vertex("s");
		Vertex ut = new Vertex("t");
		Vertex uu = new Vertex("u");
		Vertex uv = new Vertex("v");
		Vertex uw = new Vertex("w");
		Vertex ux = new Vertex("x");
		Vertex uy = new Vertex("y");
		
		// Add vertexes
		UG.AddVertex(ur);
		UG.AddVertex(us);
		UG.AddVertex(ut);
		UG.AddVertex(uu);
		UG.AddVertex(uv);
		UG.AddVertex(uw);
		UG.AddVertex(ux);
		UG.AddVertex(uy);
		// Add Edge
		UG.AddEdge(ur, uv, 3);
		UG.AddEdge(ur, us, 3);
		UG.AddEdge(us, uw, 3);
		UG.AddEdge(ut, uu, 3);
		UG.AddEdge(ut, uw, 3);
		UG.AddEdge(ut, ux, 3);
		UG.AddEdge(uu, ux, 3);
		UG.AddEdge(uu, uy, 3);
		UG.AddEdge(uw, ux, 3);
		UG.AddEdge(ux, uy, 3);
		
		//Breadth First Search
		UG.BreadthFirstSearch(us);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
