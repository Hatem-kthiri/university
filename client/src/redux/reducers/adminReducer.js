import {
  GET_GROUP_LIST,
  GET_EVENT_LIST,
  GET_PROFESSOR_LIST,
  GET_STUDENTS_LIST,
  GET_SUBJECT_LIST,
} from "../constants/actions-types";

const initialState = {
  classList: undefined,
  subjectList: undefined,
  studentsList: undefined,
  professorList: undefined,
  eventList: undefined,
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GROUP_LIST:
      return {
        ...state,
        classList: payload,
      };
    case GET_SUBJECT_LIST:
      return {
        ...state,
        subjectList: payload,
      };
    case GET_EVENT_LIST:
      return {
        ...state,
        eventList: payload,
      };
    case GET_STUDENTS_LIST:
      return {
        ...state,
        studentsList: payload,
      };
    case GET_PROFESSOR_LIST:
      return {
        ...state,
        professorList: payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
