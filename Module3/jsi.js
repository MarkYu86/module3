function ucFirstLetters(city) {
    return city.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(ucFirstLetters("los angeles")) //Los Angeles


// function ucFirstLetters(str) {
//     return str.toLowerCase().split(' ').map(function (word) {
//         return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
// }
// console.log(ucFirstLetters("los angeles"))//Los Angeles