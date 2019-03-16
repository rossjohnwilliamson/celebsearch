const matchFirstLetterInName = (checking,searching) => {

const regex = new RegExp("^"+searching, "i");
return regex.test(checking);

}

const matchFullName = (checking,searching) => {

const regex = new RegExp(searching, "i");
return regex.test(checking);

}








