import { useState } from 'react'

export function Tabs({tabs, renderLayout, navItemComponent}) {
    const [activeKey, setActiveKey] = useState(tabs.keys[0]);

    return (
        renderLayout(
            tabs.keys.map(key => (
                <NavItem
                    onClick={setActiveKey}
                    key={key}
                    id={key}
                    navItemComponent={navItemComponent}
                >
                    {tabs.entries[key].title}
                </NavItem>
            )),
            tabs.entries[activeKey].content,
        )
    )
};

function NavItem({children, onClick, id, navItemComponent: NavItem}) {
    const handleClick = () => {
        onClick(id);
    }
    return (
        <NavItem
            onClick={handleClick}
        >
            {children}
        </NavItem>
    )
}