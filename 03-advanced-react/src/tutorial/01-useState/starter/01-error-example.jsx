const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  };

  return (
    <div>
      <h2>useState error example</h2>
      <button type="button" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
