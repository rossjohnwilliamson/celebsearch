

    
    let obj = memes.map((u,i) => {
    
    let image = document.createElement("img");
    let p = document.createElement("p");
    
    

     image.style.display = 'none';
        p.style.display = 'none';

     let span = document.createElement('span');

    //create p text and bind it to the section
    let section=document.querySelector("section");
    let pText = document.createTextNode(memes[i].name);

    
    p.appendChild(pText);
    section.appendChild(p);
    

    //end of created p

    //create image and bind it to the section
   
    let imageSrc = image.src=memes[i].url;

    let imageName = image.name=memes[i].name;
    


    span.appendChild(p,image);
    section.appendChild(image);
    section.appendChild(span);

    //end of created image
    
    
    


    
    let searchbox = document.querySelector("#searchinput");
    
    

    searchbox.addEventListener("keyup",() => {
    
    let search = searchbox.value;

    console.log(caps(search));


    
    if(caps(search) == memes[i].name){
        image.style.display = 'block';
        p.style.display = 'block';
         
        
     }

      

     else if(search !== memes[i].name){
        
         image.style.display = 'none';
        p.style.display = 'none';

     }


      

     


    });
   
    

    });

  
