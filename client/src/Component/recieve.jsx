import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Receive = () => {
  const navigate=useNavigate();
  const urlInputRef = useRef();
  const [message, setMessage] = useState(""); // State to handle messages
  const [loading, setLoading] = useState(false); // State to handle loading

  const handledownload = async () => {
    const url = urlInputRef.current.value;
    if (url.trim() !== "") {
        setLoading(true); // Start loading
        setMessage(""); // Reset message

        try {
            // Check if the URL is a valid website
            const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/; // Regular expression to validate URL
            if (urlPattern.test(url)) {
                // It's a valid URL, so open it directly
                window.open(url, '_blank');
                setMessage("File Downloaded"); // Message indicating the website is opening
            } else {
                // It's not a valid URL, perform a Google search
                const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
                window.open(googleSearchUrl, '_blank');
                setMessage("Searching Google..."); // Message indicating a search is in progress
            }
        } catch (error) {
            console.error("Error:", error.message);
            setMessage(`Error: ${error.message}`); // Error message
        } finally {
            setLoading(false); // Stop loading
        }
    }
}
const handleRedirect=()=>{
  navigate('/send');
}


  return (
    <div className='bg-[url(./bc/receive.avif)] h-[100vh] w-[100vw] bg-cover bg-center flex items-center justify-center'>
      <button 
          className='absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition'
          onClick={handleRedirect}
        >
          Go to Send
        </button>
      <div className='relative border border-black w-[90vw] lg:w-[50%] md:w-[75vw] xs:w-[90vw] h-[60vh] rounded-lg overflow-hidden backdrop-blur-md bg-white/40 shadow-lg'>
        <h1 className='absolute top-3 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 text-3xl font-bold text-white rounded-full shadow-md font-serif w-fit text-center bg-gradient-to-r from-blue-300 to-blue-500'>
          RECEIVE
        </h1>

        <div className='flex flex-col items-center justify-center h-full p-4'>
          <div className='flex w-[80%]'>
            <input
              type="text"
              ref={urlInputRef}
              placeholder="Paste URL here"
              className='border border-gray-400 rounded-l-md p-2 w-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button 
              className='bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition shadow-md transform hover:scale-105 ml-2'
              onClick={handledownload}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </div>
          {message && <p className='mt-4 text-gray-800'>{message}</p>} {/* Display message */}
        </div>
      </div>
    </div>
  );
}

export default Receive;
