function initializeScratchCard(selectedImageIndex) {
    $("#card").wScratchPad({
        size: 100, // The size of the brush/scratch.
        bg: `Images/Gpay_Card ${selectedImageIndex}.jpg`, // Background image path.
        fg: `Images/front.jpg`, // Foreground image path.
        cursor: "pointer", // Set cursor.
        scratchUp: function () {
            // Add any action you want to perform when the scratch card is revealed
            alert("Scratch card revealed!");
        },
    });
}

// Function to retrieve query parameters from the URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the selected image index from the query parameter or generate a random one
let selectedImageIndex = getQueryParam("imageIndex");
if (!selectedImageIndex) {
    const numImages = 1; // Number of available images
    selectedImageIndex = Math.floor(Math.random() * numImages) + 1;
}

// Initialize the scratch card with the selected image index
initializeScratchCard(selectedImageIndex);

// Update the URL with the selected image index
const currentURL = window.location.href.split("?")[0]; // Remove existing query parameters
const updatedURL = `${currentURL}?imageIndex=${selectedImageIndex}`;
window.history.replaceState({}, "", updatedURL);
