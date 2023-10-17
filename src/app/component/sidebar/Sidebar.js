import React from 'react'
import "./sidebar.css"
import Image from 'next/image'
import SidebarOptions from './SidebarOptions'
import { faBars, faEnvelope, faStar, faClock, faPaperPlane, faFile, faMessage } from "@fontawesome/free-solid-svg-icons";
function Sidebar() {
    return (
        <div className='sidebar'>
            <button class="sidebar_compose">
                <Image
                    src="/images/edit.png"
                    width={25}
                    height={25}
                    alt="compose"
                />
                &nbsp;&nbsp; &nbsp;<span>Compose</span>

            </button>
            <div className='sidemenu_list'>

            
            <SidebarOptions Icon={faEnvelope} title="Inbox" number={54} selected={true} />
            <SidebarOptions Icon={faStar} title="Starred" />
            <SidebarOptions Icon={faClock} title="Important" />
            <SidebarOptions Icon={faPaperPlane} title="Sent" />
            <SidebarOptions Icon={faFile} title="Drafts" />
            <SidebarOptions Icon={faBars} title="Categories" />
            <SidebarOptions Icon={faMessage} title="Chat" />
            {/* <SidebarOptions Icon={faBars} title="Scheduled" />
            <SidebarOptions Icon={faBars} title="All Mail" />
            <SidebarOptions Icon={faBars} title="Spam" />
            <SidebarOptions Icon={faBars} title="Trash" /> */}
            </div>
        </div>
    )
}

export default Sidebar