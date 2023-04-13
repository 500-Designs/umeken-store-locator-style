
# Umeken Store Locator Styles and Layout Override

This project provides custom styles and layout overrides for the Umeken store locator, a web application that allows users to find Umeken stores near their location.

The code in this repository can be added to an existing [Umeken store locator](https://www.umeken.com/index.php?dispatch=info.storesearch) by including the relevant CSS and JavaScript files in your project directory. These files can be modified to customize the styles and layout further.

## Installation

1.  Clone this repository:
    
    bashCopy code
    
    `git clone https://github.com/username/umeken-store-locator-styles.git` 
    
2.  Install the required dependencies:
    
    Copy code
    
    `npm install` 
    
3.  Build the CSS file:
    
    arduinoCopy code
    
    `npm run build-css` 
    
4.  Copy the `css/styles.css` and `js/store-locator-layout-mods.js` files to your Umeken store locator project directory.
    
5.  Add the following code to your HTML file:
    
    htmlCopy code
    
    `<link rel="stylesheet" href="css/styles.css">
    <script src="js/store-locator-layout-mods.js"></script>` 
    

## Usage

The custom styles and layout overrides will be applied automatically to the Umeken store locator once the `styles.css` and `store-locator-layout-mods.js` files are included in your project directory. You can modify the styles and layout further by editing the source Sass files and rebuilding the CSS file with `npm run build-css`.

## Contributing

If you'd like to contribute to this project, feel free to