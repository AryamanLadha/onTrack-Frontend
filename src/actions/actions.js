import axios from "axios";

// When you make an API call, or anything asynchronous, the action creator returns a function.
export const getCourses = () => {
    //Return a function that takes in a dispatch object, which dispatches an action to the reducer.
    return (
        (dispatch) => {
            //make asynchronous call to database
            //dispatch the action after you have the result.
            axios.get("http://localhost:8000/api/courses", { crossdomain: true })
            .then(res => {
                // arrayOfCourses has duplicates
                // coursesData has no duplicates
                const arrayOfCourses = res.data[0].courses;
                const courseData = [];
                arrayOfCourses.map(x => courseData.filter(a => a["Short name"] === x["Short name"]).length > 0 ? null : courseData.push(x));
                
                dispatch({ type: "GET_COURSES_SUCCESS", payload: {courses: courseData}})
            }).catch(error => {console.log(error)})
        }
    );
}

// Regular action creator returns an object, i.e an action
export const changeMajor = (newMajor) => {
    return {
        type: 'CHANGE_MAJOR',
        payload: {newMajor}
    }
}

export const getMajors = () => {
    return (dispatch) => {
        axios.get("http://localhost:8000/api/majors", { crossdomain: true })
        .then(res => {
            dispatch({type: 'GET_MAJORS_SUCCESS', payload: {allMajors: res.data.majors}})
        }).catch(error => {console.log(error)})
    }
}

export const setStartQtr = (newStartQtr) => {
    return {
        type: 'SET_START_QTR',
        payload: {newStartQtr}
    }
}

export const setEndQtr = (newEndQtr) => {
    return {
        type: 'SET_END_QTR',
        payload: {newEndQtr}
    }
}

export const setGradeEntered = (newGradeEntered) => {
    return {
        type: 'SET_GRADE_ENTERED',
        payload: {newGradeEntered}
    }
}
