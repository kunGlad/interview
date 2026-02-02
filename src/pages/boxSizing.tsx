const boxSizing = () => {
  return (
    <div
      className="box"
      style={{
        // boxSizing: "border-box",
        width: 100,
        height: 100,
        padding: 10,
        border: "5px solid black",
        margin: 20,
        background: "red",
      }}
    ></div>
  );
};

export default boxSizing;
