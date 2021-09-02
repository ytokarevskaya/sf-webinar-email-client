import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import data from './mock-data.json'
import {MESSAGE_STATUS} from './const'
import {useState} from 'react'

function App() {
  const {users, activeUserId, messages} = data
  const activeUser = users.find(user => user.id === activeUserId)

  const [messagesList, setMessagesList] = useState(messages)
  const unreadMessages = messagesList.filter(message => message.status === MESSAGE_STATUS.UNREAD)
  const readMessages = messagesList.filter(message => message.status === MESSAGE_STATUS.READ)

  return (
    <div className="layout">
      <Header user={activeUser} unreadCount={unreadMessages.length} />
      {/* Ошибка была из-за моей невнимательности :D Я передавала в Main массив messages, который не привязан к state.  */}
      <Main messages={messagesList} setMessagesList={setMessagesList} />
      <Footer readCount={readMessages.length} unreadCount={unreadMessages.length} />
    </div>
  );
}

export default App;
