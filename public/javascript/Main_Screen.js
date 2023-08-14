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
  var urgencyColour = clickedDiv.querySelector('.urgency')
  
  popupTitle.textContent = clickedDiv.querySelector('.bug-title').textContent;
  popupUrgency.style.backgroundColor = urgencyColour.style.backgroundColor
  popupBugType.textContent = clickedDiv.querySelector('.bug-type').textContent;
  popupDeadline.textContent = clickedDiv.querySelector('.bug-deadline').textContent;
  popupBugEnvironment.textContent = clickedDiv.querySelector('.bug-environment').textContent;
  popupBugDescription.textContent = clickedDiv.querySelector('.description').textContent;
  popupBugAssignTo.textContent = clickedDiv.querySelector('.bug-assignto').textContent;
  popupBugAssignBy.textContent = clickedDiv.querySelector('.bug-assignby').textContent;

  //console.log(bugId);

  const divWithId = document.getElementById('profile-picture-container')
  const id = divWithId.dataset.name
  const userId = id
  const assignedByID = clickedDiv.querySelector('.bug-assignby').textContent;
  
  const editButtonContainer = document.getElementById('editButtonContainer')
  const editButton = document.getElementById('edit-Button')

  var condition = 'false'
  
  if (assignedByID == userId) {
    condition = 'true'
    console.log('YASSSSSSSSSSSSSSSSSSS')
  } else {
    condition = 'false'
    console.log('NARRRRRRRRRRRRRRRRRRR')
  }
  

  if (condition == 'true') {
    editButtonContainer.classList.remove('editButtonContainer');
    editButton.classList.remove('edit-Button');
    console.log('This is the user id: ' + id)
  } 

}

/*
const verificationFuction = async() => {
  try {
  divWithId = document.getElementById('profile-picture-container')
  id = divWithId.dataset.name

  console.log(id)
  
    //^^ this should be working now

    
  const userId = id
  const visibleCondition = document.getElementById('visibleCondition')
  const condition = false

  if (condition = false) {
    visibleCondition.classList.remove('editButtonContainer');
    console.log('This is the user id: ' + id)
  } 
  verificationFuction()

  
  } catch (err) {
    console.log(err)
  }
  }
*/

function closeBigNote()
{
		var blur = document.getElementById('blurBug')
    blur.classList.toggle('active')
    var popupnote = document.getElementById('popupnote')
    popupnote.classList.toggle('active')

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

/* const loadData = async () => {
  try {
    const bugs = await bugSchema.find({ sprintId: sprintId });
    bugs.forEach(bug => {
      const bugData = bug.toString();
      console.log(bugData);
    });
    // Update the existing data in the webpage
    // For example, you can emit a socket event or use a templating engine to update the UI with the new data
  } catch (err) {
    console.error(err);
  }
}; */

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

