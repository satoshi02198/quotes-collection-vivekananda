"use client";

import Log from "./Log";
import Test from "./Test";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-3 bg-gradient-to-t from-orange-400 to-orange-300">
      <div>
        <div className="font-bold text-2xl">Quotes Collection</div>
      </div>
      {/* <Test /> */}
      <Log />
    </div>
  );
};

export default Header;
