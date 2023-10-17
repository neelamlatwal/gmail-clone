'use client';
import React from 'react'
import "./header.css"
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faGear, faUserTie } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
const IconButton = styled.h1`   
  padding:0.5rem; 
`

function Header() {
    return (
        <div className='header'>

            <div className='header_left'>
                <div className='menu_icon'>
                    <FontAwesomeIcon
                        icon={faBars}

                        style={{ color: " #5f6368", height: "25px", width: "25px" }}
                    />
                </div>

                <Image
                    src="/images/logo.png"
                    width={109}
                    height={40}
                    alt="logo"
                />

            </div>
            <div className='header_middle'>
                <div className='search_icon'>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: " #5f6368", height: "25px", width: "25px" }}
                    />
                </div>
                <div className='form_input'>
                    <input type="text" placeholder='Search Mail' />
                </div>


            </div>
            <div className='header_right'>
                <IconButton>
                    <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: " #5f6368", height: "25px", width: "25px" }}
                    />
                </IconButton>
                <IconButton>
                <FontAwesomeIcon
                    icon={faUserTie}
                    style={{ color: " #5f6368", height: "25px", width: "25px" }}
                />
                </IconButton>
                
            </div>
        </div>
    )
}

export default Header