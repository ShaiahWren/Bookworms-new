const express = require('express');
const passport = require('passport');
const router = express.Router()

// Auth with Google
// GET /google
router.get('/google', passport.authenticate('google', {  scope: ['profile ']}))

// Googel auth callback
// GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard')
})

//Logout user
// route /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})


module.exports = router