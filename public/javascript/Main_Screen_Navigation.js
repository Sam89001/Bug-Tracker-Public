function sideBarNavigation() {
    const sidebar = document.getElementById('sidebar')
    const mainSectionButton = document.getElementById('mainSectionButtonID')
    const projectEditSectionButton = document.getElementById('projectEditSectionButtonID')

    const mainPage = document.getElementById('mainPage')
    const projectSettingsPage = document.getElementById('projectSettingsPage')

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
    })
   
  }