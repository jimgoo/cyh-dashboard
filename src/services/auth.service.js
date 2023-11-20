import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import createAxiosInstance from "@/utils/config/axios-instance";
const AuthService = () => {

    //Admin Log In
    const useHandleLoginInService = () => {
        function handleLogInRequest(data) {
            console.info('handleLogInRequest', data, 'dashboardUrl', window.location.origin);
            return createAxiosInstance().post(`/users/send-authentication`, {email: data.email, dashboardUrl: window.location.origin}).then((res) => res.data);
        }

        const onSuccess = (response) => {
            toast.success("Your Access Token Has Been Sent To Your Email")
        };
        const onError = (error) => {
            toast.error(viewError(error.response.data.message));
        };

        return useMutation({
            mutationFn: handleLogInRequest,
            onError,
            onSuccess,
            retry: 0,
        });
    };


    return {
        useHandleLoginInService,
    };
};

export default AuthService;
