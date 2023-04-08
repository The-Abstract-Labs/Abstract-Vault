import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";

function useQRSubmission(setError) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation(
    async (data) => {
      const response = await axios.post("/api/submit", data);
      return response.data;
    },
    {
      onError: (err) => {
        setError("There was an unexpected error");
      },

      onSuccess: (data) => {
        queryClient.invalidateQueries("auth");
        if (data?.message) setError(data?.message);
        else setError(false);
      },
    }
  );

  return mutation;
}

export default useQRSubmission;
