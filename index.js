
function addingEventListener() {
    // Get the button element using its id
    const input = document.getElementById('button');
//event listener to listen for a click
    input.addEventListener('click', function() {
  alert('I was clicked!');
    });
}
