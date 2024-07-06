import React,{useState} from "react";
import LogoutBtn from "./logoutbtn";
import { Container,Logo} from "../index";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';
import { logout } from "../../store/feature/authStatus";
function Header()
{  const authStatus=useSelector((state => state.status))
    const navigate =useNavigate()
    const navItems=[
        {
            name:'Home',
            slug:'/',
            active:True
        },
        {
            name:'Login',
            slug:'/login',
            active:!authStatus,
        },
        {
            name:'SignUp',
            slug:'/signup',
            active:!authStatus
        },
        {
            name:'All Posts',
            slug:'/all-posts',
            active:authStatus
        },
        {
            name:'Add Post',
            slug:'/add-post',
            active:authStatus
        }
    ]

    return (
        <header className="py-3 shadow bg-gray-500"> 
        <Container>
            <nav>
                <div className="">
                    <Link to="/">
                    <Logo width="70px"/>
                    </Link>
                </div>
                <ul className="flex ml-auto">
                      {navItems.map((item)=>(
                        item.active? 
                        <li key={item.name}>
                            <button onClick={()=>navigate(item.slug)} className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
                            {item.name}
                            </button>
                        </li>
                         :null
                      ))}
                      {!authStatus?
                      <li>
                        <LogoutBtn/>
                      </li>
                       : null}
                </ul>
            </nav>
        </Container>
        </header>
    )
}
export default Header