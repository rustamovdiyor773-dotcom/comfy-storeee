import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <header className="bg-info-content  ">
      <div className="container-element flex py-3 gap-4 justify-end">
        <Link to="/login" className="text-neutral-content hover:underline">    Sign in / Guest  </Link>      
      <Link className="text-neutral-content hover:underline">  Create Account  </Link>
      </div>
    
    </header>
    
  )
}

export default Header



// import { Link } from "react-router-dom";
// import React from "react";
// function Header() {
//   return (
//     <div className="btn-neutral py-2 text-neutral-content bg-[#0b2b5f]">
//       <div className="align-elements justify-center flex ml-225">
//         <div className="flex gap-x-6 justify-center items-center">
//           <Link to="/login" className="link link-hover text-xs sm:text-sm text-[white]">
//             Sign in / Guest
//           </Link>
//           <Link to="/register" className="link link-hover text-xs sm:text-sm  text-[white]">
//             Create Account
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;