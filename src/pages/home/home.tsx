import React from "react";
import GithubLogo from '../../assets/GitHub-logo.png'
import { Text, Input, InputGroup, Kbd } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { useNavigate } from 'react-router-dom';
function Home(){
  const navigate = useNavigate();
  const submitQuery=(e: React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key=="Enter"){
      console.log(e.currentTarget.value)
      navigate(`/result?username=${e.currentTarget.value}`)
    }

  }
    return(
        <div className="flex flex-col justify-center items-center h-screen text-center px-4">
        <img 
          src={GithubLogo} 
          alt="Github Logo" 
          className="w-64 h-64 object-contain mb-6" 
        />
        <Text className="max-w-lg text-lg leading-relaxed">
          Welcome to GitHub Profile Explorer – a sleek and responsive web app that makes discovering GitHub profiles a breeze 🔍. Simply enter a username to instantly view detailed profile information, including avatar and direct links 🚀. Every search you make, whether successful ✅ or not ❌, is saved in your personal history so you can revisit or manage them anytime 📜. With smooth navigation and a clean interface, exploring GitHub is now faster, easier, and more enjoyable across all devices 📱.
        </Text>
        <div className="w-full max-w-md mt-8">
          <InputGroup startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>} >
            <Input placeholder="Search username" className="w-full px-4 py-2 border rounded-lg" onKeyDown={submitQuery}/>
          </InputGroup>
        </div>
      </div>
      

  
    )
}
export default Home;