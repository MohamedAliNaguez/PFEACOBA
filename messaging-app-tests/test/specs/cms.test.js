describe('ACOBA Cam2Drive CMS', () => {
  it('Should show Login page', async () => {
    // Check for the logo or a unique element
    const imageView = await $('android=new UiSelector().className("android.widget.ImageView")');
    await expect(imageView).toBeDisplayed();

    // Check for the first EditText (username)
    const usernameInput = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    await expect(usernameInput).toBeDisplayed();

    // Check for the second EditText (password)
    const passwordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    await expect(passwordInput).toBeDisplayed();

    // Check for the Login button by accessibility id
    const loginButton = await $('~Login');
    await expect(loginButton).toBeDisplayed();
  });

  it('Should Login', async () => {
    // Enter username
    const usernameInput = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    await usernameInput.setValue('tratest@test.com');

    // Enter password
    const passwordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    await passwordInput.setValue('$Acoba12345');

    // Click the Login button
    const loginButton = await $('~Login');
    await loginButton.click();

    // Optionally, add an assertion to check for successful login
    const homeButton = await $('android=new UiSelector().className("android.widget.Button").instance(0)');
    await expect(homeButton).toBeDisplayed();
  });
 it('Open select camera interface when I press on search icon', async () => {

      
    // Tap the camera view (update the instance if needed)
    const cameraView = await $('android=new UiSelector().className("android.view.View").instance(7)');
    await cameraView.click();

    const validateBtn = await $('~Validate');
    await expect(validateBtn).toBeDisplayed();

    const clearBtn = await $('~Clear');
    await expect(clearBtn).toBeDisplayed();

    const selectSite = await $('~Select Site:');
    await expect(selectSite).toBeDisplayed();

    const selectDevice = await $('~Select Device:');
    await expect(selectDevice).toBeDisplayed();

    const selectChannel = await $('~Select Channel:');
    await expect(selectChannel).toBeDisplayed();

    const selectDate = await $('~Select Date:');
    await expect(selectDate).toBeDisplayed();

    const selectTime = await $('~Select Time:');
    await expect(selectTime).toBeDisplayed();
  });
  it('Should open the menu and find menu items', async () => {

    // Press the back button to return to the home screen
    await driver.back();
    // Open the menu (replace with the correct selector for your menu button if needed)
    const menuButton = await $('android=new UiSelector().className("android.widget.Button").instance(0)');
    await menuButton.click();

    const selectCamera1 = await $('~Select a camera');
    await expect(selectCamera1).toBeDisplayed();

    const changePw = await $('~Change Password');
    await expect(changePw).toBeDisplayed();

    const logoutItem = await $('~Logout');
    await expect(logoutItem).toBeDisplayed();
  });



  it('Open select camera interface from menu', async () => {
    // Tap the camera view (update the instance if needed)
    const cameraView = await $('~Select a camera');
    await cameraView.click();

    const validateBtn = await $('~Validate');
    await expect(validateBtn).toBeDisplayed();

    const clearBtn = await $('~Clear');
    await expect(clearBtn).toBeDisplayed();

    const selectSite = await $('~Select Site:');
    await expect(selectSite).toBeDisplayed();

    const selectDevice = await $('~Select Device:');
    await expect(selectDevice).toBeDisplayed();

    const selectChannel = await $('~Select Channel:');
    await expect(selectChannel).toBeDisplayed();

    const selectDate = await $('~Select Date:');
    await expect(selectDate).toBeDisplayed();

    const selectTime = await $('~Select Time:');
    await expect(selectTime).toBeDisplayed();
  });
 
  it('Should open Change Password and show all required fields', async () => {
    // Press the back button to return to the home screen
    await driver.back();

       // Open the menu again
    const menuButton = await $('android=new UiSelector().className("android.widget.Button").instance(0)');
    await menuButton.click();

    // Tap the "Change Password" menu item
    const changePwMenu = await $('~Change Password');
    await changePwMenu.click();

    const changePwTitle = await $('android=new UiSelector().description("Change Password")');
    await expect(changePwTitle).toBeDisplayed();

    const suggestionText = await $('~We suggest rotating your password often to ensure your security.');
    await expect(suggestionText).toBeDisplayed();

    const oldPasswordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    await expect(oldPasswordInput).toBeDisplayed();

    const newPasswordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    await expect(newPasswordInput).toBeDisplayed();

    const confirmPasswordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(2)');
    await expect(confirmPasswordInput).toBeDisplayed();

    const changePwButton = await $('android=new UiSelector().description("Change Password")');
    await expect(changePwButton).toBeDisplayed();
  });

it('should logout', async () => {
    // Press the back button to return to the home screen (if not already there)
    await driver.back();

    // Open the menu
    const menuButton = await $('android=new UiSelector().className("android.widget.Button").instance(0)');
    await menuButton.click();

    // Tap the "Logout" menu item
    const logoutItem = await $('~Logout');
    await logoutItem.click();

    // Assert that the login screen is displayed again
    const loginButton = await $('~Login');
    await expect(loginButton).toBeDisplayed();
});
 
});