
console.log("Welcome to the script page, bro");

let partner1 = document.getElementById("patner1");
let partner2 = document.getElementById("patner2");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let displayResult = document.getElementById("changename");

submit.addEventListener('click', () => {
    console.log("Submit button was clicked");
displayResult.style.display="block";
    let name1 = partner1.value.trim();
    let name2 = partner2.value.trim();

    if (!name1 || !name2) {
        alert("Please enter both names.");
        return;
    }

    if (name1.toLowerCase() === name2.toLowerCase()) {
        alert("You entered the same name, please try different names.");
        return;
    }

    let s = Array.from(name1.toLowerCase());
    let p = Array.from(name2.toLowerCase());

    for (let i = 0; i < s.length; i++) {
        let indexInP = p.indexOf(s[i]);
        if (indexInP !== -1) {
            s.splice(i, 1);
            p.splice(indexInP, 1);
            i--;
        }
    }

    let uncommonLetters = s.concat(p).join('');
    console.log(`Remaining letters in name1 and name2 combined: ${uncommonLetters}`);

    let result = flamesResult(uncommonLetters);
    console.log("The result is:", result);

    displayResult.textContent = `The relationship is: ${result}`;
});

function flamesResult(uncommonLetters) {
    let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    let count = uncommonLetters.length;

    let index = 0;
    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }

    const flamesMeaning = {
        'F': "Friends",
        'L': "Lovers",
        'A': "Affectionate",
        'M': "Marriage",
        'E': "Enemies",
        'S': "Siblings"
    };

    return flamesMeaning[flames[0]];
}
reset.addEventListener('click',()=>{
    
    partner1.value="";
    partner2.value="";
    displayResult.style.display="none";
})