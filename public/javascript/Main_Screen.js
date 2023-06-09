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
