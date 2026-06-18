let api = "https://fakestoreapi.com/products/";
fetch(api)
    .then((data) => {
        return data.json()
    })

    .then((js) => {
        console.log(js);

        // Products Display

        js.forEach((c, i, t) => {
            let div1 = document.querySelector(".div1");
            let card1 = document.createElement("div");
            div1.append(card1);
            card1.innerHTML = `<img src=${c.image}><h1>${c.title}</h1><h2>Price: $${c.price}</h2>
            <h2>${c.category}</h2><p>${c.description.slice(0, 200)}...</p>`
        });

        // search Filtering

        let btn = document.querySelector("#heading2");
        btn.addEventListener("click", () => {
            let search = prompt(
                `Enter a Product name:
Men's Clothing
Women's Clothing
Electronics
Jewelery`).toLowerCase()
            let result = js.filter(product =>
                product.category.toLowerCase() === search
            );

            let div1 = document.querySelector(".div1");
            div1.innerHTML = "";

            if (result.length === 0) {
                div1.innerHTML = "<h1>No Products Found</h1>";
                return;
            }


            result.forEach((c, i, t) => {
                let card1 = document.createElement("div");
                card1.innerHTML = `<img src=${c.image}><h1>${c.title}</h1><h2>Price: $${c.price}</h2>
            <h2>${c.category}</h2><p>${c.description.slice(0, 200)}...</p>`;
                div1.append(card1);
            });

        });

    // category Filter

    let dropdown=document.querySelector("#category");
    dropdown.addEventListener("change",()=>{
        let category=dropdown.value;
        let result;
        if(category==="all"){
             result=js
        }else{
            result=js.filter((product)=>product.category===category);
        }

        let div1=document.querySelector(".div1");
        div1.innerHTML="";
        result.forEach((c, i, t) => {
                let card1 = document.createElement("div");
                card1.innerHTML = `<img src=${c.image}><h1>${c.title}</h1><h2>Price: $${c.price}</h2>
            <h2>${c.category}</h2><p>${c.description.slice(0, 200)}...</p>`;
                div1.append(card1);
            });
    })

    })
    .catch((error) => {
        console.log("error");
    })

    .finally(() => {
        console.log("api is running");

    })




