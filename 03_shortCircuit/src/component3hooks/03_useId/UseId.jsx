import { useId } from "react";

export const UseId = () => {
  //     const usernameId = useId();
  //     const emailId = useId();
  //     const passwordId = useId();
  //     return (
  //         <form>
  //             <div>
  //                 <label htmlFor={usernameId}>Username : </label>
  //                 <input type="text" name="name" id={usernameId} autoComplete = "false"/>
  //             </div>

  //             <div>
  //                 <label htmlFor={emailId}>Email : </label>
  //                 <input type="email" name="email" id={emailId} autoComplete="false"/>
  //             </div>

  //              <div>
  //                 <label htmlFor={passwordId}>Password : </label>
  //                 <input type="password" name="password" id={passwordId} autoComplete="false"/>
  //             </div>

  //             <button type="submit">Submit</button>
  //         </form>
  //     )
  // }

  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={id + "usernameId"}>Username : </label>
        <input
          type="text"
          name="name"
          id={id + "usernameId"}
          autoComplete="false"
        />
      </div>

      <div>
        <label htmlFor={id + "emailId"}>Email : </label>
        <input
          type="email"
          name="email"
          id={id + "emailId"}
          autoComplete="false"
        />
      </div>

      <div>
        <label htmlFor={id + "passwordId"}>Password : </label>
        <input
          type="password"
          name="password"
          id={id + "passwordId"}
          autoComplete="false"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
