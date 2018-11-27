import React from "react";
import PropTypes from 'prop-types';
import {GradientButton} from '../../../../core/components';
import styles from './styles.css';

function ButtonGroup({buttonMap}) {
    return buttonMap.map((group, idx) => {
        return (
            <div key={idx}>
                <span className={styles["button-group-hr"]} />
                {
                    group.map((btn, btnIdx) => {
                        return (
                            <GradientButton
                                key={idx + '-' + btnIdx}
                                label={btn.label}
                                onClick={btn.action}
                            />)
                    })
                }
            </div>);
    });
};

ButtonGroup.propTypes = {
    buttonMap: PropTypes.object.isRequired
};

export default ButtonGroup;