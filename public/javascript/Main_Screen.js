let currentBugId;

function urlAdjustment(bugId) {
  const currentUrl = window.location.href;
  const newUrl = new URL(currentUrl);

  if (!newUrl.searchParams.has("bugId")) {
    // If 'bugId' doesn't exist in the URL, append it
    newUrl.searchParams.append("bugId", bugId);
  } else {
    // If 'bugId' exists in the URL, remove it
    newUrl.searchParams.delete("bugId");
  }

  // Push the updated URL
  history.pushState(null, null, newUrl);
  console.log(newUrl);
}

function urlRefreshVerification() {
  const currentUrl = new URL(window.location.href);
  
  var blur = document.getElementById('blurBug')
  var popupnote = document.getElementById('popupnote')

  if (popupnote && popupnote.classList.contains('active')) {
    blur.classList.toggle('active')
    popupnote.classList.toggle('active')
  }

  if (currentUrl.searchParams.has("bugId")) {
    currentUrl.searchParams.delete("bugId");
    history.replaceState(null, null, currentUrl.toString());
  }
}


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

  const bugId = `?bugId=${queryParamValue}`
  const form = document.getElementById('deleteBug');
  form.action += bugId 
}

function openBigNote(bugId) {
  const definedBugId = bugId;
  var blur = document.getElementById('blurBug');
  blur.classList.toggle('active');
  var popupnote = document.getElementById('popupnote');
  popupnote.classList.toggle('active');

  // Copy the values from the clicked div to the popup div
  var clickedDiv = document.querySelector('[data-id="' + bugId + '"]');
  var popupTitle = popupnote.querySelector('.popup-title');
  var popupUrgency = popupnote.querySelector('.popup-urgency');
  var popupBugType = popupnote.querySelector('.popup-bugtype');
  var popupDeadline = popupnote.querySelector('.popup-deadline');
  var popupBugEnvironment = popupnote.querySelector('.popup-bugenvironment');
  var popupBugDescription = popupnote.querySelector('.popup-bugdescription');
  var popupBugAssignTo = popupnote.querySelector('.popup-bugassignto');
  var popupBugAssignBy = popupnote.querySelector('.popup-bugassignby');
  var urgencyColour = clickedDiv.querySelector('.urgency');
  
  popupTitle.textContent = clickedDiv.querySelector('.bug-title').textContent;
  popupUrgency.style.backgroundColor = urgencyColour.style.backgroundColor;
  popupBugType.textContent = clickedDiv.querySelector('.bug-type').textContent;
  popupDeadline.textContent = clickedDiv.querySelector('.bug-deadline').textContent;
  popupBugEnvironment.textContent = clickedDiv.querySelector('.bug-environment').textContent;
  popupBugDescription.textContent = clickedDiv.querySelector('.description').textContent;
  popupBugAssignTo.textContent = clickedDiv.querySelector('.bug-assignto').textContent;
  popupBugAssignBy.textContent = clickedDiv.querySelector('.bug-assignby').textContent;

  //console.log(bugId);
  currentBugId = bugId;
  urlAdjustment(bugId)

//V verification code

  
  const divWithId = document.getElementById('profile-picture-container')
  const id = divWithId.dataset.name
  const userId = id
  const assignedByID = clickedDiv.querySelector('.bug-assignby').textContent;
  
  const editButtonContainer = document.getElementById('editButtonContainer')
  const editButton = document.getElementById('edit-Button')

  var condition 
  
  if (assignedByID == userId) {
    condition = 'true'
    //console.log('YASSSSSSSSSSSSSSSSSSS')
  } else {
    condition = 'false'
    //console.log('NARRRRRRRRRRRRRRRRRRR')
  }
  

  if (condition == 'false') {
    editButtonContainer.classList.remove('editButtonContainer');
    editButton.classList.remove('edit-Button');
    console.log('This is the user id: ' + id)
  } 
}

function closeBigNote()
{
		var blur = document.getElementById('blurBug')
    blur.classList.toggle('active')
    var popupnote = document.getElementById('popupnote')
    popupnote.classList.toggle('active')

    if (currentBugId !== undefined) {
      urlAdjustment(currentBugId);
    }

}

function loadEditNote() {
  var Editpopupnote = document.getElementById('EditPopUp');
  Editpopupnote.classList.toggle('active');


  //var EditpopupUrgency = popupnote.querySelector('.EditpopupUrgency');
  //EditpopupUrgency.style.backgroundColor = urgencyColour.style.backgroundColor
  
  var popuptitle = document.getElementById('popup-title')
  var popupbugtype = document.getElementById('popup-bugtype')
  var popupdeadline = document.getElementById('popup-deadline')
  var popupbugenvironment = document.getElementById('popup-bugenvironment')
  var popupbugdescription = document.getElementById('popup-bugdescription')
  var popupbugassignto = document.getElementById('popup-bugassignto')

  var Editpopuptitle = document.getElementById('Editpopup-title')
  var Editpopupbugtype = document.getElementById('Editpopup-bugtype')
  var Editpopupdeadline = document.getElementById('Editpopup-deadline')
  var Editpopupbugenvironment = document.getElementById('Editpopup-bugenvironment')
  var Editpopupbugdescription = document.getElementById('Editpopup-bugdescription')
  var Editpopupbugassignto = document.getElementById('Editpopup-bugassignto')

  Editpopuptitle.value = popuptitle.textContent
  Editpopupbugtype.value = popupbugtype.textContent
  Editpopupdeadline.value = popupdeadline.textContent
  Editpopupbugenvironment.value = popupbugenvironment.textContent
  Editpopupbugdescription.value = popupbugdescription.textContent
  Editpopupbugassignto.value = popupbugassignto.textContent
}

function closeEditNote() {
  var Editpopupnote = document.getElementById('EditPopUp');
  Editpopupnote.classList.toggle('active');

}

function openSprintForm()
{
  var blur = document.getElementById('blurSprint')
  blur.classList.toggle('active')
  var popupnote = document.getElementById('createSprintForm')
  popupnote.classList.toggle('active')
  
}

function closeSprintForm()
{
  var blur = document.getElementById('blurSprint')
    blur.classList.toggle('active')
    var popupnote = document.getElementById('createSprintForm')
    popupnote.classList.toggle('active')

}

function openBugForm()
{
  var blur = document.getElementById('blurNewBug')
  blur.classList.toggle('active')
  var popupnote = document.getElementById('createBug')
  popupnote.classList.toggle('active')
  
}

function closeBugForm()
{
  var blur = document.getElementById('blurNewBug')
    blur.classList.toggle('active')
    var popupnote = document.getElementById('createBug')
    popupnote.classList.toggle('active')

}


const urgencyColour = async () => {
  try {
    const priorityColour = document.getElementById('urgency');
    const priorityValue = element.dataset.urgency;
    if (priorityValue === '1') {
      priorityColour.style.backgroundColor = 'green';
    } else if (priorityValue === '2') {
      priorityColour.style.backgroundColor = 'yellow';
    } else {
      priorityColour.style.backgroundColor = 'brown';
    }
  } catch (err) {
    console.log(err)
  }
}

