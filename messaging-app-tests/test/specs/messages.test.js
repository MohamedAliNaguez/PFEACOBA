describe('Android Messaging App', () => {
  it('should open new chat and click Create group', async () => {
    const startChatButton = await $('~Start chat');
    await startChatButton.waitForDisplayed();
    await startChatButton.click();

    const createGroupButton = await $('android=new UiSelector().text("Create group")');
    await createGroupButton.waitForDisplayed();
    await createGroupButton.click();
  });
});
