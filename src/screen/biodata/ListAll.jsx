import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { RiApps2AddLine } from "react-icons/ri";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import { FiEdit } from "react-icons/fi";

const ListAll = () => {
  const navigate = useNavigate();
  const [allBiodata, setAllBiodata] = useState([]);
  //mengambil semua data di dalam colection "biodata" yang ada di firebase
  async function getAllBiodata() {
    let result = [];

    const collRef = collection(db, "biodata");
    const allData = await getDocs(collRef);
    allData.forEach((e) => {
      result.push(e.data());
    });
    return result;
  }

  // fungsi update
  function handleUpdate(data) {
    const { fullname, address, bod, pob, email, phone } = data;
    navigate(
      `/biodata/update?fullname=${fullname}&address=${address}&bod=${bod}&pob=${pob}&email=${email}&phone=${phone}`
    );
  }

  useEffect(() => {
    getAllBiodata().then((res) => {
      setAllBiodata((prev) => (prev = res));
    });
  }, []);

  return (
    <div className="w-full min-h-[100dvh] flex flex-col p-6 gap-4">
      {/* Nav */}
      <div className="text-center flex items-center justify-between text-2xl">
        <NavLink to={"/"} role="button">
          <BsArrowLeft />
        </NavLink>
        <h1 className="font-thin select-none uppercase">list biodata</h1>
        <NavLink to={"/biodata"} role="button">
          <RiApps2AddLine />
        </NavLink>
      </div>
      {/* end nav */}

      {/* card biodata */}
      <div className="flex w-full flex-col gap-4">
        {allBiodata.map((e) => {
          return (
            <div
              key={e.email}
              className="w-full flex flex-col gap-2 border boder-gray-400 p-4 rounded-2xl shadow-md"
            >
              <p>Fullname : {e.fullname} </p>
              <p>Email : {e.email}</p>
              <details>
                <summary>Lihat Detail</summary>
                <div className="flex gap-2 flex-col">
                  <p>Alamat : {e.address}</p>
                  <p>Tempat Lahir : {e.pob}</p>
                  <p>Tanggal : {e.bod}</p>
                  <p>Nomer : {e.phone}</p>
                </div>
              </details>
              <div className={`flex justify-end gap-1 text-2xl`}>
                <FiEdit size={20}
                  onClick={() => {
                    handleUpdate(e);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* end card biodata */}
    </div>
  );
};

export default ListAll;
