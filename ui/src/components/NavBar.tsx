import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import postData from '../functions/postData';
import Cookies from 'universal-cookie';

const NavBar: React.FC = (() => {
    const cookies = new Cookies();
    const [user_id, setUserId] = useState<number>();
    const [imageURL, setImageURL] = useState<string>("");

    useEffect(() => {
        const data = {'token': cookies.get("token")};
        postData({url:"/api/user/current/", data}).then((response) => {
                const image_url = response['image_url'];
                const user_id = response['user'];
                setUserId(user_id);
                if(image_url) {
                    setImageURL(image_url);
                }
                else {
                    setImageURL("media/profile/default.png");
                }
            }
        );
    }, []);

    const dropDownClick = ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const div = document.getElementById("dropdown") as HTMLDivElement;
        if(div.classList.contains("hidden")) {
            div.classList.remove("hidden");
        }
        else {
            div.classList.add("hidden");
        }
    });

    return(
        <div id="NavBar" className="h-16 w-screen bg-orange-500 select-none">
            <div className="float-left ml-20 p-5">Home</div>
            <div className="float-left ml-4 p-5">Search</div>
            <div className="pt-3 mr-[400px]">
                <img src={imageURL} className="rounded-full float-right w-10 h-10" onClick={dropDownClick}/>
                <div id="dropdown" className="hidden float-right mt-12 mr-[-150px] z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a href={"/#/profile/" + user_id} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="/api/logout" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default NavBar;