const fs = require("fs/promises");
const { transparentBackground } = require("transparent-background");

(async () => {
    const input = await fs.readFile("image-3.jpg");

    const output = await transparentBackground(input, "png", {
        // uses a 1024x1024 model by default
        // enabling fast uses a 384x384 model instead
        fast: false,
    });

    await fs.writeFile("test-output.png", output);
})();