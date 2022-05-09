import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from "pages/Homepage";
import UsersPage from "pages/UserPages/UsersPage";
import UserPage from "pages/UserPages/UserPage";
import NotFoundPage from "pages/NotFoundPage";
import Layout from "components/Layout";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Homepage/>}/>
                  <Route path="/users" element={<UsersPage/>}/>
                  <Route path="/users/:userId" element={<UserPage/>}/>
                  <Route path="/*" element={<NotFoundPage/>}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;
