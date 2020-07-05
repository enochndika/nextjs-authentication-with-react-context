export const canAccessDashboard = (userData) => {
  if (userData && userData.role !== "Admin") {
    return userData;
  } else {
    return null;
  }
};
