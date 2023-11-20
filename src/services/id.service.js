import createAxiosInstance from '@/utils/config/axios-instance';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
const IDService = () => {
  const useHandleIDUpload = (token, id) => {
    const queryClient = useQueryClient();
    function handleCreateOrderRequest(data) {
      return createAxiosInstance(token)
        .post(`/users/files`, JSON.stringify(data))
        .then((res) => res.data);
    }

    const onSuccess = async () => {
      await queryClient.resetQueries(['todos']);
      await queryClient.invalidateQueries(['users']);
      toast.success('ID Uploaded Successfully');
    };
    const onError = (error) => {
      toast.info(error.response.data.message);
    };
    return useMutation({
      mutationFn: handleCreateOrderRequest,
      onSuccess: onSuccess,
      onError: onError,
      retry: 0,
    });
  };

  return {
    useHandleIDUpload,
  };
};

export default IDService;
