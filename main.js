function updateBox() {
    const box = document.getElementById('box');
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const color = document.getElementById('color').value;
    const borderRadius = document.getElementById('borderRadius').value;

  
    box.style.width = width ? `${width}%` : '30%';
    box.style.height = height ? `${height}%` : '40%';
    box.style.backgroundColor = color ? color : 'blue';
    box.style.borderRadius = borderRadius ? `${borderRadius}px` : '10px';
}

function resetBox() {
    const box = document.getElementById('box');
    

    box.style.width = '30%';
    box.style.height = '40%';
    box.style.backgroundColor = 'blue';
    box.style.borderRadius = '50px';
}
