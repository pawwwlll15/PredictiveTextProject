const input = document.querySelector('#fruit');
const suggestions = document.querySelector('ul');
const li = document.querySelectorAll('li');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

/* this function compares the input value to an array of fruits, if fruit includes the input value
it is then added to a new array called 'results' */
function search(str) {
	/* create new empty array */
	let results = [];
	/* assigning str to the current input value */
	str = input.value;
	
	/* for each fruit in fruits array, if fruit(lowecase to avoid Case sensitive errors) includes 
	the input value anywhere in it. push that fruit to the new array 'results' */
	fruits.forEach(fruit => {
		if(fruit.toLowerCase().includes(str.toLowerCase())){
			results.push(fruit);
		} 
		/*if the input value is empty, empty out the result array. This avoids the list staying
		on the screen after erasing the input values  */
		if(str === ''){
			results = [];
		}
	});

	/* return results array */
	return results;
	
}

function searchHandler(e) {
	/* cant figure out how to get letters in results to be bold, this does
	not seem to be part of the step list, but I noticed the example was doing this and wanted to
	see how it was done. */
	inputVal = input.value;
	e = search();
	
	
}

/* creating an li out of each fruit from the results array created in the search() function
and appending that li to the 'suggestions' ul.*/
function showSuggestions(results) {
	/* declaring results as the return value from search(); */
	results = search();
	/* making sure that the suggestions ul is empty before appending each fruit(li); */
	suggestions.innerHTML = '';
	/* for each fruit in results, create an li called fruitLi. assign the text content of that fruit
	to the newly created fruitLi. Then append fruitLi to suggestions. */
	results.forEach(fruit => {
		const fruitLi = document.createElement('li');
		fruitLi.textContent = fruit;
		suggestions.appendChild(fruitLi)
	});

}

/* this function triggers when one of the li's in suggestions is clicked. When it is, change the
current input value to that targets textContent. */
function useSuggestion(e) {
	input.value = e.target.textContent;	
}




input.addEventListener('keyup',showSuggestions)
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);