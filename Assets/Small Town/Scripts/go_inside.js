var target : Transform;

function Update () {

}

function OnTriggerEnter (col: Collider) {
	if (col.gameObject.tag=="goinside") {
		this.transform.position=target.position;
	}
}