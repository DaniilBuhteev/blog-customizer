import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type ArrowButtonType = {
	onClick: () => void;
	isActive: boolean;
}
export const ArrowButton = ({ onClick, isActive }: ArrowButtonType) => {
	const [openClose, setOpenClose] = useState(false);
	const handleClick = () => {
		setOpenClose(!openClose);
		onClick();
	};
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			onClick = {handleClick}
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {[styles.container_open]: isActive})}>
			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, {[styles.arrow_open]: isActive})} />
		</div>
	);
};
