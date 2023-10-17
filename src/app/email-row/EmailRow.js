import { IconButton } from '@material-ui/core'
import { CheckBox, LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import "./emailRow.css"

function EmailRow({ id, title, subject, description, time }) {

    return (
        <div className='emailRow'>
            <div className='emailRow__options'>
                <CheckBox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className='emailRow__title'>
                {title}
            </div>
            <div className='emailRow__message'>
                <h4>{subject}
                <span className='emailRow__description'>
                    {description}
                </span>
                </h4>
              
            </div>
            <p className='emailRow__time'>
                {time}
            </p>


        </div>
    )
}

export default EmailRow