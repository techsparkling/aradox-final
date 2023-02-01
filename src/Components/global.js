import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState,useGlobalState}=createGlobalState({
    requested:false,
    subject:'none'
})

export{useGlobalState,setGlobalState};