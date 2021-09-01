import List from '../messages/list/List'
import css from './Main.module.css'

const Main = (props) => {
	return (
		<main className={css.main}>
			<List messages={props.messages} />
		</main>
	)
}

export default Main