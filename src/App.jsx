import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Auth } from './components/Auth';
import { Modal } from './components/Modal';
import { GlobalStyle } from './Styled/global/globalStyles';
import { theme } from './Styled/global/theme';

// import { SModalRoot } from './Styled/Modals/SModalRoot';
// import { SModalWindow } from './Styled/Modals/SModalWindow';
// import { SCloseButton } from './Styled/Modals/SCloseButton';

export function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggleModal = () => setIsModalVisible(!isModalVisible)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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