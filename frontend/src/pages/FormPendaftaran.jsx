import { useDispatch } from "react-redux";
import { useState } from "react";
import { createPendaftaran } from "../store/action/pendaftaranAction";
import { useNavigate } from "react-router-dom";


const FormPendaftaran = () => {
  const dispath = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    namalengkap: "",
    namabuddhis: "",
    tempatlahir: "",
    tanggallahir:"",
    jeniskelamin: "",
    pendidikan: "",
    fakultas: "", 
    angkatantahunajaran: "",
    pekerjaan: "",
    golongandarah: "", 
    hobi: "",
    alamatlengkap: "",
    aktifdivihara: "",
    nohp: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Formulir:', formData);
    dispath(createPendaftaran(formData))
    navigate("/FormPendaftaran")
   };

   const styles = {
    container: {
      width: '900px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '5px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
    },
    select: {
      width: '100%',
      padding: '8px',
      margin: '5px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
    },
    textarea: {
      width: '100%',
      padding: '8px',
      margin: '5px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      height: '100px',
      fontSize: '14px',
    },
    button: {
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    spacer: {
      height: '30px',
    }
  };

  return  (
    <div>
      <div style={styles.spacer}></div>
      <div style={styles.container}>
        <h2 style={styles.heading}>Formulir Pendaftaran Anggota</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nama Lengkap:</label>
            <input
              type="text"
              name="namalengkap"
              value={formData.namalengkap}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Nama Buddhis:</label>
            <input
              type="text"
              name="namabuddhis"
              value={formData.namabuddhis}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Tempat Lahir:</label>
            <input
              type="text"
              name="tempatlahir"
              value={formData.tempatlahir}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Tanggal Lahir:</label>
            <input
              type="date"
              name="tanggallahir"
              value={formData.tanggallahir}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Jenis Kelamin:</label>
            <select
              name="jeniskelamin"
              value={formData.jeniskelamin}
              onChange={handleChange}
              required
              style={styles.select}
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="L">Laki-Laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Pendidikan:</label>
            <select
              name="pendidikan"
              value={formData.pendidikan}
              onChange={handleChange}
              required
              style={styles.select}
            >
              <option value="">Pilih Pendidikan</option>
              <option value="Universitas">Universitas</option>
              <option value="Perguruan Tinggi">Perguruan Tinggi</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Fakultas:</label>
            <input
              type="text"
              name="fakultas"
              value={formData.fakultas}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Angkatan Tahun Ajaran:</label>
            <input
              type="text"
              name="angkatantahunajaran"
              value={formData.angkatantahunajaran}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Pekerjaan:</label>
            <input
              type="text"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Golongan Darah:</label>
            <input
              type="text"
              name="golongandarah"
              value={formData.golongandarah}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Hobi:</label>
            <input
              type="text"
              name="hobi"
              value={formData.hobi}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Alamat Lengkap:</label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Aktif di Vihara:</label>
            <input
              type="text"
              name="aktifdivihara"
              value={formData.aktifdivihara}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>No. HP & Telp:</label>
            <input
              type="tel"
              name="nohp"
              value={formData.nohp}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>Daftar</button>
        </form>
      </div>
    </div>
  );
}

export default FormPendaftaran;
