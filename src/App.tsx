
import { useState } from "react";
import Modal from "react-modal"
import { ButtonCreate } from "./components/Button";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewUserModal } from "./components/NewUserModal";
import { GlobalStyle } from "./styles/global";
import { UsersProvider } from "./hooks/useUsers"
Modal.setAppElement('#root');

function App() {
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);

  function handleOpenNewUserModal() {
    setIsNewUserModalOpen(true);
  }

  function handleCloseNewUserModal() {
    setIsNewUserModalOpen(false)
  }
  return (
    <UsersProvider>
    <Header />
    <ButtonCreate onOpenNewUserModal={handleOpenNewUserModal}/> 
    <Dashboard />
    <NewUserModal 
    isOpen={isNewUserModalOpen}
    onRequestClose={handleCloseNewUserModal}
    />
    <GlobalStyle />
    </UsersProvider>
  );
}

export default App;
