function checkEligibility() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const result = document.getElementById("result");

  if (!name || !age) {
    result.textContent = "⚠ Please enter both name and age.";
    result.style.color = "orange";
    return;
  }

  const ageNum = parseInt(age, 10);
  if (isNaN(ageNum)) {
    result.textContent = "⚠ Please enter a valid number for age.";
    result.style.color = "orange";
    return;
  }

  if (ageNum >= 18) {
    result.textContent = `Hi ${name}, you are eligible to vote ✅`;
    result.style.color = "green";
  } else {
    result.textContent = `Hi ${name}, you are not eligible to vote ❌ (must be 18+)`;
    result.style.color = "red";
  }
}
