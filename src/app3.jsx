import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './DEALSDRAY/login';

import Dashboard from './DEALSDRAY/dashboard';
import CreateEmployee from './DEALSDRAY/signup';
import EmployeeList from './DEALSDRAY/employeeList';
import EmployeeEdit from './DEALSDRAY/update';

function App3() {
    return (
      <EmployeeEdit />
      // <CreateEmployee />
      //   <BrowserRouter>
      //       <Routes>
      //           <Route path="/" exact component={LoginPage} />
      //           <Route path="/dashboard" component={Dashboard} />
      //           <Route path="/create-employee" component={CreateEmployee} />
      //           <Route path="/employee-list" component={EmployeeList} />
      //           <Route path="/edit-employee/:id" component={EmployeeEdit} />
      //       </Routes>
      //   </BrowserRouter>
    );
}

export default App3;
