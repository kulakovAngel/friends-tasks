import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Auth } from './components/Auth';
import { Modal } from './components/Modal';

import { SModalRoot } from './Styled/Modals/SModalRoot';
import { SModalWindow } from './Styled/Modals/SModalWindow';
import { SCloseButton } from './Styled/Modals/SCloseButton';

const theme = {
  primaryColor: '#333',
  bgColor: '#fefefe',
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
            renderLayout={(children, handleClose) => (
              <SModalRoot>
                <SModalWindow>
                  <SCloseButton onClick={handleClose}>x</SCloseButton>
                  {children}
                </SModalWindow>
              </SModalRoot>
            )}
            handleClose={handleToggleModal}
          >
            <Auth />
          </Modal>
        )
      }
    </ThemeProvider>
  );
};