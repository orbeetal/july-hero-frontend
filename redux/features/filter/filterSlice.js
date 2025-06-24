// redux/features/filter/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  occupations: [],     
  institutions: [],
  organizations: [], // Add more filters as needed    
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setOccupationFilter: (state, action) => {
      state.occupations = action.payload; // must be an array
    },
    setInstitutionFilter: (state, action) => {
      state.institutions = action.payload; // must be an array
    },
    setOrganizationFilter: (state, action) => {
      state.organizations = action.payload; // must be an array
    },
    clearAllFilters: (state) => {
      state.occupations = [];
      state.institutions = [];
      state.organizations = []; 
    },
  },
});

export const {
  setOccupationFilter,
  setInstitutionFilter,
  clearAllFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

