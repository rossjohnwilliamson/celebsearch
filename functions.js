



const matchFirstLetterInName = (checking,searching) => {

const regex = new RegExp("^"+searching, "i");
return regex.test(checking);

}



const sliceMemes = (memes) => {

const indexOfSpace = memes.indexOf(" ");
const slice = memes.slice(indexOfSpace+1);
return slice;


}


const slice = (memes) => {

const indexOfSpace = memes.indexOf(" ");
const firstLetter = memes.charAt(0);
const slice = memes.slice(indexOfSpace+1);
const newSlice = slice.slice(1);
return firstLetter.toUpperCase() + newSlice;


}














