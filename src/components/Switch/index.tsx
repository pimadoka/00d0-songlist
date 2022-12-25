import classnames from 'classnames';
import React, { useState } from 'react';
import { useStyles } from './index.style';

interface SwitchProps {
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}

const Switch: React.FC<SwitchProps> = ({
  checked: checkedInProps,
  onChange,
  className,
  style,
}) => {
  const styles = useStyles();

  const [checkedInState, setChecked] = useState(false);
  const checked = checkedInProps ?? checkedInState;
  
  const chageChecked = (v: boolean) => {
    setChecked(v);
    onChange?.(v);
  }

  return (
    <div
      className={
        classnames(
          styles.container,
          checked ? styles.containerChecked : styles.containerUnchecked,
          className,
        )
      }
      style={style}
      onClick={() => {
        chageChecked(!checked);
      }}
    >
      <div
        className={
          classnames(
            styles.trigger,
            checked ? styles.triggerChecked : styles.triggerUnchecked
          )
        }
      >
      </div>
    </div>
  );
}

export default Switch;
