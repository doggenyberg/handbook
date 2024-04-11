import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage";
import "./mainscreen.css";
import ChecklistorPage from "../Checklistor/ChecklistorPage";
import MallarPage from "../Mallar/MallarPage";
import EskaleraPage from "../Eskalera/EskaleraPage";
import Help from "../Help/Help";

const MainScreen = ({ date, setDate, data, name, setName }) => {
  return (
    <div className="main-screen">
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage data={data} name={name} setName={setName} />}
          />
          <Route path="/checklistor" element={<ChecklistorPage />} />
          <Route path="/mallar" element={<MallarPage name={name} date={date} />} />
          <Route path="/eskalera" element={<EskaleraPage />} />
          <Route path="/hjalp" element={<Help />} />
        </Routes>
      </main>
      <Footer date={date} setDate={setDate} />
    </div>
  );
};

export default MainScreen;
