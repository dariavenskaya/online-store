import React from "react";

function NotFound() {
  
  return(
    <>
      <div className="not-found">
        <h2>Sorry, the page is not found...</h2>
        <img src="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs=" 
           alt="not found" width={250}/>
        <button className="button">Go back</button>
      </div>
    </>
  )
}

export default NotFound;