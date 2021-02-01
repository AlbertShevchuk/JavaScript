const {checkInventory} = require('./library.js');
const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (value) => {console.log(value);};

const handleFailure = (value) => {console.log(value);};

checkInventory(order).then(handleSuccess, handleFailure);
