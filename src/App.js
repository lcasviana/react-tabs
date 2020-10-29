import React, { useState } from 'react';
import Content from './Content';
import Tabs from './Tabs';

const App = () => {
  const [currentTab, changeCurrentTab] = useState(0);

  return (
    <>
      <main className="pa3">
        <header style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)' }}>
          <Tabs currentTab={currentTab} changeCurrentTab={changeCurrentTab} />
        </header>
        {['Content 1', 'Content 2', 'Content 3']
          .map((content, index) =>
            <Content key={index} content={content} />)
          .filter((_, index) => index === currentTab)}
      </main>
    </>
  )
};

export default App;