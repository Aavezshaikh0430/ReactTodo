import { useId } from "react";

export const UsePassword = (props) => {
  const Id = useId();
  return (
    <>
      <label htmlFor={Id}>{props.labels}</label>
      <input
        type="password"
        name="password"
        ref={props.ref}
        id={Id}
        autoComplete="current-password"
      />
    </>
  );
};
