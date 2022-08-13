import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
  speed={2}
  width={280}
  height={540}
  viewBox="0 0 280 540"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  {...props}
>
  <circle cx="586" cy="608" r="20" /> 
  <rect x="17" y="268" rx="5" ry="5" width="209" height="32" /> 
  <rect x="2" y="322" rx="5" ry="5" width="250" height="123" /> 
  <rect x="2" y="465" rx="5" ry="5" width="74" height="27" /> 
  <rect x="88" y="456" rx="21" ry="21" width="162" height="44" /> 
  <rect x="0" y="0" rx="5" ry="5" width="240" height="240" />   
  </ContentLoader>  )

export default Skeleton