const courseName = document.getElementById('course-name');
const rating = document.getElementById('rating');
const addButton = document.getElementById('add-course');
const coursesList = document.getElementById('courses-list');

async function presentAlert(message) {
  const alert = document.createElement('ion-alert');
  alert.header = 'Invalid Inputs';
  alert.message = message;
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  await alert.present();
}

const clear = () => {
  courseName.value = '';
  rating.value = '';
};

addButton.addEventListener('click', async () => {
  const enteredName = courseName.value;
  const enteredRating = rating.value;

  if (
    enteredName.trim().length <= 0 ||
    enteredRating.trim().length <= 0
  ) {
    await presentAlert('Please enter values for Course and Rating.');
    return;
  } else if (enteredRating > 5 || enteredRating < 1) {
    await presentAlert('Please enter a rating between 1 and 5.');
    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `<strong>${enteredName} - ${enteredRating}/5</strong>`;
  coursesList.appendChild(newItem);
  clear();
});
