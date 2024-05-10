import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchProjects(url= 'http://127.0.0.1:5000/projects',label='project')
{
    const [projects, setProjects] = useState([]);
    const [isLoadingP, setIsLoading] = useState(false); // Track loading state
    const [errorP, setError] = useState(null); // Track any errors  
    useEffect(()=>{
        const useFetch = async ()=>{
            setError(null);
            setIsLoading(true);
            try{
            const response = await axios.get(url,{
                label
            });
            if(response.status ===200)
            {
                setProjects(response.data);
            }else{
                console.log("okay")
                setError(new Error("Error:"+response.statusText));
            }
        }catch(err){
            setError("Error="+err);   
        }finally{
            setIsLoading(false);
            console.log(projects);
        }
        }
        useFetch();
    },[url,label]);
    return {projects,isLoadingP,errorP};
}