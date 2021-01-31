const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof num === 'number' && num >= 0)
    {
        this._numOfSensors = num;
    }
    else
    {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

    
class Surgeon {
  constructor(name, department ) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20
  }

	get name() {
	return this._name;
	}

	get department() {
	  return this._department; 
	} 

	get remainingVacationDays (){
	  return this._remainingVacationDays; 
	}

	takeVacationDays(daysOff )
	{
	  this._remainingVacationDays -= daysOff;
	}
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);
