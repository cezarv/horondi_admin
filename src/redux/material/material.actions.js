import {
  GET_MATERIAL,
  DELETE_MATERIAL,
  UPDATE_MATERIAL,
  GET_MATERIALS,
  SET_MATERIAL,
  SET_MATERIALS,
  SET_MATERIALS_CURRENT_PAGE,
  SET_MATERIAL_ERROR,
  SET_MATERIAL_LOADING,
  SET_MATERIALS_PAGES_COUNT,
  SET_MATERIALS_PER_PAGE,
  ADD_MATERIAL,
  REMOVE_MATERIAL_FROM_STORE,
  COLOR_DIALOG_DATA_TO_STORE,
  SHOW_COLOR_DIALOG_WINDOW,
  CLEAR_COLORS,
  SET_MATERIALS_COLORS,
  GET_MATERIALS_COLORS,
  GET_MATERIALS_COLOR,
  SET_MATERIALS_COLOR,
  ADD_MATERIAL_COLOR,
  SET_EDIT_MATERIAL_ID,
  DELETE_MATERIAL_COLOR,
  REMOVE_MATERIAL_COLOR_FROM_STORE
} from './material.types';

export const getMaterials = (payload) => ({
  type: GET_MATERIALS,
  payload
});

export const setMaterials = (payload) => ({
  type: SET_MATERIALS,
  payload
});

export const setMaterialsCurrentPage = (payload) => ({
  type: SET_MATERIALS_CURRENT_PAGE,
  payload
});

export const setMaterialsPerPage = (payload) => ({
  type: SET_MATERIALS_PER_PAGE,
  payload
});

export const setMaterialsPagesCount = (payload) => ({
  type: SET_MATERIALS_PAGES_COUNT,
  payload
});

export const getMaterial = (payload) => ({
  type: GET_MATERIAL,
  payload
});

export const setMaterial = (payload) => ({
  type: SET_MATERIAL,
  payload
});

export const deleteMaterial = (payload) => ({
  type: DELETE_MATERIAL,
  payload
});

export const addMaterial = (payload) => ({
  type: ADD_MATERIAL,
  payload
});

export const addMaterialColor = (payload) => ({
  type: ADD_MATERIAL_COLOR,
  payload
});

export const setMaterialLoading = (payload) => ({
  type: SET_MATERIAL_LOADING,
  payload
});

export const updateMaterial = (payload) => ({
  type: UPDATE_MATERIAL,
  payload
});

export const setMaterialError = (payload) => ({
  type: SET_MATERIAL_ERROR,
  payload
});

export const removeMaterialFromStore = (payload) => ({
  type: REMOVE_MATERIAL_FROM_STORE,
  payload
});

export const setNewColorToStore = (payload) => ({
  type: COLOR_DIALOG_DATA_TO_STORE,
  payload
});

export const showColorDialogWindow = (payload) => ({
  type: SHOW_COLOR_DIALOG_WINDOW,
  payload
});
export const clearColors = () => ({
  type: CLEAR_COLORS
});
export const getMaterialColors = (payload) => ({
  type: GET_MATERIALS_COLORS,
  payload
});
export const setMaterialColors = (payload) => ({
  type: SET_MATERIALS_COLORS,
  payload
});
export const getMaterialColor = (payload) => ({
  type: GET_MATERIALS_COLOR,
  payload
});
export const setMaterialColor = (payload) => ({
  type: SET_MATERIALS_COLOR,
  payload
});
export const setEditMaterialId = (payload) => ({
  type: SET_EDIT_MATERIAL_ID,
  payload
});

export const removeMaterialColor = (payload) => ({
  type: DELETE_MATERIAL_COLOR,
  payload
});
export const removeMaterialColorFromStore = (payload) => ({
  type: REMOVE_MATERIAL_COLOR_FROM_STORE,
  payload
});
