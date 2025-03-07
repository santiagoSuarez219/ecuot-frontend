import { useEffect, useState } from "react";

import { NewsResponse } from "../../../types";
import { useEcuot } from "../../../ecuot";
import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../../api/NewsAPI";
import CrudButtons from "../../CrudButtons";
import FilterForm from "../FilterForm";
import NoDataFound from "../../NoDataFound";
import CardNew from "../CardNew";
import DialogDeleteNews from "../DialogDeleteNews";
import Loader from "../../Loader/Loader";

export default function LayoutConflictList() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [oneNews, setOneNews] = useState<NewsResponse>();

  const [searchKeyWords, setSearchKeyWords] = useState("");
  const [searchByIntervention, setSearchByIntervention] = useState("");

  const [filteredData, setFilteredData] = useState<NewsResponse[]>([]);

  const user = useEcuot((state) => state.user);

  const [visibleCount, setVisibleCount] = useState(30);

  const {
    data: news,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setIsDeleting(false);
  };

  const handleDelete = () => {
    setIsDeleting(!isDeleting);
    setIsEditing(false);
  };

  const filterData = (data: NewsResponse[], type: string) => {
    let filtered = data;
    if (type.includes("BY_KEYWORDS")) {
      filtered = filtered.filter(
        (newsItem) =>
          newsItem.newsName
            .toLocaleLowerCase()
            .includes(searchKeyWords.toLocaleLowerCase()) ||
          newsItem.description
            .toLocaleLowerCase()
            .includes(searchKeyWords.toLocaleLowerCase())
      );
    }
    if (type.includes("BY_INTERVENTION")) {
      filtered = filtered.filter(
        (newsItem) =>
          newsItem.intervention._id.toLocaleLowerCase() ===
          searchByIntervention.toLocaleLowerCase()
      );
    }
    return filtered;
  };

  useEffect(() => {
    if (news) {
      let filterType = "";
      if (searchKeyWords) filterType += "BY_KEYWORDS";
      if (searchByIntervention) filterType += "BY_INTERVENTION";
      setFilteredData(filterData(news, filterType));
      setVisibleCount(30);
    }
  }, [searchKeyWords, searchByIntervention, news]);

  if (isLoading) return <Loader />;
  if (isError) return <p>Error al cargar las noticias</p>;
  return (
    <div className="px-4 lg:px-16">
      <CrudButtons
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        routeToNew={"/news/new"}
        hasItems={news?.length !== 0}
        user={user}
      />
      {news?.length !== 0 && (
        <FilterForm
          setSearchKeyWords={setSearchKeyWords}
          setSearchByIntervention={setSearchByIntervention}
        />
      )}

      {filteredData?.length ? (
        <>
          <div className="w-full mt-6 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredData.slice(0, visibleCount).map((news) => (
              <CardNew
                key={news._id}
                data={news}
                isEditing={isEditing}
                isDeleting={isDeleting}
                setOneNews={setOneNews}
              />
            ))}
          </div>

          {filteredData.length > visibleCount && (
            <div className="text-center mt-4">
              <button
                className="bg-quinary text-white px-4 py-2 rounded hover:scale-105 transition-all"
                onClick={() => setVisibleCount((prev) => prev + 15)}
              >
                Ver más
              </button>
            </div>
          )}
        </>
      ) : (
        <NoDataFound title="acontecimientos noticiosos" />
      )}

      <DialogDeleteNews news={oneNews} />
    </div>
  );
}
