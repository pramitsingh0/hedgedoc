# Customization

HedgeDoc allows you to set a name or logo for your organization. How this looks and where this is used, can be seen below. You can also provide a privacy policy, terms of use or an imprint url for your HedgeDoc instance.

| environment variable  | default | example                           | description                                                                                                                                                                |
|-----------------------|---------|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `HD_CUSTOM_NAME`      | -       | `DEMO Corp`                       | The text will be shown in the top right corner in the editor and on the intro page. If you also configure a custom logo, this will be used as the alt text of the logo.    |
| `HD_CUSTOM_LOGO`      | -       | `https://md.example.com/logo.png` | The logo will be shown in the top right corner in the editor and on the intro page.                                                                                        |
| `HD_PRIVACY_URL`      | -       | `https://md.example.com/privacy`  | The URL that should be linked as the privacy notice in the footer.                                                                                                         |
| `HD_TERMS_OF_USE_URL` | -       | `https://md.example.com/terms`    | The URL that should be linked as the terms of user in the footer.                                                                                                          |
| `HD_IMPRINT_URL`      | -       | `https://md.example.com/imprint`  | The URL that should be linked as the imprint in the footer.                                                                                                                |

## Example

### Links

![links frontpage](/images/customization/links.png)  
*links for the privacy policy, terms of use and imprint on the front page*

### Logo

For this demo we use this image:  
![demo logo](/images/customization/demo_logo.png)

![logo front page](/images/customization/logo/frontpage.png)  
*logo used on the front page*

![logo editor light](/images/customization/logo/editor_light.png)![logo editor dark](/images/customization/logo/editor_dark.png)  
*logo used in the editor*

### Name

For this demo we use the name `DEMO Corp`

![name front page](/images/customization/name/frontpage.png)    
*name used on the front page*

![name editor light](/images/customization/name/editor_light.png)![name editor dark](/images/customization/name/editor_dark.png)  
*name used in the editor*
