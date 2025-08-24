**Try/catch and async/await**
---
Let's make some code work better with async/await and try/catch blocks.

Our friend Whiskers has a new function on his site. Now, when you click the button on his page, he'll get a message saying how many notifications he has.

The only problem is that it's not working. Here's what's going on ...

<video src='./images/no_aync_or_try_catch.mp4' width='600' controls></video>

You can see that there's a big problem. The number of notifications doesn't seem to be coming across correctly. Also, every once in a while there's an error, but there's nothing to tell the user that there's been an error.

Whiskers wants his site to work more like this...

<video src='./images/improved_try_catch.mp4' width='600' controls></video>

When you play through the video, you'll notice a few differences.

First off, you'll notice an indicator letting the user know their notifications are loading. You should also notice that if an error happens, there's a message telling the user that an error happened in their request.

Your challenge is to take the script that currently exists in the code and improve it using async/await and try/catch.

**Getting started:**
---
In order to work on this project you'll need to go to this GitHub repository.

This folder holds all your starter files you'll need.

The ONLY file you need to edit is the scripts.js file in the js folder. In the scripts file, the only function you should touch is the 'grabNewMessages()' function. I've already added a listener to the button to push as well as a simple button to simulate a data request.

As always, don't touch the HTML or CSS. Work within the framework you're given.

**Tips:**
---
When you use a try/catch block, remember to think about the scope of your variables. How can you make a variable available in both the try block and the catch block?

Use a ternary to adjust the message based on the number received. Remember that the only time words don't end in 's' is if there's one of them. Use that in your logic to make sure the grammar is correct.

Remember Promises return immediately. How can we make sure we get the result of the Promise in our simulated fetch?
