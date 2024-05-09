import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function CodeBarChooser(props){





    return(
        <FormControl fullWidth variant="standard" size="medium"  >
             <InputLabel  style={{ fontSize: '1.4rem' }}>Symbologies de barcodes</InputLabel>
             <Select defaultValue={0} sx={{fontSize:"115%",height:"110%"}}>
                {props.symbologies.map((symbologie,index)=>{
                    return<MenuItem value={index} key={index}>
                        {symbologie}
                    </MenuItem>
                })}
                
             </Select>
        </FormControl>
    )
}