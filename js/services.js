function enviarDato(){
    
    const fetchData = (url_api) =>{
        return new Promise((resolve,reject)=>{
         const xhttp = new XMLHttpRequest()
            xhttp.open('GET',url_api,true)
            xhttp.onreadystatechange = (()=>{
                 if(xhttp.readyState === 4){
                    //if() ternario      
                    (xhttp.status === 200)
                     ? resolve(JSON.parse(xhttp.responseText))
                     : reject(new Error('Error',url_api))  
    
                     
                 }
            })
            xhttp.send()
        })
       
    }

    const API = 'http://localhost:8090/urbina/juancho/products/'

    const otherFunction = async (url_api) => {
         try{
          let idProducto = document.getElementById('idProductos').value
           
          const facData = await fetchData(`${url_api+idProducto}`)

          let html = `
               <thead>
               <th>Nombre</th>
               <th>Categoria</th>
               <th>Precio</th>
               <th>Stock</th>
               </thead>
               <tbody>
               <tr><td>${facData.name}</td><td>${facData.category.category}</td>
          <td>${facData.price}</td>
          <td>${facData.stock}</td>
          </tr>
          <tbody>
          `

          document.getElementById('tableProductos').innerHTML = html

         }catch(error){

         }
    }
    
    otherFunction(API)

}