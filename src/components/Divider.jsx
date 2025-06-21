// components/Divider.jsx
const Divider = ({ text = "" }) => {
  return (
    <div className="flex items-center my-8 bg-black">
      <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      {text && (
        <span className="mx-4 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
          {text}
        </span>
      )}
      <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
    </div>
  );
};

export default Divider;
