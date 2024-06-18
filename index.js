function changeCircleColor() {
	const circle = document.getElementById('circle')

	moveCircle(circle)
	  
	circle.addEventListener("dblclick", function(e) {     
    if (circle.style.backgroundColor !== 'blue') {
	    circle.style.boxShadow = '1px 1px 1px 50px rgba(64,225,225,0.2)'
	    circle.style.backgroundColor = 'blue'
    } else if (circle.style.backgroundColor === 'blue') {
	   		circle.style.boxShadow = '1px 1px 1px 50px rgba(236,83,83,0.2)'
      	circle.style.backgroundColor = 'red'
    } 
	})
}

function moveCircle(circle) {
	let isDragging = false
	let offsetX, offsetY

	circle.addEventListener("mousedown", function(event) {
		isDragging = true
		offsetX = event.offsetX
		offsetY = event.offsetY
		circle.style.cursor = 'grabbing'
	})

	document.addEventListener("mousemove", function(event) {
		if (isDragging) {
			circle.style.left = `${(event.pageX - offsetX)}px`
			circle.style.top = `${event.pageY - offsetY}px`
		}
	})

	document.addEventListener("mouseup", function() {
		isDragging = false
		circle.style.cursor = 'grab'
	})
}

changeCircleColor()