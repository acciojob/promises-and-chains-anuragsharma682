const form = document.getElementById("userForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  const ageCheckPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  ageCheckPromise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});
