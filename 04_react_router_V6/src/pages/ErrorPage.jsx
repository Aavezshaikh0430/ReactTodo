import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    
    // if (error && error.status === 404){
    //     return(
    //         <>
    //         <section className="error-section">
    //             <div className="error-text">
    //                 <figure>
    //                     <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" width='400' alt="404 page" />
    //                 </figure>
    //                 <div className="text-center">
    //                     <p className="p-a">
    //                         . The page you were looking for could not be found
    //                     </p>
    //                     <p className="p-b"> ... Back to previous page</p>
    //                 </div>
    //             </div>
    //                 <NavLink to='/' className='btn'>Go Back to The home page</NavLink>
    //         </section>
    //     </>
    // )
    // }
    const handleGoBack = () => {
        navigate(-1)
    }
    console.log(error);

          return(
            <>
            <section className="error-section">
                <div className="error-text">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" width='400' alt="404 page" />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            . The page you were looking for could not be found
                        </p>
                        <p className="p-b"> ... Back to previous page</p>
                    </div>
                </div>
                    {/* <NavLink to='/' className='btn'>Go Back to The home page</NavLink> */}
                    <button className="btn" onClick={handleGoBack}>Go Back To The HomePage</button>
            </section>
        </>
    )

    
    
    
}