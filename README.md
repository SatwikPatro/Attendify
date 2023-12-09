# Welcome to the Attendify Mobile front-end development

Developer: Jianxin Lin & Aadi Deshmukh

Writer for this page: Jianxin Lin 

## Table of contents

[First time using React Native Expo](https://github.com/SatwikPatro/Attendify/tree/Mobile#--if-this-is-the-first-time-you-are-using-react-native-expo)

[Install our product](https://github.com/SatwikPatro/Attendify/tree/Mobile#--if-you-are-interested-in-using-our-project)

[Use our product](https://github.com/SatwikPatro/Attendify/tree/Mobile#use-the-app-as-a-student)

[Contribute to our development](https://github.com/SatwikPatro/Attendify/tree/Mobile#--if-you-are-interested-in-contributing-to-our-development)

## -> If this is the first time you are using React Native Expo
### Get a hang of React Native Expo

We are using React Native Expo framework to develop & deploy our app!
If you don't have any experience with it, we recommend you to try it
out before installing our project. 
* Step 1:
   Open VSCode or any IDE you like, and open the terminal from there
and enter this command:
   ```
   npx create-expo-app --template
   ```
   The command will create an Expo managed project for you, then choose 
the blank templet and name your project. The templet can be the
foundation of your app and it can also be used for quick experiments.
Also, remember to change directory to the newly created folder.

* Step 2:
   Run the app by using command:
   ```
   npm start
   ```
   Expo will generate a QR code, along with many other instructions.
It is highly recommended to use the QR code approach because 
it is easy and has no overhead. To use the QR code, first, download
the "Expo go" App. The app can be found in both Apple Store and Google Play.
Second, use your camera to scan the QR code. You will be redirected to
"Expo go" and your project will be opened on your phone.

* Step 3 (optional):
   Run with simulators

   Of course, you can use the mobile simulators too. 
Pressing 'i' will open an iOS simulator. The iOS device by default is iPhone 6s, 
which you might want to change to something else. Use 'shift' + 'i' to choose a 
simulator device. I highly suggest you to download as few as possible since each 
one of them exceeds 6GB. If you want to test on android environment. Please refer 
to the 'Testing on an Android emulator' section on this Readme page.

## -> If you are interested in using our project

### Installing our project

   To install our app, we have listed 13 steps for you to follow.
You can also follow the steps in this video link made by Mr.Aadi:
[Video placeholder]

* Step 1: Download the project from this branch as a zip file and unzip it. 

* Step 2: Open the unzipped folder in VSCode or any IDE you like.

* Step 3: Change the IP address to the wifi network you are using 
since the code is still running local.
   > Hint: If you are using Mac, Click on the apple icon located on
   > the top left corner of the screen -> Click 'System Settings...'
   > -> Click 'Wi-Fi' -> Click 'Details' button next to the network
   > you are using -> You will see your network's IP address in the TCP/IP section.

* Step 4: Go to line 5 of logic/sendToBackend.js and replace the part of string 'localhost' in
   http://localhost:8080/ with the IP address you just got.
   > For example: http://888.88.88.888:8080/
   
* Step 5: Enter **npm install** command 
   > Hint: Verify you are doing the steps right by checking if a new folder called
   > 'node_modules' is added to unzipped folder.

* Step 6: Enter **npm start** command

   If you have not already done so, please download the 'Expo go' app from Google Play Store
(Android) or Apple Store (iOS). 
   > Hint: Verify you are doing the steps right by checking if there is a QR code
   > generated by expo. You can use your camera (iPhone) to scan this code directly
   > or use the 'expo go' app's scanning (Android) to scan this code.
   >
   > Note: If for some reason you get a bunch of errors indicating there is no
   > permission when you are trying to install the packages, something like this:
   > ![alt text](https://i.stack.imgur.com/daueK.png)
   > Credit: julz oh, https://stackoverflow.com/questions/69718289/npm-install-ecacess-permission-denied
   > 
   > Solution: Use 'sudo npm install' instead. You will
   > have to enter your computer's password after that and everything should
   > work normally.

* Step 7: Render the Attendify mobile app on your phone

   If you have not already done so, please download the 'Expo go' app from Google Play Store
(Android) or Apple Store (iOS). 

   After you have scanned the QR code, your device will redirect the current app to Expo go
and Attendify will be starting to rendered. After the downloading process is done, you should
be in the Login page. However, this app will not functioning correctly for now because you
still have to set up the backend.

* Step 8: Installing the Backend

   Download Backend code folder from Powall's or Ishan's branch (i.e. the folder should have name
Attendify-Powall if downloaded from Powall's branch)

* Step 9: Open the folder and install the packages

   Open a new window from your IDE and open the Backend folder you just unzipped.
cd to the Backend directory and run **npm install** 
   > Hint: Again, verify you are doing the steps right by checking if a new folder called
   > 'node_modules' is added to unzipped folder.

* Step 10: Resolve bcrypt bug on Mac

   If your device is a mac, you need to reinstall bcrypt as you will
face a compatibility issue as the backend was developed on windows laptops. 
   > Step 1: Run **npm uninstall bcrypt**
   > 
   > Step 2: Then run **npm install bcrypt**

* Step 11: Start the Backend code

   Once this is done, you can run the Backend code by running **npm start**
   > To verify your action was successful, you should see log message:
   > 'Successfully connected to MongoDB Atlas!'

* Step 12: Run the app

   After you have set up both frontend & backend. 
Now you should be able to Log in/Sign up and do everything in the app.

   Here is an existing account for testing purposes:

      Email: test@umass.edu

      Password: test

### Use the app as a student

After you have correctly followed the above 13 steps, you can start using
the app as a student. If you are an instructor, please go to branch 'Satwik'
and follow the instructions from there. Below we will list a few useful
instructions for you to get familiar with the student app.

* Step 1: Log in with your account

   If you do not posess an account, you can create a new one via Sign up,
or use the existing test account mentioned above.

* Step 2: Bluetooth scan page

   After you log into the app, you will be navigated to the main view.
The first page shown to you is the bluetooth scan page.
You can also access the bluetooth scan page from the bottom tab navigator.
The first button leads to the bluetooth scan page.
The main idea for this feature is that the student can check in via
searching the bluetooth beacon hosted by the instructor. To check in,
press the bluetooth scan button. If a valid beacon is scanned, the
student will be checked in. Otherwise, the system will show the scan 
has failed after a set of time. However, it is important to note that
this is only a demo so we have not fully implemented this feature yet.
If you press the button now, the system will mark you as checked in
regardless if there is a valid beacon nearby.
   > Note: a valid beacon is a beacon hosted by the current course's instructor,
you can also learn which class you are in from the bluetooth scan page.

* Step 3: QR code scan page

   You can access the QR code scan page from the bottom tab navigator.
The second button leads to the QR code scan page.
The main idea for this feature is that the student can check in via
scanning the valid QR code. The scanning is in-app and we are using
the expo-barcode-scanner library to implement a QR code scanner. 
If you do not have camera permission enabled for this app, you will
see a page where you will be asked to grant permission for using 
your device's camera. However, it is important to note that since
you are using 'Expo go', you need to enable camera permission for
'Expo go' on your phone's setting in order for the 'Grant permission' 
button to function as expected. After you have granted permission,
you can start scanning QR codes. If you are using a simulator or an
emulator, you will not be able to have an access to this feature. 

* Step 4: Manage course page

   You can access the manage course page from the bottom tab navigator.
The third button leads to the manage course page.
Here you can manage your courses. We have already included some
well-known CS courses in UMass Amherst for you. You will also
see an 'Add course' button, and you can add a new course by entering
the course ID of the course you want to add. You can also inspect
a course by pressing course button in the flat list. You will be
navigated to a new page showing your current the state of the course.
The page also allows you to quit the course and apply for an excuse.
   * Quit the course: as the name suggests, you will delete the course
from the list after you have completed the process.
   * Apply excuse: this feature is for the situation where a student
is unable to attend to an incoming lecture. He/She can choose to
apply for an excuse after provided a short writing / optional
documents.

   Important note: this feature has not been integrated with the backend
so there are only UI components (visual). You will not be able to actually add
a new course, quit a course, apply an excuse for a course.

* Step 5: Clicker page
  
   You can access the clicker page from the bottom tab navigator.
The fourth button leads to the clicker page.
Here you can access the clicker feature. If you already have experience
with clickers, you will be able to familiarize yourself with this feature
quickly. Again, the clicker page has not been integrated with backend yet.
Therefore, the app cannot receive questions from the instructor side. To
demonstrate the situation when the app receives a question. I have made a
button called "Get a question". After it is pressed, you will be navigated
to a new page that contains a sample question along with its options. You
can also check your answer history by pressing the 'History' button. You
will be navigated to a page that has a list of questions you have answered.
We have already included two sample questions for you. You can check the
details by clicking on one of them.

* Step 6: Profile page

  You can access the profile page from the bottom tab navigator.
The fifth button leads to the profile page.
Here you can edit your profile, change the app's theme, check
your check-in history, toggle notification setting and change
the language of the app. However, many of those features are still
in the developmental phase. After you have done some actions, they
will not be saved in the database nor locally. In addition, you can
go back to the Login page by clicking the "Log out button".

   Something to keep in mind while using this page: 

     * You can edit your profile
  picture by go into the edit info page. You cannot directly edit
  your profile picture in the settings main page. You can only edit
  your information after tapping the little pencil icon twice. Tapping
  on the label will not trigger the keyboard to show up. As being said,
  change password is not functioning because the profile page has not been 
  connected to the backend. 

     * Change theme feature has been fully implemented. However, the setting
  is not saved to anywhere so the next time you open the app the theme will
  be restored to the defaul setting.

     * The check-in history shows a list of samples. However, currently
  you cannot add any new items besides modifying the code.

     * The notification toggle has no effect because the app has no any
notifications. The change language option will not function as well because
this feature has a low priority.

* Step 7: Prob the app yourself

   I understand that it can be a little disappointing the app is missing
a majority of backend logics. Our team was short on time / sometimes
even short on people, and we had to create two apps within one semester.
Due to the given constraints, we did the best we could to deliver the app
experience on the surface level. Please feel free to expolre the app by
yourself. If you are interested, you can even help us to develop this app!

## -> If you are interested in contributing to our development
### Uploading to sub-branches
Remember, whenever you upload a project, **delete the node_modules file**.
Also, **delete the ios file and android file** if there is any. They are huge!
**Do not** directly upload to other people's branch without their permission.

### Can I see the UI design?
Sure, We are mostly following the interface designs from this Figma page:
https://www.figma.com/file/l5uew2GAntMmYJgnwMoHcD/Attendify-Student?type=design&node-id=1669%3A162202&mode=design&t=CWdsPYv5Xxg4tlXk-1

However, some pages are not shown in the Figma page. Please refer the UI designs in the 
app as the final version.

### Screen navigations in the app
For screen navigations, we are using the stack navigator library by React Native.
Tutorial I wrote:
https://docs.google.com/document/d/1_EzUmDY-dMop2H4Ky1Bvnebc8gwR2QuCnwDDyu6vWHQ/edit?usp=sharing

### Project UI structure (Navigation)
First of all, everything originates from App() function in the App.js file. 
(Very) general structure
```
<NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen login page>
      <Stack.Screen signup page>
      <Stack.Screen bottom tab>

<Stack.Screen bottom tab>
   <Tab.Navigator>
      <Tab.Screen bluetooth page>
      <Tab.Screen camera page>
      <Tab.Screen course page>
      <Tab.Screen clicker page>
      <Tab.Screen profile page>
```
There is only one Navigation Container across the entire app.
Inside of it, there is navigator. We have two navigators here: Stack and Tab.
Notice that Tab is a nested navigator of Stack. (inside of Stack)
The Tab is also equivalent to 'bottom tab'. If you have took a look on my
figma design, you will know what I mean. I decided to put the bottom tab 
as a "page" of the main Stack because it seems to be easier to manage in
this way. The login page and the signup page do not have bottom tab. 

### Page code structure
Each complete page code should have one to three sections.

Section 1: Internal logic functions, here we handle all interactions between UI components

Coder: Jianxin
```
/* Internal logic code start */
/* Internal logic code end */
```

Section 2: Backend logic connection functions, here is all the connections to the backend

Coder: Aadi
```
/* Connect to backend logic code start */
/* Connect to backend logic code end */
```

Section 3: UI functions, here contains all functional UI components

Coder: Jianxin
```
/* User interface code start */
/* User interface code end */
```

Coder: Jianxin

      Everything else 

### Coding practice
   1. Always including things in a SafeAreaView. This makes sure the app looks good on
   every iOS devices.
   2. Be sure all your logs can be disabled in some way.
   3. Name all your folders starting with a lower case letter, i.e. **stardewValley**
   4. Name all js and ts files with the Pascal Case style, i.e. **MyDude.js**
   5. For system generated files, please leave it as it is.
   6. The use of StyleSheet: for each page, please make it its own file,
      and concentrate styles as much as possible. Also, please ensure you
      only use color from the defined colors in AppTheme.js
   8. Your Component functions all start with capital letters!
   9. Almost all other functions start with lower letters!
   10. We will not be using ts because the tsconfig file is causing trouble
      with the Android emulator (Android Studio).

### Terminology
   1. Don't use 'class', instead, use 'course'
   2. Although the standard way for RN to describe a page is 'screen', we use 'page' to refer them.

### Known bugs
   1. UI bug: After logged out and logged in again, the bottom tab navigator indicator (
   the white bar below the button in the bottom tab navigator) sometimes will not be
   correctly updated to the desired position (the white bar should be below the
   bluetooth scan button).

## Troubleshooting
### Asset bundle works on an iOS simulator but not a real iOS device
This issue could happen due to various reasons. The one bothered me was my naming
of file path. You should not include space in any file that is in the path of your
project. So, instead of "CS 320", name it to "CS_320".

### My custom font does not work on a real iOS device
We discourage you to add other custom fonts to this project.
The configuation of a new font can be tedious and I do not intend to add others.
The main reason being Apple is using the font family name and Android is using the file
name. 

### The expo QR code says 'Go to localhost'
This means that you are currently not using expo to test your app.
You should enter 's' key to switch the development environment to expo.
You will notice the QR code will change and it should work after that.

### Why the camera is black on my simulator
You should not test the camera scanning ability on a simulator.
It simply will not work because the simulator is not built for this.
Use a real device instead. Please refer to 'How to run the app' section
for testing on a real device.

## Deploy to iOS
This following steps will only work if you have XCode. 
(Warning: XCode is very large)
   1. Run this command in the project directory
      ```
      npx expo run:ios
      ```
      This will create an iOS folder for the app. If the project already has it you
      don't have to run this command.
   2. Open the iOS folder in XCode. If you have not worked with XCode before, start
      by creating an developer account using your Apple Store account.
   3. Allow 'Developer Mode' on your iPhone by going to 'Setting -> Privacy & Security
      -> Developer Mode'. Turn on the developer mode, but remember **your iOS device
      might be vunlnerable to certain attacks if this mode is opened**. Your iOS device
      will be forced to restart and you will be asked to turn on developer mode.
   4. With 'Developer Mode', you will be allowed to create a _real App_ on your iOS device.
      This is very similar to using Swift and Object-C. First, you need to connect your mobile
      device to your Mac via a USB cable. Your mobile device will be asked to trust your Mac.
      Second, in XCode, select your simulator device to your device (not a simulator).
      Third, click the run button in XCode to run the App. After these three steps, a real app
      will be created. Before opening it, you need to trust yourself on your mobile device.
      To do that, go to "Setting -> General -> VPN&Device Management" and trust Attendify.
   5. Now you can open the app. With this approach, your app will have absolutely zero overhead
      and it is equivalent to the Apps deployed in App Store.

## Testing on an Android emulator
Emulators are hardware dependent! They work by emulating an entire device on your laptop.
First of all, start by downloading Android Studio from:
https://developer.android.com/studio. Click 'Download Android Studio Giraffe' button and 
select the version match to your device, I am using a Mac intel chip. 

After you downloaded Android Studio (1.28GB for me). You should launch the wizard and it will
ask you to download a series of things, one of them is the emulator. Please download them.
Then, open Android Studio, in its welcome page, click the three dots next to the 'Get
from VCS' button. You will see 'Virtual Device Manager', click it and you should see a 
device (mine is named Pixel_3a_API_34_extension_level_7_x86_64). Click the play button and
the device will launch. You do not have to open the project in Android Studio, in fact,
that is useless. I use Android Studio purely for the emulator.

Head back to VScode and open your project & direct to the correct root and open the terminal Type:
```
npm start
```
then press 'shift + a'. You should see your android emulator device. 
Select it and press 'enter'. Expo go will be downloaded into the device and 
the project will be launched after the installation is done.

## Re-render going-back-to page
Sometimes, you might find youself want to re-render the page that you are going back to.
Let's say you have a page A, and it can go to page B. You modified something in page B,
now you want to go back to page A and you expect some changes to be reflected on page A. 
If you did things normally, you will find out nothing has changed in page A.
To solve this, you need to do these steps to page A:

Step 1: 
Define the 'useState' variables you want to use, they are variables that updates
visually when changed.
   
Step 2:
Add this to your page function:
```
React.useEffect(() => {
const unsubscribe = navigation.addListener('focus', () => {
// change state variable
});
return () => unsubscribe();
}, [navigation]);
```
Now Your page A should reflect the changes made from page B.
