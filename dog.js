const hungerlevel = document.getElementById('h1').value
const thirstlevel = document.getElementById('t1').value
const boredlevel = document.getElementById('b1').value
document.getElementById('h1').value = 5
document.getElementById('t1').value = 5
document.getElementById('b1').value = 5
function fed() {
	if (document.getElementById('h1').value==10) {
		alert("Woofie <3 is full")
	}
	else{
		const hungerlevel = document.getElementById('h1');
		const fed1 = document.getElementById("hunger")
	    let currentValue = parseFloat(hungerlevel.value);
	    currentValue += 1
	    hungerlevel.value = currentValue
	    fed1.animate([
	    	{ opacity: 0.7, transform: 'translateX(110px) translateY(0px)' }, 
            { opacity: 0.6, transform: 'translateX(120px) translateY(0px)', offset: 0.20 }, 
            { opacity: 0.4, transform: 'translateX(125px) translateY(-5px)', offset: 0.25 }, 
            { opacity: 0.2, transform: 'translateX(130px) translateY(-10px)', offset: 0.35 }, 
            { opacity: 0,   transform: 'translateX(130px) translateY(-10px)', offset: 0.55 },
            { opacity: 0,   transform: 'translateX(130px) translateY(-10px)' }
	    ],{
	    	duration: 2000, 
            fill: 'forwards',
            easing: 'ease-out'
	    })

	}

}


function drank() {
	// If the value is already 10, alert and stop.
	if (document.getElementById('t1').value == 10) { 
		alert("Woofie <3 is quenched")
	}
	else {
		// Only run this code if the pet is NOT full (value < 10)
		const thirstlevel = document.getElementById('t1');
		const drank1 = document.getElementById("thirst")
	    let currentValue1 = parseFloat(thirstlevel.value);
	    currentValue1 += 1 // Increment the value
	    thirstlevel.value = currentValue1 // Set the new value
	    
	    // Animation code...
	    drank1.animate([
	    	{ opacity: 0.7, transform: 'translateX(110px) translateY(0px)' }, 
            { opacity: 0.6, transform: 'translateX(120px) translateY(0px)', offset: 0.20 }, 
            { opacity: 0.4, transform: 'translateX(125px) translateY(-5px)', offset: 0.25 }, 
            { opacity: 0.2, transform: 'translateX(130px) translateY(-10px)', offset: 0.35 }, 
            { opacity: 0,   transform: 'translateX(130px) translateY(-10px)', offset: 0.55 },
            { opacity: 0,   transform: 'translateX(130px) translateY(-10px)' }
	    ],{
	    	duration: 2000, 
            fill: 'forwards',
            easing: 'ease-out'
	    })
	}
}
function bored() {
	if (document.getElementById('b1').value == 10) { 
		alert("Woofie <3 is tired")
	}
	else {
		const boredlevel = document.getElementById('b1');
		const bore1 = document.getElementById("play1")
	    let currentValue2 = parseFloat(boredlevel.value);
	    currentValue2 += 1
	    boredlevel.value = currentValue2 
	   bore1.animate([
	    	{ opacity: 0.7, transform: 'translateX(110px) translateY(0px)' }, 
            { opacity: 0.6, transform: 'translateX(120px) translateY(0px)', offset: 0.20 }, 
            { opacity: 0.4, transform: 'translateX(125px) translateY(-5px)', offset: 0.25 }, 
            { opacity: 0.2, transform: 'translateX(130px) translateY(-10px)', offset: 0.35 }, 
            { opacity: 0,   transform: 'translateX(130px) translateY(-10px)', offset: 0.55 },
            { opacity: 0,   transform: 'translateX(130px) translateY(-10px)' }
	    ],{
	    	duration: 2000, 
            fill: 'forwards',
            easing: 'ease-out'
	    })
	}
}
function hunger(){
	const hungerlevel = document.getElementById('h1');
	let currentValue = parseFloat(hungerlevel.value);
	const mins=10000
	const maxs= 20000
	const delay = Math.random() * (maxs - mins) + mins
	setTimeout(() => {
		if(currentValue>1){
			currentValue -= 1
			hungerlevel.value = currentValue
		}else{
			currentValue =0
		}
		hunger()
	},delay)
}
hunger()
function thirst(){
	const thirstlevel = document.getElementById('t1');
	let currentValue = parseFloat(thirstlevel.value);
	const mins=10000
	const maxs= 20000
	const delay = Math.random() * (maxs - mins) + mins
	setTimeout(() => {
		if(currentValue>1){
			currentValue -= 1
			thirstlevel.value = currentValue
		}else{
			currentValue =0
		}
		thirst()
	},delay)
}
thirst()
function bored1(){
	const bored = document.getElementById('b1');
	let currentValue = parseFloat(bored.value);
	const mins=10000
	const maxs= 20000
	const delay = Math.random() * (maxs - mins) + mins
	setTimeout(() => {
		if(currentValue>1){
			currentValue -= 1
			bored.value = currentValue
		}else{
			currentValue =0
		}
		bored1()
	},delay)
}
bored1()
function death(){
	const bored = document.getElementById('b1');
	const thirstlevel = document.getElementById('t1');
	const hungerlevel = document.getElementById('h1');
	let d = 0
	let a = parseFloat(bored.value);
	let b = parseFloat(thirstlevel.value);
	let c = parseFloat(hungerlevel.value);
	if(a==1 && b==1 && c==1){
		alert("Woofie <3 is dead :(")
	}else{
		setTimeout(death,1000)
	}death()
}
death()
function coins(){
	alert('hi')
}