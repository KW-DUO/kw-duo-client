const LoadingSpinner = ({ height = 'h-screen' }) => {
  return (
    <div className={`flex justify-center items-center ${height}`}>
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
