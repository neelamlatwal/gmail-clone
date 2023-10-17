import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function SidebarOptions({ Icon , title , number, selected}) {
    return (
        <div className={ `sidebarOptions ${ selected && 'sidebarOption--active'}`}>
            <FontAwesomeIcon
                icon={Icon}
                style={{ color: " #242528", height: "20px", width: "20px", marginRight:"20px" }}
            />
            <h3>{title}</h3>
            <p>{number}</p>


        </div>
    )
}

export default SidebarOptions