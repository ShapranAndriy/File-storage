'use strict';

class ICommand {
    execute() {
        throw new Error('ICommand not implemented!');
    }

    undo() {
        throw new Error('ICommand not implemented!');
    }
}

module.exports = ICommand;