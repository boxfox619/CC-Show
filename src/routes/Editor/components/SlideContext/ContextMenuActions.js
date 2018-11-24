export const getContextActions = () => {
    return (
        [[
            {label: '복사', subLabel: 'Ctrl + C', enable: !!this.props.selectedAssetId, onClick: copyAsset.bind(this)},
            {label: '붙여넣기', subLabel: 'Ctrl + V', enable: !!this.props.cachedAsset, onClick: pasteAsset.bind(this)},
            {label: '삭제', subLabel: 'Ctrl + D', enable: !!this.props.selectedAssetId, onClick: deleteAsset.bind(this)},
            {label: '잘라내기', subLabel: 'Ctrl + X', enable: !!this.props.selectedAssetId, onClick: cutAsset.bind(this)}
        ], [
            {
                label: '정렬', enable: !!this.props.selectedAssetId, childActions: [
                    {label: '맨 앞으로 가져오기', subLabel: 'SHIFT + CTRL + ]', onClick: sortFirstAsset.bind(this)},
                    {label: '앞으로 가져오기', subLabel: 'CTRL + ]', onClick: sortFrontAsset.bind(this)},
                    {label: '뒤로 보내기', subLabel: 'CTRL + [', onClick: sortBackAsset.bind(this)},
                    {label: '맨 뒤로 보내기', subLabel: 'SHIFT + CTRL + [', onClick: sortLastAsset.bind(this)}
                ]
            }
        ]]
    );
};

export const handleContextMenu = (event) => {
    let assetId = undefined;
    if (getAssetNode('ASSET', event.target)) {
        assetId = getAssetNode('ASSET', event.target).id;
    }
    return assetId
};

const copyAsset = () => {
    if (this.props.selectedAssetId) {
        this.props.actions.copyAsset(this.props.selectedAssetId);
    }
};

const pasteAsset = () => {
    if (!!this.props.cachedAsset) {
        this.props.actions.pasteAsset(this.state.x + 'px', this.state.y + 'px');
    }
};

const deleteAsset = () => {
    if (this.props.selectedAssetId) {
        this.props.actions.deleteAsset(this.props.selectedAssetId);
    }
};

const cutAsset = () => {
    if (this.props.selectedAssetId) {
        this.props.actions.copyAsset(this.props.selectedAssetId);
        this.props.actions.deleteAsset(this.props.selectedAssetId);
    }
};

const sortFirstAsset = () => {
    if (this.props.selectedAssetId) {
        this.props.actions.sortFirstAsset(this.props.selectedAssetId);
    }
};

const sortFrontAsset = () => {
    if (this.props.selectedAssetId) {
        this.props.actions.sortFrontAsset(this.props.selectedAssetId);
    }
};

const sortBackAsset = () => {
    if (this.props.selectedAssetId) {
        this.props.actions.sortBackAsset(this.props.selectedAssetId);
    }
};

const sortLastAsset = () => {
    if (this.props.selectedAssetId) {
        this.props.actions.sortLastAsset(this.props.selectedAssetId);
    }
};

function getAssetNode(parent, child) {
    let node = child;
    while (node != null) {
        if (node.tagName === parent) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}