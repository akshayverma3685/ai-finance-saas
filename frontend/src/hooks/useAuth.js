import React from "react";
import AuthProvider from "./context/authProvider";
import Main from "./Main";

function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

export default App;
