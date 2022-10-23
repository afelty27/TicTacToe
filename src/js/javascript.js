
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
            whichPlayer: "1",
            winPlayer: "",
            playerOneScore: 0,
            playerTwoScore: 0,
            numPlays: 0
            }    
    },

    //saves all DOM searches
    cacheDom: function() {
        this.$el = document.querySelector('.board');
        this.$buttons = this.$el.querySelectorAll(".choiceButton");
        this.$images = this.$el.querySelectorAll('img');
        this.$displayMessage = this.$el.querySelector('.center');
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
        this.isDone();
        console.log(this.gameBoard.finished);
       /* if (this.gameBoard.finished) {
            this.endGame();
        }*/
    },

    //refreashes screen to show correct board
    render: function() {
     
    },

    //adds current choice to correct place in game array
    //input: string that is cell number
    addChoice: function(cellNum) {
        this.gameBoard.myBoard[cellNum - 1] = this.gameBoard.whichPlayer;
        console.log(this.gameBoard.myBoard);
        this.gameBoard.numPlays++;
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
    },

    //NOT WORK
    //Checks 'n' and matches a win immediately
    isDone: function() {
        console.log("endter isDone")
        console.log(this.gameBoard.myBoard[0]);
        console.log(this.gameBoard.myBoard[1]);
        console.log(this.gameBoard.myBoard[2]);
        if (this.gameBoard.myBoard[0] === this.gameBoard.myBoard[1] && this.gameBoard.myBoard[1] == this.gameBoard.myBoard[2]) {
            this.gameBoard.finished = true;
            this.gameBoard.winPlayer = this.gameBoard.myBoard[0]
            console.log("here")
        } else if (this.gameBoard.myBoard[3] === this.gameBoard.myBoard[4] && this.gameBoard.myBoard[4] == this.gameBoard.myBoard[5]) {
            this.gameBoard.finished = true;
            this.gameBoard.winPlayer = this.gameBoard.myBoard[3]
        } else if (this.gameBoard.myBoard[6] === this.gameBoard.myBoard[7] && this.gameBoard.myBoard[7] == this.gameBoard.myBoard[8]) {
            this.gameBoard.finished = true;
            this.gameBoard.winPlayer = this.gameBoard.myBoard[6]
        } else if (this.gameBoard.myBoard[0] === this.gameBoard.myBoard[3] && this.gameBoard.myBoard[3] == this.gameBoard.myBoard[6]) {
            this.gameBoard.finished = true;
            this.gameBoard.winPlayer = this.gameBoard.myBoard[0]
        } else if (this.gameBoard.myBoard[1] === this.gameBoard.myBoard[4] && this.gameBoard.myBoard[4] == this.gameBoard.myBoard[7]) {
            this.gameBoard.finished = true;
            this.gameBoard.winPlayer = this.gameBoard.myBoard[1]
        } else if(this.gameBoard.myBoard[2] === this.gameBoard.myBoard[5] && this.gameBoard.myBoard[5] == this.gameBoard.myBoard[8]) {
            this.gameBoard.finished = true;
            this.gameBoard.winPlayer = this.gameBoard.myBoard[2]
        } else if(this.gameBoard.myBoard[0] === this.gameBoard.myBoard[4] && this.gameBoard.myBoard[4] == this.gameBoard.myBoard[8]) {
            this.gameBoard.finished = true;
            this.gameBoard.winPlayer = this.gameBoard.myBoard[0]
        } else if (this.gameBoard.myBoard[2] === this.gameBoard.myBoard[4] && this.gameBoard.myBoard[4] == this.gameBoard.myBoard[6]) {
            this.gameBoard.finished = true;
            this.gameBoard.winPlayer = this.gameBoard.myBoard[2]
        } else if(this.gameBoard.numPlays == 9) {
            this.gameBoard.finished = true;
            this.gameBoard.winPlayer = '0';
        }   
    },

    endGame: function() {
        console.log("enter endGame")
        if (this.gameBoard.winPlayer == '0') {
            this.$displayMessage.textContent = "Draw!"
        } else if (this.gameBoard.winPlayer == '1') {
            this.$displayMessage.textContent = "Player " + this.gameBoard.winPlayer + " Wins!"
            this.playerOneScore++;
        } else {
            this.$displayMessage.textContent = "Player " + this.gameBoard.winPlayer + " Wins!"
            this.playerTwoScore++;
        }
    }
     //need bind events?

    

}

controlFlow.init();




