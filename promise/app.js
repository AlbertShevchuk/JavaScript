const {checkInventory,checkAvailability} = require('./library.js');
const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (value) => {console.log(value);};

const handleFailure = (value) => {console.log(value);};


const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');
checkInventory(order).then(handleSuccess, handleFailure);


Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);