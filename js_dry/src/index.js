const htmlStructure = (title) => {
    const container = document.querySelector(".names");
    container.style.lineHeight = '1.4';
    container.innerHTML += `${title} is here <br />`;
};

htmlStructure('Bob');
htmlStructure('John');