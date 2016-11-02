
app.controller("MainController", ["$scope", function($scope) {
$('[data-toggle="tooltip"]').tooltip();
var masterVerbArray = [[0, "sedeti", "sit", "sat", "sat", 0.01], [1, "biti", "be", "was", "been", 0.01], [2, "voziti", "drive", "drove", "driven", 0.01], [3, "jesti","eat","ate", "eaten", 0.01]];
$scope.writtenVerbs = []; //all the verbs the user inputed

$("#start").click(function(){ //starts the entire page and selects the words.
	$("#input-area").removeClass("hidden");
	$("#start").addClass("hidden");
});

function createVerbStorage() { //function checks if there is already a verbArray in local storage and if there isn't creates one 
	if (localStorage.getItem("verbArray") === null) {
		localStorage["verbArray"] = JSON.stringify(masterVerbArray);
	};
};

function WordSelect(){ //This funtion selects the words we are going to use by caling another function
	var tempArray = JSON.parse(localStorage.getItem("verbArray"));
	 //this array temporarily stores data from local storage item verbArray
	var workArray = tempArray.slice(); //copies the array instead of referencing it
	var selectedWords =[];
	var dieRoll = Math.random(); //compare a single dieroll to all the entries inside the workArray, since it decrease the amounts of rolls the computer must do
	for (var i = 0; 2 > selectedWords.length; i++){//continusly cycle though the array while the words haven't been selected yet
			//random roll, the die is case once for each gothough the temp arrray
		if (dieRoll <= workArray[i][5]){ //if the math random is smaller or equal to chance from the verbArray
			selectedWords.push(workArray[i]); //push selected words into selectedWords
			workArray.splice(workArray[i], 1);
		};
		console.log("selected words length:" + selectedWords.length);
		if(i == (workArray.length-1)){ //if you reached the end of the array, start over and throw the die again.
				i = 0;
				var dieRoll = Math.random();
		};
	};
	$scope.verb = selectedWords[0][1];
	tempArray.forEach(function(currentValue){ //if the word was not selected w want to increase the chance of it appearing
		if ((currentValue[5] = currentValue[5] + 0.01)<1){//already adds 1% chance increase, so there is no need for any code to executed
		}
		else{
			currentValue[5]=1;
		};
	});
	selectedWords.forEach(function(currentValue){
		currentValue[5] = currentValue[5] - 0.01;
		tempArray.splice(currentValue[0], 1, currentValue); //adds back all the entriesback into the  tempArray
		
	});
	localStorage["selectedVerbArray"] = JSON.stringify(selectedWords); //creates localstorage item for the selected words
	localStorage["verbArray"] = JSON.stringify(tempArray); //stores all the verbs, including the % increase.

};

$scope.submit = function(){
	var selectedVerbArray = JSON.parse(localStorage.getItem("selectedVerbArray")); //all the verbs that were selected by the computer
	var tenses = ["presentSimple", "pastSimple", "pastParticiple"];
	var checkedVerb = []; //contain the verbs the user inputed
	var correctAnwsers = 0;
	checkedVerb.push($scope.writtenVerbs.length); //is used as index
	checkedVerb.push($scope.verb); //pushes in the current verb in then native language
	tenses.forEach(function(currentValue){ 
		checkedVerb.push($scope[currentValue]); //dynamic scope names
	});
	for (var i = 2; i < 5; i++){ //we start at two, becuase at 0 is the index and at 1 there is the original (nontranslated word)
		console.log(i+ " " +selectedVerbArray[checkedVerb[0]][i]+ " " + checkedVerb[i] )
		if (selectedVerbArray[checkedVerb[0]][i].toUpperCase()==checkedVerb[i].toUpperCase().trim()){ //checks if the values are the same
			console.log(selectedVerbArray)
			console.log(i + ". ok")
			correctAnwsers++
			checkedVerb.push("green");
		}
		else{
			console.log(i +". ni ok")
			checkedVerb.push("red");
		};
	};
	if ((correctAnwsers/3)==1){
		checkedVerb.push(1);
		console.log(selectedVerbArray[checkedVerb[0]][5])
		if (selectedVerbArray[checkedVerb[0]][5] > 0.02){ //if the anwser is correct and the chance isn't already 0.02, it lowers the chance of the word appearring
			selectedVerbArray[checkedVerb[0]][5] = selectedVerbArray[checkedVerb[0]][5] - 0.01;
		console.log(selectedVerbArray[checkedVerb[0]]);
		}
		
	}
	else {
		checkedVerb.push(0);
		if (selectedVerbArray[checkedVerb[0]][5] < 0.96){ //if the anwser is correct and the chance isn't already 0.96, it increase the chance of the word appearing
			selectedVerbArray[checkedVerb[0]][5] = selectedVerbArray[checkedVerb[0]][5] + 0.05; 
		console.log(selectedVerbArray[checkedVerb[0]]);
		}
	};
	$scope.writtenVerbs.push(checkedVerb); //all the verbs the user inputted
	console.log($scope.writtenVerbs);
	tenses.forEach(function(currentValue){ //empties the input fields
		$scope[currentValue] = "" ;
	});
	console.log(selectedVerbArray);


	
	if ($scope.writtenVerbs.length == selectedVerbArray.length ){ //compares the amount of inputed verbs with the amount selected by the computer
		correctAnwsers = 0;
		$scope.writtenVerbs.forEach(function(currentValue){
			console.log(currentValue);
			if (currentValue[8] == 1){ //the ninth entry in the writtenverbsArray tells us if all the three vers are correct
				correctAnwsers++
			};
		});
		console.log(correctAnwsers);
		$scope.result = (correctAnwsers/selectedVerbArray.length)*100
	}
	else
	{
		$scope.verb = selectedVerbArray[$scope.writtenVerbs.length][1]; //shows next verb
	};



	$scope.selectedVerbs = selectedVerbArray;

	var tempArray = JSON.parse(localStorage.getItem("verbArray"));
	tempArray.splice(selectedVerbArray[checkedVerb[0]][0],1,selectedVerbArray[checkedVerb[0]]);
	localStorage["verbArray"] = JSON.stringify(tempArray);
};

createVerbStorage();
WordSelect();

}]);
;

app.directive('tooltip', function(){ //enables tooltip in ng-repeat, source: http://www.pixelstech.net/article/1463842972-Show-Bootstrap-tooltip-in-AngularJS-ng-repeat-elements
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                if ($(element)["0"]["className"].includes("red")){ //only shows tooltip if the the class of $element contains "red"
	                $(element).tooltip('show');
            	};
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});
