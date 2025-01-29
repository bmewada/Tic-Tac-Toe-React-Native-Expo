# Tic-Tac-Toe Game in React Native

## 📌 Overview
This is a simple **Tic-Tac-Toe** game built using **React Native**. The game allows two players to take turns marking spaces in a 3×3 grid until one player wins or the game ends in a draw.

## 🎮 Features
- Two-player mode (local multiplayer)
- Interactive and intuitive UI
- Highlights the winning combination
- Restart functionality
- Mobile-friendly and responsive design

## 🛠️ Technologies Used
- **React Native**
- **JavaScript/TypeScript**
- **Expo (optional)**

## 📷 Screenshots
*(Include screenshots of your game here)*

## 🚀 Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (if using Expo)
- React Native environment set up (for running on Android/iOS)

### Steps to Install and Run

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/tictactoe-react-native.git
   cd tictactoe-react-native
   ```

2. **Install dependencies**
   ```sh
   npm install  # or yarn install
   ```

3. **Run the app**
   
   If using Expo:
   ```sh
   npx expo start
   ```
   
   If running on an emulator/simulator:
   ```sh
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

4. **Build the app (optional)**
   
   To generate an APK for Android:
   ```sh
   npx react-native run-android --variant=release
   ```
   
   To create an iOS build:
   ```sh
   cd ios && pod install && cd ..
   npx react-native run-ios --configuration Release
   ```

## 🕹️ How to Play
1. The game starts with an empty 3×3 grid.
2. Players take turns tapping on an empty square.
3. The first player to align three marks in a row, column, or diagonal wins.
4. If all squares are filled without a winner, the game ends in a draw.
5. Click the **Restart** button to play again!

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## 📜 License
This project is licensed under the **MIT License**.

## ⭐ Acknowledgments
- Inspired by classic Tic-Tac-Toe games.
- Thanks to the React Native and Expo community!

**Made with ❤️ by Bhoopendra Mewada**
