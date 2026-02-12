import type { ReactElement } from 'react';
import s from './styles.module.css';

export type HeadlineProps = {
	text: string;
};

export const Headline = ({ text }: HeadlineProps): ReactElement => {
	return <h1 className={s.headline}>{text}</h1>;
};
