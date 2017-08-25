function OnGUI() {
	
	if(GUI.Button (Rect (Screen.width/2-50,Screen.height/2,100,40), "Play Game")) {
		Application.LoadLevel(1);
	}
	if(GUI.Button (Rect (Screen.width/2-50,Screen.height/2+40,100,40), "Quit Game")) {
		Application.Quit();
	}

}