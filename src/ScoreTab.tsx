import CalculateWinner from "./CalculateWinner.ts";

interface propsObject{
    userChoice: string,
    cpuChoice: string
}
function ScoreTab({userChoice, cpuChoice}:propsObject){
    const result :string = CalculateWinner(userChoice, cpuChoice)
   return (
        <>
            <h1>Results</h1>
            <h1>{result}</h1>
       </>
    )
}

export default ScoreTab