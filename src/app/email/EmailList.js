'use client';
import React from 'react'
import "./emailList.css"
import { Checkbox, IconButton } from "@material-ui/core";
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import InboxIcon from "@material-ui/icons/Inbox"
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from "@material-ui/icons/LocalOffer"


import Section from '../../section/Section';
import EmailRow from '../email-row/EmailRow';

function EmailList() {
    return (
        <div className='emailList'>
            <div className='emailList_settings'>
                <div className='emailList_settingsLeft'>
                    <IconButton>
                        <Checkbox />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='emailList_settingsRight'>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                </div>
            </div>
            <div className='emailList_sections'>
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={LocalOfferIcon} title="Promotions" />
                <Section Icon={PeopleIcon} title="Social" />


            </div>
            <div className='emailList__list'>
               
                <EmailRow title="redBus" subject="Hey Follow Neelam" description="Neelam Latwal, Your siblings are waiting! "  time="10PM"/>
                <EmailRow title="redBus" subject="Hey Follow Neelam" description="Neelam Latwal, Your siblings are waiting! "  time="10PM"/>
            </div>
        </div>
    )
}

export default EmailList 