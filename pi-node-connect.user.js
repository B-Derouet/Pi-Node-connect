// ==UserScript==
// @name         Pi Node connect
// @namespace    https://github.com/B-Derouet/pi-node-connect
// @version      1.0
// @description  Script to connect to Pi Node app within a browser on your computer
// @author       B. Derouet (https://github.com/b-derouet)
// @match        https://app-cdn.minepi.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=minepi.com
// @grant        none
// ==/UserScript==

(function () {
	if (!localStorage.getItem('@pi:webview_ui_behaviors')) {
		const config = {
			platform: { desktop: true, os: 'win32', version: '10.0.0', arch: 'x64', uuid: '', hostApp: 'pi-node' },
			bundleData: { versionNumber: '0.4.5', buildNumber: 'proton', bundleIdentifier: 'com.pinetwork.desktop' },
		};

		localStorage.setItem('@pi:webview_ui_behaviors', JSON.stringify(config));
		location.reload();
	}

	if (location.href === 'https://app-cdn.minepi.com/mobile-app-ui/close.html') {
		location.href = 'https://app-cdn.minepi.com/mobile-app-ui/node-signin';
	}
})();
