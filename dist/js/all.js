var masterVerbArray = [[0, "sedeti", "sit", "sat", "sat"], [1, "biti", "be", "was", "been"], [2, "voziti", "drive", "drove", "driven"]];
var cookiesArray = [0.01, 0.01, 0.01]; //placeholder, the proper array will besotred in a cookie
var testVerbs =[] //the array will contain verbsthat wil be used in testing

function MergeArrays(){ //this function mergers two array that is stored in a cookie and the array inside the javascriptfile
	var tempArray = masterVerbArray; //master array must always be intact
	tempArray.forEach(function(currentValue, index){ 
		currentValue.push(cookiesArray[index]); //pushing the number from the cookies array into the subarray of the tempArray, from which we shall create a merged array
			});
	return tempArray
};


function WordSelect(){ //This funtion selects the words we are going to use
	var tempArray = MergeArrays();
	var selectedWords =[];
 	function arraySearch(){
 		var dieRoll = Math.random(); //comare a single dieroll to all the entries inside the tempArray, since it decrease the amounts of rolls the computer must do
		for (var i = 0; i < tempArray.length; i++){//continusly cycle though the array while the words haven't been selected yet
				//random roll, the die is case once for each gothough the temp arrray
			console.log(dieRoll);
			if (dieRoll <= tempArray[i][5]){ //if the mathrandom is smaller or equal to chance from the cookies array
				selectedWords.push(tempArray[i]);
				console.log(tempArray[i]);
				console.log(tempArray[i][0]);
				tempArray.splice(tempArray[i], 1);
				if(selectedWords.length >= 2){
					return;
				}
				else{
					arraySearch() //if the selectedWords array isn't full, we need to call the arraySsearch function again
				};
			}

		};
	};
	arraySearch();
	if(selectedWords.length < 2){
		arraySearch() //if, no die rolls fit the changes on this passthough, we need to call the function again
	};
	console.log(selectedWords);
	console.log(tempArray);
	tempArray.forEach(function(currentValue){ //if the word was not selected w want to increase the chance of it appearing
		if ((currentValue[5] += 0.01)<1){//already adds 1% chance increase, so there is no need for any code to executed
		}
		else{
			currentValue[5]=1;
		}
	});
	console.log(tempArray);
};

/*function WordCompare (){
	if ($("present-simple").text == )
}*/

WordSelect();