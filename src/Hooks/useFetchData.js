import { useEffect, useState } from "react";
import axios from 'axios'; 

export default function useFetchData(url = 'http://127.0.0.1:5000/data',limit=0) { // Optional default URL
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      setError(null); // Clear any previous errors

      try {
        if(limit ==0)
        {
          const response = await axios.get(url);
          if (response.status === 200) {
            setTasks(response.data);
          } else {
            setError(new Error(`Error fetching data: ${response.statusText}`));
          }
        }
        else
        {
          const response = await axios.get(url,{
            headers: { 'Content-Type': 'application/json' },
            limit
          });
          if (response.status === 200) {
            setTasks(response.data);
          } else {
            setError(new Error(`Error fetching data: ${response.statusText}`));
          }
        }

      } catch (error) {
        setError(error); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); 
  return { tasks, isLoading, error };
}
