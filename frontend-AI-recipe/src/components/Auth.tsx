import { SigninInput } from "@plodhi/common-app"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"


export const Auth = ({ type } : {type: "signup" | "signin"}) => {

    const navigate = useNavigate();

    const [postInput, setPostInput] = useState<SigninInput>({
        name : "",
        username : "",
        password: ""
    })

    async function sendRequest(){
        try{
            const response =await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInput);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }catch(error){
            alert("Error while signing up")
        }
    }

    return <div className="h-screen flex flex-col justify-center bg-purple-950">
       
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-slate-500">
                           { type === "signin" ? "Don't have an accoun?" :  "Already have an account? "}
                            <Link className="underline  pl-2" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                        <div className="pt-4">

                            {type === "signup" ?<LabelledInput label="Name" placeholder="Name...." onChange={ (e) =>{
                                setPostInput({
                                    ...postInput,
                                    name: e.target.value
                                })
                            }} /> : null}
                            <LabelledInput label="Username" placeholder="name@gmail.com...." onChange={ (e) =>{
                                setPostInput({
                                    ...postInput,
                                    username: e.target.value
                                })
                            }} />
                            <LabelledInput label="Password" type={"password"} placeholder="12345" onChange={ (e) =>{
                                setPostInput({
                                    ...postInput,
                                    password: e.target.value
                                })
                            }} />
                            <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
                                dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}
                            </button>
                        </div>
                </div>
            </div>     
        </div>
    </div>
}

interface LabelledInputType{
    label:string,
    placeholder:string,
    type?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabelledInput({label, placeholder, onChange, type} : LabelledInputType){
    return <div>
            <label  className="block text-sm font-medium text-gray-900 dark:text-white pl-1 pt-2">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5" placeholder={placeholder}   required />
    </div>
}