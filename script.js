document.addEventListener('DOMContentLoaded', function() {
    var filterBtns = document.getElementsByClassName('filter-btn');
    for (var btn of filterBtns) {
      btn.addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        var category = this.getAttribute('data-category');
        filterSelection(category);
      });
    }
  
    // Function to filter projects
    function filterSelection(category) {
      var projects = document.getElementsByClassName('project');
      for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        if (category === 'all') {
          project.style.display = "block";
        } else if (category === 'other') {
          if (!project.classList.contains('deep_learning') && !project.classList.contains('embedded_desktop_dev') && !project.classList.contains('openCV_robotics') &&!project.classList.contains('udemy')) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        } else {
          if (project.classList.contains(category)) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        }
      }
    }
  
    // Initialize to show all projects
    filterSelection('all');
  });