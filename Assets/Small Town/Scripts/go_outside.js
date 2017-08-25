var target : Transform;

function Update () {

}

function OnTriggerEnter (col: Collider) {
	if (col.gameObject.tag=="gooutside") {
		this.transform.position=target.position;
	}
}