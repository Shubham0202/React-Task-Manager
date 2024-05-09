import { useEffect, useState } from "react";
import axios from 'axios'; // Assuming Axios is installed (`npm install axios`)

export default function useFetchData(url = 'http://127.0.0.1:5000/data') { // Optional default URL
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setTasks(response.data);
        } else {
          setError(new Error(`Error fetching data: ${response.statusText}`)); // Create a more informative error object
        }
      } catch (error) {
        setError(error); // Store the actual error object
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    fetchData();
  }, [url]); // Dependency array to re-fetch data if URL changes

  return { tasks, isLoading, error };
}
