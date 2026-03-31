import { useState } from "react";

const useMyHook = (defautlValue)=>{
    const [value,setValue] = useState(defautlValue);
    const hanldeChange = (e)=>{
        setValue(e.target.value);
    }
    return [value,hanldeChange]
}
export default useMyHook;