import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// CLASS IMPLEMENTATION
	// const provider = new TestViewProvider(context.extensionUri);
	// context.subscriptions.push(
	// 	vscode.window.registerWebviewViewProvider(TestViewProvider.viewType, provider)
	// )

	// PLAIN OBJECT IMPLEMENTATION
	const provider = {
		// define resolveWebviewView function with the expected parameters
		resolveWebviewView: function(
			webviewView: vscode.WebviewView, 
			context: vscode.WebviewViewResolveContext, 
			_token: vscode.CancellationToken
		) {
			// enable scripts in the options objects
			webviewView.webview.options = {
				enableScripts: true
			};
			// set the html content of the webview
			webviewView.webview.html = `
			<!DOCTYPE html><html lang="en">
			<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			</head>
			<body>
			<p>heck yeah we about to get some edact up in here</p>
			</body>
			</html>`;
		}
	}
	// register provider instance under name that matches the one in the contributed views in package.json
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider('test.testView', provider)
	)
}

export function deactivate() {}

// class definition
class TestViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = "test.testView";

	constructor(private readonly _extensionUri: vscode.Uri) {}

	public resolveWebviewView(
		webviewView: vscode.WebviewView, 
		context: vscode.WebviewViewResolveContext, 
		_token: vscode.CancellationToken) {
		webviewView.webview.options = {
			enableScripts: true
		};

		webviewView.webview.html = `
		<!DOCTYPE html><html lang="en">
		<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		</head>
		<body>
		<p>heck yeah we about to get some edact up in here</p>
		</body>
		</html>`;
	}
}