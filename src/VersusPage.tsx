import ScoreTab from "./ScoreTab.tsx";

interface propObject{
    choices: {name: string, img: string}[]
    selectedFunction(users: string): void,
}
function VersusPage({choices, selectedFunction}: propObject) {

    return(
        <>
        <div className={"row"}>
            <div className={"card col bc"} >
                <img src={choices[0].img} alt={choices[0].name} className={" card-img-top"}/>
                <h5>{choices[0].name}</h5>
            </div>
            <div className={"col"}>
                <ScoreTab userChoice={choices[0].name} cpuChoice={choices[1].name}/>
            </div>
            <div className={"card col bc"} >
            <img src={choices[1].img} alt={choices[1].name} className={"card-img-top"}/>
            <h5>{choices[1].name}</h5>
        </div>
        </div>
            <div className={"row"}>
                    <button className={"btn btn-dark"} onClick={()=> selectedFunction("")}>Go Back</button>
            </div>
        </>
    )
}

export default VersusPage