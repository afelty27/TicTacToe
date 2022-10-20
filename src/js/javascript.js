//controls game mechanics
var controlFlow = {
    
    //initialize specific things
    init: function() {
        this.cacheDom();
        this.render();
        //this.bindevents()?
        
    },

    //saves all DOM searches
    cacheDom: function() {
        this.$el = $('.board');
        this.$buttons = this.$el.getElementsByClassName("choiceButton");
        
        //add event where when button is clicked, it sets the cell
        this.$buttons.forEach(element => {
            element.addEventListener('click', () => setCell(element.id.slice(-1)));
        });
    },

    //sets cell depending on player click; chance current player
    setCell: function(btnId) {
        addChoice(btnId);


        if (this.gameBoard.whichPlayer === '1') {
            this.gameBoard.which = '2'
        } else {this.gameBoard.whichPlayer = '1'}

        this.render();
    },

    //refreashes screen to show correct board
    render: function() {

    },

    //adds current choice to correct place in game array
    addChoice: function(btnId) {
        this.gameBoard.myBoard[btnId] = this.gameBoard.whichPlayer;
    },

    //need bind events?



    //gameBoard object storing current state of game
    gameBoard: {
    myBoard: ["n", "n", "n", "n", "n", "n", "n", "n", "n"],
    finished: false,
    whichPlayer: "1"
    },

    playerCreator: function(player) {
        let whichPlayer = player;
        let result =  "Haven't won yet";
    }

}

let playerOne = playerCreator("one")
let playerTwo = playerCreator("two")



//logic for checking if won;