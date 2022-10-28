import React from "react";

function NavBar() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="https://www.safaricom.co.ke/images/Lipanampesa.png"
            alt="logo"
            height={100}
            width={300}
            //   className="w-full -mt-4 sm:-mt-4 lg:mt-0"
          />
        </div>
        {/* <div>
          <p className="text d-block d-lg-none">Docs</p>
        </div> */}
      </div>
    </div>
  );
}

export default NavBar;
