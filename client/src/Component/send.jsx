import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCopy } from 'react-icons/fa';
const Send = () => {
  const navigate=useNavigate();
  const uploadImage = useRef();
  const [file, setFile] = useState(null);
  const [path, setPath] = useState('');

  const handleupload=async()=>{
    if (file) {
      let data = new FormData();
      data.append('file', file);
      data.append('name', file.name);

      try {
        const response = await fetch('http://localhost:8000/api/upload', {
          method: 'POST',
          body: data,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log(responseData);
        setPath(responseData.path);
      } catch (error) {
        console.error('Error while uploading file:', error.message);
      }
    }
  
  }

  const handleRedirect=()=>{
    navigate('/receive');
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(path)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((err) => {
        console.error('Error copying URL: ', err);
      });
  }

  // useEffect(() => {
  //   const uploadFile = async () => {
  //     if (file) {
  //       let data = new FormData();
  //       data.append('file', file);
  //       data.append('name', file.name);

  //       try {
  //         const response = await fetch('http://localhost:3000/api/upload', {
  //           method: 'POST',
  //           body: data,
  //         });

  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }

  //         const responseData = await response.json();
  //         console.log(responseData);
  //       } catch (error) {
  //         console.error('Error while uploading file:', error.message);
  //       }
  //     }
  //   };
  //   uploadFile();
  // }, [file]);

  return (
    <div className='bg-[url(./bc/send.avif)] h-[100vh] w-[100vw] bg-cover bg-center bg-fixed flex items-center justify-center'>
      <button 
          className='absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition'
          onClick={handleRedirect}
        >
          Go to Receive
        </button>
      {/* Outer Box with Glass Effect */}
      <div className='relative border border-black w-[90vw] lg:w-[50%] md:w-[75vw] xs:w-[90vw] h-[80vh] rounded-lg overflow-hidden backdrop-blur-md bg-white/40 shadow-lg flex flex-col justify-center items-center'>
      
        {/* SEND Text */}
        <h1 className='absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 text-3xl font-bold text-black rounded-full shadow-md font-serif w-fit text-center bg-gradient-to-r from-blue-300 to-blue-500'>
          SEND
        </h1>

        {/* Content of the Box */}
        <div className='flex flex-col items-center justify-center h-full w-full'>
          {/* Show uploaded file */}
          {file && (
            <div className='mb-4 w-full flex justify-center'>
              {file.type.startsWith('video/') ? (
                <video 
                  className='w-[90%] max-h-[40vh] object-contain' 
                  controls 
                  src={URL.createObjectURL(file)} 
                />
              ) : (
                <img 
                  className='w-[90%] max-h-[40vh] object-contain' 
                  src={URL.createObjectURL(file)} 
                  alt="Uploaded preview" 
                />
              )}
            </div>
          )}
          
          <input
            type="file"
            ref={uploadImage}
            style={{ display: 'none' }}
            onChange={(e) => {
              console.log(e.target.files[0]);
              setFile(e.target.files[0]);
            }}
          />
          <div className='flex space-x-6'>
            <button 
              className='bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition shadow-md transform hover:scale-105'
              onClick={() => {
                uploadImage.current.click();
              }}>
              Upload
            </button>
            <button 
              className='bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition shadow-md transform hover:scale-105'
              onClick={handleupload}>
              Send
            </button>
          </div>
           {/* Show file path after upload */}
             {/* Show file path after upload */}
          {path && (
            <div className='mt-4 w-full flex items-center justify-center'>
              <h4 className='mr-2'>File Link:</h4>
              <a 
                href={path} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-blue-500 hover:underline'
              >
                {path}
              </a>
              <button 
                className='ml-2 text-gray-500 hover:text-gray-800'
                onClick={handleCopy}
                title="Copy URL"
              >
                <FaRegCopy size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Send;
