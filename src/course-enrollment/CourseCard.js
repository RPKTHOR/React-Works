import React from 'react';
import './CourseStyles.css';

const CourseCard = ({ course, isEnrolled, isFavorite, progress, onEnroll, onToggleFavorite, onUpdateProgress }) => {
  return (
    <div className="course-card">
      <div className="course-header">
        <h3>{course.title}</h3>
        <button className="fav-btn" onClick={onToggleFavorite}>
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <p><strong>Author:</strong> {course.author}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <button className="enroll-btn" onClick={onEnroll} disabled={isEnrolled}>
        {isEnrolled ? 'Already Enrolled' : 'Enroll'}
      </button>
      {isEnrolled && (
        <div className="progress-section">
          <label>Progress: {progress}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => onUpdateProgress(Number(e.target.value))}
          />
        </div>
      )}
    </div>
  );
};

export default CourseCard;
