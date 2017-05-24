import { Course } from '../courses/course';
import { FILTER_COURSES, REQUEST_COURSES_SUCCESS } from '../courses/course.actions';
import { IAppState} from './IAppState';

const courses = [];

const initialState: IAppState = {
    courses,
    filteredCourses: courses
};

function filterCourse(state, action) : IAppState {
  return Object.assign({}, state, {    
    filteredCourses: state.courses.filter(c => {
      return c.name.toUpperCase().indexOf(action.searchText.toUpperCase()) > -1}),
  })
}

function storeCourses(state, action) : IAppState {
  return Object.assign({}, state, {
    courses: action.courses,
    filteredCourses: action.courses,
  });
}

export function reducer(state = initialState, action){
    switch (action.type) {
      case FILTER_COURSES:
        return filterCourse(state, action);
      case REQUEST_COURSES_SUCCESS:
        return storeCourses(state, action);        
      default:
        return state;
    }
}