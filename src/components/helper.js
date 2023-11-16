//*** HELPER FUNCTIONS***
//Capitalize the first letter of each word
function capitalize(string) {
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
//Capitalize the first letter of the first word
function capitalizeFirstWord(string) {
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export {
    capitalize, 
    capitalizeFirstWord
}