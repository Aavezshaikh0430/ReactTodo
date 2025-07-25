import React, { useRef } from "react";


export const Counts = React.memo(() => {
  const renderRef = useRef(0);
  console.log(renderRef);

  return (
    <>
      <div className="mt-4 font-display text-center font-mono ">
        <p className="text-2xl mt-4 font-display text-center font-mono">
          Nothing changed here but I've now rendered:
          <span className="text-red-600">{renderRef.current++}time(s)</span>
        </p>
      </div>
    </>
  );
});

// export default ReactMemos;
// export default React.memo(ReactMemos);
