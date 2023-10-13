import rock from "./assets/rock.svg";
import paper from "./assets/paper.svg";
import scissors from "./assets/scissors.svg";

interface propsObject {
    selectFunction(text :string): void,
}

function ImageRendering({selectFunction }:propsObject){

    const clickFunction = (text:string)=>{
        selectFunction(text)
    }
    return (
        <>
            <div className={"card col bc"} onClick={()=> {clickFunction("Rock")}}>
                    <img src={rock} alt={"rock"} className={"col card-img-top"}/>
                    <h5>Rock</h5>
            </div>
            <div className={"card col bc"} onClick={()=> {clickFunction("Paper")}}>
                    <img src={paper} alt={"paper"} className={"col card-img-top"}/>
                    <h5>Paper</h5>
            </div>
            <div className={"card col bc"} onClick={()=> {clickFunction("Scissors")}}>
                    <img src={scissors} alt={"scissors"} className={"col card-img-top"}/>
                    <h5>Scissors</h5>
            </div>
        </>
    )
}

export default ImageRendering