const express = require('express');
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');
const { requireAuth } = require('../middleware/requireAuth');

const router = express.Router();

// apply middleware for all below routes
router.use(requireAuth);

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getWorkout);

// POST new workout
router.post('/', createWorkout);

// DELETE single workout
router.delete('/:id', deleteWorkout);

// PATCH single workout
router.patch('/:id', updateWorkout);

module.exports = router;
