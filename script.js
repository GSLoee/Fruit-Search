const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase()));

	}
	


function searchHandler(e) {
	let inputVal = e.target.value; 
	const results = search(inputVal); 
	
	showSuggestions(results, inputVal);

}
	


function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ''
	suggestions.style.display = 'block';
		
		if(inputVal.length > 0){
		for (let i = 0; i < results.length; i++) {
			const aLi = document.createElement('li'); 
			aLi.innerHTML = results[i]; 
			suggestions.appendChild(aLi);  
			
		}
	}
	
}

function useSuggestion(e) {
	input.value = e.target.innerText; //Input field --> text content of clicked suggestion
	suggestions.style.display = 'none'; // Hide suggestions making display = 'none' 
	
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);