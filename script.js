// Initialize variables
let slider = document.getElementById("slider");
let currentAngle = 0;
let isDragging = false;
let startX, deltaX;
const anglePerItem = 360 / parseInt(getComputedStyle(slider).getPropertyValue('--quantity'));

// Rotate function
function rotateSlider(angle) {
    currentAngle += angle;
    slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${currentAngle}deg)`;
}

// Mouse drag functionality
slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        deltaX = e.clientX - startX;
        startX = e.clientX;
        rotateSlider(deltaX * 0.3);  // Adjust the sensitivity for dragging
    }
});

// Keyboard arrow keys for rotation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        rotateSlider(anglePerItem);  // Rotate left
    } else if (e.key === 'ArrowRight') {
        rotateSlider(-anglePerItem);  // Rotate right
    }
});

// Mouse wheel for zoom/rotate
slider.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        rotateSlider(-anglePerItem);  // Rotate left
    } else {
        rotateSlider(anglePerItem);  // Rotate right
    }
});
