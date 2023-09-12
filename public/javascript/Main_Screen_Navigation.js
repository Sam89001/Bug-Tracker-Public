function sideBarNavigation() {
    const sidebar = document.getElementById('sidebar');
    const mainSectionButton = document.getElementById('mainSectionButtonID');
    const projectEditSectionButton = document.getElementById('projectEditSectionButtonID');
    const mainPage = document.getElementById('mainPage');
    const projectSettingsPage = document.getElementById('projectSettingsPage');
    let previousTarget = mainSectionButton; // Initialize with the default active button

    sidebar.addEventListener("click", function(event) {
        const selectedTarget = event.target;

       
        if (selectedTarget === previousTarget) {
            return; // Do nothing if it's the same item
        }
        previousTarget.classList.remove('selected');

      
        selectedTarget.classList.add('selected');
        previousTarget = selectedTarget;

       
        if (selectedTarget === mainSectionButton) {
            mainPage.classList.add('active'); 
            projectSettingsPage.classList.remove('active');  //<<---this code will need to change to be more robust
        } else if (selectedTarget === projectEditSectionButton) {
            mainPage.classList.remove('active');
            projectSettingsPage.classList.add('active'); //<<--- same here
        }
    });
}
/*
    //disables all active areas
    if(mainPage.classList.contains('active')) {
        mainPage.classList.toggle('active')
    } else if(projectSettingsPage.classList.contains('active')) {
        projectSettingsPage.classList.toggle('active')
    } 

    //disables all active buttons
    if(mainSectionButton.classList.contains('selected')) {
        mainSectionButton.classList.toggle('selected')
    } else if(projectEditSectionButton.classList.contains('selected')) {
        projectEditSectionButton.classList.toggle('selected')
    } 

    //checks which button is clicked and then shows desired page
    sidebar.addEventListener("click", function(event) {
        if (event.target.classList.contains("mainSectionButton")) {
            if(!mainPage.classList.contains('active')) {
                mainPage.classList.toggle('active')
                mainSectionButton.classList.toggle('selected')
            } 

        } else if (event.target.classList.contains("projectEditSectionButton")) {
            if(!projectSettingsPage.classList.contains('active')) {
                projectSettingsPage.classList.toggle('active')
                projectEditSectionButton.classList.toggle('selected')
            }
        }
    }) */
   

/*
    document.addEventListener('DOMContentLoaded', function(event) {
        const shutter = document.getElementById('shutter');
        const menuControl = document.getElementById('shutterContainer');
        let previousTarget = null;
  
        menuControl.addEventListener('click', function(event) {
          if (previousTarget !== null) {
            previousTarget.classList.remove('active');
          }
  
            const selectedTarget = event.target;
            selectedTarget.classList.toggle('active');
            previousTarget = selectedTarget;
          });
        });
 */

        function formActionApply() {
          
            const urlParams = new URLSearchParams(window.location.search);
            const queryParamValue = urlParams.get('bugId');
          
            const bugId = `?bugId=${queryParamValue}&_method=PUT`
          
            const form = document.getElementById('editBugForm');
            form.action += bugId 
          
          }
          
          function formActionApplyDelete() {
            const urlParams = new URLSearchParams(window.location.search);
            const queryParamValue = urlParams.get('bugId');
          
            const bugId = `?bugId=${queryParamValue}&_method=DELETE`
            const form = document.getElementById('deleteBug');
            form.action += bugId 
          }

          function confirmOverride() {
            const confirmation = window.confirm("Are you sure you want to delete?");
                  if (confirmation) {
                      return true; 
                  } else {
                      return false;
                  } //want to style this eventually, make it look more clean
              }
        