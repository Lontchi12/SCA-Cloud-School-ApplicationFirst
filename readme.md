#### Project Set up

Create a new folder mkdir folder-name
cd folder-name
Inside the folder: npm init -y
This is to initialize a node project, this will create a package.json folder for you

#### File set up

Create a new file: index.js
Open this file and print "Hello, here is my first CLI tool" to the console
Navigate back to the terminal now and run node index

#### Shell command

Now that your node app runs, it is time to turn it into a shell command.
In order to invoke our index.js file directly without the node command, put
this "#!/usr/bin/env node" at the top of our index.js file

Next, we are going to add a bin property to our package.json file. However, our project is going to run on a single file so we won't use the bin property to specify command names. We will be using the name property for that.

"bin": {
    "sca": "./index.js"
  },

If you run sca in the project's directory now it should return "Hello, here is my first CLI tool"

#### Parse Arguments From The Terminal

To parse our arguments from the terminal, we will be using a built-in node module, argv. According to the official nodejs docs, the process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.