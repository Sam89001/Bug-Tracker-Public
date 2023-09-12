function sideBarNavigation() {
    const sidebar = document.getElementById('sidebar');
    const mainSectionButton = document.getElementById('mainSectionButtonID');
    const projectEditSectionButton = document.getElementById('projectEditSectionButtonID');
    const mainPage = document.getElementById('mainPage');
    const projectSettingsPage = document.getElementById('projectSettingsPage');
    let previousTarget = mainSectionButton; // Initialize with the default active button

    sidebar.addEventListener("click", function(event) {
        const selectedTarget = event.target;

        // Check if the clicked item is already selected
        if (selectedTarget === previousTarget) {
            return; // Do nothing if it's the same item
        }

        // Remove 'selected' class from the previousTarget
        previousTarget.classList.remove('selected');

        // Add 'selected' class to the newly clicked item
        selectedTarget.classList.add('selected');
        previousTarget = selectedTarget;

        // Toggle the corresponding pages' 'active' class
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
  