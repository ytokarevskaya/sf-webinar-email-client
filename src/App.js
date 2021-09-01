import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import data from './mock-data.json'
import {MESSAGE_STATUS} from './const'

function App() {
  const {users, activeUserId, messages} = data
  const activeUser = users.find(user => user.id === activeUserId)
  const unreadMessages = messages.filter(message => message.status === MESSAGE_STATUS.UNREAD)
  const readMessages = messages.filter(message => message.status === MESSAGE_STATUS.READ)

  return (
    <div className="layout">
      <Header user={activeUser} unreadCount={unreadMessages.length} />
      <Main messages={messages} />
      <Footer readCount={readMessages.length} unreadCount={unreadMessages.length} />
    </div>
  );
}

export default App;
