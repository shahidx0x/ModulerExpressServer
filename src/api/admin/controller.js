const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Replace this object with your actual admin data
const admin = {
  id: '12345',
  username: 'admin',
  passwordHash: '$2b$10$abcdefg12345', // Replace this with the hashed password of your admin user
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide a username and password.' });
  }

  if (username === admin.username) {
    bcrypt.compare(password, admin.passwordHash, (err, result) => {
      if (result) {
        const token = jwt.sign({ id: admin.id }, 'your_jwt_secret', { expiresIn: '1h' });

        // Store the token in a cookie
        res.cookie('auth_token', token, { httpOnly: true });

        // Redirect to the dashboard
        res.redirect('/api/admin/dashboard');
      } else {
        res.status(401).json({ message: 'Invalid username or password.' });
      }
    });
  } else {
    res.status(401).json({ message: 'Invalid username or password.' });
  }
};

exports.dashboard = (req, res) => {
  res.render('admin/dashboard', { username: admin.username });
};
