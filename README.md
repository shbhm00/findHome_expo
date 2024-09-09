##  Real Estate Home Unlocker

This React Native application allows real estate companies to remotely unlock homes for potential buyers to view. It showcases state management, API integration, and the use of native device features like location services.

* **Note:-**I have added console log("User current location") to get the user coords and update mock data latitude and longitude of any index to test the lock and unlock feature.

** Features**

* **User Authentication:** Simple login to authenticate users.
* **Home List:** Displays a list of homes fetched from a mock API, each showing basic information like address, image, and description.
* **Home Details:** Detailed view of a selected home, with an "Unlock" button based on user proximity (within 30m).
* **Unlock Functionality:** Simulates unlocking a home based on location. Displays a success or error message after the API call.

** Task Requirements**

* Basic UI/UX: The app focuses on functionality with a simple and clean user interface.

** Mock API**

The app uses local JSON files for:

* Fetching the list of homes.
* Simulating the API call for unlocking a home.

** Installation & Setup**

1.  Clone the repository:

```bash
git clone https://github.com/shbhm00/findHome_expo.git
```

2.  Navigate to the project directory:

```bash
cd findHome
```

3.  Install dependencies:

```bash
npm install
```

4.  Run the app:

**Expo specific commands:**

```bash
"start": "expo start", --> Start the metro
"android": "expo run:android", --> To create debug build for android
"ios": "expo run:ios", --> To create debug build for ios
```

**React Native CLI:**

```bash
npx react-native run-android   # For Android
npx react-native run-ios       # For iOS
```

**Important:** Ensure your device has location services enabled to test the unlock feature.

** Mock API Setup**

The app uses local JSON files stored in the `mock/` folder for API responses. These include:

* `homes.json`: Contains the list of homes with their details.
* Unlock API responses are handled directly in the button logic.

** Folder Structure**

```
.
├── app                   # Contain layout of expo as well as pages (Home & Detail)
├── src                   # Main source code
│   ├── assets            # Fonts and images
│   ├── components        # Reusable UI components
│   ├── constants         # Colors
│   ├── mockdata          # API mock json
│   └── mixins            # responsive dimensions for height, width and fonts.
└── app/_layout.tsx       # Entry point of the app
```

** Key Technologies**

* React Native
* Expo
* Expo Location API
* Expo Router
* Mock JSON data for API simulation

** License**

This project is licensed under the MIT License.
