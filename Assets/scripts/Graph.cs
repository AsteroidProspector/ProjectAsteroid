using UnityEngine;
using System.Collections.Generic;
using System.Linq;
using System.Text;


public class Graph : MonoBehaviour {

	//Constructor
	public Graph(bool isDirect)
	{
		IsDirectGraph = isDirect;
		_vertexes = new HashSet<Vertex>();
		_VertexEdgeMapping = new Dictionary<Vertex, LinkedList<Edge>>();
	}
	
	public bool AddVertex(Vertex vertex)
	{
		try
		{
			_vertexes.Add(vertex);
			_VertexEdgeMapping.Add(vertex,new LinkedList<Edge>());
			return true;
		}
		catch(UnityException e)
		{
			print("Add vertex failed! {0}"+e.Message);
			return false;
		}
	}
	
	public bool AddEdge(Vertex from, Vertex to,int weight )
	{
		try
		{
			Edge newEdge = new Edge(from,to,weight);
			_VertexEdgeMapping[from].AddLast(newEdge);
			if (IsDirectGraph == false)
			{
				Edge backEdge = new Edge(to, from, weight);
				_VertexEdgeMapping[to].AddLast(backEdge);
			}
			return true;
		}
		catch(UnityException e)
		{
			print("Add edge failed! {0}"+ e.Message);
			return false;
		}
	}
	
	public bool BreadthFirstSearch(Vertex rootVertex)
	{
		try
		{
			print("******* Breadth First Search  ********");
			const string white = "white";
			const string gray = "gray";
			const string black = "black";
			Dictionary<Vertex, string> color = new Dictionary<Vertex, string>();
			Dictionary<Vertex, Vertex> parent = new Dictionary<Vertex, Vertex>();
			
			foreach (Vertex vertex in _vertexes)
			{
				color.Add(vertex, white);
				parent.Add(vertex,null);
			}
			
			color[rootVertex] = gray;
			
			Queue<Vertex> queue =  new Queue<Vertex>();   
			queue.Enqueue(rootVertex);
			
			while(queue.Count!=0)
			{
				Vertex temp = queue.Dequeue();
				foreach (Edge edge in _VertexEdgeMapping[temp])
				{
					if (color[edge.ToVertex] == white)
					{
						color[edge.ToVertex] = gray;
						parent[edge.ToVertex] = temp;
						queue.Enqueue(edge.ToVertex);
						
					}
				}
				color[temp] = black;
				print("Vertex {0} has been found!"+temp.VertexLabel);
			}
			
			return true;
		}
		catch (UnityException e)
		{
			print("Breadth First Search failed! {0}"+ e.Message);
			return false;
		}
		
	}
	
	public bool DepthSearchFirst()
	{
		try
		{
			print("******* Depth First Search  ********");
			const string white = "white";
			const string gray = "gray";
			const string black = "black";
			
			Dictionary<Vertex,string> color = new Dictionary<Vertex,string>();
			Dictionary<Vertex, Vertex> parent = new Dictionary<Vertex, Vertex>();
			foreach(Vertex vertex in _vertexes)
			{
				color.Add(vertex,white);
				parent.Add(vertex,null);
			}
			
			foreach (Vertex vertex in _vertexes)
			{
				if (color[vertex] == white)
				{
					DFS_Visit(vertex,color,parent);
				}
			}
			
			return true;
		}
		catch(UnityException e)
		{
			
			print("Depth search first failed! {0}"+ e.Message);
			return false;
		}
		
	}
	
	
	
	//Property
	public bool IsDirectGraph { get; set; }
	
	//private methods
	private bool DFS_Visit(Vertex vertex,Dictionary<Vertex,string> color,Dictionary<Vertex, Vertex> parent)
	{
		try
		{
			const string white = "white";
			const string gray = "gray";
			const string black = "black";
			
			color[vertex] = gray;
			foreach (Edge edge in _VertexEdgeMapping[vertex])
			{
				if (color[edge.ToVertex] == white)
				{
					parent[edge.ToVertex] = vertex;
					DFS_Visit(edge.ToVertex,color,parent);
				}
			}
			
			color[vertex] = black;
			print("Vertex {0} has benn found!"+vertex.VertexLabel);
			return true;
		}
		catch (UnityException e)
		{
			
			print("DFS_Visit failed! {0}"+ e.Message);
			return false;
		}
		
	}
	
	//private members
	private HashSet<Vertex> _vertexes;
	private Dictionary<Vertex, LinkedList<Edge>> _VertexEdgeMapping;

}
