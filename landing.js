
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
      const faqItem = question.closest('.faq-item');

      // Close other FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.querySelector('.faq-answer').classList.add('hidden');
          item.querySelector('.arrow-icon').classList.remove('rotate-180');
        }
      });

      // Toggle current FAQ
      faqItem.querySelector('.faq-answer').classList.toggle('hidden');
      faqItem.querySelector('.arrow-icon').classList.toggle('rotate-180');
    });
  });

    