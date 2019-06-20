const BMPCommand = require('../BMPCommand');

class Resize extends BMPCommand {
    constructor(file) {
        super(file);
        this._oldBufferData = this._BMPFile._bufferData;
    }

    execute(data) {
        const { width, height } = data;
        (this._commands) ? this._commands.push(this) : this._commands = [this];

        this._BMPFile._bufferData.resize(width, height).quality(60).write(this._BMPFile._path);
    }

    undo() {
        command = this._commands.pop();
        this._BMPFile._bufferData = command._oldBufferData;

        this._BMPFile._bufferData
        .toFile(this._BMPFile._path, (error) => {
            if (error) console.error(error);
        });
    }
}

module.exports = Resize;