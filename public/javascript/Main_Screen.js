const bugSchema = require('../../models/bugSchema')

function openBigNote(bugId) {
  const definedBugId = bugId;
  var blur = document.getElementById('blur');
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
  
  popupTitle.textContent = clickedDiv.querySelector('.bug-title').textContent;
  popupUrgency.setAttribute('data-urgency', clickedDiv.querySelector('.urgency').getAttribute('data-urgency'));
  popupBugType.textContent = clickedDiv.querySelector('.bug-type').textContent;
  popupDeadline.textContent = clickedDiv.querySelector('.bug-deadline').textContent;
  popupBugEnvironment.textContent = clickedDiv.querySelector('.bug-environment').textContent;
  popupBugDescription.textContent = clickedDiv.querySelector('.description').textContent;
  popupBugAssignTo.textContent = clickedDiv.querySelector('.bug-assignto').textContent;
  popupBugAssignBy.textContent = clickedDiv.querySelector('.bug-assignby').textContent;

  console.log(bugId);
}


function closeBigNote ()
{
		var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popupnote = document.getElementById('popupnote')
    popupnote.classList.toggle('active')

}

function openSprintForm()
{
  var blur = document.getElementById('blur')
  blur.classList.toggle('active')
  var popupnote = document.getElementById('createSprintForm')
  popupnote.classList.toggle('active')
  
}

function closeSprintForm()
{
  var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popupnote = document.getElementById('createSprintForm')
    popupnote.classList.toggle('active')

}

function openBugForm()
{
  var blur = document.getElementById('blur')
  blur.classList.toggle('active')
  var popupnote = document.getElementById('createBug')
  popupnote.classList.toggle('active')
  
}

function closeBugForm()
{
  var blur = document.getElementById('blur')
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

module.exports = { urgencyColour };