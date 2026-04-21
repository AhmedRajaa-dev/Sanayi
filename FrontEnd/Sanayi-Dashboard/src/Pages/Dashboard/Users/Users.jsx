import Loading from "../../../components/ui/Loading";
import useUsers from "../../../hooks/useUsers";
import { Trash2, Edit2, Eye } from "lucide-react";

const Users = () => {
  const { users, loading } = useUsers();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full overflow-x-auto bg-white shadow-sm rounded-xl  border-slate-200">
          <table className="w-full text-sm text-center rtl:text-right text-slate-600 border-collapse table-auto">
            <thead className="bg-blue-500 border-slate-200 text-white uppercase text-xs ">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">
                  ID
                </th>
                <th scope="col" className="px-6 py-4 font-semibold ">
                  Name
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Role
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Created At
                </th>
                <th scope="col" className="px-6 py-4 font-semibold text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user, index) => (
                <tr
                  key={user.id || index}
                  className="hover:bg-blue-50/30 transition-colors duration-200 border-2"
                >
                  <td className="px-6 py-4 font-bold text-slate-900 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                    {user.phoneNumber}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold ring-1 ring-inset ${
                        user.role === "admin"
                          ? " bg-blue-50 text-blue-700 ring-blue-600/20"
                          : "bg-red-50 text-red-700 ring-red-600/20"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-GB")
                      : "-"}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Users;
