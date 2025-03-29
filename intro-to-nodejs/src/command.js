#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
    console.info(argv)
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