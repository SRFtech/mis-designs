import  { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PlayerList from './components/PlayersList'
import PlayerCreate from './components/PlayerCreate'
import PlayerEdit from './components/PlayerEdit'

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='players' list={PlayerList} create={PlayerCreate} edit={PlayerEdit} />
  </Admin>
}

export default App;
