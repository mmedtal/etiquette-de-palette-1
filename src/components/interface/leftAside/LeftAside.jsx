import { ArrowDownward, ArrowUpward, Autorenew, LineWeight, Loop, TextRotationNone, UnfoldLess, UnfoldMore, VerticalAlignBottom, VerticalAlignTop } from "@mui/icons-material";
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput";

export default function LeftAside(props){





    return(
        <div className="p-2 pl-10 flex-col space-y-6">
            
            <ModifyPropertiesInput label="Position X:"

                leftIcon={<ArrowDownward color="error" style={{ transform: 'rotate(90deg)' }}/>}
                rightIcon={<ArrowUpward color="success"style={{ transform: 'rotate(90deg)' }}/>}
            />


            <ModifyPropertiesInput label="Position Y:"

            // leftIcon={<TextRotationNone color="error" style={{ transform: 'scaleX(-1)' }}/>}
            // rightIcon={<TextRotationNone color="success"/>}
                leftIcon={<ArrowDownward color="error" />}
                rightIcon={<ArrowUpward color="success"/>}
            />

            <ModifyPropertiesInput label="Hauteur:"

                // leftIcon={<VerticalAlignBottom color="error"/>}
                // rightIcon={<VerticalAlignTop   color="success"/>}
                leftIcon={<UnfoldLess color="error" />}
                rightIcon={<UnfoldMore color="success"/>}
            />
            
            <ModifyPropertiesInput label="Largeur:"
                
                leftIcon={<UnfoldLess color="error"     style={{ transform: 'rotate(90deg)' }}/>}
                rightIcon={<UnfoldMore color="success"  style={{ transform: 'rotate(90deg)' }}/>}
            />

            <ModifyPropertiesInput label="Epaisseur:"
            
                leftIcon={<LineWeight color="error" style={{ transform: 'rotate(180deg)' }}/>}
                rightIcon={<LineWeight color="success"/>}
            />

            <ModifyPropertiesInput label="Rotation:"

                leftIcon={<Loop color="error" />}
                rightIcon={<Autorenew color="success"/>}
            
            />

        </div>
    )
}