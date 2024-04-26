import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";

export default function ModifyPropertiesInput(props){




    return(
        <TextField
            
            type="number"
            variant="standard"
            label={props.label}
            InputLabelProps={{
                style:{fontSize:"140%"}
            }}
            InputProps={{
                endAdornment:<IconButton onClick={()=>alert("cc")}>
                    {/* <ArrowDownward color="error"/> */}
                    {props.rightIcon}
                </IconButton>,
                startAdornment:<IconButton>
                    {/* <ArrowUpward color="success"/> */}
                    {props.leftIcon}
                </IconButton>
            }}

            // pour centrer le text à l'intérieur
            inputProps={{
                style:{textAlign:"center",fontSize:"120%"},
                
            }}
        >

        </TextField>
    )
}