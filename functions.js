const name = (checking,searching) => {

const regex = new RegExp(searching, "i","g");
return regex.test(checking);

}

