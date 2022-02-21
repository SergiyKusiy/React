import React, { useEffect, useState } from "react";

const Dimensions = () => {
   const [dimensions, setDimensions] = useState({
      with: null,
      height: null,
   });

   useEffect(() => {
      const { innerWidth, innerHeight } = window;
      setDimensions({ width: innerWidth, height: innerHeight })

      handleresize = e => {
         const { innerWidth, innerHeight } = e.target;
         setDimensions({ width: innerWidth, height: innerHeight });
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      }
   }, [])

   const { width, height } = dimensions;
   return <div className="dimensions">{`${width}px - ${height}px`}</div>;
}

export default Dimensions;