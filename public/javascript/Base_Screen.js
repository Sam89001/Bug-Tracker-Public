function openProjectPopUp ()
{
    var popupnote = document.getElementById('popUp')
    popupnote.classList.toggle('active')
		//above this is working
		//below is experimental
}

//test function

function closeProjectPopUp ()
{
    var popupnote = document.getElementById('popUp')
    popupnote.classList.toggle('active')
}

function addTransitionClass() {
    var projectName = document.getElementById('projectName');
    projectName.classList.toggle('active')
}
  