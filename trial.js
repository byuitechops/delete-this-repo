/* eslint-env node, es6*/

import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/lib/repeat.js';

const tableStart = html`
                <tr>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Message</th>
                </tr>`;

const printLogs = content => {
    return html`
        ${tableStart}
        ${repeat(
        content,
        content => content,
        content => html`
        <tr>
            <td>${content.title}</td>
            <td>${content.location}</td>
            <td>${content.data.message ? `${content.data.message}` : `` }</td>
            <td>${content.data.error ? `${content.data.error}` : ``}</td>
            <td>${content.data[Object.keys(content.data)[0]] ? `${content.data[Object.keys(content.data)[0]]}` : ``}</td>
            <td>${content.data[Object.keys(content.data)[1]] ? `${content.data[Object.keys(content.data)[1]]}` : ``}</td>
        </tr>`
        )}`;
};


//const greeting = (prefix, name) => {
//  return html`
//    <h1>Well, hello there ${prefix} ${name}</h1>
//  `;
//};

const el = document.querySelector('#container');

// render(function(parameters), DOM location where to render);



var course = [ { title: 'message',
    location: 'create-course-object',
    data: { message: 'Course Object Created' } },
  { title: 'verifier',
    location: 'course-object-verifier',
    data: { message: '% Course Object successfully verified!' } },
  { title: 'adjustFilepaths',
    location: 'child-development-kit',
    data: { message: '% File paths adjusted for testing.' } },
  { title: 'verifier',
    location: 'course-object-verifier',
    data: { message: '% Course Object successfully verified!' } },
  { title: 'error',
    location: 'child-module-standard-tests',
    data:
     { error: '% Child Module does not create a Report Module. Use "course.addModuleReport(\'moduleName\')".' } },
  { title: 'error',
    location: 'child-module-standard-tests',
    data:
     { error: '% Child Module does have any success reports. Use "course.success(\'moduleName\', \'The success message\')".' } },
  { title: 'standardTests',
    location: 'child-module-standard-tests',
    data:
     { message: '% Child Module avoids using the throwFatalError method.' } },
  { title: 'standardTests',
    location: 'child-module-standard-tests',
    data:
     { message: '% Child Module correctly calls stepCallback at some point.' } },
  { title: 'standardTests',
    location: 'child-module-standard-tests',
    data: { message: '% Child module passed all standard tests.' } },
  { title: 'verifier',
    location: 'course-object-verifier',
    data: { message: '% Course Object successfully verified!' } },
  { title: 'message',
    location: 'index-directory',
    data: { message: 'Successfully indexed the course' } },
  { title: 'verifier',
    location: 'course-object-verifier',
    data: { message: '% Course Object successfully verified!' } },
  { title: 'message',
    location: 'files-find-used-content',
    data:
     { message: 'All filepaths successfully located in the manifest' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: '3xaEPGu.jpg',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\3xaEPGu.jpg' } },

  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'quiz_d2l_704289.xml',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\quiz_d2l_704289.xml' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'quiz_d2l_704578.xml',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\quiz_d2l_704578.xml' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'quiz_d2l_757187.xml',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\quiz_d2l_757187.xml' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'quiz_d2l_757379.xml',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\quiz_d2l_757379.xml' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'quiz_d2l_763704.xml',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\quiz_d2l_763704.xml' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'quiz_d2l_763705.xml',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\quiz_d2l_763705.xml' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'quiz_d2l_763706.xml',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\quiz_d2l_763706.xml' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'quiz_d2l_763720.xml',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\quiz_d2l_763720.xml' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'testVideo.avi',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\testVideo.avi' } },
  { title: 'Unused Files',
    location: 'files-find-used-content',
    data:
     { Name: 'testVideo.mov',
       'Exported Path': 'node_modules\\child-development-kit\\D2LProcessing\\Conversion Test Gauntlet 1\\testVideo.mov' } },
  ];

function sortabc(a, b) {
//    console.log(`a: ${a}`);
//    console.log(`b: ${b}`);
//    console.log(`a.title: ${a.title}`);
//    console.log(`b.title: ${b.title}`);
    if (a.title < b.title)
        return -1;
    if (a.title > b.title)
        return 1;
    return 0;
}

course.sort(sortabc)

render(printLogs(course), el);
