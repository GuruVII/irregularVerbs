app.controller("MainController", ["$scope", function($scope) {
var masterVerbArray = [[0, "sedeti", "sit", "sat", "sat", 0.2], [1, "biti", "be", "was", "been", 0.2], [2, "voziti", "drive", "drove", "driven", 0.01], [3, "jesti","eat","ate", "eaten", 0.01]];

$("#start").click(function(){ //starts the entire page and selects the wrods.
	$("#input-area").removeClass("hidden");
	$("#start").addClass("hidden");
	WordSelect();
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
	arraySearch(tempArray, selectedWords);
	if(selectedWords.length < 2){
		arraySearch(tempArray, selectedWords) //if, no die rolls fit the changes on this passthough, we need to call the function again
	};
	tempArray.forEach(function(currentValue){ //if the word was not selected w want to increase the chance of it appearing
		if ((currentValue[5] += 0.01)<1){//already adds 1% chance increase, so there is no need for any code to executed
		}
		else{
			currentValue[5]=1;
		}
	});
};


var arraySearch = function (tempArray,selectedWords){ // functions that actually selects the word
 		var dieRoll = Math.random(); //compare a single dieroll to all the entries inside the tempArray, since it decrease the amounts of rolls the computer must do
		for (var i = 0; 2 > selectedWords.length; i++){//continusly cycle though the array while the words haven't been selected yet
				//random roll, the die is case once for each gothough the temp arrray
			if (dieRoll <= tempArray[i][5]){ //if the mathrandom is smaller or equal to chance from the verbArray
				selectedWords.push(tempArray[i]);
				console.log(tempArray[i]);
				console.log(tempArray[i][0]);
				tempArray.splice(tempArray[i], 1);
			};
			console.log("selected words length:" + selectedWords.length);
			if(i == (tempArray.length-1)){ //if you reached the end of the array, start over and throw the die again.
					i = 0;
					var dieRoll = Math.random();
			};
		};
		$scope.verb = selectedWords[0][1];
		console.log($scope.verb);
		localStorage["selectedVerbArray"] = JSON.stringify(selectedWords); //creates localstorage item fr the selected words
	};

$("#submit").click(function(){
	var selectedVerbArray = JSON.parse(localStorage.getItem("selectedVerbArray"));

})

createVerbStorage(); 

}]);
