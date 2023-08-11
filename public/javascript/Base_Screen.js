function openProjectPopUp ()
{
    var popupnote = document.getElementById('popUp')
    popupnote.classList.toggle('active')
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
		//above this is working
		//below is experimental
}

//test function

function closeProjectPopUp ()
{
    var popupnote = document.getElementById('popUp')
    popupnote.classList.toggle('active')
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
}

 /* function addTransitionClass() {
    var projectNames = document.querySelectorAll('.projectName');
    projectNames.forEach(function(projectName) {
      projectName.classList.toggle('active');
    });
  }; */

