import axios from 'axios';

const url = 'https://localhost:3000';

export const uploadfile = async (data) => { // Changed to use 'const' with export
    try {
        let response = await axios.post(`${url}/uploads`, data);
        return response.data;
    } catch (error) {
        console.log("Error while calling api: ", error.message);
    }
};
