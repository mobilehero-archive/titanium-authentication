[//]: # (header-start)

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
<h1 align="center">
	Axway Amplify End-of-Life Announcement
</h1>
<h2 align="center">
	👇 &nbsp; See notes below  &nbsp; 👇
</h2>	
</a>

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</p>
</a>
<hr>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h4 align="center">
🛑 &nbsp;&nbsp; All products affected by the announcements will not be supported by Axway effective their EOL dates in 2022.
</h4>

<h4 align="center">
Some Open-Source versions of Axway products will live on after End-of-Life (EOL) Axway Amplify product announcements.  However, some products are closed-source and will NOT continue after the shut down in 2022.  
	</h4>
</a>
<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; Stay tuned for more info as plans are being made to save the Titanium project and move it under the control of a independent group of developers.

<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)
# @titanium/authentication <sup><sup><sub><a name="brenton-house" href="#brenton-house">🚀</a></sub></sup></sup> 

[![@titanium/authentication](https://img.shields.io/npm/v/@titanium/authentication.png)](https://www.npmjs.com/package/@titanium/authentication)
[![npm downloads](https://img.shields.io/npm/dm/@titanium/authentication.svg)](https://www.npmjs.com/package/@titanium/authentication)
[![npm downloads](https://img.shields.io/librariesio/release/npm/@titanium/authentication.svg)](https://www.npmjs.com/package/@titanium/authentication)


* [📓   &nbsp; Description](#----description)
* [✨  &nbsp; Features](#---features)
* [🚀   &nbsp; Getting Started](#----getting-started)
	* [Installing](#installing)
	* [Usage](#usage)
* [🎓  &nbsp;  Learn More](#----learn-more)
	* [📚  &nbsp;  Related projects](#----related-projects)
		* [🎟️  &nbsp; Modules for Titanium Mobile](#️---modules-for-titanium-mobile)
		* [🎟️  &nbsp; Modules for Node.js and Titanium Mobile](#️---modules-for-nodejs-and-titanium-mobile)
		* [🎟️  &nbsp; Modules for Node.js](#️---modules-for-nodejs)
* [📣  &nbsp; Feedback](#---feedback)
* [Follow Brenton House](#follow-brenton-house)
* [©️  &nbsp; Legal](#️---legal)
	* [The MIT License (MIT)](#the-mit-license-mit)

> Axway Amplify authentication module for mobile titanium

## 📓   &nbsp; Description

For use with authenticating with Axway Amplify for Mobile Titanium

## ✨  &nbsp; Features

* [x] Supports loading authentication plugins


## 🚀   &nbsp; Getting Started


### Installing

> Please ensure there is a package.json file in the target directory.  If there is not one present, you can create one with `npm init`.


If you wish to install this in an app using Titanium Turbo, you can execute this in the project root directory:

```
npm install @titanium/authentication
```

### Usage

Create a ```Authentication``` object into your JavaScript code.

```javascript
	const Authentication = require('@titanium/authentication');
	Authentication.initialize('my-auth-provider-plugin'. { option1: 'this is an option' });
	await Authentication.authenticate({ username: 'user', password: 'password', { domain: 'my-domain' }});
```

## 🎓  &nbsp;  Learn More

- [@titanium/authentication GitHub Repo](https://github.com/brentonhouse/titanium-authentication)
- [@titanium/authentication npm page](https://npmjs.com/packages/@titanium/authentication)

### 📚  &nbsp;  Related projects


#### 🎟️  &nbsp; Modules for Titanium Mobile

⭐  &nbsp; [@titanium/applesignin](https://www.npmjs.com/package/@titanium/applesignin) -Native modules that allows you to use the iOS 13+ Apple Sign In API with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/authentication](https://www.npmjs.com/package/@titanium/authentication) - Titanium native mobile authentication manager   

⭐  &nbsp; [@titanium/authentication-oauth](https://www.npmjs.com/package/@titanium/authentication-oauth) - Titanium native mobile OAuth plugin for authentication manager   

⭐  &nbsp; [@titanium/calendar-picker](https://www.npmjs.com/package/@titanium/calendar-picker) - Turbo widget that allows you to pick dates from a calendar with Axway Titanium.   

⭐  &nbsp; [@titanium/coremotion](https://www.npmjs.com/package/@titanium/coremotion) - Native modules that allows you to use iOS CoreMotion framework with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/deeply](https://www.npmjs.com/package/@titanium/deeply) - Native modules that allows you to capture Android deep links with Axway Titanium.   

⭐  &nbsp; [@titanium/essentials](https://www.npmjs.com/package/@titanium/essentials) - Essential Toolkit for Titanium Turbo Native Mobile Apps   

⭐  &nbsp; [@titanium/icloud](https://www.npmjs.com/package/@titanium/icloud) - Native module that allows you to use the Apple iCloud framework with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/identity](https://www.npmjs.com/package/@titanium/identity) - Native modules to add Fingerprint/FaceId/keychain access to Titanium native mobile apps   

⭐  &nbsp; [@titanium/facebook](https://www.npmjs.com/package/@titanium/facebook) - Native modules that allows you to use Facebook SDK with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/googlesignin](https://www.npmjs.com/package/@titanium/googlesignin) - Native modules that allows you to use the Google Sign-in SDK with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/lottie](https://www.npmjs.com/package/@titanium/lottie) - Native modules that allows you to use Airbnb Lottie animations with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/observer](https://www.npmjs.com/package/@titanium/observer) - Repackaging of nx-js/observer-util for Titanium Native Mobile   

⭐  &nbsp; [@titanium/permissions](https://www.npmjs.com/package/@titanium/permissions) - Titanium native mobile widget for permission requests   [![@titanium/permissions](https://img.shields.io/npm/v/@titanium/permissions.png)](https://www.npmjs.com/package/@titanium/permissions)    

⭐  &nbsp; [@titanium/please](https://www.npmjs.com/package/@titanium/please) - Titanium native mobile module for politely requesting data  [![@titanium/please](https://img.shields.io/npm/v/@titanium/please.png)](https://www.npmjs.com/package/@titanium/please)     

⭐  &nbsp; [@titanium/polyfill](https://www.npmjs.com/package/@titanium/polyfill) - Titanium native mobile polyfills necessary to use packages that depend on Node.js modules   [![@titanium/polyfill](https://img.shields.io/npm/v/@titanium/polyfill.png)](https://www.npmjs.com/package/@titanium/polyfill)    

⭐  &nbsp; [@titanium/turbo](https://www.npmjs.com/package/@titanium/turbo) - 🚀 Turbo is a version of Titanium Alloy that adds some enhancements and customizations for rapid development. [![@titanium/turbo](https://img.shields.io/npm/v/@titanium/turbo.png)](https://www.npmjs.com/package/@titanium/turbo)    

⭐  &nbsp; [@titanium/updater](https://www.npmjs.com/package/@titanium/updater) - Titanium native mobile widget to check for app updates  [![@titanium/updater](https://img.shields.io/npm/v/@titanium/updater.png)](https://www.npmjs.com/package/@titanium/updater)     

⭐  &nbsp; [@titanium/webdialog](https://www.npmjs.com/package/@titanium/webdialog) - Native modules that allows you to use native SFSafariViewController (iOS) and Chrome Pages (Android) with Axway Titanium native mobile apps.   [![@titanium/webdialog](https://img.shields.io/npm/v/@titanium/webdialog.png)](https://www.npmjs.com/package/@titanium/webdialog) 


#### 🎟️  &nbsp; Modules for Node.js and Titanium Mobile

| project  	|  description 	|  npm	|
|---	|---  |---	|
| [@geek/cache](https://www.npmjs.com/package/@geek/cache)  	| Caching module for Node.js and Axway Titanium  	| [![@geek/cache](https://img.shields.io/npm/v/@geek/cache.png)](https://www.npmjs.com/package/@geek/cache)      |
| [@geek/jsonc](https://www.npmjs.com/package/@geek/cache)  	| JSONC and JSON utilities for JavaScript with Node.js and Axway Titanium.  	| [![@geek/jsonc](https://img.shields.io/npm/v/@geek/jsonc.png)](https://www.npmjs.com/package/@geek/jsonc)      |
|  [@geek/jwt](https://www.npmjs.com/package/@geek/jwt) 	| JWT parser for JavaScript Node.js and Titanium native mobile  |  [![@geek/jwt](https://img.shields.io/npm/v/@geek/jwt.png)](https://www.npmjs.com/package/@geek/jwt)     |
|  [@geek/logger](https://www.npmjs.com/package/@geek/logger) 	| Logging module for Node.js and Axway Titanium  |   [![@geek/logger](https://img.shields.io/npm/v/@geek/logger.png)](https://www.npmjs.com/package/@geek/logger)        |
| [@geek/mobile](https://www.npmjs.com/package/@geek/mobile)  	| Toolkit for creating, building, and managing mobile app projects.  	| [![@geek/mobile](https://img.shields.io/npm/v/@geek/mobile.png)](https://www.npmjs.com/package/@geek/mobile)    	|
|  [@geek/retry](https://www.npmjs.com/package/@geek/retry) 	| Retry JavaScript functions and promises in Node.js and Axway Titanium  |   [![@geek/retry](https://img.shields.io/npm/v/@geek/retry.png)](https://www.npmjs.com/package/@geek/retry)        |


#### 🎟️  &nbsp; Modules for Node.js


| project  	|  description 	|  npm	|
|---	|---  |---	|
| [@geek/google-sheets](https://www.npmjs.com/package/@geek/google-sheets)  	| Easy way to manage Google Sheets API from Node.js  	| [![@geek/google-sheets](https://img.shields.io/npm/v/@geek/google-sheets.png)](https://www.npmjs.com/package/@geek/google-sheets)      |





## 📣  &nbsp; Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-authentication/issues)! 


-----

## Follow Brenton House 

> Follow [`Brenton House`](https://brenton.house) for the latest on great modules and libraries!

[![Twitter Follow](https://img.shields.io/twitter/follow/brentonhouse?label=Follow%20%40brentonhouse%20on%20twitter&style=social)](https://twitter.com/brentonhouse)
[![LinkedIn Follow](https://img.shields.io/badge/LinkedIn-_Connect_with_%40brentonhouse_-blue?logo=linkedin&style=flat-square)](https://www.linkedin.com/in/brentonhouse/)
![Github Followers](https://img.shields.io/github/followers/brentonhouse?label=Follow%20%40brentonhouse%20on%20GitHub&style=social)

-----

## ©️  &nbsp; Legal

### The MIT License (MIT)

> Copyright (c) 2019-Present -- Brenton House   
> https://brenton.house

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.