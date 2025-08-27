import React from 'react';
import CourseCard from './CourseCard';
import './CourseStyles.css';

const courses = [
  { id: 'c1', title: 'React Basics', author: 'Max krasinski', duration: '3h' },
  { id: 'c2', title: 'Advanced CSS', author: 'Dwayne Smith', duration: '2.5h' },
  { id: 'c3', title: 'JavaScript Mastery', author: 'Brett Lee', duration: '4h' },
  { id: 'c4', title: 'Java', author: 'aria', duration: '8h'}

];

const CourseList = ({ enrolledCourses, favorites, progress, onEnroll, onToggleFavorite, onUpdateProgress }) => {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isEnrolled={enrolledCourses.includes(course.id)}
          isFavorite={favorites[course.id]}
          progress={progress[course.id] || 0}
          onEnroll={() => onEnroll(course.id)}
          onToggleFavorite={() => onToggleFavorite(course.id)}
          onUpdateProgress={(value) => onUpdateProgress(course.id, value)}
        />
      ))}
    </div>
  );
};

export default CourseList;
