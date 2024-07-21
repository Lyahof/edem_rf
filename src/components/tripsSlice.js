import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import timeout from "../helpers/timeout";

const BASE_URL = 'http://localhost:9000/trips';
const TIMEOUT_SEC = 5000;



export const fetchInitialTrips = createAsyncThunk(
	'trips/fetchInitialTrips',
	async function(_, { rejectWithValue }) {
	  try {
		 const response = await Promise.race([fetch(`${BASE_URL}?_start=0&_limit=30`), timeout(TIMEOUT_SEC)]) ;
		 if (!response.ok) {	
			return rejectWithValue(`Возникли проблемы при загрузке страницы. Попробуйте ещё раз. Статус: ${response.status}`);
		 }
		 const data = await response.json();
		 return data;
	  } catch (err) {
		 return rejectWithValue(`Произошла ошибка при загрузке данных о поездках: ${err.message}`);
	  }
	}
 );

export const fetchMoreTrips = createAsyncThunk(
	'trips/fetchTrips',
	async function(offset, { rejectWithValue }) {
		try {
			const response = await Promise.race([fetch(`${BASE_URL}?_start=${offset}&_limit=10`), timeout(TIMEOUT_SEC)])
			if(!response.ok) {
				return rejectWithValue(`Возникли проблемы при загрузке страницы. Попробуйте ещё раз. Статус: ${response.status}`);
			} 
			const data = await response.json()
			return data
		} catch(err) {
			return rejectWithValue(`Произошла ошибка при загрузке данных о поездках: ${err.message}`);
		}
	}
)

const initialState = {
	items: [],
	status: 'idle',
	hasMore: true,
	offset: 0,
	totalCount: 0,
	error: null
}

const tripsSlice = createSlice({
	name: 'trips',
	initialState,
	reducers: {
		incrementOffset(state) {
			state.offset += 10
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInitialTrips.pending, (state) => {
				state.status = 'loading';
		 	})
		 	.addCase(fetchInitialTrips.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = action.payload
				state.totalCount = state.items.length;
				state.offset = state.items.length;
				state.error = null;
		 	})
		 	.addCase(fetchInitialTrips.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
		 	})
			.addCase(fetchMoreTrips.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchMoreTrips.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.items = [...state.items, ...action.payload]
				state.totalCount = state.items.length
				state.error = null;

				if(state.totalCount >= 103) {
					state.hasMore = false
					alert('Поездок больше не найдено')
				}
			})
			.addCase(fetchMoreTrips.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.payload;
			})
	}
})

export const { incrementOffset } = tripsSlice.actions;
export default tripsSlice.reducer;