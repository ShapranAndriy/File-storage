// interface
class IFile {
    constructor(name, type, path, bufferData) {
        this._name = name;
        this._type = type;
        this._path = path;
        this._bufferData = bufferData;
        this._commands = null;
    }
}

module.exports = IFile;