import axios from "axios";
import { useEffect, useState } from "react";
const Login = () => {
  const [data, setData] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const getData = async () => {
    setUsersLoading(true);
      const getData = await axios.get("./api/user");
      setData(getData.data);
      setUsersLoading(false);
  }
  useEffect(() =>{
    getData()
  }, []);
  return (
    <>
      <div>
        {usersLoading ? (
          <p>loading...</p>
        ) : (
          data.map((user, i) => {
            return <p key={i}>{user.account}</p>;
          })
        )}
      </div>
    </>
  );
};

export default Login;
