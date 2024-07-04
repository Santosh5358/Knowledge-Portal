// script.js'

// Selelect Images and Preview Image
document.getElementById('image').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.src = URL.createObjectURL(file);
    imagePreview.style.display = 'block';
    imagePreview.style.width='30%';
    clearImage.style.display='block';

});

// Clear Image Section
document.getElementById('clearImage').addEventListener('click', () => {
    document.getElementById('image').value = ''; // Clear the input field
    document.getElementById('imagePreview').style.display = 'none'; // Hide the preview
    clearImage.style.display='none';

});

// Login Page Redirect
function LoginValid(){
    window.location.href="loign.html";
}
// Check ID and Password

function Validate(){
    let id=document.getElementById('email').value;
    let pas=document.getElementById('password').value;
    if(id==='avi@gmail.com'&&pas==='12345'){
        alert("id & password is correct!")
        window.location.href="main.html";
    }else{
        alert("worng Id & Password");
    }
}
// Logout 
function Logout(){
    window.location.href="index.html";
}
// Change the login to singup
function regi(){
    
    document.getElementById("login").style.display='none';
    document.getElementById("createAcc").style.display='block';
}
// change the Signup to Login
function logi(){
    
    document.getElementById("createAcc").style.display='none';
    document.getElementById("login").style.display='block';
}





// Take Question Show on the Body 



document.getElementById('submitQuestion').addEventListener('submit', function(event) {
    
    event.preventDefault();
    // document.getElementById('questionsContainer').style.display='block';
    var formData = new FormData(this);
    var questionTitle = document.getElementById('question_tittle').value;
    console.log(questionTitle);
    var questionDescription = document.getElementById('question').value;
    console.log(questionDescription);
    var authorName = document.getElementById('name').value;
    console.log(authorName);
    var currentTime = new Date();
    var elapsedTime = Math.floor((new Date() - currentTime) / 1000);
    console.log(elapsedTime);

    var image = document.getElementById('imagePreview').src;
    var container = document.getElementById('questionsContainer');
    var questionDiv = document.createElement('div');
    questionDiv.className = 'questions';
    questionDiv.innerHTML = `
        <div class="containers">
        <div class="left">
            <h3 id=${questionTitle}>${questionTitle}</h3>
            <p>${questionDescription}</p>
        </div>
        <div class="right" *ngif="${image}SS">
            <img src="${image}" alt="Question Image" width="100">
        </div>
        </div>
        <p><span class="vote-count">0</span><img src="thumbs-up-1024.webp"style="width: 4%;position: relative;top: 8px;;" onclick="vote(this)" alt="">  Asked by ${authorName} <span class="time-ago">0 minutes ago</span></p>
        
        <input class="answer-input" type="text" placeholder="Type your answer here...">
        <button class="hidden" onclick="submitAnswer(this)">Submit Answer</button>
        <div class="answers"><h4 id="answer" style="display:none;">Your Answer </h4></div>
    `;
  container.appendChild(questionDiv);
  updateTimes();
  document.getElementById('question_tittle').value="";
    document.getElementById('question').value="";
    document.getElementById('image').value="";
    document.getElementById('name').value="";
    document.getElementById('Ask_que').style.display = 'none';
    document.getElementById('imagePreview').style.display='none';
    document.getElementById('imagePreview').src = '';
    
  });




// Search by Question Tittle

function redirectToSectionById(id) {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.style.display('');
    } else {
      console.log('No section found with ID:', id);
      element.style.display(none);
    }
  }
  
  // Event listener for search bar input
document.getElementById('UserInput').addEventListener('input', function() {

    redirectToSectionById(this.value);

});


function vote(button) {
    var countSpan = button.previousElementSibling;
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
  }
  
  function submitAnswer(button) {
    document.getElementById("answer").style.display="block";
    var answerInput = button.previousElementSibling;
    var answersDiv = button.nextElementSibling;
    var answerP = document.createElement('p');
    answerP.textContent = answerInput.value;
    answersDiv.appendChild(answerP);
    answerInput.value = '';
    button.classList.add('hidden');
  }
  
  setInterval(updateTimes, 30000);
  
  function updateTimes() {
    var times = document.querySelectorAll('.time-ago');
    times.forEach(function(time) {
      var minutes = parseInt(time.textContent.split(' ')[0]);
      time.textContent = `${minutes + 1} minutes ago`;
    });
  }
  
  document.addEventListener('input', function(e) {
    if (e.target.classList.contains('answer-input')) {
      var submitBtn = e.target.nextElementSibling;
      submitBtn.classList.remove('hidden');
    }
  });
  
  document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      var activeElement = document.activeElement;
      if (activeElement.classList.contains('answer-input')) {
        var submitBtn = activeElement.nextElementSibling;
        submitAnswer(submitBtn);
      }
    }
  });