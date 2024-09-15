
function updateBox() {
    const box = document.getElementById('box');
    const Width = document.getElementById('width').value;
    const Height = document.getElementById('height').value;
    const Color = document.getElementById('color').value;
    const newBorderRadius = document.getElementById('borderRadius').value;

    box.style.width = Width ? Width + '%' : '30%';
    box.style.height = Height ? Height + '%' : '40%';
    box.style.backgroundColor = Color || 'blue';
    box.style.borderRadius = newBorderRadius ? newBorderRadius + 'px' : '10px';
}

function reset() {
    const box = document.getElementById('box');
    box.style.width = '30%';
    box.style.height = '40%';
    box.style.backgroundColor = 'blue';
    box.style.borderRadius = '10px';
}

