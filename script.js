// let boton= document.querySelector('button')
// boton.addEventListener('click',function(){
// 	console.log("alguien clikeo el botón")
// })

let boton = document.querySelector('button')
// let parrafo=document.querySelector('p')

// boton.addEventListener('click',()=>{
// 	parrafo.classList.toggle("resaltado2")
// })

let cuerpo=document.querySelector('body')

function seEjecutaEnEvento(){
	cuerpo.insertAdjacentHTML('beforeend',"<p>BEEP</p>")
	cuerpo.classList.toggle("color")
}
boton.addEventListener('click',seEjecutaEnEvento)
// est de acá con arrow function tambien funciona
	// cuerpo.insertAdjacentHTML('afterend',"<p>BEEP</p>")
	// cuerpo.classList.toggle("color")

let lis=document.querySelectorAll(".profesores>li")
for (let i=0; i<lis.length;i++){
	lis[i].addEventListener('click', function (){
		this.style.color="blue"
		this.classList.toggle('resaltado')
	})
}

for (let i=0; i<lis.length;i++){
	lis[i].addEventListener('mouseover', function (){
		let var1=lis[i].textContent
		this.style.color="red"
		this.textContent="chau"
		lis[i].addEventListener('mouseleave', function (){
		this.style.color="black"
		this.textContent=var1
	})
	})
	
}
