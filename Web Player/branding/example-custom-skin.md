# Example custom skin

Here is an example CSS file for a skin used to customize the player UI in JW8. You can use this skin as a reference for building out your own custom CSS. Check out our [demo](https://developer.jwplayer.com/jw-player/demos/customization/custom-css-demo/) of this custom skin in action.

## Creating Your Own CSS

1.  Duplicate the CSS from this reference.
2.  Replace all mentions of "alaska" with your custom skin name.
3.  Make any changes and customizations that you require.
4.  Host your CSS file on your web server.
5.  Include your CSS in the head of your page or provide JW Player with the URL in setup.
6.  Update your player embed to include the name of your custom skin.


## Sample Skin

```

/* Set the idle overlay to transparent white */
.jwplayer.jw-skin-alaska.jw-state-idle .jw-controls {
  background: rgba(255, 255, 255, .7);
}

/* Hide titles on complete */
.jwplayer.jw-skin-alaska.jw-state-complete .jw-title .jw-title-primary,
.jwplayer.jw-skin-alaska.jw-state-complete .jw-title .jw-title-secondary {
  display: none;
}

/* Round, white play & restart buttons with black icons */
.jwplayer.jw-skin-alaska .jw-display-controls .jw-display-icon-container,
.jwplayer.jw-skin-alaska .jw-display-controls .jw-display-icon-container {
  background-color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.jwplayer.jw-skin-alaska .jw-display-controls .jw-display-icon-container .jw-icon,
.jwplayer.jw-skin-alaska .jw-display-controls .jw-display-icon-container .jw-icon {
  color: #1E1E1E;
  width: 60px;
  height: 60px;
  padding: 20px;
}

/* Change play button colors on idle state, handle hover transitions */
.jwplayer.jw-skin-alaska.jw-state-idle .jw-display-controls .jw-display-icon-container {
  background-color: #e5322c;
  height: 80px;
  width: 80px;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

.jwplayer.jw-skin-alaska.jw-state-idle .jw-display-controls .jw-display-icon-container .jw-icon {
  color: #fff;
  height: 40px;
  width: 40px;
  padding: 20px;
}


/* Shrink play button on smaller breakpoints */
.jwplayer.jw-skin-alaska.jw-state-idle.jw-breakpoint-3 .jw-display-controls .jw-display-icon-container,
.jwplayer.jw-skin-alaska.jw-state-idle.jw-breakpoint-2 .jw-display-controls .jw-display-icon-container  {
  height: 60px;
  width: 60px;
}

.jwplayer.jw-skin-alaska.jw-state-idle.jw-breakpoint-1 .jw-display-controls .jw-display-icon-container,
.jwplayer.jw-skin-alaska.jw-state-idle.jw-breakpoint-0 .jw-display-controls .jw-display-icon-container {
  height: 40px;
  width: 40px;
}

.jwplayer.jw-skin-alaska.jw-state-idle.jw-breakpoint-3 .jw-display-controls .jw-display-icon-container .jw-icon,
.jwplayer.jw-skin-alaska.jw-state-idle.jw-breakpoint-2 .jw-display-controls .jw-display-icon-container .jw-icon {
  height: 40px;
  width: 40px;
  padding: 10px;
}

.jwplayer.jw-skin-alaska.jw-state-idle.jw-breakpoint-1 .jw-display-controls .jw-display-icon-container .jw-icon,
.jwplayer.jw-skin-alaska.jw-state-idle.jw-breakpoint-0 .jw-display-controls .jw-display-icon-container .jw-icon {
  height: 20px;
  width: 20px;
  padding: 10px;
}

.jwplayer.jw-skin-alaska.jw-state-idle .jw-display-controls .jw-display-icon-container:hover {
   background-color: #92DCE5;
}

.jwplayer.jw-skin-alaska.jw-state-idle .jw-display-controls .jw-display-icon-container .jw-icon:hover {
  color: #fff;
}

.jwplayer.jw-skin-alaska.jw-state-paused .jw-controls {
  background-color: rgba(147, 221, 230, .3);
}


/* Customize font style and positioning for titles */
.jwplayer.jw-skin-alaska.jw-state-idle .jw-title {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

/* Apply new styles to video title and description, handle transitions */
.jwplayer.jw-skin-alaska .jw-title-primary {
  font-size: 48px;
  padding: 30px;
  color: #1E1E1E;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  padding-bottom: 15px;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

/* Apple new styles to video description */
.jwplayer.jw-skin-alaska .jw-title-secondary {
  font-size: 18px;
  max-width: 70%;
  font-weight: 500;
  opacity: 0;
  margin: 0 auto;
  color: #1E1E1E;
  text-align: center;
  font-family: 'Merriweather', serif;
  white-space: normal;
  line-height: 1.3;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
  transition: opacity 0.2s, transform 0.35s;
  -webkit-transition-delay: 0.08s;
  transition-delay: 0.08s;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
}

/* Decrease font size on medium-small breakpoints */
.jwplayer.jw-skin-alaska.jw-breakpoint-3 .jw-title-primary,
.jwplayer.jw-skin-alaska.jw-breakpoint-2 .jw-title-primary,
.jwplayer.jw-skin-alaska.jw-breakpoint-1 .jw-title-primary,
.jwplayer.jw-skin-alaska.jw-breakpoint-0 .jw-title-primary {
  font-size: 22px;
}

.jwplayer.jw-skin-alaska.jw-breakpoint-3 .jw-title-secondary,
.jwplayer.jw-skin-alaska.jw-breakpoint-2 .jw-title-secondary {
  font-size: 14px;
}

/* Hide the description on smallest breakpoints */
.jwplayer.jw-skin-alaska.jw-breakpoint-1 .jw-title-secondary,
.jwplayer.jw-skin-alaska.jw-breakpoint-0 .jw-title-secondary {
  display: none;
}

/* Change colors and remove gradient shadow for control bar, change icon color on pause */
.jwplayer.jw-skin-alaska .jw-display {
  padding-bottom: 45px;
}

.jwplayer.jw-skin-alaska .jw-controlbar {
  background-color: #fff;
}

.jwplayer.jw-skin-alaska .jw-controlbar .jw-button-container .jw-button-color {
  color: #1E1E1E;
}

.jwplayer.jw-skin-alaska.jw-state-paused .jw-controlbar .jw-button-container .jw-button-color {
  color: #e5322c;
}

.jwplayer.jw-skin-alaska .jw-controlbar .jw-button-container .jw-button-color:hover {
  color: #92DCE5;
}


/* Move tooltips closer to control bar with inline timeslider, change colors, round corners, remove shadow */
.jwplayer.jw-skin-alaska .jw-controlbar .jw-tooltip {
  bottom: 70%;
  box-shadow: none;
}

.jwplayer.jw-skin-alaska .jw-controlbar .jw-tooltip.jw-open {
  border-radius: 5px;
  color: #92DCE5;
}

.jwplayer.jw-skin-alaska .jw-controlbar .jw-tooltip .jw-text {
  background-color: #92DCE5;
  border-radius: 5px;
  border: 0;
}

.jwplayer.jw-skin-alaska .jw-controlbar .jw-text {
  color: #1E1E1E;
}

.jwplayer.jw-skin-alaska .jw-volume-tip,
.jwplayer.jw-skin-alaska .jw-time-tip {
  padding-bottom: 0;
}


/* Customize colors of volume control knob */
.jwplayer.jw-skin-alaska .jw-overlay .jw-slider-volume .jw-slider-container .jw-knob {
  background-color: #e5322c;
}


/* Customize colors of timeslider */
.jwplayer.jw-skin-alaska .jw-controlbar .jw-slider-time .jw-slider-container .jw-rail {
  background-color: #1E1E1E;
}

.jwplayer.jw-skin-alaska .jw-controlbar .jw-slider-time .jw-slider-container .jw-buffer {
  background-color: #92DCE5;
}

.jwplayer.jw-skin-alaska .jw-controlbar .jw-slider-time .jw-slider-container .jw-progress {
  background-color: #e5322c;
}

.jwplayer.jw-skin-alaska .jw-controlbar .jw-slider-time .jw-slider-container .jw-knob {
  background-color: #e5322c;
}


/* Customize colors/opacity of the settings menu */
.jwplayer.jw-skin-alaska .jw-settings-menu {
  background-color: transparent;
}

.jwplayer.jw-skin-alaska .jw-settings-menu .jw-settings-topbar {
  background-color: #92DCE5;
}

.jwplayer.jw-skin-alaska .jw-settings-menu .jw-settings-topbar .jw-icon:hover {
  color: #1E1E1E;
}

.jwplayer.jw-skin-alaska .jw-settings-menu .jw-settings-submenu {
  background-color: rgba(255, 255, 255, .65);
}

.jwplayer.jw-skin-alaska .jw-settings-menu .jw-settings-content-item {
  color: #1E1E1E;
}

.jwplayer.jw-skin-alaska .jw-settings-menu .jw-settings-content-item:hover,
.jwplayer.jw-skin-alaska .jw-settings-menu .jw-settings-item-active {
  color: #e5322c;
  font-weight: bold;
}

```
