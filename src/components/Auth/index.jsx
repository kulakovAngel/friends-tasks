import { Tabs } from '../Tabs';
import { normalizeObject } from '../../utills/normalize-object';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';

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
                <div>
                  <div style={{ border: '1px solid red' }}>
                    {nav}
                  </div>
                  <div style={{ border: '1px solid blue' }}>
                    {content}
                  </div>
                </div>
            )}
            navItemComponent={(props) => <li {...props} style={{ border: '1px solid' }} />}
            tabs={tabs}
        />
    )
}