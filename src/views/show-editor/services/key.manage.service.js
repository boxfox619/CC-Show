class KeyService {

    constructor(){
        this.registerKey = this.registerKey.bind(this);
        this.unregisterKey = this.unregisterKey.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.actions = undefined;
    }

    registerKey(actions, showId) {
        this.actions = actions;
        this.showId = showId;
        window.addEventListener('keydown', this.handleKeyDown, true);
        window.addEventListener('beforeunload', this.onUnload);
    }

    unregisterKey(){
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('beforeunload', this.onUnload)
    }

    onUnload(event) {
        return event.returnValue = '발표자료를 저장하셨나요? (Ctrl + S)';
    }

    handleKeyDown(e){
        if (e.keyCode === 27) {
            this.actions.releaseDialog();
        } else if ((e.which == 83 && e.ctrlKey)) {
            this.actions.saveShowData(this.showId);
            e.preventDefault()
        }
    }
}

export default new KeyService();