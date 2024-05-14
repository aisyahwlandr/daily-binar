import axios from "axios";
import { toast } from "react-toastify";
import { setCars } from "../reducers/car";

export const getCars = () => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setCars(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};