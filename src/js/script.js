
app.controller("MainController", ["$scope", function($scope) {
$('[data-toggle="tooltip"]').tooltip();
var masterVerbArray = [[1,"Biti","Be","Was/Were","Been",0.05],
[2,"Tolči/Tepsti/Premagati","Beat","Beat","Beaten",0.05],
[3,"Postati","Become","Became","Become",0.05],
[4,"Začeti","Begin","Began","Begun",0.05],
[5,"Upogniti","Bend","Bent","Bent",0.05],
[6,"Ugrizniti","Bite","Bit","Bitten",0.05],
[7,"Pihati","Blow","Blew","Blown",0.05],
[8,"Zlomiti","Break","Broke","Broken",0.05],
[9,"Prinesti","Bring","Brought","Brought",0.05],
[10,"Graditi","Build","Built","Built",0.05],
[11,"Goreti","Burn","Burnt","Burnt",0.05],
[12,"Izbruhniti","Burst","Burst","Burst",0.05],
[13,"Kupiti","Buy","Bought","Bought",0.05],
[14,"Moči/Znati","Can","Could","Been Able",0.05],
[15,"Ujeti","Catch","Caught","Caught",0.05],
[16,"Izbrati","Choose","Chose","Chosen",0.05],
[17,"Priti","Come","Came","Come",0.05],
[18,"Stati(cena)","Cost","Cost","Cost",0.05],
[19,"Rezati","Cut","Cut","Cut",0.05],
[20,"Kopati(jamo)","Dig","Dug","Dug",0.05],
[21,"Narediti/Storiti","Do","Did","Done",0.05],
[22,"Risati","Draw","Drew","Drawn",0.05],
[23,"Sanjati","Dream","Dreamt","Dreamt",0.05],
[24,"Piti","Drink","Drunk","Drunk",0.05],
[25,"Voziti/Peljati","Drive","Drove","Driven",0.05],
[26,"Jesti","Eat","Ate","Eaten",0.05],
[27,"Pasti","Fall","Fell","Fallen",0.05],
[28,"Nahraniti","Feed","Fed","Fed",0.05],
[29,"Čutiti","Feel","Felt","Felt",0.05],
[30,"BojevatiSe","Fight","Fought","Fought",0.05],
[31,"Najti","Find","Found","Found",0.05],
[32,"Leteti","Fly","Flew","Flown",0.05],
[33,"Pozabiti","Forget","Forgot","Forgotten",0.05],
[34,"Odpustiti","Forgive","Forgave","Forgiven",0.05],
[35,"Zmrzovati","Freeze","Froze","Frozen",0.05],
[36,"Dobiti","Get","Got","Got",0.05],
[37,"Dati","Give","Gave","Given",0.05],
[38,"Iti","Go","Went","Gone",0.05],
[39,"Rasti","Grow","Grew","Grown",0.05],
[40,"Obesiti/Viseti","Hang","Hung","Hung",0.05],
[41,"Imeti","Have","Had","Had",0.05],
[42,"Slišati","Hear","Heard","Heard",0.05],
[43,"Skriti se","Hide","Hid","Hidden",0.05],
[44,"Udariti","Hit","Hit","Hit",0.05],
[45,"Držati","Hold","Held","Held",0.05],
[46,"Raniti","Hurt","Hurt","Hurt",0.05],
[47,"Obdržati/Ohraniti","Keep","Kept","Kept",0.05],
[48,"Klečati","Kneel","Knelt","Knelt",0.05],
[49,"Vedeti","Know","Knew","Known",0.05],
[50,"Leči/Položiti","Lay","Laid","Laid",0.05],
[51,"Voditi","Lead","Led","Led",0.05],
[52,"Učiti se","Learn","Learnt","Learnt",0.05],
[53,"Zapustiti","Leave","Left","Left",0.05],
[54,"Posoditi","Lend","Lent","Lent",0.05],
[55,"Pustiti","Let","Let","Let",0.05],
[56,"Ležati","Lie","Lay","Lain",0.05],
[57,"Prižgati","Light","Lit","Lit",0.05],
[58,"Izgubiti","Lose","Lost","Lost",0.05],
[59,"Delati","Make","Made","Made",0.05],
[60,"Misliti/Pomeniti","Mean","Meant","Meant",0.05],
[61,"Srečati","Meet","Met","Met",0.05],
[62,"Morati","Must","HadTo","HadTo",0.05],
[63,"Plačati","Pay","Paid","Paid",0.05],
[64,"Postaviti","Put","Put","Put",0.05],
[65,"Brati","Read","Read","Read",0.05],
[66,"Jezditi","Ride","Rode","Ridden",0.05],
[67,"Zvoniti","Ring","Rang","Rung",0.05],
[68,"Narasti","Rise","Rose","Risen",0.05],
[69,"Teči","Run","Ran","Run",0.05],
[70,"Reči","Say","Said","Said",0.05],
[71,"Videti","See","Saw","Seen",0.05],
[72,"Prodati","Sell","Sold","Sold",0.05],
[73,"Poslati","Send","Sent","Sent",0.05],
[74,"Pogrniti(mizo)","Set","Set","Set",0.05],
[75,"Tresti","Shake","Shook","Shaken",0.05],
[76,"Sijati","Shine","Shone","Shone",0.05],
[77,"Streljati","Shoot","Shot","Shot",0.05],
[78,"Pokazati","Show","Showed","Shown",0.05],
[79,"Zapreti/Zaloputniti","Shut","Shut","Shut",0.05],
[80,"Peti","Sing","Sang","Sung",0.05],
[81,"Potopiti se","Sink","Sank","Sunk",0.05],
[82,"Sedeti","Sit","Sat","Sat",0.05],
[83,"Spati","Sleep","Slept","Slept",0.05],
[84,"Drseti","Slide","Slid","Slid",0.05],
[85,"Vohati","Smell","Smelt","Smelt",0.05],
[86,"Govoriti","Speak","Spoke","Spoken",0.05],
[87,"Potrošiti","Spend","Spent","Spent",0.05],
[88,"Politi","Spill","Spilt","Spilt",0.05],
[89,"Pokvariti","Spoil","Spoilt","Spoilt",0.05],
[90,"Stati","Stand","Stood","Stood",0.05],
[91,"Krasti","Steal","Stole","Stolen",0.05],
[92,"Tičati","Stick","Stuck","Stuck",0.05],
[93,"Plavati","Swim","Swam","Swum",0.05],
[94,"Vzeti","Take","Took","Taken",0.05],
[95,"Poučevati","Teach","Taught","Taught",0.05],
[96,"Trgati","Tear","Tore","Torn",0.05],
[97,"Pripovedovati","Tell","Told","Told",0.05],
[98,"Misliti","Think","Thought","Thought",0.05],
[99,"Vreči","Throw","Threw","Thrown",0.05],
[100,"Razumeti","Understand","Understood","Understood",0.05],
[101,"Prebuditi se","Wake","Woke","Woken",0.05],
[102,"Nositi","Wear","Wore","Worn",0.05],
[103,"Zmagati","Win","Won","Won",0.05],
[104,"Pisati","Write","Wrote","Written",0.05]];
$scope.writtenVerbs = []; //all the verbs the user inputed

$("#start").click(function(){ //starts the entire page and selects the words.
	$("#input-area").removeClass("hidden");
	$("#start").addClass("hidden");
	$("#presentSimple").focus();
	$scope.presentSimple = ""; //So that you cna submit empty fields even when starting
	$scope.pastSimple = "";
	$scope.pastParticiple = "";
});

function createVerbStorage() { //function checks if there is already a verbArray in local storage and if there isn't creates one
	if (localStorage.getItem("verbArray") === null) {
		localStorage["verbArray"] = JSON.stringify(masterVerbArray);
	};
};

function emptySelectedVerbArray(){ //clears the selected verbs
	localStorage.removeItem("selectedVerbArray");
};

function WordSelect(){ //This funtion selects the words we are going to use by caling another function
	var tempArray = JSON.parse(localStorage.getItem("verbArray"));
	 //this array temporarily stores data from local storage item verbArray
	var workArray = tempArray.slice(); //copies the array instead of referencing it
	var selectedWords =[];
	var dieRoll = Math.random(); //compare a single dieroll to all the entries inside the workArray, since it decrease the amounts of rolls the computer must do
	for (var i = 0; 20 > selectedWords.length; i++){//continusly cycle though the array while the words haven't been selected yet
			//random roll, the die is case once for each gothough the temp arrray
		if (dieRoll <= workArray[i][5]){ //if the math random is smaller or equal to chance from the verbArray
			selectedWords.push(workArray[i]); //push selected words into selectedWords
			workArray.splice(workArray[i], 1);
		};
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

$scope.reset = function () { //functions resets the page
	createVerbStorage();
	WordSelect();
	$scope.writtenVerbs = []
	$scope.result = null;
	$("#input-area").addClass("hidden");
	$("#start").removeClass("hidden");
};

$scope.submit = function(){
	var selectedVerbArray = JSON.parse(localStorage.getItem("selectedVerbArray")); //all the verbs that were selected by the computer
	var tenses = ["presentSimple", "pastSimple", "pastParticiple"];
	var checkedVerb = []; //contain the verbs the user inputed
	var correctAnwsers = 0;
	checkedVerb.push($scope.writtenVerbs.length); //is used as index
	checkedVerb.push($scope.verb); //pushes in the current verb in then native language
	tenses.forEach(function(currentValue){
		if ($scope[currentValue] == ""){ //so that a tooltip can be shown when you hover over N/A
			checkedVerb.push("N/A");
		}
		else {
			checkedVerb.push($scope[currentValue]); //dynamic scope names
		}
		
	});
	for (var i = 2; i < 5; i++){ //we start at two, becuase at 0 is the index and at 1 there is the original (nontranslated word)
		if (selectedVerbArray[checkedVerb[0]][i].toUpperCase()==checkedVerb[i].toUpperCase().trim()){ //checks if the values are the same
			correctAnwsers++
			checkedVerb.push("green");
		}
		else{
			checkedVerb.push("red");
		};
	};
	if ((correctAnwsers/3)==1){
		checkedVerb.push(1);
		if (selectedVerbArray[checkedVerb[0]][5] > 0.1){ //if the anwser is correct and the chance isn't already 0.1, it lowers the chance of the word appearring
			selectedVerbArray[checkedVerb[0]][5] = selectedVerbArray[checkedVerb[0]][5] - 0.1;
		};	
	}
	else {
		checkedVerb.push(0);
		if (selectedVerbArray[checkedVerb[0]][5] < 0.96){ //if the anwser is correct and the chance isn't already 0.96, it increase the chance of the word appearing
			selectedVerbArray[checkedVerb[0]][5] = selectedVerbArray[checkedVerb[0]][5] + 0.05; 
		};
	};
	$scope.writtenVerbs.push(checkedVerb); //all the verbs the user inputted
	tenses.forEach(function(currentValue){ //empties the input fields
		$scope[currentValue] = "" ;
	});
	if ($scope.writtenVerbs.length == selectedVerbArray.length ){ //compares the amount of inputed verbs with the amount selected by the computer
		correctAnwsers = 0;
		$("#submit").addClass("disabled")
		$("#reset").focus();
		$scope.writtenVerbs.forEach(function(currentValue){
			if (currentValue[8] == 1){ //the ninth entry in the writtenverbsArray tells us if all the three vers are correct
				correctAnwsers++
			};
		});
		$scope.result = (correctAnwsers/selectedVerbArray.length)*100
	}
	else
	{
		$scope.verb = selectedVerbArray[$scope.writtenVerbs.length][1]; //shows next verb
	};
	$scope.selectedVerbs = selectedVerbArray;
	$("#presentSimple").focus();
	var tempArray = JSON.parse(localStorage.getItem("verbArray"));
	tempArray.splice(selectedVerbArray[checkedVerb[0]][0],1,selectedVerbArray[checkedVerb[0]]);
	localStorage["verbArray"] = JSON.stringify(tempArray);
};

createVerbStorage();
emptySelectedVerbArray();
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
