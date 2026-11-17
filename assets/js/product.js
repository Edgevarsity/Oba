const products = [
            {name: "html", src: "", description: "", cost: "#200"},
            {name: "css", src: "", description: "", cost: "#300"},
            {name: "js", src: "", description: "", cost: "#500"}
        ] 
 
 products.forEach((product)=>{
            const div = document.querySelector('.items');
            const itemDiv = document.createElement('div');
            itemDiv.style.width="300px"
            div.append(itemDiv);
            const bookName = document.createElement('h2');
            bookName.innerText = product.name;
            div.append(bookName);
             const bookImage = document.createElement('img');
            bookImage.src = product.src;
            bookImage.alt ="product image";
            div.append(bookImage);
              const bookDescr = document.createElement('p');
            bookDescr.innerText = product.description;
            div.append(bookDescr); 
              const bookCost = document.createElement('p');
            bookCost.innerText = product.cost;
            div.append(bookCost);  
                             })