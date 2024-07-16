import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { SlScreenSmartphone } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { PiListMagnifyingGlassLight } from "react-icons/pi";
import db from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const BiodataPage = () => {
  function handleSubmit(e) {
    e.preventDefault();

    // mengambil value dari input element
    const fullname = e.target.fullname.value;
    const bod = e.target.bod.value;
    const pob = e.target.pob.value;
    const address = e.target.address.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    //menampilkan diconsole
    console.info({
      fullname,
      bod,
      pob,
      address,
      email,
      phone,
    });

    //konfirmasi user
    const conf = window.confirm(`
        fullname: ${fullname}
        tanggal lahir: ${bod} 
        tempat lahir: ${pob}
        alamat: ${address} 
        email: ${email}
        nomor telepon: ${phone}`);
    if (!conf) return;


    //store data ke firebase
    storeBiodata({
      fullname,
      bod,
      pob,
      address,
      email,
      phone
    }).then(() => console.info("data berhasil masuk"))

  }
  //fuction yang menerima parameter data
  async function storeBiodata(data) {
    //membuat referensi ke dokumen di dalam koleksi "biodata"
    const docRef = doc(db, "/biodata" + data.email);
    //menyimpan data ke dokumen yang direferensikan, await(menunggu operasi ini selesai sebelum melanjutkan)
    const store = await setDoc(docRef, data)

    return store;
  }

  return (
    <div className="w-full min-h-[100dvh] flex flex-col p-4 gap-4 bg-base">
      {/* title */}
      <div className="text-center flex items-center justify-between text-2xl">
        <NavLink to={"/"} role="button">
          <BsArrowLeft />
        </NavLink>
        <h1 className="font-bold select-none uppercase">biodata</h1>
        <NavLink to={"/list"} role="button">
          <PiListMagnifyingGlassLight />
        </NavLink>
      </div>
      {/* end title */}

      {/* formulir */}
      <div className="w-10/12 mx-auto">
        <form
          className="w-full flex flex-col gap-4 overflow-y-hidden text-gray-500"
          onSubmit={handleSubmit}
        >
          <div className={`w-full flex flex-col gap-2`}>
            <label htmlFor="fullname" className="ml-3">
              Nama lengkap
            </label>
            <input
              placeholder="Masukan nama disini"
              type="text"
              name="fullname"
              id="fullname"
              className={`input-style`}
            />
            <BiUser className="w-5 h-5 absolute ml-5 mt-[42px] text-gray-400" />
          </div>
          <div className={`w-full flex flex-col gap-2`}>
            <label htmlFor="bod" className="ml-3">
              Tanggal lahir
            </label>
            <input type="date" name="bod" id="bod" className="input-style" />
          </div>
          <div className={`w-full flex flex-col gap-2`}>
            <label htmlFor="pob" className="ml-3">
              Tempat Lahir
            </label>
            <input
              placeholder="Masukan disini"
              type="text"
              name="pob"
              id="pob"
              className="input-style"
            />
          </div>
          <div className={`w-full flex flex-col gap-2`}>
            <label htmlFor="address" className="ml-3">
              Alamat
            </label>
            <input
              placeholder="Masukan alamat disini"
              type="text"
              name="address"
              id="address"
              className="input-style"
            />
            <MdOutlineLocationOn className="w-5 h-5 absolute ml-5 mt-[43px] text-gray-400" />
          </div>
          <div className={`w-full flex flex-col gap-2 relative`}>
            <label htmlFor="email" className="ml-3">
              {" "}
              Email
            </label>
            <input
              placeholder="email@example.com"
              type="email"
              name="email"
              id="email"
              className="input-style"
            />
            <MdOutlineMailOutline className="w-5 h-5 absolute ml-5 mt-[43px] text-gray-400" />
          </div>
          <div className={`w-full flex flex-col gap-2`}>
            <label htmlFor="phone" className="ml-3">
              Telpon
            </label>
            <input
              placeholder="Masukan nomer disini"
              type="tel"
              name="phone"
              id="phone"
              className="input-style"
            />
            <SlScreenSmartphone className="h-5 w-5 absolute ml-5 mt-[43px] text-gray-400" />
          </div>

          <button
            type="submit"
            className={`w-11/12 h-10 bg-blue-500 text-white rounded-md mx-auto`}
          >
            Submit
          </button>
        </form>
      </div>
      {/* end formulir */}
    </div>
  );
};

export default BiodataPage;