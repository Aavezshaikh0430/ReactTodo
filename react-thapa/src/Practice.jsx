 const Practice = () =>{
    // console.log('practice set');
 
    const students = [1,2 ,3];

    console.log(!Boolean(students.length));
    console.log(students.length);
    // console.log(students.length===0);
    
    
    
    
    
    return(
        <div>
        {/* <h1>{students.length && 'Students Not found...'}</h1> */}

        {/* 1st solution */}
        {/* <h1>{students.length===0 && 'Students Not found...'}</h1> */}

        {/* 2nd solution */}
        {/* <h1>{students.length && 'Students Not found...'}</h1> */}

        {/* 3rd  */}
        <h1>{!Boolean(students.length) && 'Students Not found...'}</h1>

        <h1>Number of Students is : {students.length}</h1>
        </div>
    )
    
}
export default Practice;