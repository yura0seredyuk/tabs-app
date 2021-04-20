import './App.css';
import { useEffect, useState } from 'react';
import { tabsList } from './tabsList';

function App() {
  const [tabs, setTabs] = useState([]);
  const [currentTabId, setCurrentTabId] = useState(2);
  const [currentTabTitle, setCurrentTabTitle] = useState('');

  useEffect(() => {
    setTabs(tabsList);
  }, []);

  const choseTabId = (id) => {
    setCurrentTabId(tabs.find(tab => tab.id === id).id);
    setCurrentTabTitle(tabs.find(tab => tab.id === id).title);
  };

  return (
    <div className="container">
      <div className='tab'>
        <nav className='tab__container tab__container--start-shadow tab__container--end-shadow'>
          <ul className="tab__list">
            {tabs.map(tab => (
              <li
                type='button'
                className={
                  currentTabId === tab.id
                    ? "tab__item__active tab__item"
                    : "tab__item"
                }
                key={tab.id}
                onClick={() => choseTabId(tab.id)}
              >
                <a className='tab__link'>{tab.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='tab__text'>
          {currentTabTitle}
        </div>
      </div>
    </div>
  );
}

export default App;
