const Wrapper = ({children}) => {
  return (
    <main className="main">
      <div className="container">
        {children}
      </div>
    </main>
  );
};

export default Wrapper;
