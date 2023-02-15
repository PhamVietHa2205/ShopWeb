import i18next from "i18next";
import { useTranslation } from "react-i18next"
import I18n from "../languages";

export function Home() {
	const { t } = useTranslation();

	return <div>
		<h2 className="align-center">{t('test')}</h2>
	</div>
}