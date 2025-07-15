# Badminton Matching App

This project is a simple application built with Nuxt 3 that allows users to input player names and match them for badminton games.

## Features

- Input player names through a user-friendly form.
- Match players based on the input names.
- Display matched players on the main page.

## Project Structure

```
badminton-matching-app
├── pages
│   └── index.vue          # Main page rendering the PlayerForm component
├── components
│   └── PlayerForm.vue     # Component for player name input form
├── composables
│   └── useMatching.ts      # Logic for matching players
├── nuxt.config.ts         # Nuxt 3 configuration file
├── package.json           # NPM configuration file
└── README.md              # Project documentation
```

## Installation

To get started with the Badminton Matching App, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/badminton-matching-app.git
   ```

2. Navigate to the project directory:
   ```
   cd badminton-matching-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application in development mode, use the following command:

```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.