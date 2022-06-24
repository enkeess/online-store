/* craco.config.js */
const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@Components': path.resolve(__dirname, 'src/components'),
			'@BaseComponents' : path.resolve(__dirname, 'src/base-components'),
			'@Utils' : path.resolve(__dirname, 'src/utils'),
			'@Hoc' : path.resolve(__dirname, 'src/hoc'),
			'@Img': path.resolve(__dirname, 'src/img')
		}
	},
};