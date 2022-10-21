
//controls game mechanics
var controlFlow = {

    //initialize specific things
    init: function() {
        this.cacheDom();
        this.render();
        this.playerOne = this.playerCreator("1")
        this.playerTwo = this.playerCreator("2")
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
        this.$images = this.$el.querySelectorAll('img');
        console.log(this.$images);
        //add event where when button is clicked, it sets the cell
        //passes in string containing only cell number
        this.$buttons.forEach(element => {
            element.addEventListener('click', () => this.setCell(element.id.slice(-1)));
        });
    },

    //sets cell depending on player click; chance current player
    //input: string that is cell number
    setCell: function(cellNum) {
        //change board array and set image
        this.addChoice(cellNum);
        this.setImage(cellNum);
    
        //change current player
        if (this.gameBoard.whichPlayer === '1') {
            this.gameBoard.whichPlayer = '2';
        } else {
            this.gameBoard.whichPlayer = '1';
        }

        this.render();
    },

    //refreashes screen to show correct board
    render: function() {
     
    },

    //adds current choice to correct place in game array
    //input: string that is cell number
    addChoice: function(cellNum) {
        this.gameBoard.myBoard[cellNum - 1] = this.gameBoard.whichPlayer;
        console.log(this.gameBoard.myBoard);
    },

    playerCreator: function(player) {
        let whichPlayer = player;
        let result =  "Haven't won yet";
    },

    setImage: function(cellNum) {
        console.log(cellNum);
        if(this.gameBoard.whichPlayer === '1') {
            this.$images[cellNum - 1].src = "./images/x.png";
        } else {
            this.$images[cellNum - 1].src = "./images/o.png";
        }
    }

     //need bind events?

    

}

controlFlow.init();




