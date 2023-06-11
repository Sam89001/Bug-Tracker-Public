function openBigNote()
{
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popupnote = document.getElementById('popupnote')
    popupnote.classList.toggle('active')
		//above this is working
		//below is experimental
}

//test function

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