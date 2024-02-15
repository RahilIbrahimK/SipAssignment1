import express from 'express';

const app = express();
const port = 4000;

const middlewareone = (req, res, next) => {
    console.log('Middleware one');
    next();
};

app.use(express.json());
app.use(middlewareone);

const validateLogin = (req, res, next) => {
    const user = req.body;
    if (user.username && user.password) {
        next();
    } else {
        res.status(400).send('Invalid credentials');
    }
};

const validateRegister = (req, res, next) => {
    const user = req.body;
    if (user.username && user.password) {
        next();
    } else {
        res.status(400).send('Invalid credentials');
    }
};

// Register endpoint with validation
app.post('/register', validateRegister, (req, res) => {
    const user = req.body;
    // Simulate registration logic
    res.send('Registration successful');
});

// Login endpoint with validation
app.post('/login', validateLogin, (req, res) => {
    const user = req.body;
    // Simulate login logic
    if (user.username === 'admin' && user.password === 'admin') {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Endpoint to retrieve all blogs
app.get('/blogs', (req, res) => {
    // Logic to retrieve all blogs
    res.send('All blogs');
});

// Endpoint for creating new blogs
app.post('/blogs', (req, res) => {
    const blog = req.body;
    if (blog.title && blog.content) {
        // Logic to create a new blog
        res.send('Blog created successfully');
    } else {
        res.status(400).send('Invalid blog details');
    }
});

// Endpoint to get a specific blog based on the author's ID
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    if (!isNaN(id)) {
        // Logic to retrieve blog by ID
        res.send(`Blog with ID ${id}`);
    } else {
        res.status(400).send('Invalid blog ID');
    }
});

// Route-level middleware
app.get('/get', (req, res) => {
    console.log('get api running');
    res.send("cool")
});

app.listen(port, () => {
    console.log('server working fine');
});
