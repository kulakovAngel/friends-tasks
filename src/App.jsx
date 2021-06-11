import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Auth } from './components/Auth';
import { Modal } from './components/Modal';

const theme = {
  primaryColor: '#333',
  bgColor: '#eee',
};

export function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggleModal = () => setIsModalVisible(!isModalVisible)
  return (
    <ThemeProvider theme={theme}>
      <button onClick={handleToggleModal}>
        Open Modal
      </button>
      {
        isModalVisible && (
          <Modal
            handleClose={handleToggleModal}
          >
            <Auth />
          </Modal>
        )
      }
    </ThemeProvider>
  );
};