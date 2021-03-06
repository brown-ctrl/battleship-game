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

    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMsg('HIT!');
                if (this.isSunk(ship)) {
                    view.displayMsg("YOU SANK MY BATTLESHIP! 😒")
                    this.shipsSunk++;
                }
                return true;

            }

        }
        view.displayMiss(guess);
        view.displayMsg("You missed!");
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shiplength; i++) {
            if (ship.hits[i] != "hit") {
                return false;
            }
            return true;
        }

    }
};