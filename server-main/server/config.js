exports.PORT = process.env.PORT || 3000;

exports.KEYS = {
	igdbKey: 'XXX'
};

exports.DATABASE_URL = process.env.DATABASE_URL ||
global.DATABASE_URL ||
(process.env.NODE_ENV === 'production' ?
	'x' :
	'mongodb://localhost/igdb');