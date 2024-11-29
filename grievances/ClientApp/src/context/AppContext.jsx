import { Toast } from 'primereact/toast';
import React, { createContext, useRef, useState } from 'react';

// Define the structure for issue details
const initialIssueDetail = {
  id: 0,
  title: "",
  complainant: "",
  description: "",
  resolved: false,
  resolution: "",
  stamp:""
};

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const toastTopRight = useRef(null);
  const [issueDetail, setIssueDetail] = useState(initialIssueDetail);

  const updateIssueDetail = (partialIssueDetail) => {
    console.log("updating issue detail")
    setIssueDetail(() => (partialIssueDetail));
  };

    // toast message
  const showToast = (e,ref, severity, title, description) => {
    console.log("inside toast")
    ref.current?.show({ severity, summary: title, detail: description, life: 2000 });
  };

  return (
    <AppContext.Provider value={{ issueDetail, updateIssueDetail,showToast,toastTopRight }}>
      {children}
      <Toast ref={toastTopRight} position='top-right' className='p-toast-item' />
    </AppContext.Provider>
  );
};
