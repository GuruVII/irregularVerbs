app.controller("MainController", ["$scope", function($scope) {
var masterVerbArray = [[0, "sedeti", "sit", "sat", "sat", 0.2], [1, "biti", "be", "was", "been", 0.2], [2, "voziti", "drive", "drove", "driven", 0.01], [3, "jesti","eat","ate", "eaten", 0.01]];
$scope.writtenVerbs = []; //all the verbs the user inputed

$("#start").click(function(){ //starts the entire page and selects the wrods.
	$("#input-area").removeClass("hidden");
	$("#start").addClass("hidden");
});

function createVerbStorage() { //function checks if there is already a verbArray in local storage and if there isn't creates one
	localStorage.clear(); 
	if (localStorage.getItem("verbArray") === null) {
		localStorage["verbArray"] = JSON.stringify(masterVerbArray);

	};
};
function WordSelect(){ //This funtion selects the words we are going to use by caling another function
	var tempArray = JSON.parse(localStorage.getItem("verbArray"));
	var selectedWords =[];
	var dieRoll = Math.random(); //compare a single dieroll to all the entries inside the tempArray, since it decrease the amounts of rolls the computer must do
	for (var i = 0; 2 > selectedWords.length; i++){//continusly cycle though the array while the words haven't been selected yet
			//random roll, the die is case once for each gothough the temp arrray
		if (dieRoll <= tempArray[i][5]){ //if the mathrandom is smaller or equal to chance from the verbArray
			selectedWords.push(tempArray[i]); //push selected words into selectedWords
			tempArray.splice(tempArray[i], 1); //takes the selected word from the tempArray
		};
		console.log("selected words length:" + selectedWords.length);
		if(i == (tempArray.length-1)){ //if you reached the end of the array, start over and throw the die again.
				i = 0;
				var dieRoll = Math.random();
		};
	};
	$scope.verb = selectedWords[0][1];
	tempArray.forEach(function(currentValue){ //if the word was not selected w want to increase the chance of it appearing
		if ((currentValue[5] += 0.01)<1){//already adds 1% chance increase, so there is no need for any code to executed
		}
		else{
			currentValue[5]=1;
		};
	});
	selectedWords.forEach(function(currentValue){
		tempArray.splice(currentValue[0], 0, currentValue); //adds back all the entriesback into the  tempArray
	});
	localStorage["selectedVerbArray"] = JSON.stringify(selectedWords); //creates localstorage item for the selected words
	localStorage["verbArray"] = JSON.stringify(tempArray); //stores all the verbs, including the % increase.

};

$scope.submit = function(){
	var selectedVerbArray = JSON.parse(localStorage.getItem("selectedVerbArray")); //all the verbs that were selected by the computer
	var tenses = ["original", "presentSimple", "pastSimple", "pastParticiple"];
	var checkedVerb = []; //contain the verbs the user inputed
	var correctAnwsers;
	var totalAnwsers;
	checkedVerb.push($scope.writtenVerbs.length); //is used as index
	tenses.forEach(function(currentValue){ 
		checkedVerb.push($scope[currentValue]) //dynamic scope names
	});
	$scope.writtenVerbs.push(checkedVerb); //all the verbs the user inputted
	for (var i = 2; i < 5; i++){
		console.log(i+ " " +selectedVerbArray[checkedVerb[0]][i]+ " " + checkedVerb[i] )
		if (selectedVerbArray[checkedVerb[0]][i].toUpperCase()==checkedVerb[i].toUpperCase()){ //checks if the values are the same
			console.log(i + ". ok")
			correctAnwsers++;
		}
		else{
			console.log(i +". ni ok")
			totalAnwsers++;
		};
	};
	tenses.forEach(function(currentValue){ 
		$scope[currentValue] = "" 
	});
	console.log($scope.writtenVerbs.length + " dolžina writtenwords");
	console.log(selectedVerbArray.length + " dolžina electedVerbArra");
	if ($scope.writtenVerbs.length == selectedVerbArray.length ){
		console.log("konec")
	}
	else
	{
		$scope.verb = selectedVerbArray[$scope.writtenVerbs.length][1]; //shows next verb
	};
};

createVerbStorage();
WordSelect();

}]);
