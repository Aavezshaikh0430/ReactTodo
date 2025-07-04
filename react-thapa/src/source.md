

// console.log( React.createElement('h1',null, 'Hello, thapa Technical. ' ));

//void element means single element jaise img,
//aise element jis ka closing tag nhi hota self closing karna hoga.


React does not render 'false' , 'null' , 'undefined', or 'NaN' in the DOM. when used in JSX, will result in nothing being displayed.

However, '0'  and empty strings ('') are exceptions:

**'0'** is rendered in the DOM because it is considered a valid REact node. THis means that if '0' is result of an expression, it will appear in your UI.

**Empty strings** ("") are also considered valid outputs and are rendered as well.

// const Wrapper =({massage})=>{
//     const StyledWrapper = styled.div`
//   /*...*/
//   `
//   return <StyledWrapper>{massage}</StyledWrapper>
//   }



 /* const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "100rem",
  };

  const StyleButton = styled.button({
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "100rem",
  }); 
*/