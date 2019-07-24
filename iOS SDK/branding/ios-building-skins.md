# Skinning

<img src="https://img.shields.io/badge/SDK-iOS%20v3-0AAC29.svg?logo=apple">

The nine complimentary skins offered in version 2.x have been deprecated in 3.x, but customizing JW Player is easy with JW Player 8's CSS-based skinning model.

To customize the player's skin you must set a `JWSkinStyling` instance to your config.
```
    JWSkinStyling *skinStyling = [JWSkinStyling new];
    config.skin = skinStyling;
```

## Color customization
Using `JWSkinStyling` you can edit the color of the elements contained in the `controlbar`, `timeslider`, `menus`, and `tooltips`.
```
    JWControlbarStyling *controlbarStyling = [JWControlbarStyling new];
    controlbarStyling.text = [UIColor blueColor];
    controlbarStyling.icons = [UIColor redColor];
    skinStyling.controlbar = controlbarStyling;
```
Alternatively, you can set a value to the `active`, `inactive`, and `background` properties of the `JWSkinStyling` to customize the active, inactive and background colors of all the elements in the skin excluding the timeslider's rail. 

```
    skinStyling.active = [UIColor yellowColor];
    skinStyling.inactive = [UIColor blackColor];
    skinStyling.background = [UIColor blueColor];
```

**Note**: Customization set to specific UI elements will take precedence over the general customization.
## Skinning with a CSS URL

It is possible to reference your CSS file's url within the config's skin property.
```
    config.skin.url = @"http://yoursite.com/yourstyles/myskinfile.css";
    config.skin.name = @"myskin";
```
or for local files
```
    config.skin.url = [NSString stringWithFormat:@"file://%@", [[NSBundle mainBundle] pathForResource:@"myskinfile" ofType:@"css"]];
    config.skin.name = @"myskin";
```