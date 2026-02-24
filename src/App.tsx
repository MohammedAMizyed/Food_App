import { useEffect } from "react"
import { useTranslation } from "react-i18next"
function App() {
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage("ar")
  }, [])
  return <div>{t("welcome")}</div>
}

export default App
