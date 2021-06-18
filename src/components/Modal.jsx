import {SModalRoot} from '../Styled/Modals/SModalRoot';
import {SModalWindow} from '../Styled/Modals/SModalWindow';
import {SCloseButton} from '../Styled/Modals/SCloseButton';

export function Modal({children, handleClose, renderLayout}) {
    renderLayout = renderLayout || ((children, handleClose) => (
        <SModalRoot>
          <SModalWindow>
            <SCloseButton onClick={handleClose}>x</SCloseButton>
            {children}
          </SModalWindow>
        </SModalRoot>
    ));
    return (
        renderLayout(children, handleClose)
    );
};