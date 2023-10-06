let numCourses = 1;

//function courseAdd(){
  //  const courseCont = documentgetElementById('courseCont');
  //  const courseData = document.getElementById('div');
  //  courseData.innerHTML =
  //  <div class = 'course-item'>
   //     <label>
   //         Course: 
    //        <input type="text" name="course${numCourses}"></input>
   //     </label>
   //     <button type="button" onclick="remove(${numCourses})">Remove</button>
   // </div>
   // courseCont.appencdChild(courseElement);
   // numCourses++;
//}

function addCourse() {
    const coursesContainer = document.getElementById("coursesCont");
    const newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.name = "courses[]";
    coursesContainer.appendChild(newCourseInput);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        coursesContainer.removeChild(newCourseInput);
        coursesContainer.removeChild(deleteButton);
    };
    coursesContainer.appendChild(deleteButton);
}

function remove(courseNum){
const inputData = document.querySelector('input[name="course${courseNum}"]');
if(inputData){
    const parentDiv =inputData.closest('.course-item');
    parentDiv.remove();
}
}

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        alert("Please fill out all required fields.");
        return;
    }

output.innerHTML = `
        
<h2 text-align="center" ><strong> ${formData.get('name')} || ${formData.get('mascot')}</strong></h2>

<figure>
    <img src="${imageUrl}" alt="Uploaded Image of ${formData.get('name')}"">
    <figcaption>${formData.get('caption')}</figcaption>
</figure>
<ul>
    <li><strong>Personal Background:</strong> ${formData.get('personal')}</li>
    <li><strong>Professional Background:</strong> ${formData.get('professional')}</li>
    <li><strong>Academic Background:</strong> ${formData.get('academic')}</li>
    <li><strong>Background in Web Development:</strong> ${formData.get('webDev')}</li>
    <li><strong>Primary Computer Platform:</strong> ${formData.get('platform')}</li>
    <li><strong>Courses:</strong></li>
<ul>
    ${Array.from(formData.keys()).filter(key => key.startsWith('course')).map(key => `<li>${formData.get(key)}</li>`).join('')}
</ul>
    <li><strong>Funny thing?</strong> ${formData.get('funnyThing')}</li>
    <li><strong>Anything else?</strong> ${formData.get('anythingElse')}</li>
    <li><strong>I understand that what is on this page is not password protected and I
    will not put anything here that I don’t want publicly available. -  ${formData.get('name')}</li>
<ul>
`;

// Hide the form after submission
event.target.style.display = 'none';

const resetLink = document.createElement('a');
    resetLink.href = '#';
    resetLink.innerText = 'New Form';
    resetLink.classList.add('reset-link');  
    resetLink.addEventListener('click', function(e) {
        e.preventDefault();  
        output.innerHTML = '';
        document.getElementById('infoForm').style.display = 'block';
    });
    output.appendChild(resetLink);
});

function validateForm() {
    const form = document.getElementById('infoForm');

    if (!form.name.value) return false;
    if (!form.mascot.value) return false;

    const imageFile = form.image.files[0];
    if (imageFile) {
        const fileType = imageFile.type;
        if (fileType !== 'image/png' && fileType !== 'image/jpeg') return false;
    } else {
        return false;
    }
    if (!form.caption.value) return false;
    if (!form.personal.value) return false;
    if (!form.professional.value) return false;
    if (!form.academic.value) return false;
    if (!form.webDev.value) return false;
    if (!form.platform.value) return false;
    if (!form.agreement.checked) return false;

    return true;
}
 