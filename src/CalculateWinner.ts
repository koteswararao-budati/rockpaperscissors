function CalculateWinner(userChoice:string, cpuChoice:string){
    if(cpuChoice === userChoice){
        return "Draw"
    } else if((cpuChoice === "Paper" && userChoice === "Rock") || (cpuChoice === "Rock" && userChoice === "Scissors") || (cpuChoice === "Scissors" && userChoice=== "Paper")){
        return "CPU Won!!!"
    }
    return "You Won!!!"
}

export default CalculateWinner;