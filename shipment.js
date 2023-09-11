const trackingData = {
  trackingCode: "ABC123",
  status: "Delivered",
  location: "City, Country",
  deliveryDate: "September 15, 2023",
};

// DOM elements
const trackingForm = document.getElementById("tracking-form");
const trackingCodeInput = document.getElementById("tracking-code");
const resultContainer = document.getElementById("result-container");

// Event listener for form submission
trackingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const enteredCode = trackingCodeInput.value.toUpperCase();

  // Check if the entered code matches the sample tracking code
  if (enteredCode === trackingData.trackingCode) {
      displayTrackingResult();
  } else {
      resultContainer.innerHTML = "<p>Tracking code not found. Please check your code.</p>";
  }
});

// Function to display the tracking result
function displayTrackingResult() {
  const resultHTML = `
      <p><strong>Tracking Code:</strong> ${trackingData.trackingCode}</p>
      <p><strong>Status:</strong> ${trackingData.status}</p>
      <p><strong>Location:</strong> ${trackingData.location}</p>
      <p><strong>Estimated Delivery Date:</strong> ${trackingData.deliveryDate}</p>
  `;
  resultContainer.innerHTML = resultHTML;
}
