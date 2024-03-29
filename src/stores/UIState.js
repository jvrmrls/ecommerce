import { hookstate, useHookstate } from "@hookstate/core";
// import { findKey, setKey } from "#/utils/localStorageHelper.js";
// import { THEMES, DEFAULT_THEME } from "#/config/constants.js";
// import { useEffect } from "react";
import toast from "react-hot-toast";

export const uiState = hookstate({
  loading: 0,
  title: "",
  ordAndMesTopBarSelection: null
});

export const startLoading = () => {
  uiState.loading.set(uiState.loading.value + 1);
};

export const stopLoading = () => {
  uiState.loading.set(
    uiState.loading.value > 0 ? uiState.loading.value - 1 : 0
  );
};

export const addToast = (text, type = "success") => {
  toast[type](text);
};

export const useUIState = () => {
  const state = useHookstate(uiState);

  return {
    isLoadingForeground: state.loading.value > 0,
    title: state.title.value,
    setTitle: (title) => {
      state.title.set(title);
    },
    ordAndMesTopBarSelection: state.ordAndMesTopBarSelection.value,
    setOrdAndMesTopBarSelection: (selection) => {
      state.ordAndMesTopBarSelection.set(selection);
    }
  };
};
