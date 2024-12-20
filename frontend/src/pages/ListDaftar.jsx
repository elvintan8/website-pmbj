import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataPendaftaran, deleteAnggota } from "../store/action/pendaftaranAction";
import { useNavigate } from "react-router-dom";

const ListAnggota = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ambil data dari Redux State
  const { loading, anggota, error } = useSelector(
    (state) => state.dataPendaftaranReducer
  );

  useEffect(() => {
    dispatch(dataPendaftaran());
  }, [dispatch]);

  // Fungsi untuk menghapus data anggota
  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus anggota ini?")) {
      dispatch(deleteAnggota(id));
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Anggota</h1>

      {/* Handle Loading State */}
      {loading && <p>Loading data...</p>}

      {/* Handle Error State */}
      {error && <p className="text-red-500">Terjadi Kesalahan: {error}</p>}

      {/* Tabel List Anggota */}
      {!loading && !error && anggota?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">No</th>
                <th className="border p-2">Nama Lengkap</th>
                <th className="border p-2">Nama Buddhis</th>
                <th className="border p-2">Pendidikan</th>
                <th className="border p-2">No HP</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {anggota.map((item, index) => (
                <tr
                  key={item.id} // Gunakan `id` sebagai key jika ada
                  className="odd:bg-white even:bg-gray-100 text-center"
                >
                  <td className="border p-2 text-center">{index + 1}</td>
                  <td className="border p-2">{item.namalengkap}</td>
                  <td className="border p-2">{item.namabuddhis}</td>
                  <td className="border p-2">{item.pendidikan}</td>
                  <td className="border p-2">{item.noHpTelp}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">
                    <div className="flex justify-center space-x-2">
                      {/* Tombol Edit */}
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        onClick={() => navigate(`/EditPendaftaran/${item.id}`)}
                      >
                        Edit
                      </button>

                      {/* Tombol Delete */}
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading &&
        !error && (
          <p className="text-center text-gray-500">
            Tidak ada data anggota tersedia
          </p>
        )
      )}
    </div>
  );
};

export default ListAnggota;
