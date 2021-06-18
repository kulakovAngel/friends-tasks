import { Tabs } from '../Tabs';
import { normalizeObject } from '../../utills/normalize-object';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

import { SWrapRow } from '../../Styled/flex-wrappers/SWrapRow';
import { STabsNavCol } from '../../Styled/Tabs/STabsNavCol';
import { SWrapCol } from '../../Styled/flex-wrappers/SWrapCol';
import { STabsNavRow } from '../../Styled/Tabs/STabsNavRow';
import { STabsContentArea } from '../../Styled/Tabs/STabsContentArea';
import { STabNavLi } from '../../Styled/Tabs/STabNavLi';

export function Auth() {

    const tabs = normalizeObject({
        login: {
          title: 'Login',
          content: <LogIn />,
        },
        signup: {
          title: 'Sign Up',
          content: <SignUp/>,
        },
      });

    return(
        <Tabs
            renderLayout={(nav, content) => (
              // вертикальные табы                 
              // <SWrapCol>
              //   <STabsNavRow>
              //     {nav}
              //   </STabsNavRow>
              //   <STabsContentArea>
              //     {content}
              //   </STabsContentArea>
              // </SWrapCol>
               // горизонтальные табы                 
              <SWrapRow>
                <STabsNavCol>
                  {nav}
                </STabsNavCol>
                <STabsContentArea>
                  {content}
                </STabsContentArea>
              </SWrapRow>
            )}
            navItemComponent={(props) => <STabNavLi {...props} />}
            tabs={tabs}
        />
    )
}