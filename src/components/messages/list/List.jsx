import css from './List.module.css'
import ListItem from '../list-item/ListItem'

const List = (props) => {
	const {messages, setMessagesList} = props
	return (
		<section className={css.list}>
			{messages.map(message => <ListItem key={message.id} message={message} messages={messages} setMessagesList={setMessagesList} />)}
		</section>
	)
}

export default List