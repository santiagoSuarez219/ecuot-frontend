import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import { getUsersRequest } from "../../../api/UserAPI";
import { UserItemList } from "../../../types";
import NoDataFound from "../../NoDataFound";
import FilterForm from "../FilterForm";

export default function LayoutUsersList() {
  const rolTranslate: { [key: string]: string } = {
    researcher: "Investigador",
    assistant: "Asistente",
  };

  const [userToDelete, setUserToDelete] = useState<UserItemList>();
  const [searchKeyWords, setSearchKeyWords] = useState("");
  const [filteredData, setFilteredData] = useState<UserItemList[]>([]);

  const navigate = useNavigate();

  const {
    data: users,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersRequest,
  });

  // TODO: Falta la funcionalidad de filtrar por nombre
  // const filterData = (data: UserItemList[]) => {
  //   let filtered = data;
  //   filtered = filtered.filter(
  //     (user) =>
  //       user.userName
  //         .toLocaleLowerCase()
  //         .includes(searchKeyWords.toLocaleLowerCase()) ||
  //       user.userLastName
  //         .toLocaleLowerCase()
  //         .includes(searchKeyWords.toLocaleLowerCase()) ||
  //       user.user
  //         .toLocaleLowerCase()
  //         .includes(searchKeyWords.toLocaleLowerCase())
  //   );
  //   return filtered;
  // };
  console.log(userToDelete);

  useEffect(() => {
    if (users) {
      setFilteredData(users);
    }
  }, [searchKeyWords, users]);

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
  if (isError) return <p>Error al cargar los usuarios</p>;
  return (
    <div className="w-1/2 flex-grow">
      <FilterForm setSearchKeyWords={setSearchKeyWords} />
      {filteredData?.length ? (
        <div className="px-4 sm:px-6 lg:px-8 mt-6 bg-white rounded-lg">
          <div className="flow-root ">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 p-5 ">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-0"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left font-semibold text-gray-900"
                      >
                        Apellido
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left font-semibold text-gray-900"
                      >
                        Usuario
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left font-semibold text-gray-900"
                      >
                        Rol
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">Acciones</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredData.map((user) => (
                      <tr key={user._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-500 sm:pl-0">
                          {user.userName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                          {user.userLastName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                          {user.user}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                          {rolTranslate[user.rol]}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right font-medium sm:pr-0">
                          <Link
                            to={`/users/${user._id}/edit/`}
                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                          >
                            Editar
                          </Link>
                          <p
                            className="text-red-500 hover:text-red-900  mr-4 inline cursor-pointer"
                            onClick={() => {
                              setUserToDelete(user);
                              navigate("/users/?deleteUser=true");
                            }}
                          >
                            Eliminar
                          </p>
                          <Link
                            to={`/users/change-password/${user._id}`}
                            className="text-orange-600 hover:text-orange-700"
                          >
                            Cambiar contraseña
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoDataFound title="usuarios" />
      )}
      {/* <DialogDeleteUser user={userToDelete} /> */}
    </div>
  );
}
