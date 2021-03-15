const button = document.querySelector(".lucas-test-button");
const input = document.querySelector(".lucas-test-input");
const div = document.querySelector(".lucas-test-div");

button.addEventListener("click", () => {
    const nMersenneNumber = BigInt(parseInt(input.value));

    if(document.querySelector(".lucas-test-code-div") !== null) {
        const divToDelete = document.querySelector(".lucas-test-code-div");
        divToDelete.remove();
    }

    if (nMersenneNumber <= 0) alert("Podaj dodatnią liczbę większą od 0");
    // else if(nMersenneNumber > 100) alert("Za duża liczba"); //FIXME: Czy zrobić ogaraniczenie czy nie o to jest pytanie 
    else {
        const number = BigInt((2n ** nMersenneNumber) - 1n);
        let s = BigInt(4);
        const timeStart = Date.now();

        const newDiv = document.createElement("div");
        newDiv.classList.add("lucas-test-code-div");
        newDiv.classList.add("section__text--code");

        const list = document.createElement("ul");

        if(nMersenneNumber == 2 ) s = 0;
        else {
            for (let i = 0n; i < nMersenneNumber - 2n; i++) {
                const listElement = document.createElement("li");
                listElement.textContent = (`s <- (${s} * ${s} - 2) % ${number} = ${((s * s) - 2n) % number}`);
                list.appendChild(listElement);
                s = ((s * s) - BigInt(2)) % number;
            }
        }
        newDiv.appendChild(list);

        const timeEnd = Date.now();

        newDiv.innerHTML += `Liczba 2<sup>${nMersenneNumber}</sup> - 1 = ${number} ${s == 0? " <strong>jest pierwsza</strong>": " <strong>jest złożona</strong>"}. <br>`;
        newDiv.innerHTML += `Czas wykonania algorytmu: ${timeEnd-timeStart} ms`;
        
        div.appendChild(newDiv);    
    }
})