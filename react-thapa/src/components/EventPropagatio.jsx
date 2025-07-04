import "./Ev.css";
export const EventPropagation = () => {

  const handleGrantParentClick = () => {
    console.log("GrantParent div Clicked");
  };
  const handleParentClick = () => {
    console.log("Parent div Clicked");
  };

  const handleChildClick = (e) => {
    // console.log(e);
    e.stopPropagation
    console.log("Child div Click");

    // console.log(e.stopPropagation());
  };
  return (
    <>
      <section className="main-div">
        <div className="g-div" onClickCapture={handleGrantParentClick}>
          <div className="p-div" onClickCapture={handleParentClick}>
            <button onClickCapture={handleChildClick}>Child Div</button>
          </div>
        </div>
      </section>
    </>
  );
};
