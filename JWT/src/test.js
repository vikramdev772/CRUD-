const { exec } = require("child_process");

 //const curlCommand = 'curl -X POST http://127.0.0.1:4040/api/signup -H "Content-Type: application/json" -d "{\\"name\\":\\"John Doe\\", \\"email\\":\\"john@example.com\\", \\"password\\":\\"password123\\"}" -s';
const curlCommand = 'curl -X POST http://127.0.0.1:4040/api/signin -H "Content-Type: application/json" -d "{\\"username\\":\\"john_doe\\", \\"password\\":\\"password123\\"}"';

exec(curlCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);  // It will contain transfer stats, which you may ignore.
  }

  console.log(`stdout: ${stdout}`);  // This will contain the actual response from the server.
});