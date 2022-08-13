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
  <rect x="47" y="280" rx="5" ry="5" width="180" height="32" /> 
  <rect x="0" y="340" rx="5" ry="5" width="280" height="123" /> 
  <rect x="0" y="485" rx="5" ry="5" width="90" height="33" /> 
  <rect x="120" y="480" rx="21" ry="21" width="162" height="44" /> 
  <rect x="10" y="0" rx="5" ry="5" width="260" height="260" />   
  </ContentLoader>  )

export default Skeleton