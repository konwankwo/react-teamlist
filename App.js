import React, { useState } from 'react';
import data from './data';
import Team from './team-list';
function App() {
  const [member, setMember] = useState(data);
  return <main>
    <section className='container'>
      <h3>{member.length}-man team list</h3>
      <Team member={member}/>
      <button onClick={() => setMember([])}
      >clear all</button>
    </section>
  </main>
}

export default App