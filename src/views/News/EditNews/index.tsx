import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../../api/NewsAPI";
import NewsEdit from "../../../components/News/NewsEdit";
import Loader from "../../../components/Loader/Loader";

export default function EditNews() {
  const params = useParams();

  const {
    data: news,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["get-news-by-id", params.newsId],
    queryFn: () => getNewsById(params.newsId ? params.newsId : ""),
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error</p>;
  if (news) return <NewsEdit news={news} />;
}
