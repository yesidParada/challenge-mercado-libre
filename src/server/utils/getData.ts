import axios from "axios";

export class GetData {

    public async get(url: string, params?: any) {
        try {
            const response = await axios.get(url,{
                params: params
            });
    
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}