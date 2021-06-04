import { Tabs } from './components/Tabs';

const normilizeObject = (obj) => ({
  entries: obj,
  keys: Object.keys(obj),
})

export function App() {

  const tabs = normilizeObject({
    login: {
      title: 'Login',
      content: <div>Please, Login</div>,
    },
    signin: {
      title: 'Sign In',
      content: <div>Please, Sign Up!</div>,
    },
  });

  return (
    <div>
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
    </div>
  );
};
