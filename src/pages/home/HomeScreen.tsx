import React, { useContext, useEffect, useState } from "react";
import { readUser } from "../../api/authAPI";
import { GlobalContext } from "../../global/globalProvider";

const HomeScreen = () => {
  const { userID }: any = useContext(GlobalContext);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    readUser(userID).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setUser(res.data);
      }
    });
  }, []);
  return (
    <div>
      <div>Hi {user?.name},</div>

      <button
        className="bg-black text-white px-6 py-2 mt-10 mx-3"
        onClick={() => {
          localStorage.removeItem("userAuthLogin");
          window.location.reload();
        }}
      >
        Login
      </button>
      <div className="mt-20">
        <p>Product</p>
      </div>
    </div>
  );
};

export default HomeScreen;
