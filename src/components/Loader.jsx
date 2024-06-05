const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center a absolute top-0 bottom-0 right-0 left-0 space-y-2">
      <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-blue-500"></div>
      <p className="text-lg font-medium text-gray-700">Loading...</p>
    </div>
  );
};

export default Loader;
