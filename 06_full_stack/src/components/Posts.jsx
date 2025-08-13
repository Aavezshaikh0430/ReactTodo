import { useEffect, useState } from "react";
import { deleteUser, getUser } from "../api/PostApi";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  // handleUpdatedPost

  const handleUpdatedPost = (curElem) => {
    return setUpdateDataApi(curElem);
  };
  //function get method
  const getUserData = async () => {
    try {
      const res = await getUser();
      // console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //function delete post method
  const handleDeletePost = async (id) => {
    try {
      const res = await deleteUser(id);
      console.log(res.status);

      if (res.status === 200) {
        const updatedPost = data.filter((cureElem) => {
          return cureElem.id !== id;
        });
        setData(updatedPost);
      } else {
        console.log("some thing went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <section className="section-form">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section className="section-post">
        <ol className="section-ol">
          {data.map((curEle) => {
            const { id, body, title } = curEle;
            return (
              <li key={id}>
                <p>Title : {title}</p>
                <p>News : {body}</p>
                <button
                  onClick={() => {
                    handleUpdatedPost(curEle);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    handleDeletePost(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
