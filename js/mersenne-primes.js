const button = document.querySelector(".mersenne-primes-button");
const input = document.querySelector(".mersenne-primes-input");
const div = document.querySelector(".mersenne-primes-div");

button.addEventListener("click", () => {
    if(document.querySelector(".section__text--table") !==null) {
        const tabToDelete = document.querySelector(".section__text--table");
        tabToDelete.remove();
    }

    const number = parseInt(input.value);

    const powersArray = [2,3,5,7,13,17,19,31,61,89,107,127,521,607,1279,2203, 2281,3217,4253,4423]; //TODO: uzuełnić wszystkie liczby
    const numberOfDigits = [1,1,2,3,4,6,6,10,19,27,33,39,157,183,386,664,687,969,1281,1332]; //TODO: uzuełnić wszystkie liczby
    const dateOfFind = ["","","","",1456,1588,1588,1772,1883,1911,1914,"10 czerwca 1876","30 stycznia 1952", "30 stycznia 1952", "25 czerwca 1952", "7 października 1952", "9 października 1952", "	8 września 1957", "3 listopada 1961", "3 listopada 1961"]; //TODO: uzuełnić wszystko
    const discoverers = ["","","","","nieznany","Pietro Cataldi","Pietro Cataldi","Leonhard Euler", "Iwan Perwuszin", "Ralph Ernest Powers", "Ralph Ernest Powers", "Édouard Lucas" ,"Raphael Mitchel Robinson", "Raphael Mitchel Robinson", "Raphael Mitchel Robinson", "Raphael Mitchel Robinson", "Raphael Mitchel Robinson", "Hans Riesel", "Alexander Hurwitz", "Alexander Hurwitz"]; //TODO: uzuełnić wszystko 

    if(number <= 0 ) alert("Podaj dodatnią liczbę");
    else if(number > 51) alert("Na dziś nie ma aż tyle liczb pierwszych Mersenne'a 😃");
    else {
        const table = document.createElement("table");
        table.classList.add("section__text--table");
        const tableHeader = "<tr><th>Lp.</th><th>n</th><th>M<sub>n</sub></th><th>Ilość cyfr w M<sub>n</sub></th><th>Data odkrycia</th><th>Odkrywca</th></tr>";
        table.innerHTML = tableHeader;

        for(let i=0; i < number; i++) {
            const newRow = table.insertRow();
            const tableContent = `<td>${i+1}</td>
                                  <td>${powersArray[i]}</td>
                                  <td>2<sup>${powersArray[i]}</sup>-1</td>
                                  <td>${numberOfDigits[i]}</td>
                                  <td>${dateOfFind[i]}</td>
                                  <td>${discoverers[i]}</td>`;
            newRow.innerHTML += tableContent;
        }
        div.appendChild(table);
    }
})