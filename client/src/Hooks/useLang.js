import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../store/slices/lang";

const LangContext = createContext();

export function LangProvider({ children }) {
	const dispatch = useDispatch();
	const lang = useSelector(state => state.lang.defValue);

	const setLanguage = item => {
		if (item) {
			dispatch(setLang(item));
		}
	};

	return (
		<LangContext.Provider value={{ lang, setLanguage }}>
			{children}
		</LangContext.Provider>
	);
}

export function useLang() {
	return useContext(LangContext);
}
