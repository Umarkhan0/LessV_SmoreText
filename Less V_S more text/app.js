let lessTexte = "";
function lessText(){
    let button  = document.getElementById("btn");
    let moreText = "Lorem ipsum dolor sit amet consecteturadipisicing elit. Eveniet eaque mollitia dolorem dolorum repudiandae quisquam poro nesciunt quod saepe distinctio enim, velit provident libero doloribus aliquid vero eligendi dolore isteLorem ipsum dolor sit amet consecteturadipisicing elit. Eveniet eaque mollitia dolorem dolorum repudiandae quisquam poro nesciunt quod saepe distinctio enim, velit provident libero doloribus aliquid vero eligendi dolore iste";
let text = document.getElementById("text");
if(lessTexte){
    text.innerHTML = lessTexte;
    button.innerHTML = "see more";
    lessTexte = "";
}
else {
    lessTexte = text.innerHTML;
    button.innerHTML = "see less";
    text.innerHTML = moreText;
}
}