const check = (req, res, next) => {
    console.log('Receiving end working fine.');
    next(); // Call next middleware or route handler
};

export default check; // Default export
