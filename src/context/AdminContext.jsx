import React, { useContext, useState, useEffect } from "react"


const AdminContext = React.createContext();


export function useAdmin() {
  return useContext(AdminContext)
}

export function AdminProvider({ children }) {

  const [currentadmin, setCurrentadmin] = useState();
  const [loading, setLoading] = useState(false);



  const value = {
    currentadmin,
    setCurrentadmin,

  }

  return (
    <AdminContext.Provider value={value}>
      {!loading && children}
    </AdminContext.Provider>
  )
}
