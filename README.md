# mm-sales-assistant

A tool for analyzing and managing products on e-commerce websites using Gemini AI.

## Features

- **Product Analysis**: Identifies products on the page and their classes.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/MarkDisaster/mm-sales-assistant.git
    ```

2. Navigate to the project directory:

    ```bash
    cd mm-sales-assistant
    ```

3. Install the dependencies:

    ```bash
    pnpm install
    ```

## Build

To build the project for production:

1. Run the build command:

    ```bash
    pnpm build
    ```

   This will generate the necessary files for the Chrome extension in the `dist/` folder.

## Adding to Chrome Extension

To add the build to a Chrome Extension:

1. Open **Chrome** and go to `chrome://extensions/`.

2. Enable **Developer mode** by toggling the switch in the top right corner.

3. Click on **Load unpacked** and select the `dist/` directory where the built files are located.

4. Your extension should now be installed and active in Chrome.

> **Note:** Make sure the `dist/` folder contains all the necessary files for a Chrome Extension (e.g., `manifest.json`, background scripts, popup HTML, etc.).