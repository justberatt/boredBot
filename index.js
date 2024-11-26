const handleGenerateBtnClick = () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
          console.log(data)
          document.getElementById("activity-name").textContent = data.activity
      })
  }
  const generateActivityBtn = document.querySelector('#generate-activity');
  generateActivityBtn.addEventListener('click', handleGenerateBtnClick)