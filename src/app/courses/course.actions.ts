import { Injectable } from '@angular/core';

import { CourseService } from './course.service';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../store';

export const FILTER_COURSES = 'courses/FILTER';
export const REQUEST_COURSES_SUCCESS = 'courses/REQUEST_COURSES_SUCCESS';


@Injectable()
export class CourseActions {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private CourseService: CourseService
    ){}

    getCourses() {
        this.CourseService.getCourses()
        .subscribe(courses => {
            this.ngRedux.dispatch({
                type: REQUEST_COURSES_SUCCESS,
                courses,
            });
        })
    }

    filterCourses(searchText: string){
        this.ngRedux.dispatch({
            type: FILTER_COURSES,
            searchText,
        })
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    randomNumber2(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    randomNumber3(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    randomNumber8(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };
};