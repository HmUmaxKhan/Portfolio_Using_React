import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSkill = createAsyncThunk("fetchSkill", async () => {
  let response = await fetch("http://localhost:5000/api/Skill/fetchSkill", {
    method: "GET",
  });
  let data = await response.json();
  return data;
});

const fetchSkillSlice = createSlice({
  name: "fetchSkill",
  initialState: {
    skills: [],
    loading: false,
    err: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkill.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSkill.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload;
      })
      .addCase(fetchSkill.rejected, (state, action) => {
        state.loading = false;
        state.err = action.error.message;
      });
  },
});

export default fetchSkillSlice.reducer;
