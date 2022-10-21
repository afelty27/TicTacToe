
//controls game mechanics
var controlFlow = {

    //initialize specific things
    init: function() {
        this.cacheDom();
        this.render();
        this.playerOne = this.playerCreator("one")
        this.playerTwo = this.playerCreator("two")
        this.gameBoard = {
            myBoard: ["n", "n", "n", "n", "n", "n", "n", "n", "n"],
            finished: false,
            whichPlayer: "1"
            }
        //this.bindevents()?      
    },

    //saves all DOM searches
    cacheDom: function() {
        this.$el = document.querySelector('.board');
        this.$buttons = this.$el.querySelectorAll(".choiceButton");
        
        //add event where when button is clicked, it sets the cell
        //passes in string containing only cell number
        this.$buttons.forEach(element => {
            element.addEventListener('click', () => setCell(element.id.slice(-1)));
        });
    },

    //sets cell depending on player click; chance current player
    //input: string that is cell number
    setCell: function(cellNum) {
        addChoice(cellNum);
        console.log("hello!")

        //change current player
        if (this.gameBoard.whichPlayer === '1') {
            this.gameBoard.which = '2'
        } else {this.gameBoard.whichPlayer = '1'}

        this.render();
    },

    //refreashes screen to show correct board
    render: function() {
     
    },

    //adds current choice to correct place in game array
    //input: string that is cell number
    addChoice: function(cellNum) {
        this.gameBoard.myBoard[cellNum] = this.gameBoard.whichPlayer;
    },

    playerCreator: function(player) {
        let whichPlayer = player;
        let result =  "Haven't won yet";
    }

     //need bind events?

    

}

controlFlow.init();



