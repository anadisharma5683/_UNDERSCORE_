import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  useEffect(() => {
    if (!role) navigate("/"); // Redirect to login if not logged in
  }, [role, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  const allCards = [
    {
      title: "Complaint Review",
      description: "AI-powered review of complaints.",
      route: "/complaint-review",
      roles: ["admin", "employee"],
    },
    {
      title: "Complaint List",
      description: "View all submitted complaints.",
      route: "/complaint-list",
      roles: ["admin", "citizen"],
    },
    {
      title: "Forward to Department",
      description: "Send complaints to relevant department.",
      route: "/forward-dept",
      roles: ["admin", "employee"],
    },
    {
      title: "Complaint Status",
      description: "Track progress of forwarded complaints.",
      route: "/complaint-status",
      roles: ["admin", "citizen"],
    },
  ];

  const visibleCards = allCards.filter((card) => card.roles.includes(role));

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {role?.toUpperCase()}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md cursor-pointer transition-all duration-300"
            onClick={() => navigate(card.route)}
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
