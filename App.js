import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import AdminDashboard from "./Pages/AdminDashboard";
import ComplaintList from "./Pages/ComplaintList";
import ComplaintReview from "./Pages/ComplaintReview";
import ForwardToDept from "./Pages/ForwardToDept";
import ComplaintStatus from "./Pages/ComplaintStatus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/complaint-list" element={<ComplaintList />} />
        <Route path="/complaint-review" element={<ComplaintReview />} />
        <Route path="/forward-dept" element={<ForwardToDept />} />
        <Route path="/complaint-status" element={<ComplaintStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
