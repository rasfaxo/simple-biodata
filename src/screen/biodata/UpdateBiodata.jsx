import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { SlScreenSmartphone } from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import { PiListMagnifyingGlassLight } from "react-icons/pi";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import db from "../../firebase";



const UpdateBiodata = () => {
    const navigate = useNavigate();
    //mengambil query dari parameter
    const [query] = useSearchParams();
    const email = query.get("email");
    const fullname = query.get("fullname");
    const bod = query.get("bod");
    const pob = query.get("pob");
    const address = query.get("address");
    const phone = query.get("phone");

    function handleSubmit(event){
        event.preventDefault();

        // menangkap value dari input element
        const fullname = event.target.fullname.value;
        const bod = event.target.bod.value;
        const pob = event.target.pob.value;
        const address = event.target.address.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;

        // menampilkan ke console
        console.info({
            fullname,
            pob,
            bod,
            address,
            email,
            phone
    });

    // konfirmasi ke user
    const conf = window.confirm(`
    fullname    : ${fullname}
    bod         : ${bod}
    pob         : ${pob}
    address     : ${address}
    email       : ${email}
    phone       : ${phone}
    `);
    if (!conf) return;

    // store data ke firebase
    storeBiodata({
        fullname,
        bod,
        pob,
        address,
        email,
        phone,
    }).then(()=>console.info("data berhasil masuk"))

    //kembailkan ke halaman utama
    navigate("/list");
    }

    async function storeBiodata(data){
        const docRef = doc(db, "/biodata", data.email)
        const store = await updateDoc(docRef, data);
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
          onSubmit= {handleSubmit}
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
              defaultValue={fullname}
            />
            <BiUser className="w-5 h-5 absolute ml-5 mt-[42px] text-gray-400" />
          </div>
          <div className={`w-full flex flex-col gap-2`}>
            <label htmlFor="bod" className="ml-3">
              Tanggal lahir
            </label>
            <input 
            type="date" 
            name="bod" 
            id="bod" 
            className="input-style" 
            defaultValue={bod} />
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
              defaultValue={pob}
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
              defaultValue={address}
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
              defaultValue={email}
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
              defaultValue={phone}
            />
            <SlScreenSmartphone className="h-5 w-5 absolute ml-5 mt-[43px] text-gray-400" />
          </div>
          
          <button
            type="submit"
            className={`w-11/12 h-10 bg-blue-500 text-white rounded-md mx-auto`}
          >
            update
          </button>
        </form>
      </div>
      {/* end formulir */}
    </div>
  )
}

export default UpdateBiodata
