import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShop, AiOutlineMail } from 'react-icons/ai';
import { BsFillKeyFill } from 'react-icons/bs';

import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import postData from '../functions/postData';

const LoginPage: React.FC = (() => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(() => {
        if(cookies.get('token')) {
            navigate('/');
        }
    }, [])

    const click = ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let data = {'username': login, 'password': password};
        postData({url:"/api/login/", data:data}).then(
        (response) => {
                if(response['token']) {
                    cookies.set('token', response['token'], { path: '/' });
                    navigate("/");
                }
            }
        );
    });

    return(
        <div className="mt-[5%] m-auto border border-black w-[400px] h-[600px] select-none">
            <div className="table text-4xl m-auto mt-16 text-center font-bold">
                <AiOutlineShop className="text-orange-500" size="100"/>
                <div className="mt-1">Shop</div>
            </div>
            <div className="table mt-12 m-auto">
                <div className="">
                    <InputField id="username-input" placeholder="Username" label="Username" setFunc={setLogin} icon={AiOutlineMail}/>
                    <div className='text-center hidden text-red-600 mt-2 text-xs md:text-sm' id='UsernameError'>Username required</div>
                </div>
                <div className="mt-4">
                    <InputField password={true} id="password-input" placeholder="Password" label="Password" setFunc={setPassword} icon={BsFillKeyFill}/>
                    <div className='text-center hidden text-red-600 mt-2 text-xs md:text-sm' id='PasswordError'>Password required</div>
                </div>
            </div>
            <div className="mx-auto table mt-8">
                <SubmitButton name="Log in!" onClick={click}/>
            </div>
                <div className="mt-8 mx-auto table text-blue-400 hover:text-blue-600">
                    <Link to="/password/reset">
                        Forgotten your password?
                    </Link>
                </div>
            <div className="table mx-auto mt-1">
                <div className="float-left">
                    Don`t have an account?
                </div>
                <div className="ml-1 text-blue-400 hover:text-blue-600 float-left">
                    <Link to="/signup">
                        Sign up!
                    </Link>
                </div>
                <div className="clear-both"></div>
            </div>
        </div>
    )
});

export default LoginPage;