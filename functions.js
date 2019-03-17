


const name = (checking,searching) => {

const regex = new RegExp(searching, "i","g");
return regex.test(checking);

}


const sortAlph = (a,b) =>{


  const genreA = a.name.toLowerCase();
  const genreB = b.name.toLowerCase();

  let comparison = 0;
  if (genreA > genreB) {
    comparison = 1;
  } 

  else if (genreA < genreB) {
    comparison = -1;
  }
  return comparison;





}





















