"use client";

import CardPopularProducts from "./CardPopularProducts";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <div className="row-span-3 xl:row-span-6 bg-blue-500"></div>
      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-violet-500"></div>
      <div className="row-span-3 bg-red-500"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-green-500"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-yellow-500"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-violet-500"></div>
    </div>
  );
};

export default Dashboard;
