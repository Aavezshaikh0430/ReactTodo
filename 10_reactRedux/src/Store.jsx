/* eslint-disable no-case-declarations */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'


const TASK_ADD = "task/add";
const TASK_DELETE = "task/delete";
const TASK_FETCH = 'task/fetch'

const initialState = {
  task: [],
  isLoading : false,
};
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case TASK_DELETE:
      const deleteTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: deleteTask,
      };

      case TASK_FETCH : 
      return{
        ...state,
        task : [...state.task, ...action.payload]
      }

    default:
      return state;
  }
  
};


// step 2: create the redux store using the reducer.
export const store = createStore(taskReducer , composeWithDevTools(applyMiddleware(thunk)))
console.log(store);

// step 5 : action creater


export const AddTask = (data) => {
  return {type:TASK_ADD , payload:data};
};

export const DeleteTask = (id) => {
  return{type: TASK_DELETE, payload : id };
}

// step 3: log the initial state .
//The getstate method is a synchronous function that returns the cuurent state of the Redux application. It includes the entire state of the application, including all the reducers and their respective states.

console.log('initial Value: ', store.getState());

// step 4 : Dispatch an action to add a task.

// store.dispatch({type: TASK_ADD, payload:'buy html course'});

store.dispatch(AddTask('buy redux playlist'));
console.log('Add Value: ',store.getState());

store.dispatch(AddTask('buy Apple'));
store.dispatch(AddTask('buy Banana'));
store.dispatch(AddTask('buy Mango'));
store.dispatch(AddTask('buy Graps'));


console.log('Add Value: ',store.getState());

// store.dispatch({type: TASK_DELETE, payload: 0});

store.dispatch(DeleteTask(0));

console.log('updated Value : ', store.getState());

//middleware

export const fetchTask = () => {
  return async (dispatch) => {
      try {
            const res = await fetch(
              'https://jsonplaceholder.typicode.com/todos?_limit=3'
            );
            const tasks = await res.json();

            dispatch({type : TASK_FETCH, payload:tasks.map((curElem)=>{return curElem.title})})

        
      } catch (error) {
        console.log(error);
        
      }
  }
}









