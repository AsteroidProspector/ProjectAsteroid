#pragma strict
    var myGravity : Transform;
     
    var gravityVal : float = 9.8;
    
function Start () {

}

function Update()
{
       rigidbody.velocity += gravityVal * (myGravity.position - transform.position).normalized;
       var myY : float = transform.eulerAngles.y;
       transform.LookAt(transform.position + myGravity.position);
       transform.eulerAngles = Vector3(transform.eulerAngles.x + 90, myY, transform.eulerAngles.z);
}