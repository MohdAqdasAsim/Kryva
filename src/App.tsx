import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<div>Home Page</div>} />
    </Routes>
  );
};

export default App;
