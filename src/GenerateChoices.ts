import rock from "./assets/rock.svg";
import paper from "./assets/paper.svg";
import scissor from "./assets/scissors.svg";

interface returnObject {
    name: string,
    img: string
}
function GenerateChoices(user:string): returnObject[]{
    const options = ["Rock", "Paper", "Scissors"]
    const cpu = options[Math.floor(Math.random()*3)]
    console.log("user: " + user + "\ncpu: " + cpu)
    const result = (text: string)=>{
        switch (text) {
            case "Rock":
                return {name: "Rock", img: rock}
            case "Paper":
                return {name: "Paper", img: paper}
            case "Scissors":
                return {name: "Scissors", img: scissor}
            default:
                return {name: "", img: ""}
        }
    }

    return [result(user), result(cpu)]

}

export default GenerateChoices;