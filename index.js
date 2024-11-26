const handleGenerateBtnClick = () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
          const activity = document.querySelector('#activity-name');
          activity.textContent = data.activity
          activity.classList.add('activity-name__fun')
      })
  }
  const generateActivityBtn = document.querySelector('#generate-activity');
  generateActivityBtn.addEventListener('click', handleGenerateBtnClick)