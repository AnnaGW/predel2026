import { Outlet } from 'react-router-dom';
import { Block } from '~/els/block';
import s from './styles.module.css';

function TemplatePage() {
	return (
		<div className={s.templateWrap}>
			<div className="container">
				<Block>
					<Outlet />
				</Block>
			</div>
		</div>
	);
}

export const element = <TemplatePage />;
