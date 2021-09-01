import css from './Footer.module.css'

const Footer = (props) => {
	const {readCount, unreadCount} = props
	return (
		<footer className={css.footer}>
			<div className={css.block}>New messages: {unreadCount}</div>
			<div className={css.block}>All messages: {readCount + unreadCount}</div>
		</footer>
	)
}

export default Footer