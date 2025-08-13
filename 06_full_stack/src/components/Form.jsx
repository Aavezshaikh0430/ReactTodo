import { useEffect, useState } from "react";
import { postUser, updatePost } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    id: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    updateDataApi &&
      setPostData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  const handlePost = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPostData((prev) => {
      // console.log(prev);

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //post method
  const addPost = async () => {
    const newData = {
      id: new Date().getTime().toString(),
      title: postData.title,
      body: postData.body,
    };

    const res = await postUser(postData);

    if (res.status === 201) {
      setData([...data, newData]);
      setPostData({
        id: "",
        title: "",
        body: "",
      });
    }
  };

  //updatePostData
  const updatePostData = async () => {
    try {
      const res = await updatePost(updateDataApi.id, postData);
      console.log(res);

      if (res.status === 200) {
        //UI updata

        setData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === res.data.id ? res.data : curElem;
          });
        });

        setPostData({title:'', body: '',});
        setUpdateDataApi({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  //form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const action = e.nativeEvent.submitter.value;

    if (action === "Add") {
      addPost();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="Add Title"
            value={postData.title}
            onChange={handlePost}
          />
        </div>

        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            autoComplete="off"
            id="body"
            name="body"
            placeholder="Add Post"
            value={postData.body}
            onChange={handlePost}
          />
        </div>

        <button type="submit" value={isEmpty ? "Add" : "Edit"}>
          {isEmpty ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
};

/*
export const Form = () => {
    const [addData, setAddData] = useState({
    title: '',
    body: '',
    });
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setAddData((prev)=>{
           retur{
           ...prev, 
           [name]: value;
           }
            })
        
        }
  return (
    <>
      <form>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="Add Title"
            value = {addData.title}
            onChange = {handleInput}
          />
        </div>

        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            autoComplete="off"
            id="body"
            name="body"
            placeholder="Add Post"
            value = {addData.title}
            onChange = {handleInput}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </>
  );
};

*/
