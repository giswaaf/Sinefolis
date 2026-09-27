document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    if (!name || !email || !age || !feedback) {
      alert("Please fill in all fields!");
      return;
    }

    // Redirect jika valid
    window.location.href = "faqsub.html";
  });
