/* eslint-env node, es6*/
/* eslint no-console:0 */

/* Module Description */

/* Put dependencies here */

/* Include this line only if you are going to use Canvas API */
const canvas = require('canvas-wrapper');
var cheerio = require('cheerio');

/* View available course object functions */
// https://github.com/byuitechops/d2l-to-canvas-conversion-tool/blob/master/documentation/classFunctions.md

module.exports = (course, stepCallback) => {

	/* How to log a generic message. Use in place of console.log */
	course.message('Starting this Child Module');

	/**********************************************
	 * 				START HERE					  *
	 **********************************************/

	var files = course.content.filter(file => {
		console.log(file.name);
		return /quiz_d2l_\d+.xml/gi.test(file.name);
	});

	files.forEach(file => {
		//		console.log(`Made it into files: ${file.name}`);
		var $ = cheerio.load(html);
		//		file.dom;
		return;
	});

	// 1. use course.contents to get all quiz XML files 
	// 2, filter on course name: quiz_d2l_###.xml
	// 3. use cheerio dom (file.dom) to pull instructions into description
	// a. <d2l_2p0:intro_message> contains the instructions


	/* How to report a warning */
	// course.warning('warning message...');

	/* How to report an error */
	// course.error(err);

	/* You should never call the stepCallback with an error. We want the
	whole program to run when testing so we can catch all existing errors */

	stepCallback(null, course);
};
