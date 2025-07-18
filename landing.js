
//optional 
function handleClick(featureName) {
  alert("Vous avez cliqué sur : " + featureName);
}

//testimony
function prevTestimonial() {
  const container = document.querySelector('.testimonials-section');
  container.scrollBy({ left: -320, behavior: 'smooth' });
}

function nextTestimonial() {
  const container = document.querySelector('.testimonials-section');
  container.scrollBy({ left: 320, behavior: 'smooth' });
}
//questions

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const currentItem = question.closest('.faq-item');

    //close the order items
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('open');
      }
    });

    // close the previous answer
    currentItem.classList.toggle('open');
  });
});

    