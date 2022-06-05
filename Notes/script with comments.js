


let view = {
    displayMsg: function (msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

let model =
{
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
    { locations: ["24", "34", "44"], hits: ["", "", ""] },
    { locations: ["10", "11", "12"], hits: ["", "", ""] }],


    // the "fire" method checks if there's a hit or a miss
    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++)// <-- iterate thru all ships 
        {
            let ship = this.ships[i]; // access each ships array
            let index = ship.locations.indexOf(guess); // grab the index of 'guess' in the locations array. index will be < 0 if guess is not in locations array
            if (index >= 0) {
               ship.hits[index] = "hit"; // if the guess is in the locations array, update the corresponding 'hits' index to "hit"
                view.displayHit(guess);
                view.displayMsg('HIT!');
                if (this.isSunk(ship)) { //<-- if a ship gets sunk, 
                    view.displayMsg("YOU SANK MY BATTLESHIP! 😒")
                    this.shipsSunk++; //increment the shipsSunk property
                }
               return true;

            }

        }
        view.displayMiss(guess);
        view.displayMsg("You missed!");
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shiplength; i++)// <-- check thru ship given in function parameter
        {
            if (ship.hits[i] != "hit") { //if a "hits" array in the ship has no "hit" value, return false
                return false;
            } 
            return true;
        }
         // otherwise, return true 
         
    }
};