import { NextPlan, Redo, UTurnLeft, UTurnRight, Undo } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
export default function TopLeftCorner(props){




    return(
        <div className='flex justify-around'>
            <IconButton >
                <Undo fontSize='medium' style={{ transform: 'rotate(30deg)' }}/>
            </IconButton>

            <IconButton>
                <NextPlan fontSize='large' style={{ transform: 'rotate(-40deg)' }}/>
            </IconButton>
        </div>
    )
}