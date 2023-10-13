import './App.css'
import {useState} from "react";
import ImageRendering from "./ImageRendering.tsx";
import VersusPage from "./VersusPage.tsx";
import GenerateChoices from "./GenerateChoices.ts";

interface choicesObject{
    name: string,
    img: string
}
function App() {

    const [selectedChoices, updateSelectedChoices] = useState<choicesObject[]>([])
    const selected = (text: string)=>{
        if(text == ""){
            updateSelectedChoices([])
        }
        else{
            updateSelectedChoices(GenerateChoices(text))
        }
    }


    return (
        <div className={"row"} style={{width: "100%"}}>
            { selectedChoices.length <= 0 ? <ImageRendering selectFunction ={selected}/>
                : <VersusPage choices = {selectedChoices} selectedFunction={selected}/>}
        </div>
    )
}

export default App
