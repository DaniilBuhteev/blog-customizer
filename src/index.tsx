import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [nowArticleState, setNowArticleState] = useState(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': nowArticleState.fontFamilyOption.value,
					'--font-size': nowArticleState.fontSizeOption.value,
					'--font-color': nowArticleState.fontColor.value,
					'--container-width': nowArticleState.contentWidth.value,
					'--bg-color': nowArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm propertys={nowArticleState} setPropertys={setNowArticleState}/><Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
