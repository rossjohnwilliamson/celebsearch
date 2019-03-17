

    
    let obj = memes.map((u,i) => {
     



    let p = document.createElement("p");
    let image = document.createElement("img");
  
    const imageContainer = document.querySelector('.image-container');
   

     

     

    //create p text and bind it to the section
    let section=document.querySelector("section");
    let pText = document.createTextNode(memes[i].name);

    
   
    

    //end of created p

    //create image and bind it to the section
   
    let imageSrc = image.src=memes[i].url;

    let imageName = image.name=memes[i].name;

    




   
    section.appendChild(image);
     p.appendChild(pText);
    section.appendChild(p);
    

    //end of created image
    
    
    


    
    let searchbox = document.querySelector("#searchinput");
    
    

    searchbox.addEventListener("keyup",() => {
    
    let search = searchbox.value;

     

     if(search.length ==0){
      
      imageContainer.style.display = 'grid';
     

    }



     if(matchFirstLetterInName(memes[i].name,search)){

      p.style.display = 'block';
     image.style.display = 'block';
    

    }



    if(lastName(memes[i].name,search)){
       p.style.display = 'block';
     image.style.display = 'block';
    }




     else if(slice(search) == sliceMemes(memes[i].name)){
 
     p.style.display = 'block';
     image.style.display = 'block';
    
     
     
    

    }

    

   

   






    else{
      
      p.style.display = 'none';
      image.style.display = 'none';
      
      
      imageContainer.style.display = 'block';
      

    }



      
     
    });
   
    

    });

  
