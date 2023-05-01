document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('education').style.display="none";
  document.getElementById('expirience').style.display="none"
  document.getElementById('side-projects').style.display="none"
  document.getElementById('scills-n-tools').style.display="flex"
})

function show_education()  {

  let elem = document.getElementById('education'); //get element by ID
  let style = getComputedStyle(elem); //get styles from element

  if (style.display === 'none') 
  {
    document.getElementById('education').style.display="flex";
    document.getElementById('expirience').style.display="none"
    document.getElementById('side-projects').style.display="none"
    document.getElementById('scills-n-tools').style.display="none"
  }

  else if (style.display !== 'none') 
  {
    document.getElementById('education').style.display="none";
  }
  
}

function show_expirience()  {
  let elem = document.getElementById('expirience'); //get element by ID
  let style = getComputedStyle(elem); //get styles from element

  if (style.display === 'none') 
  {
    document.getElementById('expirience').style.display="flex";
    document.getElementById('education').style.display="none";
    document.getElementById('side-projects').style.display="none"
    document.getElementById('scills-n-tools').style.display="none"
  }

  else if (style.display !== 'none') 
  {
    document.getElementById('expirience').style.display="none";
  }
}

function show_sideprojects()  {
  let elem = document.getElementById('side-projects'); //get element by ID
  let style = getComputedStyle(elem); //get styles from element

  if (style.display === 'none') 
  {
    document.getElementById('side-projects').style.display="flex";
    document.getElementById('expirience').style.display="none";
    document.getElementById('education').style.display="none";
    document.getElementById('scills-n-tools').style.display="none"
  }

  else if (style.display !== 'none') 
  {
    document.getElementById('side-projects').style.display="none";
  }
}

function show_scills()  {
  let elem = document.getElementById('scills-n-tools'); //get element by ID
  let style = getComputedStyle(elem); //get styles from element

  if (style.display === 'none') 
  {
    document.getElementById('scills-n-tools').style.display="flex";
    document.getElementById('side-projects').style.display="none";
    document.getElementById('expirience').style.display="none";
    document.getElementById('education').style.display="none";
  }

  else if (style.display !== 'none') 
  {
    document.getElementById('scills-n-tools').style.display="none";
  }
}

// document.addEventListener('DOMContentLoaded', (e) => {
//   document.getElementById('open-education').addEventListener('click', (e) => {
//     document.getElementById('education').classList.add('education_show');
//   });
// });

/* Убрать перезагрузку при нажатии (форма)
document.getElementById('open-info').addEventListener('submit', (e => {
    e.preventDefault()
}))
*/
