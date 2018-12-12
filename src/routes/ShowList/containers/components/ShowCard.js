import React from 'react';
import PropTypes from 'prop-types';
import {ImageActionCard} from "../../../../core/components";

const propTypes = {
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    onOpen: PropTypes.func.isRequired,
    onShare: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default function ShowCard({name, thumbnail, onOpen, onShare, onDelete}) {
    return (
        <ImageActionCard className={''}
                         title={name}
                         subTitle={''}
                         thumbnail={thumbnail}
                         active={true}
                         clickable={true}
                         onClick={onOpen}
                         actions={[
                             {icon: 'ic_share_white', onClick: onShare},
                             {icon: 'ic_delete_white', onClick: onDelete}
                         ]}
        />
    )
}

ShowCard.propTypes = propTypes;