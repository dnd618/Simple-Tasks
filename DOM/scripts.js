// 1. Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.
document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement('button');
    button.innerText = 'F&*($^&!'
    document.body.appendChild(button)
    var container = document.createElement('box')
    document.body.appendChild(container)
    button.addEventListener("click", function () {
    alert('Click Off $%$*(%!')
    });
});
 
function myFunction() {
    var x = document.getElementById('anotherfox');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
// 4. Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).

// 5. Add a button and an empty div. When the button is clicked, add a `span` that contains your name to the empty div.


// 6. Create a button and a `ul` in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an `li` to the `ul` on the page.


// 7. Make a function that loops through the spans that are on the page (the spans generated from step 5) and change all their text to be words from a sentence that you declare as a global variable. E.g. (var sentence = 'hello world my name is john doe, goodbye forever').
