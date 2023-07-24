var dropdownButton = document.querySelector('.dropdown-button');
var dropdownContent = document.querySelector('.dropdown-content');

dropdownButton.addEventListener('click', function() {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});

// Optional: Close the dropdown when clicking outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-button')) {
    dropdownContent.style.display = 'none';
  }
});

function showOptions(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.style.display = 'block';
}

function hideOptions(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  dropdownContent.style.display = 'none';
}


