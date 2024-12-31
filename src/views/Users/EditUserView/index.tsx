import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserByIdRequest } from "../../../api/UserAPI";
import EditUser from "../../../components/Users/EditUser";
import Loader from "../../../components/Loader/Loader";

export default function EditUserView() {
  const params = useParams();

  const {
    data: user,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["get-user-by-id", params.userId],
    queryFn: () => getUserByIdRequest(params.userId ? params.userId : ""),
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error</p>;
  if (user) return <EditUser user={user} />;
}
