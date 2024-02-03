// JS project no:1 Lottery machine 
// 1. Deposit some money
// 2. Determine number of lines to bet on 
// 3. Collect bet amount
// 4. Spin the slot machine 
// 5. Check whether user won
// 6. Give user money if they won 
// 7. Play again if user has more money
const prompt = require("prompt-sync")();

//Declaring Global variables
const ROWS = 3;
const COLS =3;
const SYMBOLS_COUNT ={
    A:2,
    B:4,
    C:6,
    D:8
}

const SYMBOLS_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2
}
/*function depositMoney(){
    //Not using this and going for the newer style of functions 
    const deposit = prompt("Enter amount");
    We need to convert the input from the prompt function to float input is stored as a string.
    return deposit;
}*/


// Step 1

const depositMoney = () => {
    while (true) {
    const stringDeposit = prompt("Enter a deposit amount: ")
    const deposit = parseFloat(stringDeposit);

    if (isNaN(deposit) || deposit<=0)
    {
        console.log("Invalid deposit amount, try again");
    }
    else{
        return deposit;
    }
    }
}

// Step 2
const getNumberLines = () => {
    while (true) 
    {
        const stirngNumLines = prompt("Enter the number of lines to bet (1-3): ")
        const numLines = parseFloat(stirngNumLines);
    
        if (isNaN(numLines) || numLines<=0 || numLines>=4)
        {
            console.log("Invalid Number of lines, try again");
        }
        else{
            return numLines;
        }
    }
}
// Step 3
const getBet = (balance , lines) => {
    while (true) 
    {
        const stirngBet = prompt("Enter Bet amount per line: ")
        const bet = parseFloat(stirngBet);
    
        if (isNaN(bet) || bet<=0 || bet > (balance / lines))
        {
            console.log("Invalid input, try again");
        }
        else{
            return bet;
        }
    }
}

// Step 4
const spin = () =>{
    const symbols = [];
    for(const [symbol,count] of Object.entries(SYMBOLS_COUNT))
    {
        for(let i=0; i<count;i++)
        {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for(let i=0 ; i<COLS ; i++)
    {
        reels.push([]);
        const reel=[...symbols]; //copy of symbols array
        for(let j=0 ; j<ROWS ; j++)
        {
            const randomIndex = Math.floor(Math.random() * reel.length);//generate random index value
            const selectedSymbol = reel[randomIndex];
            reels[i].push(selectedSymbol);
            reel.splice(randomIndex,1); // removing element so that it is not selected more than its frequency
        }
    }
    return reels;
}

// Step 5 
const transpose = (reels) => {
    const rows =[];
    for(let i=0 ; i<COLS ; i++)
    {
        rows.push([]);
        for(let j=0 ; j<ROWS ; j++)
        {
            rows[i].push([reels[j][i]]);
        }
    }
    return rows;
}

// Printing slot machine output
const printRows = (rows)=> {
    for(const row of rows){
    let rowStirng = "";
    for(const [i,symbol] of row.entries()){
        rowStirng+=symbol;
        if (i != rows.length-1)
        {
            rowStirng +=" | "
        }
    }
    console.log(rowStirng);
    }
}

// Step 6
const getWinnings = (rows,bet,numLines) =>{
    let winnings=0;
    for(let row =0; row < numLines; row++)
    {
        const symbols= rows[row];
        let allSame =true;
        for(const symbol of symbols)
        {
            if(symbol !=symbols[0])
            {
                allSame=false;
                break;
            }
        }
        if (allSame){
            winnings += bet * SYMBOLS_VALUES[symbols[0]];

        }
    }
    return winnings;
}

// Core Logic
const game = () => {
    let balance = depositMoney();
    while(true)
    {
        console.log('You have a balance of $'+balance);
        const numLines =getNumberLines();
        let bet =getBet(balance,numLines);
        balance -= bet * numLines;
        const reels = spin();
        console.log(reels);
        const rows =transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows,bet,numLines);
        balance +=winnings;
        console.log("You won, $" + winnings.toString());

        if (balance <= 0)
        {
            console.log("You ran out of money");
            break;
        }
        const playAgain = prompt("Do you want to play again (y/n) ?");
        if(playAgain != "y") break;
    }
}


game();