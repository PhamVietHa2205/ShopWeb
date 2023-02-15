import { useTranslation } from "react-i18next"

export function Home() {
	const { t } = useTranslation();

	return <div>
		<h2 className="align-center">{t('test')}</h2>
	</div>
}