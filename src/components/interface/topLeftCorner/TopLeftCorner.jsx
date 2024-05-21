import { faRotateLeft, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPlan, Redo, RotateLeft, RotateRight, UTurnLeft, UTurnRight, Undo, Update } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import IconButton from '@mui/material/IconButton'
export default function TopLeftCorner(props){




    return(
        <div className='flex text-left'>
           
            <BottomNavigation showLabels  >
                <BottomNavigationAction disabled sx={{color:"grey"}} label="Annuler" icon={<RotateLeft color=''/>}/>
            </BottomNavigation>
            <BottomNavigation showLabels>
                <BottomNavigationAction disabled sx={{ color:"grey"}} label="Aller en avant" icon={<RotateRight/>}/>
            </BottomNavigation>
        </div>
    )
}