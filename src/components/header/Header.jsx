import logo from './logo.svg'
import userImage from './user-image.svg'
import css from './Header.module.css'

const Header = (props) => {
	const {user, unreadCount} = props
	return (
		<header className={css.header}>
			<div className={css.logo}>
				<img src={logo} alt="Logo" />
				<h1>Awesome Mail</h1>
			</div>
			<div className={css.user}>
				<div className={css.userImage} style={{backgroundImage: `url(${userImage})`}}>
					{unreadCount > 0 && <span className={css.count}>{unreadCount}</span>}
				</div>
				<div className={css.userName}>{user.name}</div>
			</div>
		</header>
	)
}

export default Header