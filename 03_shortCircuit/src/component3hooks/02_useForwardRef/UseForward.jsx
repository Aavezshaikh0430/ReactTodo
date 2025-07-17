// import { forwardRef } from "react";

import { useId } from "react";

// export const UseForward = forwardRef((props, ref) => {
//   return (
//     <div>
//       <label htmlFor="">{props.labels}</label>
//       <input
//         type={props.labels === "username" ? "text" : "password"}
//         name="username"
//         id="username"
//         ref={ref}
//       />
//     </div>
//   );
// });

export const UseForward = (props) => {
    const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.labels}</label>
      <input
        type='text'
        name="username"
        id="username"
        ref={props.ref}
        autoComplete="current-text"
      />
    </div>
  );
};
