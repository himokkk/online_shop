import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

import getData from '../functions/getData';
import postData from '../functions/postData';
import NavBar from '../components/NavBar';

const ProfilePage: React.FC = (() => {
    const { id } = useParams();
    const cookies = new Cookies();

    const [user_id, setUserId] = useState<number>();
    const [username, setUsername] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [imageURL, setImageURL] = useState<string>("");

    useEffect(() => {
        const data = {'token': cookies.get("token")};
        postData({url:"/api/user/current/", data}).then((response) => {
                if(Number(id) === response['user']) {
                    console.log("xxx");
                }
            }
        );

        getData({url:"/api/user/"+id}).then((response) => {
                const image_url = response['image_url'];
                const user_id = response['user'];
                const username = response['username'];
                const description = response['description'];
                setUserId(user_id);
                setUsername(username);
                setDescription(description);
                if(image_url) {
                    setImageURL(image_url);
                }
                else {
                    setImageURL("media/profile/default.png");
                }
            }
        );
    }, []);

    return (
        <div>
            <NavBar/>
            <div className="mx-auto table mt-32 pr-32">
                <div>
                    <div className="float-left">
                        <img src={imageURL} className="select-none rounded-full w-40 h-40"/>
                    </div>
                     <div className="float-left mt-12 ml-12">
                        <div className="text-3xl">{username}</div>
                        <hr className="w-96 h-1 bg-green-500"/>
                        <div className="mt-4">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ProfilePage;
