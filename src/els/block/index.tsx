import type { ReactElement, ReactNode } from 'react';
import s from './styles.module.css';

export type BlockProps = {
	children: ReactNode;
};

export const Block = ({ children }: BlockProps): ReactElement => {
	return <div className={s.block}>{children}</div>;
};
