import {useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/config/axios-instance";

const UserService = () => {
    const useFetchUser = (token) => {
        function fetchUser(){
            return axiosInstance(token)
                .get(`/users`)
                .then((res) => res.data);
        }

        return useQuery({
            queryFn: fetchUser,
            queryKey: [`users`],
            cacheTime:Infinity,
            staleTime:Infinity,
            retry: 0,
            enabled:token!==undefined
        });
    };


    return {
        useFetchUser,
    };
};

export default UserService;
