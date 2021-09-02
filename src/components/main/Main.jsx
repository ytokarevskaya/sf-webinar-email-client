import List from '../messages/list/List'
import css from './Main.module.css'

const Main = (props) => {
	const {messages, setMessagesList} = props
	return (
		<main className={css.main}>
			<List messages={messages} setMessagesList={setMessagesList} />
		</main>
	)
}

export default Main