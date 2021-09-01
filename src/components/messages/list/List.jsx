import css from './List.module.css'
import classnames from 'classnames'
import {formatDate} from '../../../utils'
import {MESSAGE_STATUS} from '../../../const'

const List = (props) => {
	const {messages} = props
	return (
		<section className={css.list}>
			{messages.map(message => {
				const isNew = message.status === MESSAGE_STATUS.UNREAD
				return (
					<div key={message.id} className={classnames(css.row, { [css.isNew]: isNew })}>
						<div className={classnames(css.col, css.colNew)}>
							<span className={css.new}>New</span>
						</div>
						<div className={classnames(css.col, css.colEmail)}>{message.sender}</div>
						<div className={classnames(css.col, css.colTitle)}>{message.title}</div>
						<div className={classnames(css.col, css.colDate)}>{formatDate(message.received)}</div>
					</div>
				)
			})}
		</section>
	)
}

export default List