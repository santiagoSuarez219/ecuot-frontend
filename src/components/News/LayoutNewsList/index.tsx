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

export default function LayoutConflictList() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [oneNews, setOneNews] = useState<NewsResponse>();

  const [searchKeyWords, setSearchKeyWords] = useState("");
  const [searchByIntervention, setSearchByIntervention] = useState("");

  const [filteredData, setFilteredData] = useState<NewsResponse[]>([]);

  const user = useEcuot((state) => state.user);

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
    }
  }, [searchKeyWords, searchByIntervention, news]);

  if (isLoading) {
    return (
      <div className="mx-20 animate-pulse shadow overflow-hidden mb-20 flex flex-col gap-6">
        <div className="w-full h-[136px] bg-slate-300 rounded-lg"></div>
        <div className="w-full h-[64px] bg-slate-300 rounded-lg"></div>
        <div className="w-full h-[139px] bg-slate-300 rounded-lg"></div>
        <div className="w-full h-[534px] bg-slate-300 rounded-lg"></div>
      </div>
    );
  }
  if (isError) return <p>Error al cargar las noticias</p>;
  return (
    <>
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
      <div className="w-full mt-6 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredData?.length ? (
          filteredData.map((news) => (
            <CardNew
              key={news._id}
              data={news}
              isEditing={isEditing}
              isDeleting={isDeleting}
              setOneNews={setOneNews}
            />
          ))
        ) : (
          <NoDataFound title="acontecimientos noticiosos" />
        )}
      </div>
      <DialogDeleteNews news={oneNews} />
    </>
  );
}
