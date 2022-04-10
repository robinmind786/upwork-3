const tooltips = document.getElementById('tooltips');
const howBtn = document.getElementById('how-w-btn');

howBtn.onmouseover = function() {
	tooltips.style.display = 'block';
}

howBtn.onmouseout = function() {
	tooltips.style.display = 'none';
}

