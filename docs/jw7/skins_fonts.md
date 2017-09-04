<script src='//content.jwplatform.com/libraries/XeGdlzmk.js'></script>
# Custom Icons and Fonts

In order to make the JW Player scaleable and adaptive to high resolution screens, JW7 no longer utilizes bitmap-based graphics. Instead, our skinning model relies on custom vector-based fonts and CSS. This ensures that all player elements will be at their sharpest when zoomed or scaled at higher resolutions. The article below explains how to make a custom icon set based on [SVG files](//en.wikipedia.org/wiki/Scalable_Vector_Graphics) and fonts.

## Creating the Font

In order to get our icon fonts to work in all our target browsers, we need an icon font. All necessary font formats can be generated by using the [IcoMoon Web Font Generator](//icomoon.io/app/#/select) and then applying the resultant fonts into the JW Player via CSS. Below is a step-by-step process of how this is accomplished:

**1 -** Download the IcoMoon project file from our [JW Player github project](//github.com/jwplayer/jwplayer/blob/master/assets/fonts/svg/jw7-icomoon-icon-setup.json). This JSON file contains our current icons and their related settings.

**2 -** On the IcoMoon web page, import the aforementioned project file using the **Import Icons** button in the top left corner of the page:  

![](//support-static.jwplayer.com/images/ico-import.png)  

Upon importing, the player icons should appear at the top of the page. A successful import should display the following:  
![](//support-static.jwplayer.com/images/ico-fonts.png)

Now that we've imported our icons, it's time to make some modifications.

## Editing Icons

1.  Highlight the icon that you wish to modify by clicking on it. A highlighted icon will appear with a gold border.
2.  Select the Pencil icon at the top of the page to initiate the editing.
3.  Make any changes to the icon that you wish.

For this example, I've simply mirrored all of our icons. The results are reflected below:

![](//support-static.jwplayer.com/images/ico-reverse.png)

## Exporting the Font

Once you are happy with your modified/added icons, it's time to export the result:

1.  **Save a copy -** Click the three-lined option menu again and select the "Download JSON" button. This JSON file will act as a backup, allowing you to edit your completed icon set in the future.
2.  **Download the Font -** Export the font itself by clicking the **Generate Font** button at the bottom right:  
    ![](//support-static.jwplayer.com/images/ico-gen.png)  
    You'll now see the button change to a **Download** button with a settings gear.  
    ![](//support-static.jwplayer.com/images/ico-pref.png)  
    Click this **Settings** gear. Here you should make sure that **Class Prefix** is set to **jw-icon-**. The font name will be inherrited as the file name.  
    ![](//support-static.jwplayer.com/images/ico-prefs.png)

    Ensuring that the correct values are set here will configure a lot of the CSS classes for you. It's now safe to close the options pane.

3.  Click the **Download** link to download a zip file that contains your new font.

## Applying the Font

With the fonts created and downloaded, we can now replace existing JW7 icons. The step-by-step process below will explain how:

### Step 1 - Unpack your zip

Unpack your zip to view the included font files. These are conveniently located in the **font** folder.

### Step 2 - Relocate the fonts

Copy the .eot, .svg, .ttf, and .woff files into a desired font directory. If this is an online directory, ensure that all files are able to be accessed from your domain of choice.

### Step 3 - Load your font

We'll need to load our font via CSS using **@font-face**, as well as provide a **font-family** name. In this case, the **jw-custom-icons.woff** file has been relocated to a **font** subdirectory. I will also be naming this font-family **custom**.

```
<style>
@font-face {
	font-family: 'custom';
    src: url('fonts/jw-custom-icons.woff');
}
</style>
```

Note that this example will be using **only** a .woff file. For more extensive browser compatibility, please see the [css-tricks article](//css-tricks.com/snippets/css/using-font-face/) which details the loading of multiple fonts.

### Apply the Font

Finally, we need to apply the new font to our player. This is accomplished with one line of CSS to apply the **custom** font-family name.

```
.jw-icon{font-family:'custom'};

```

Note, the font-family is referred to as **custom** due to our naming in step 3.

### The Results

Our inverted icons are now applied to our control bar and we have a backwards, bizarro JW Player! (Or perhaps a WJ Player?)
<div id='container'></div>
<style type="text/css">@font-face { font-family: 'custom'; src: url('//support-static.jwplayer.com/fonts/jw-custom-icons.woff'); } .jw-icon{font-family:'custom'};</style><script>var playerInstance = jwplayer("container"); playerInstance.setup({ file: '//content.jwplatform.com/videos/HkauGhRi-640.mp4' });</script>