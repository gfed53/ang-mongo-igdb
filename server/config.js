exports.PORT = process.env.PORT || 3000;

exports.KEYS = {
	igdbKey: ''
};

exports.DATABASE_URL = process.env.DATABASE_URL ||
global.DATABASE_URL ||
(process.env.NODE_ENV === 'production' ?
	'x' :
	'mongodb://localhost/igdb');


// mLab (production):

// mongodb://mLab_USER_NAME:PASSWORD@ds#.mlab.com:#/DB-NAME

// eg. 
// mongodb://gfed123:notmypassword@ds155841.mlab.com:55841/heavenly-whirlwind


// Local:

// mongodb://localhost/COLLECTION_NAME

// eg. 
// mongodb://localhost/todos