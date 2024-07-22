const NoData = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center py-10">
      <svg
        className="mb-4 h-24 w-24 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 14l6-6m0 0l-6 6m6-6v6m0-6H9"
        />
      </svg>
      <h1 className="text-xl font-semibold text-gray-600">No Data Available</h1>
      {/* <p className="text-gray-500">Please check back later.</p> */}
    </div>
  );
};

export default NoData;
