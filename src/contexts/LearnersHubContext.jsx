import { createContext, useContext, useState } from "react";

const LearnersHubContext = createContext(null);

export function useLearnersHub() {
  return useContext(LearnersHubContext);
}

export function LearnersHubProvider({ children }) {
  const [studentDoubts, setStudentDoubts] = useState([]);
  const value = {
    studentDoubts,
    setStudentDoubts,
  };
  return (
    <LearnersHubContext.Provider value={value}>
      {children}
    </LearnersHubContext.Provider>
  );
}
