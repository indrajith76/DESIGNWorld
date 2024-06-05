import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useUserRole = (email) => {
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/roleOfUser/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsUser(data?.role);
        setIsUserLoading(false);
      });
  }, [email]);

  return [isUser, isUserLoading];
};

export default useUserRole;
