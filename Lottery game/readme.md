# Lottery Machine Simulator

A simple Lottery machine simulator implemented in Node.js, allowing users to experience the thrill of playing a virtual slot machine. The game includes features such as depositing money, choosing the number of lines to bet on, spinning the slot machine, and checking for winnings.

## Getting Started

To run the slot machine simulator on your local machine, follow these steps:

### 1. Initialize the Project

Run the following command to initialize the project:

```bash
npm init
```

This will guide you through setting up your `package.json` file.

### 2. Install Dependencies

Install the `prompt-sync` package to enable synchronous user prompts:

```bash
npm install prompt-sync
```

### 3. Usage

To start the slot machine simulator, execute the following command:

```bash
node project.js
```

This will initiate the game and guide you through depositing money, selecting the number of lines, placing bets, and spinning the slot machine.

## Gameplay Steps

1. **Deposit Some Money:**
   - Enter the initial amount you want to deposit.

2. **Determine Number of Lines to Bet On:**
   - Choose the number of lines to bet on (1-3).

3. **Collect Bet Amount:**
   - Enter the bet amount per line.

4. **Spin the Slot Machine:**
   - Trigger the slot machine to spin.

5. **Check Whether User Won:**
   - The program will automatically check if you won.

6. **Give User Money if They Won:**
   - If you won, your winnings will be added to your balance.

7. **Play Again if User Has More Money:**
   - If your balance allows, choose to play again.
