import { faRotateLeft, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPlan, Redo, RotateLeft, RotateRight, UTurnLeft, UTurnRight, Undo, Update } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import IconButton from '@mui/material/IconButton'
export default function TopLeftCorner(props){




    return(
        <div className='flex text-left'>
            {/* 2<IconButton > */}
                {/* 1 <Undo fontSize='medium' style={{ transform: 'rotate(30deg)' }} textDecoration="dd"/> */}
                {/* 1<RotateLeft fontSize='large' style={{ transform: 'rotate(0deg)' }}/> */}
                {/* 2 <FontAwesomeIcon icon={faRotateLeft}/> */}
            {/* 2</IconButton> */}

            {/* 2<IconButton> */}
                {/* 2<FontAwesomeIcon icon={faRotateRight}/> */}
                
                {/* 1<RotateRight fontSize='large' style={{ transform: 'rotate(0deg)' }}/> */}
            {/* 2</IconButton> */}

            <BottomNavigation showLabels >
                <BottomNavigationAction sx={{color:"#f44300"}} label="Annuler" icon={<RotateLeft color='error'/>}/>
            </BottomNavigation>
            <BottomNavigation showLabels>
                <BottomNavigationAction sx={{ color:"green"}} label="Aller en avant" icon={<RotateRight/>}/>
            </BottomNavigation>
        </div>
    )
}