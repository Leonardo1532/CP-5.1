const form = document.querySelector('#movie-form');
const titleInput = document.querySelector('#title');
const overviewInput = document.querySelector('#overview');
const genreInput = document.querySelector('#genre');
const voteAverageInput = document.querySelector('#vote-average');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData();
  formData.append('title', titleInput.value);
  formData.append('overview', overviewInput.value);
  formData.append('genre', JSON.stringify(genreInput.value.split(',')));
  formData.append('vote_average', voteAverageInput.value);

  fetch('https://apigenerator.dronahq.com/api/AnUOBKcb/Movies', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});