import axios from "axios";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../../hooks/useUserContext";

const Student_Profile = (props) => {
  const { userer } = useUserContext();
  console.log("user data", userer);
  const [datas, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response_data =
        await axios
          .get("http://localhost:8081/api/student/get/643")
          .then((res) => setData(res.data));
        // setData(res);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // console.log(new Date().getTime().toString());

  return (
    <>
      <div>
        {userer &&
          userer.length &&
          userer.map((users) => <div>{users.id}</div>)}
      </div>
      {datas.studentdetails &&
        datas.studentdetails.length &&
        datas.studentdetails.map((d) => (
          <div className="text-center" key={d}>
            <div className="text-start">
              <div className="f">ID : {d?.user_id}</div>
              <div className="f">
                Name : {d?.first_name} {d?.second_name}{" "}
              </div>
              <div className="f">Email : {d?.email}</div>
              <div className="f">Date of Birth :</div>
              <div className="f">Phone</div>
              <div className="f">Address :</div>
              <div className="f">University Name:</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Student_Profile;
