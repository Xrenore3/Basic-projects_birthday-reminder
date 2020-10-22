import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);
  const clearSelectedUser = (id) => {
    const newPeople = people.filter(person=>{
      if (person.id !== id){
        return person
      }
    })
     setPeople(newPeople)
  }
  return <main>
    <section className='container'>
      <h3>{people.length} birthday today</h3>
      <List people={people} clearSelectedUser={clearSelectedUser}/>
      <button onClick={()=>setPeople([])}>Clear All</button>

    </section>
  </main>;
}

export default App;
