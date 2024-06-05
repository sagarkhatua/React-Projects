import React from "react";
<link rel="stylesheet" href="Loader.css" />;
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
    </div>
  );
};

export default Loader;
