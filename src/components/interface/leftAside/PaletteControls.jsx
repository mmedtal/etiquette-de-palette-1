import { UnfoldLess, UnfoldMore } from "@mui/icons-material"
import { useSelector } from "react-redux"
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput"
import { MenuItem, Select, Tooltip } from "@mui/material"
import { useEffect, useState } from "react"

export default function PaletteControls(props){




    const {paletteHauteur,paletteLargeur,resolutionInDpi} = useSelector(state=>state.leftAsideControllersReducer)

    const [printerResolution,setPrinterResolution] = useState(resolutionInDpi+"dpi")


    

    function getPrinterResolutionInDpmm(){
        if(printerResolution[printerResolution.length-1]=="i"){
            setPrinterResolution((parseInt(printerResolution)/25)+"dpmm")
        }
        if(printerResolution[printerResolution.length-1]=="m"){
            setPrinterResolution(parseInt(printerResolution)+"dpmm")
        }
    }
    function getPrinterResolutionInDpi(){
        if(printerResolution[printerResolution.length-1]=="i"){
            setPrinterResolution(parseInt(printerResolution)+"dpi")
        }
        if(printerResolution[printerResolution.length-1]=="m"){
            setPrinterResolution((parseInt(printerResolution)*25)+"dpi")
        }
    }

    useEffect(()=>{
        if(printerResolution[printerResolution.length-1]=="i"){
            setPrinterResolution(resolutionInDpi+"dpi")
        }
        if(printerResolution[printerResolution.length-1]=="m"){
            setPrinterResolution(resolutionInDpi+"dpmm")
            setPrinterResolution(resolutionInDpi+"dpi")
        }
    },[resolutionInDpi])
    return(
        <>
            <div className="flex">
                <ModifyPropertiesInput label="Résolution en :"
                    inputValueAlign="left"
                    valueFromReduxStore={parseInt(printerResolution)}
                    onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_RESOLUTION"
                    step={1}
                    leftIcon={<UnfoldLess color="error"     />}
                    rightIcon={<UnfoldMore color="success"  />}
                    />
                <Select defaultValue={"dpi"} variant="standard" className="ml-1">
                    <MenuItem value={"dpmm"}onClick={getPrinterResolutionInDpmm} >dpmm</MenuItem>
                    <MenuItem value={"dpi"} onClick={getPrinterResolutionInDpi}>dpi</MenuItem>
                </Select>
            </div>
            <ModifyPropertiesInput label="Hauteur palette:"
                step={1}
                inputValueAlign="center"
                valueFromReduxStore={paletteHauteur}
                onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_HAUTEUR"

                leftIcon={<UnfoldLess color="error"     />}
                rightIcon={<UnfoldMore color="success"  />}
                />

            <ModifyPropertiesInput label="Largeur palette:"
                step={1}
                inputValueAlign="center"    
                valueFromReduxStore={paletteLargeur}
                onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_LARGEUR"

                leftIcon={<UnfoldLess color="error"     style={{ transform: 'rotate(90deg)' }}/>}
                rightIcon={<UnfoldMore color="success"  style={{ transform: 'rotate(90deg)' }}/>}
            />   
        </>            
    )
}