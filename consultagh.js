
	var contenido = document.querySelector('#contenido')
	fetch('https://api.github.com/users/pfabreuave/repos')
		.then(function(response){
			return response.json()
		})
		.then(function(data){
			 var cont = 0
			 for(cont=0;cont<data.length;cont++){ 
			 contenido.innerHTML +=` <div class="card">
			<a href="${data[cont].html_url}" target="_blank">  ${data[cont].name} </a>
 			</div>`
				
			}
		})	
