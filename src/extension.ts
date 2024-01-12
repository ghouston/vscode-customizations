// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "ghouston.vscode-customizations" is now active!');

	let disposable = vscode.commands.registerCommand('extension.openOpenCopilotChatWorkspaceAgent', function () {
    vscode.commands.executeCommand('workbench.panel.chat.view.copilot.focus');
		vscode.commands.executeCommand('type', { text: '@workspace ' });
  });
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}