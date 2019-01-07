document.addEventListener("DOMContentLoaded", function () {

    let addSquareBtn = document.createElement('button');
    let buttonText = document.createTextNode("Add Square");

    addSquareBtn.appendChild(buttonText);
    document.body.appendChild(addSquareBtn);
    addSquareBtn.className = "button";

    let id = 0;

    addSquareBtn.addEventListener("click", function () {
        //creates square with counted ID
        let square = document.createElement("div");
        square.id = id;
        square.className = "black-square";
        let p = document.createElement("p");
        let squareText = document.createTextNode(id);
        p.appendChild(squareText);
        square.appendChild(p);
        document.body.appendChild(square);
        p.style.opacity = "0";
        id++;

        //hover
        square.addEventListener("mouseenter", function () {
            p.style.opacity = "1";
        });

        //no hover
        square.addEventListener("mouseleave", function () {
            p.style.opacity = "0";
        });

        //random color array
        let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966'];

        //function to choose a random color
        function chooseRandomColor() {
            let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            return randomColor;
        }

        square.addEventListener("click", function () {
            let randomColor = chooseRandomColor();
            square.style.backgroundColor = randomColor;
        })
    })



    //h1.addEventListener("dblclick", function () {
    //let randomColor = chooseRandomColor();
    //h1.style.color = randomColor;
    //});


})