const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-2">
      <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-blue-500"></div>
      <p className="text-lg font-medium text-gray-700">Loading...</p>
    </div>
    );
};

export default Loader;