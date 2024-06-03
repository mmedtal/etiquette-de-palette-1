import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
export default function ZebraFontChooser(props){

    const dispatch = useDispatch()
    function handleChoosedZebraFont(e){
        //console.log(e.target.value)
        dispatch({type:"SET_ZEBRA_FONT",payload:e.target.value})
    }

    return(
        <FormControl fullWidth variant="standard" size="medium"  >
             <InputLabel  style={{ fontSize: '1.4rem' }}>Type de police zebra:</InputLabel>
             <Select defaultValue={"A"} sx={{fontSize:"115%",height:"110%",textAlign:"center"}}
             onChange={handleChoosedZebraFont}
             >
                {props.zebraFonts.map((zebraFont,index)=>{
                    return<MenuItem value={zebraFont} key={index} >
                        {zebraFont}
                    </MenuItem>
                })}
                
             </Select>
        </FormControl>
    )

}