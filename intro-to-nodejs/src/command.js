#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { newNote } from './notes.js'

const listNotes = notes => {
  notes.forEach(({id, content, tags}) => {
    console.log('id ', id)
    console.log('tags: ', tags)
    console.log('content: ', content)
    console.log('\n')
  })
}

yargs(hideBin(process.argv))
  .command('new <note>', 'Create a new note', yargs => {
    return yargs.positional('note', {
      type: 'string',
      description: 'The content of the note to create', 
    })
  }, async (argv) => {
    const tags = argv.tags ? argv.tags.split(',') : []
    const note = await newNote(argv.note, tags)
    console.log('New note! ', note)
  })
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })
  .demandCommand(1)
  .parse()

//   #!/usr/bin/env node

// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';
// import https from 'https';
// import http from 'http';

// yargs(hideBin(process.argv))
//   .command(
//     'curl <url>',
//     'fetch the contents of the URL',
//     () => {},
//     (argv) => {
//       const url = argv.url;

//       // Determine protocol (http or https)
//       const protocol = url.startsWith('https') ? https : http;

//       protocol
//         .get(url, (res) => {
//           let data = '';

//           console.log(`Status Code: ${res.statusCode}`);
//           console.log(`Headers: ${JSON.stringify(res.headers)}`);

//           // Collect data chunks
//           res.on('data', (chunk) => {
//             data += chunk;
//           });

//           // On end, log the data
//           res.on('end', () => {
//             console.log('Response Data:', data);
//           });
//         })
//         .on('error', (err) => {
//           console.error('Error fetching the URL:', err.message);

//           // Provide additional debugging information
//           if (err.code === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE') {
//             console.error(
//               'SSL certificate verification failed. Consider using a valid certificate or bypassing SSL verification for debugging purposes.'
//             );
//           } else if (err.code === 'ENOTFOUND') {
//             console.error('The URL could not be resolved. Check the domain name.');
//           } else {
//             console.error('An unexpected error occurred:', err);
//           }
//         });
//     }
//   )
//   .demandCommand(1)
//   .parse();


// #!/usr/bin/env node

// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';
// import https from 'https';

// yargs(hideBin(process.argv))
//   .command(
//     'curl <url>',
//     'fetch the contents of the URL',
//     () => {},
//     (argv) => {
//       const url = argv.url;

//       https
//         .get(url, (res) => {
//           let data = '';

//           // Collect data chunks
//           res.on('data', (chunk) => {
//             data += chunk;
//           });

//           // On end, log the data
//           res.on('end', () => {
//             console.log(data);
//           });
//         })
//         .on('error', (err) => {
//           console.error('Error fetching the URL:', err.message);
//         });
//     }
//   )
//   .demandCommand(1)
//   .parse();


// #!/usr/bin/env node

// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';
// import https from 'https';

// yargs(hideBin(process.argv))
//   .command(
//     'curl <url>',
//     'fetch the contents of the URL',
//     () => {},
//     (argv) => {
//       const url = argv.url;

//       https
//         .get(url, (res) => {
//           let data = '';

//           // Collect data chunks
//           res.on('data', (chunk) => {
//             data += chunk;
//           });

//           // On end, log the data
//           res.on('end', () => {
//             console.log(data);
//           });
//         })
//         .on('error', (err) => {
//           console.error('Error fetching the URL:', err.message);
//         });
//     }
//   )
//   .demandCommand(1)
//   .parse();