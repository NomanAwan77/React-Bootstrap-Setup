import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App d-flex flex-column min-vh-100">
          <Header />
          <div className="content-wrapper">
            <Sidebar />
            <main className="main-content">
              <Container fluid>
                <AppRoutes />
              </Container>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
