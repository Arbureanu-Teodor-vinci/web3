import { ProviderWrapper as LanguageProviderWrapper } from "../../contexts/LanguageContext";
import App from "components/App/App.jsx";

const AppLoader = () => {
  return (
    <LanguageProviderWrapper >
        <App />
 
      </LanguageProviderWrapper >
  )
}

export default AppLoader;