//! Executes Bash script that launches Chrome with debugger Port 9222
//! Using exec prompts two problems
//! 1. It buffers (holds) all the output and spits it out all at once only at the end
//! 2. It opens and closes the process with no opportunity to do anything
// import { exec } from "child_process";

// exec("./utils/launch-chrome.sh", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

//! Using spawn over exec streams the output and allows for better control

//! Below example (line 21 - 44) will fail as `getWebSocketUrl` will run immediately line 20
//! Will result in ECONNREFUSED error as port 9222 is not established yet

// import { spawn } from 'child_process';

// const chrome = spawn("bash", ["./utils/launch-chrome.sh"], { stdio: "inherit" });

// chrome.on('error', console.error);
// chrome.on('close', code => console.log(`Chrome exited with code ${code}`));

// // To obtain the WS URL which is then supplied to Puppeteer
// import http from 'http';

// function getWebSocketUrl(port = 9222) {
//   return new Promise((resolve, reject) => {
//     http.get({ hostname: '127.0.0.1', port, path: '/json/version', timeout: 2000 }, res => {
//       let body = '';
//       res.on('data', d => body += d);
//       res.on('end', () => {
//         try {
//           const obj = JSON.parse(body);
//           resolve(obj.webSocketDebuggerUrl);
//         } catch (e) { reject(e); }
//       });
//     }).on('error', reject);
//   });
// }

// getWebSocketUrl(9222).then(url => console.log('ws url', url)).catch(err => console.error(err));

//! Correctly waits for Chrome to launch and then try to capture the WS URL
import { spawn } from 'child_process';

export default function launchChromeAndGetWsUrl(scriptPath = "./utils/launch-chrome.sh") {
  return new Promise((resolve, reject) => {
    // Spawn Chrome
    const chrome = spawn("bash", [scriptPath]);

    chrome.on("error", reject);

    chrome.on("close", code => {
      reject(new Error(`Chrome exited unexpectedly with code ${code}`));
    });

    // Listen to stdout for the readiness signal
    const handleData = data => {
      const text = data.toString();
      // process.stdout.write(text); // optional: log Chrome output

      // Check if Chrome is ready
      const match = text.match(/DevTools listening on (ws:\/\/.+)/);
      if (match) resolve(match[1]);
    };

    chrome.stdout.on("data", handleData);
    chrome.stderr.on("data", handleData);
  });
}

// Usage
