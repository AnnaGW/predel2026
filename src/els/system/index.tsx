import type { ReactElement } from 'react';
import s from './styles.module.css';

export type SystemProps = {
	imageSrc: string;
	name: string;
	link: string;
};

export const System = ({ imageSrc, name, link }: SystemProps): ReactElement => {
	return (
		<div className={s.system}>
			<img src={imageSrc} alt={name} />
			<a className={s.systemName} href={link}>
				{name}
			</a>
		</div>
	);
};
