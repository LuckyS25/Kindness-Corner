const animals = document.querySelectorAll('.animal');

animals.forEach((animal) => {
  animal.addEventListener('mouseover', () => {
    animal.style.transform = 'scale(1.1)';
  });

  animal.addEventListener('mouseout', () => {
    animal.style.transform = 'scale(1)';
  });
});

const quotes = [
  "The greatest gift you can give is a few hours of your time. -Unknown",
  "Volunteering is the ultimate exercise in democracy. -Unknown",
  "Volunteers do not necessarily have the time; they just have the heart. -Elizabeth Andrew",
  "The best way to find yourself is to lose yourself in the service of others. -Mahatma Gandhi",
  "The only thing necessary for the triumph of evil is for good men to do nothing. -Edmund Burke",
  "Animals are such agreeable friends - they ask no questions, they pass no criticisms. -George Eliot",
  "The love for all living creatures is the most noble attribute of man. -Charles Darwin",
  "Until one has loved an animal, a part of one's soul remains unawakened. -Anatole France",
  "The greatness of a nation and its moral progress can be judged by the way its animals are treated. -Mahatma Gandhi",
  "I am in favor of animal rights as well as human rights. That is the way of a whole human being. -Abraham Lincoln",
];

const quote = document.getElementById('quote');

quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];


function handleDonation() {
  // Display a confirmation message
  alert('Thank you for your donation! Your donation has been completed.');
  // Redirect to the home page
  window.location.href = 'index.html';
}
// Get the button element
var donateButton = document.getElementById('btn-d');
// Add event listener to the button
donateButton.addEventListener('click', handleDonation);

